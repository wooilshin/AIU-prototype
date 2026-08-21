'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function StorePage() {
  const { language } = useLanguage()

  const copy =
    language === 'ko'
      ? {
          title: 'Store',
          message: 'Under Construction',
        }
      : {
          title: 'Store',
          message: 'Under Construction',
        }

  return (
    <>
      <Header />
      <main className="under-construction-page">
        <div className="container under-construction-content">
          <h1>{copy.title}</h1>
          <p>{copy.message}</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
