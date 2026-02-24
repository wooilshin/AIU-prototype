'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()
  
  const translations = {
    en: {
      contact: 'Contact',
      connect: 'SNS',
      copyright: '© 2025 Student B Press. All Rights Reserved.'
    },
    ko: {
      contact: '연락처',
      address: '경기도 성남시 대왕판교로 645 창조경제혁신센터 6-17',
      connect: 'SNS',
      copyright: '© 2025 Student B Press. All Rights Reserved.'
    }
  }
  
  const t = translations[language]
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="footer-contact">
              <strong className="footer-section-title">{t.contact}</strong>
              <div className="footer-email-item">
                <strong>Business team:</strong><br />
                contentdirector [at] student-b.com
              </div>

              <div className="footer-email-item">
                <strong>Tech Lab team</strong><br />
                techlab [at] student-b.com
              </div>

              <div className="footer-email-item">
                <strong>Our creators</strong><br />
                aliceshin [at] student-b.com<br />
                willshin [at] student-b.com
              </div>
            </div>
          </div>
          <div className="footer-bottom-right">
            <strong className="footer-section-title">{t.connect}</strong>
            <div className="social-icons">
              <a href="https://www.facebook.com/studentbpress/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/ai_AnimalIntelligence/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

