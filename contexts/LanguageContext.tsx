'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Language = 'en' | 'ko'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // 도메인 기반 언어 감지
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname
      
      // www.student-b.co.kr 또는 student-b.co.kr이면 한글
      const isKoreanSite = hostname.includes('student-b.co.kr')
      const nextLanguage: Language = isKoreanSite ? 'ko' : 'en'
      setLanguage(nextLanguage)

      document.documentElement.lang = nextLanguage
      document.documentElement.classList.remove('site-ko', 'site-en')
      document.documentElement.classList.add(isKoreanSite ? 'site-ko' : 'site-en')
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}



