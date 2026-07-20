export type Language = 'en' | 'ko'

export function isKoreanHostname(hostname: string): boolean {
  return hostname.includes('student-b.co.kr')
}

export function detectLanguageFromHostname(hostname?: string): Language {
  if (!hostname) {
    if (typeof window === 'undefined') return 'en'
    hostname = window.location.hostname
  }
  return isKoreanHostname(hostname) ? 'ko' : 'en'
}

export function applyDocumentLanguage(language: Language): void {
  if (typeof document === 'undefined') return
  const isKoreanSite = language === 'ko'
  document.documentElement.lang = language
  document.documentElement.classList.remove('site-ko', 'site-en')
  document.documentElement.classList.add(isKoreanSite ? 'site-ko' : 'site-en')
}
