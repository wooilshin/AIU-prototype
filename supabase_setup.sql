-- Newsletter 구독자 테이블 (참고용, 삭제해도됨됨)
-- Supabase 대시보드 > SQL Editor에서 실행하세요

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id BIGSERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스 추가 (이메일 검색 성능 향상)
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);

-- RLS (Row Level Security) 정책 설정 (선택사항)
-- 모든 사용자가 읽을 수 있도록 설정 (필요에 따라 수정)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- 서비스 역할은 모든 작업 가능 (이미 기본적으로 활성화됨)
-- 필요시 추가 정책 설정 가능

