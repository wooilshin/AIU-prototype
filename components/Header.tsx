'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { isKoreanHostname } from '@/lib/language'

export default function Header() {
  const { language } = useLanguage()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isEnglishDomain = language === 'en'

  const translations = {
    en: {
      home: 'Home',
      aiuProject: 'AIU',
      creativeTechLab: 'Tech Lab',
      store: 'Store',
      contact: 'Contact Us',
      newsletter: 'Newsletter',
    },
    ko: {
      home: '출판물',
      aiuProject: '동물지능',
      creativeTechLab: '테크랩',
      store: '스토어',
      contact: '문의하기',
      newsletter: '뉴스레터',
    },
  }

  const t = translations[language]

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleMenuLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const handleNewsletterClick = () => {
    const newsletterSection = document.getElementById('newsletter')
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    router.push('/#newsletter')
  }

  const handleLanguageSwitch = () => {
    if (typeof window !== 'undefined' && isKoreanHostname(window.location.hostname)) {
      const currentPath = window.location.pathname
      const currentSearch = window.location.search
      const currentHash = window.location.hash
      const newUrl = `https://www.student-b.com${currentPath}${currentSearch}${currentHash}`
      window.location.href = newUrl
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link href="/" className="logo-link" aria-label="Student B Home">
              <img src="/images/header/Logo.svg" alt="Student B" className="logo-image" />
            </Link>
          </div>
          <nav className="nav-menu">
            <Link href="/">{t.home}</Link>
            <Link href="/aiu-project">{t.aiuProject}</Link>
            <Link href="/creative-tech-lab">{t.creativeTechLab}</Link>
            <Link href="/store">{t.store}</Link>
            <Link href="/contact">{t.contact}</Link>
          </nav>
          <div className="header-actions">
            <button className="newsletter-btn" onClick={handleNewsletterClick}>
              {t.newsletter}
            </button>
            <button
              className={`search-btn ${isEnglishDomain ? 'disabled' : ''}`}
              onClick={handleLanguageSwitch}
              disabled={isEnglishDomain}
              aria-label="Switch language"
              title={
                isEnglishDomain
                  ? ''
                  : language === 'ko'
                    ? 'Switch to English'
                    : 'Switch to Korean'
              }
            >
              <i className="fas fa-globe"></i>
            </button>
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <button
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <nav className="mobile-menu-nav">
          <Link href="/" onClick={handleMenuLinkClick}>
            {t.home}
          </Link>
          <Link href="/aiu-project" onClick={handleMenuLinkClick}>
            {t.aiuProject}
          </Link>
          <Link href="/creative-tech-lab" onClick={handleMenuLinkClick}>
            {t.creativeTechLab}
          </Link>
          <Link href="/store" onClick={handleMenuLinkClick}>
            {t.store}
          </Link>
          <Link href="/contact" onClick={handleMenuLinkClick}>
            {t.contact}
          </Link>
        </nav>
      </div>
    </header>
  )
}
