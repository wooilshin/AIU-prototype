'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroCarousel from '@/components/HeroCarousel'
import BookSection from '@/components/BookSection'
import NewsletterSection from '@/components/NewsletterSection'
import NewsUpdateSection from '@/components/NewsUpdateSection'

export default function Home() {
  useEffect(() => {
    // URL에 #newsletter 해시가 있으면 스크롤
    if (window.location.hash === '#newsletter') {
      setTimeout(() => {
        const newsletterSection = document.getElementById('newsletter')
        if (newsletterSection) {
          newsletterSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  return (
    <>
      <Header />
      <HeroCarousel />
      <BookSection dataFile="new-releases.json" sectionClass="new-releases-section" />
      <BookSection dataFile="knowledge-era.json" sectionClass="knowledge-era-section" />
      <BookSection dataFile="kids.json" sectionClass="kids-section" />
      <NewsUpdateSection />
      <NewsletterSection />
      <Footer />
    </>
  )
}

