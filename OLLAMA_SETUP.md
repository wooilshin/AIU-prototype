# OLLAMA 설정 가이드

## OLLAMA란?

OLLAMA는 로컬에서 LLM(Large Language Model)을 실행할 수 있는 도구입니다. 별도의 API 키 없이 로컬에서 AI 모델을 사용할 수 있습니다.

## 설치 방법

### Windows
1. [OLLAMA 공식 웹사이트](https://ollama.ai)에서 Windows 설치 파일 다운로드
2. 설치 파일 실행
3. 설치 완료 후 OLLAMA가 자동으로 실행됩니다

### macOS / Linux
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

## 모델 다운로드

OLLAMA 설치 후 사용할 모델을 다운로드해야 합니다:

```bash
# Llama 2 모델 (기본값)
ollama pull llama2

# 또는 다른 모델들
ollama pull mistral
ollama pull gemma
ollama pull qwen
ollama pull llama3
```

## 환경 변수 설정 (선택사항)

프로젝트 루트에 `.env.local` 파일을 생성하여 설정을 커스터마이즈할 수 있습니다:

```env
# OLLAMA 서버 URL (기본값: http://localhost:11434)
OLLAMA_URL=http://localhost:11434

# 사용할 모델 이름 (기본값: llama2)
OLLAMA_MODEL=llama2
```

## 사용 방법

1. OLLAMA가 실행 중인지 확인:
   ```bash
   ollama list
   ```

2. Next.js 개발 서버 실행:
   ```bash
   npm run dev
   ```

3. 브라우저에서 `/interactive` 페이지로 이동

4. 채팅 인터페이스에서 대화 시작

## 문제 해결

### OLLAMA 서버에 연결할 수 없는 경우

- OLLAMA가 실행 중인지 확인: `ollama list` 명령어 실행
- 포트 11434가 사용 가능한지 확인
- 방화벽 설정 확인

### 모델을 찾을 수 없는 경우

- 모델이 다운로드되었는지 확인: `ollama list`
- 모델 이름이 올바른지 확인 (대소문자 구분)
- 안되면 경로에 있는지 확인 Test-Path "C:\Users\wishk\AppData\Local\Programs\Ollama\ollama.exe"

- `.env.local`의 `OLLAMA_MODEL` 값 확인

## 참고사항

- OLLAMA는 로컬에서 실행되므로 인터넷 연결이 필요 없습니다
- 모델 크기에 따라 다운로드 시간과 메모리 사용량이 다릅니다
- 첫 실행 시 모델 다운로드가 필요합니다





