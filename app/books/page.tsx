'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PublicationShowcase from '@/components/PublicationShowcase'

export default function BooksPage() {
  return (
    <div className="home-page">
      {[2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
        <div key={n} className={`home-paw-bg home-paw-bg--${n}`} aria-hidden="true">
          <img src="/images/icon/paw.svg" alt="" />
        </div>
      ))}
      <Header />
      <div className="home-main">
        <div id="store">
          <PublicationShowcase />
        </div>
      </div>
      <Footer />
    </div>
  )
}
