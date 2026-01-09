'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    setIsMobileMenuOpen(false)
  }

  const handleMenuLinkClick = () => {
    setIsMobileMenuOpen(false)
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
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>
            <span 
              className="nav-disabled"
              onClick={(e) => e.preventDefault()}
            >
              Interactive (Alpha)
            </span>
          </nav>
          <div className="header-actions">
            <button className="newsletter-btn" onClick={handleNewsletterClick}>Newsletter</button>
            <button className="search-btn"><i className="fas fa-search"></i></button>
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
          <Link href="/" onClick={handleMenuLinkClick}>Home</Link>
          <Link href="/about" onClick={handleMenuLinkClick}>About</Link>
          <Link href="/contact" onClick={handleMenuLinkClick}>Contact Us</Link>
          <span 
            className="mobile-nav-disabled"
            onClick={(e) => e.preventDefault()}
          >
            Interactive (Alpha)
          </span>
          <button className="mobile-newsletter-btn" onClick={handleNewsletterClick}>Newsletter</button>
        </nav>
      </div>
    </header>
  )
}

