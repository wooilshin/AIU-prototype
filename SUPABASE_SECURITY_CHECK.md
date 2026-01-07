# Supabase 보안 점검 가이드

## 현재 보안 상태

### ✅ 잘 설정된 부분
1. **Service Role Key는 서버 사이드에서만 사용**
   - API Routes (`app/api/newsletter/route.ts`, `app/api/chat/route.ts`)에서만 사용
   - 클라이언트 코드에 노출되지 않음

2. **환경 변수로 관리**
   - `.env.local` 파일에 저장 (Git에 커밋되지 않음)
   - `NEXT_PUBLIC_` 접두사 없음 = 클라이언트 번들에 포함되지 않음

### ⚠️ 보안 강화가 필요한 부분

#### 1. RLS (Row Level Security) 설정 

**확인 방법:**
1. Supabase 대시보드 접속
2. **Authentication** > **Policies** 메뉴로 이동
3. `newsletter_subscribers` 테이블 선택
4. RLS가 활성화되어 있는지 확인
5. 정책이 설정되어 있는지 확인

**권장 RLS 정책:**
```sql
-- RLS 활성화
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Service Role은 모든 작업 가능 (이미 기본적으로 활성화됨)
-- Anon/authenticated 사용자는 읽기/쓰기 불가하도록 설정 (API Routes를 통해서만 접근)
CREATE POLICY "Disable public access" ON newsletter_subscribers
  FOR ALL
  USING (false)
  WITH CHECK (false);
```

#### 2. Rate Limiting 추가 필요
현재 무차별 구독 시도에 대한 제한이 없습니다.

**추천 솔루션:**
- Next.js API Routes에 Rate Limiting 미들웨어 추가
- 또는 Vercel Edge Config + Upstash Redis 사용

#### 3. Supabase 프로젝트 설정 확인
**확인 사항:**
1. **Settings** > **API** > **Project API keys**
   - `anon` key: 공개되어도 괜찮음 (RLS가 보호함)
   - `service_role` key: ⚠️ 절대 공개하면 안 됨 (현재 코드는 안전하게 서버에서만 사용)

2. **Authentication** > **URL Configuration**
   - Site URL과 Redirect URLs가 올바르게 설정되어 있는지 확인

3. **Database** > **Tables** > `newsletter_subscribers`
   - RLS 활성화 여부 확인
   - 테이블 구조 확인

