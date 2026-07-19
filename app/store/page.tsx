'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookSection from '@/components/BookSection'

export default function StorePage() {
  const router = useRouter()
  const [isKoreanDomain, setIsKoreanDomain] = useState(false)

  // Store is available only on www.student-b.co.kr
  useEffect(() => {
    if (typeof window === 'undefined') return
    const hostname = window.location.hostname
    if (hostname.includes('student-b.co.kr')) {
      setIsKoreanDomain(true)
    } else {
      router.replace('/')
    }
  }, [router])

  if (!isKoreanDomain) {
    return null
  }

  return (
    <>
      <Header />
      <main className="store-page">
        <BookSection dataFile="stories-world-guide.json" sectionClass="stories-world-guide-section" />
        <BookSection dataFile="knowledge-notes.json" sectionClass="knowledge-notes-section" />
        <BookSection dataFile="stories-of-animal-characters.json" sectionClass="stories-of-animal-characters-section" />
      </main>
      <Footer />
    </>
  )
}
