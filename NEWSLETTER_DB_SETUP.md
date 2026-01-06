# Newsletter 구독 정보 Supabase 저장 가이드

## 현재 상태
- ✅ API Route 생성 완료 (`/api/newsletter`)
- ✅ NewsletterSection 컴포넌트 업데이트 완료
- ✅ Supabase 연동 코드 적용 완료
- ✅ @supabase/supabase-js 패키지 설치 완료
- ⏳ Supabase 프로젝트 설정 필요

## Supabase 설정 방법

### 1. Supabase 프로젝트 생성
1. [Supabase](https://supabase.com)에 가입/로그인
2. "New Project" 클릭하여 새 프로젝트 생성
3. 프로젝트 이름, 데이터베이스 비밀번호 설정
4. 프로젝트 생성 완료 대기 (약 2분)

### 2. 테이블 생성
1. Supabase 대시보드에서 **SQL Editor** 메뉴 클릭
2. `supabase_setup.sql` 파일의 내용을 복사하여 실행
   - 또는 아래 SQL 직접 실행:

```sql
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id BIGSERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
```

### 3. 환경 변수 설정
1. 프로젝트 루트에 `.env.local` 파일 생성 (없는 경우)
2. Supabase 대시보드 > **Settings** > **API**에서 다음 정보 확인:
   - **Project URL** (NEXT_PUBLIC_SUPABASE_URL)
   - **service_role key** (SUPABASE_SERVICE_ROLE_KEY) - ⚠️ **secret** 키 사용!

3. `.env.local` 파일에 추가:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### 4. 개발 서버 재시작
환경 변수를 변경했으므로 개발 서버를 재시작하세요:
```bash
npm run dev
```

## 테스트
1. 홈페이지의 Newsletter 섹션에서 이름과 이메일 입력
2. "Sign up" 버튼 클릭
3. Supabase 대시보드 > **Table Editor** > `newsletter_subscribers` 테이블에서 데이터 확인

## 기능
- ✅ 이름, 성, 이메일 저장
- ✅ 중복 이메일 방지
- ✅ 입력 검증 (필수 필드, 이메일 형식)
- ✅ 구독 시간 자동 기록

## 문제 해결
- **"서버 설정 오류"** 메시지: `.env.local` 파일의 환경 변수를 확인하세요
- **테이블이 없다는 오류**: SQL Editor에서 테이블 생성 SQL을 실행했는지 확인하세요
- **권한 오류**: `SUPABASE_SERVICE_ROLE_KEY`를 사용하고 있는지 확인하세요 (anon key가 아님)

