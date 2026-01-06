import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// 요청 본문 타입 정의
type ChatBody = {
  playerId: string;   // auth.users.id (uuid) - 플레이어 ID
  animalId: string;   // animals.animal_id - 동물 ID
  message: string;   // 사용자 메시지
};

// Supabase 클라이언트 생성 (서버 사이드에서만 사용)
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // MVP: 서버에서만 쓰는 관리자 키
);

// 숫자를 최소값과 최대값 사이로 제한하는 함수
function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

// 최종 친화도 계산 함수
// 그룹 기본값 + 개체 델타 + 플레이어 개인값(있으면 우선)을 계산
async function computeFinalAffinity(playerId: string, animalId: string) {
  // 1) 동물 정보 가져오기 (group_id, base 등)
  // animalId가 UUID 형식인지 확인하고, 아니면 name으로 검색
  let animalQuery = supabase
    .from("animals")
    .select("animal_id, group_id, human_affinity_base, mbti, voice_style, personality_vector, name, species");
  
  // UUID 형식인지 확인 (UUID는 8-4-4-4-12 형식)
  const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(animalId);
  
  if (isUUID) {
    // UUID 형식이면 animal_id로 검색
    animalQuery = animalQuery.eq("animal_id", animalId);
  } else {
    // UUID가 아니면 name으로 검색 (예: "turtle" -> name이 "Turtle"인 동물 찾기)
    animalQuery = animalQuery.ilike("name", `%${animalId}%`);
  }
  
  const { data: animal, error: animalErr } = await animalQuery.maybeSingle();

  // 동물 정보가 없으면 기본값 사용
  if (animalErr || !animal) {
    console.warn(`동물 정보를 찾을 수 없습니다 (animalId: ${animalId}). 기본값을 사용합니다.`, animalErr?.message);
    
    // 기본 동물 정보 반환 (데이터베이스에 없을 때 사용)
    return {
      finalAffinity: 0,  // 기본 친화도: 중립
      trust: 0,
      bond: 0,
      animal: {
        animal_id: animalId,
        name: animalId.charAt(0).toUpperCase() + animalId.slice(1), // "turtle" -> "Turtle"
        species: animalId,
        group_id: null,
        human_affinity_base: 0,
        mbti: null,
        voice_style: {},
        personality_vector: {},
      }
    };
  }

  // 2) 플레이어 ↔ 동물 관계 가져오기 (최종값이 있으면 그걸 우선 사용)
  const { data: rel } = await supabase
    .from("player_animal_relation")
    .select("affinity, trust, bond_level")
    .eq("player_id", playerId)
    .eq("animal_id", animalId)
    .maybeSingle();

  // 플레이어-동물 관계에 친화도가 저장되어 있으면 그것을 사용
  if (rel?.affinity !== undefined && rel?.affinity !== null) {
    return {
      finalAffinity: clamp(rel.affinity, -100, 100), // -100 ~ 100 사이로 제한
      trust: rel.trust ?? 0,        // 신뢰도
      bond: rel.bond_level ?? 0,    // 유대 레벨
      animal                          // 동물 정보
    };
  }

  // 3) 인간에 대한 기본값 계산 (동물 기본값 + 인간 델타)
  const { data: humanAff } = await supabase
    .from("human_affinity")
    .select("human_affinity_delta")
    .eq("animal_id", animalId)
    .maybeSingle();

  const baseHuman = animal.human_affinity_base ?? 0;           // 동물의 기본 인간 친화도
  const humanDelta = humanAff?.human_affinity_delta ?? 0;       // 인간에 대한 델타 값

  // 4) 최종 친화도 계산 (기본값 + 델타)
  // MVP에서는 인간 친화도는 base+delta로만 처리
  // (나중에 humans를 entity로 확장하면 group_affinity에 인간 그룹을 넣으면 됨)
  const finalAffinity = clamp(baseHuman + humanDelta, -100, 100);

  return {
    finalAffinity,
    trust: 0,      // 기본값
    bond: 0,       // 기본값
    animal
  };
}

