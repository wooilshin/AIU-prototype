'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()

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
          </div>
        </div>
      </div>
    </header>
  )
}

