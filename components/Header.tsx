'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { language } = useLanguage()
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEnglishDomain, setIsEnglishDomain] = useState(false)
  
  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      contact: 'Contact Us',
      interactive: 'Interactive (Alpha)',
      newsletter: 'Newsletter'
    },
    ko: {
      home: '홈',
      about: '소개',
      contact: '문의하기',
      interactive: 'Interactive (Alpha)',
      newsletter: '뉴스레터'
    }
  }
  
  const t = translations[language]

  // 도메인 확인
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname
      setIsEnglishDomain(!hostname.includes('student-b.co.kr'))
    }
  }, [])

  // 모바일 메뉴가 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      // iOS Safari 호환성을 위해 추가
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

  // 뉴스레터 클릭 핸들러 (데스크톱 메뉴용)
  const handleNewsletterClick = () => {
    if (pathname === '/') {
      // 홈페이지에 있으면 스크롤
      const newsletterSection = document.getElementById('newsletter')
      if (newsletterSection) {
        newsletterSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // 다른 페이지에 있으면 홈페이지로 이동 후 스크롤
      router.push('/')
      // 페이지 이동 후 스크롤을 위해 해시 추가 및 스크롤
      setTimeout(() => {
        window.history.replaceState(null, '', '/#newsletter')
        const newsletterSection = document.getElementById('newsletter')
        if (newsletterSection) {
          newsletterSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300)
    }
  }

  // 언어 변환 핸들러 - student-b.co.kr에서만 작동
  const handleLanguageSwitch = () => {
    if (typeof window !== 'undefined' && !isEnglishDomain) {
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
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img src="/images/header/Logo.svg" alt="Logo" className="logo-image" />
            </Link>
          </div>
          <nav className="nav-menu">
            <Link href="/">{t.home}</Link>
            <Link href="/about">{t.about}</Link>
            <Link href="/contact">{t.contact}</Link>
            <span 
              className="nav-disabled"
              onClick={(e) => e.preventDefault()}
            >
              {t.interactive}
            </span>
          </nav>
          <div className="header-actions">
            <button className="newsletter-btn" onClick={handleNewsletterClick}>{t.newsletter}</button>
            <button 
              className={`search-btn ${isEnglishDomain ? 'disabled' : ''}`}
              onClick={handleLanguageSwitch}
              disabled={isEnglishDomain}
              aria-label="Switch language"
              title={isEnglishDomain ? '' : (language === 'ko' ? 'Switch to English' : 'Switch to Korean')}
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
      
      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
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
          <Link href="/" onClick={handleMenuLinkClick}>{t.home}</Link>
          <Link href="/about" onClick={handleMenuLinkClick}>{t.about}</Link>
          <Link href="/contact" onClick={handleMenuLinkClick}>{t.contact}</Link>
          <span 
            className="mobile-nav-disabled"
            onClick={(e) => e.preventDefault()}
          >
            {t.interactive}
          </span>
          <button 
            className={`mobile-language-btn ${isEnglishDomain ? 'disabled' : ''}`}
            onClick={handleLanguageSwitch}
            disabled={isEnglishDomain}
            style={{ 
              margin: '15px 20px',
              background: isEnglishDomain ? '#ccc' : '#87CEEB',
              color: '#fff',
              border: 'none',
              padding: '12px 20px',
              fontSize: '16px',
              fontWeight: 700,
              cursor: isEnglishDomain ? 'not-allowed' : 'pointer',
              borderRadius: '2px',
              transition: 'background-color 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <i className="fas fa-globe"></i>
            <span>{language === 'ko' ? 'English' : '한국어'}</span>
          </button>
        </nav>
      </div>
    </header>
  )
}

