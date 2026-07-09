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
      <BookSection dataFile="stories-world-guide.json" sectionClass="stories-world-guide-section" />
      <BookSection dataFile="knowledge-notes.json" sectionClass="knowledge-notes-section" />
      <BookSection dataFile="stories-of-animal-characters.json" sectionClass="stories-of-animal-characters-section" />
      <NewsUpdateSection />
      <NewsletterSection />
      <Footer />
    </>
  )
}

