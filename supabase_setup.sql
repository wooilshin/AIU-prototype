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

-- RLS (Row Level Security) 정책 설정
-- 모든 사용자가 읽을 수 있도록 설정 (필요에 따라 수정)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- 공개 접근 차단 (API Routes를 통해서만 접근 가능하도록)
-- Service Role은 RLS를 우회하므로 API Routes는 정상 작동
CREATE POLICY "Disable public anon access" ON newsletter_subscribers
  FOR ALL
  USING (false)
  WITH CHECK (false);

-- 서비스 역할은 모든 작업 가능 (이미 기본적으로 RLS를 우회함)
-- API Routes에서 Service Role Key를 사용하므로 위 정책과 관계없이 작동함

