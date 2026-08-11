/** Naver Smart Store — Korean site header only (see Header.tsx). */
export const KOREAN_STORE_URL = 'https://smartstore.naver.com/student-b'

export const STORE_URL = process.env.NEXT_PUBLIC_STORE_URL?.trim() || KOREAN_STORE_URL

export function getStoreHref(): string {
  return STORE_URL
}

export function isExternalStoreLink(): boolean {
  return true
}
