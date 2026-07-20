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
    const hash = window.location.hash
    if (hash === '#newsletter' || hash === '#store') {
      setTimeout(() => {
        const target = document.getElementById(hash.slice(1))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="home-page">
      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
        <div key={n} className={`home-paw-bg home-paw-bg--${n}`} aria-hidden="true">
          <img src="/images/icon/paw.svg" alt="" />
        </div>
      ))}
      <Header />
      <div className="home-main">
        <HeroCarousel />
        <div id="store">
          <BookSection dataFile="stories-world-guide.json" sectionClass="stories-world-guide-section" />
          <BookSection dataFile="knowledge-notes.json" sectionClass="knowledge-notes-section" />
          <BookSection dataFile="stories-of-animal-characters.json" sectionClass="stories-of-animal-characters-section" />
        </div>
        <NewsUpdateSection />
        <NewsletterSection />
        <Footer />
      </div>
    </div>
  )
}

