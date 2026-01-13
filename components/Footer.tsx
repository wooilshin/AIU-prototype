'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()
  
  const translations = {
    en: {
      contact: 'Contact',
      connect: 'Connect',
      copyright: '© 2025 Student B Press. All Rights Reserved.'
    },
    ko: {
      contact: '연락처',
      connect: '연결',
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
              <h4>{t.contact}</h4>
              <p>contentcreator[at]student.com</p>
            </div>
          </div>
          <div className="footer-bottom-right">
            <h4>{t.connect}</h4>
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

