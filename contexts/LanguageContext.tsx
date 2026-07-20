'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { applyDocumentLanguage, detectLanguageFromHostname, type Language } from '@/lib/language'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => detectLanguageFromHostname())

  useEffect(() => {
    const nextLanguage = detectLanguageFromHostname()
    setLanguage(nextLanguage)
    applyDocumentLanguage(nextLanguage)
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
