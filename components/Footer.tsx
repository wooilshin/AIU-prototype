'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()
  
  const translations = {
    en: {
      contact: 'Contact',
      connect: 'SNS',
      copyright: 'All content copyright © 2026 Student B or its respective owners. Student B® and its logos are registered trademarks of Student B. All rights reserved.'
    },
    ko: {
      contact: '연락처',
      connect: 'SNS',
      copyright: '본 콘텐츠의 저작권은 Student B 또는 각 권리자에게 있습니다. Student B® 및 관련 로고는 Student B의 등록상표입니다. 무단 복제 및 배포를 금합니다.'
    }
  }
  
  const t = translations[language]
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-col footer-col-brand">
            <p className="footer-copyright-text">{t.copyright}</p>
          </div>
          <div className="footer-col footer-col-contact">
            <strong className="footer-section-title">{t.contact}</strong>
            <div className="footer-email-item">
              <strong>Business team:</strong><br />
              contentdirector [at] student-b.com
            </div>

            <div className="footer-email-item">
              <strong>Creative Tech Lab:</strong><br />
              techlab [at] student-b.com
            </div>

            <div className="footer-email-item">
              <strong>Our creators:</strong><br />
              aliceshin [at] student-b.com<br />
              willshin [at] student-b.com
            </div>
          </div>
          <div className="footer-col footer-col-sns">
            <strong className="footer-section-title">{t.connect}</strong>
            <div className="social-icons">
              <a href="https://www.facebook.com/studentbpress/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/studentbpress/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/animal-intelligence" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