// 시스템 프롬프트 생성 함수
// 친화도에 따라 캐릭터의 말투와 태도를 결정
function buildSystemPrompt(params: {
  animalName: string;        // 동물 이름
  species: string;           // 종족
  mbti?: string | null;      // MBTI
  finalAffinity: number;     // 최종 친화도
  trust: number;              // 신뢰도
  bond: number;               // 유대 레벨
  voiceStyle: any;            // 말투 스타일
  personalityVector: any;     // 성격 벡터
}) {
  const { animalName, species, mbti, finalAffinity, trust, bond, voiceStyle, personalityVector } = params;

  // 친화도에 따른 태도 프리셋 결정
  let attitude = "neutral";  // 기본값: 중립
  if (finalAffinity <= -40) {
    attitude = "cold/suspicious";  // 차갑고 의심스러운
  } else if (finalAffinity >= 40) {
    attitude = "warm/friendly";   // 따뜻하고 친근한
  }

  return `
너는 Animal Intelligence Universe의 캐릭터다.
캐릭터 이름: ${animalName} (${species})
MBTI: ${mbti ?? "unknown"}
현재 인간(플레이어)에 대한 친화도: ${finalAffinity} (-100~100)
신뢰도: ${trust} (0~100)
유대 레벨: ${bond}

말투/규칙(voice_style): ${JSON.stringify(voiceStyle ?? {}, null, 2)}
성격 파라미터(personality_vector): ${JSON.stringify(personalityVector ?? {}, null, 2)}

대화 태도: ${attitude}

규칙:
- 설정을 유지해. 캐릭터 밖 메타설명 하지 마.
- 친화도가 낮으면 쉽게 믿지 말고, 질문을 되묻거나 경계해.
- 친화도가 높으면 더 자세히, 더 따뜻하게, 더 많은 힌트/퀘스트를 제안해.
- 필요하면 짧게 퀘스트 형태로 다음 행동을 제안해.
`.trim();
}

// OLLAMA API 호출 함수
async function callOLLAMA(system: string, user: string) {
  // OLLAMA 설정 (환경 변수 또는 기본값)
  const ollamaUrl = process.env.OLLAMA_URL || 'http://localhost:11434';
  const ollamaModel = process.env.OLLAMA_MODEL || 'gemma3:4b'; // 기본 모델: gemma3:4b

  try {
    const res = await fetch(`${ollamaUrl}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: ollamaModel,
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
        stream: false,  // 스트리밍 비활성화
        options: {
          temperature: 0.9,  // 창의적인 응답을 위한 높은 온도
          num_predict: 500,  // 최대 토큰 수
        },
      }),
      // 타임아웃 설정 (90초)
      signal: AbortSignal.timeout(90000),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`OLLAMA API 오류: ${res.status} - ${text}`);
    }

    const json = await res.json();
    return json.message?.content ?? "";
  } catch (error: any) {
    // 네트워크 오류 또는 연결 실패 처리
    if (error.name === 'AbortError' || error.message.includes('ECONNREFUSED')) {
      throw new Error('OLLAMA 서버에 연결할 수 없습니다. OLLAMA가 실행 중인지 확인해주세요.');
    }
    throw error;
  }
}

// POST 요청 핸들러
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ChatBody;

    // 필수 파라미터 검증
    if (!body.playerId || !body.animalId || !body.message) {
      return NextResponse.json(
        { error: "playerId, animalId, message가 필요합니다" },
        { status: 400 }
      );
    }

    // 플레이어 상태 row가 없으면 자동 생성 (MVP) - 실패해도 계속 진행
    try {
      await supabase.from("player_state").upsert({ player_id: body.playerId });
    } catch (err) {
      console.warn('플레이어 상태 생성 실패 (무시하고 계속 진행):', err);
    }

    // 최종 친화도 계산 (동물 정보, 플레이어-동물 관계, 그룹 친화도 등)
    const { finalAffinity, trust, bond, animal } = await computeFinalAffinity(
      body.playerId,
      body.animalId
    );

    // 시스템 프롬프트 생성 (친화도에 따른 말투/태도 포함)
    const system = buildSystemPrompt({
      animalName: animal.name,
      species: animal.species,
      mbti: animal.mbti,
      finalAffinity,
      trust,
      bond,
      voiceStyle: animal.voice_style,
      personalityVector: animal.personality_vector,
    });

    // OLLAMA API 호출하여 응답 생성
    const answer = await callOLLAMA(system, body.message);

    // (선택) 이벤트 로그 저장 - 실패해도 계속 진행
    try {
      await supabase.from("events_log").insert({
        player_id: body.playerId,
        event_type: "CHAT",
        payload: {
          animal_id: body.animalId,
          user_message: body.message,
          final_affinity: finalAffinity,
        },
      });
    } catch (err) {
      console.warn('이벤트 로그 저장 실패 (무시하고 계속 진행):', err);
    }

    // 응답 반환
    return NextResponse.json({
      animal: {
        id: animal.animal_id,
        name: animal.name,
        species: animal.species,
      },
      finalAffinity,
      message: answer,  // 클라이언트에서 사용하는 필드명에 맞춤
    });
  } catch (e: any) {
    console.error("Chat API 오류:", e);
    return NextResponse.json(
      { error: e.message ?? "알 수 없는 오류가 발생했습니다" },
      { status: 500 }
    );
  }
}
