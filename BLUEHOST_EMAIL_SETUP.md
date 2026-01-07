# Bluehost 이메일 발송 설정 가이드

## Bluehost SMTP 설정 방법

### 1. Bluehost 이메일 계정 확인
1. Bluehost 대시보드에 로그인
2. **Email** 섹션으로 이동 (CPANEL EMAIL)
3. 사용할 이메일 계정 확인 (예: `noreply@student-b.com` 또는 `contact@student-b.com`)
4. 이메일 비밀번호 확인 (또는 새로 설정)

### 2. Bluehost SMTP 정보
일반적인 Bluehost SMTP 설정:
- **SMTP 호스트**: `mail.student-b.com` 또는 `smtp.bluehost.com`
- **포트**: 
  - `465` (SSL - 권장)
  - `587` (TLS)
- **보안**: SSL/TLS 활성화
- **인증**: 필요 (이메일 주소와 비밀번호)

### 3. 환경 변수 설정
프로젝트 루트의 `.env.local` 파일에 다음을 추가하세요:

```env
# Bluehost SMTP 설정
SMTP_HOST=mail.student-b.com
SMTP_PORT=465
SMTP_USER=your-email@student-b.com
SMTP_PASSWORD=your-email-password

# Contact form 받는 이메일 주소
# 주소: contentdirector [at] student-b.com
CONTACT_RECIPIENT_EMAIL=contentdirector@student-b.com

# Newsletter 관리자 알림 이메일 (선택사항, 없으면 CONTACT_RECIPIENT_EMAIL 사용)
# 주소: contentdirector [at] student-b.com
NEWSLETTER_ADMIN_EMAIL=contentdirector@student-b.com
```

**⚠️ 중요:**
- `SMTP_USER`: Bluehost에서 생성한 이메일 주소 전체
- `SMTP_PASSWORD`: 해당 이메일 계정의 비밀번호
- `.env.local` 파일은 Git에 커밋되지 않습니다 (`.gitignore`에 포함됨)

### 4. Bluehost SMTP 정보 확인 방법
정확한 SMTP 정보를 확인하려면:
1. Bluehost 대시보드 > **Email** > **Email Accounts**
2. 이메일 계정 옆의 **More** 클릭
3. **Configure Email Client** 선택
4. **Manual Settings** 탭에서 SMTP 정보 확인

또는 Bluehost 고객 지원팀에 문의하세요.

### 5. 개발 서버 재시작
환경 변수를 추가한 후 개발 서버를 재시작하세요:
```bash
npm run dev
```

## 테스트

### Contact Form 테스트
1. Contact 페이지에서 폼 작성
2. "Send Message" 버튼 클릭
3. `contentdirector [at] student-b.com`으로 이메일이 도착하는지 확인

### Newsletter 구독 테스트
1. 홈페이지 Newsletter 섹션에서 이름과 이메일 입력
2. "Sign up" 버튼 클릭
3. 구독자 이메일로 환영 이메일이 도착하는지 확인
4. 관리자 이메일로 새 구독자 알림이 도착하는지 확인

## 문제 해결

### 이메일이 발송되지 않는 경우
1. **환경 변수 확인**: `.env.local` 파일의 값이 올바른지 확인
2. **SMTP 설정 확인**: 포트 번호와 호스트가 정확한지 확인
3. **이메일 비밀번호 확인**: Bluehost 이메일 계정 비밀번호가 올바른지 확인
4. **방화벽 확인**: Bluehost에서 SMTP 포트가 차단되지 않았는지 확인
5. **로그 확인**: 서버 콘솔에서 에러 메시지 확인

### 일반적인 오류
- **"Invalid login"**: 이메일 주소나 비밀번호가 잘못됨
- **"Connection timeout"**: SMTP 호스트나 포트가 잘못됨
- **"Authentication failed"**: 이메일 계정 인증 실패

## 보안 권장사항
1. **환경 변수 보호**: `.env.local` 파일을 절대 Git에 커밋하지 마세요
2. **배포 시**: Vercel, Netlify 등 배포 플랫폼의 환경 변수 설정에 추가하세요
3. **이메일 계정**: 전용 이메일 계정을 사용하는 것을 권장합니다 (예: `noreply@student-b.com`)

## 대안
Bluehost SMTP가 작동하지 않는 경우:
- **Resend** (권장): 무료 티어 제공, Next.js 통합 용이
- **SendGrid**: 무료 티어 제공
- **AWS SES**: 저렴한 비용
- **Gmail SMTP**: 개인 계정 사용 가능 (제한 있음)

