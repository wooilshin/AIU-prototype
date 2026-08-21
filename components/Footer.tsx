'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import NewsletterForm from '@/components/NewsletterForm'

export default function Footer() {
  const { language } = useLanguage()

  const translations = {
    en: {
      brandTitle: 'Student B',
      brandBlurb:
        'Student B publishes Animal Intelligence books, stories, and creative projects that reframe knowledge through non-human perspectives.',
      contact: 'Contact',
      newsletter: 'Newsletter',
      connect: 'SNS',
      businessTeam: 'Business:',
      techLab: 'Creative Tech Lab:',
      copyright:
        'All content copyright © 2026 Student B or its respective owners. Student B® and its logos are registered trademarks of Student B. All rights reserved.',
    },
    ko: {
      brandTitle: '스튜던트 비',
      brandBlurb:
        '스튜던트 비는 비인간적 시선으로 지식을 다시 읽는 동물지능 도서·이야기·크리에이티브 프로젝트를 만듭니다.',
      contact: '연락처',
      newsletter: '뉴스레터',
      connect: 'SNS',
      businessTeam: '사업:',
      techLab: '테크랩:',
      copyright:
        '본 콘텐츠의 저작권은 Student B 또는 각 권리자에게 있습니다. Student B® 및 관련 로고는 Student B의 등록상표입니다. 무단 복제 및 배포를 금합니다.',
    },
  }

  const t = translations[language]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-col footer-col-brand">
            <strong className="footer-section-title">{t.brandTitle}</strong>
            <p className="footer-brand-blurb">{t.brandBlurb}</p>
            <p className="footer-copyright-text">{t.copyright}</p>
          </div>

          <div className="footer-col footer-col-contact">
            <strong className="footer-section-title">{t.contact}</strong>
            <div className="footer-email-item">
              <strong>{t.businessTeam}</strong>
              <br />
              contentdirector [at] student-b.com
            </div>
            <div className="footer-email-item">
              <strong>{t.techLab}</strong>
              <br />
              techlab [at] student-b.com
            </div>
          </div>

          <div id="newsletter" className="footer-col footer-col-newsletter">
            <strong className="footer-section-title">{t.newsletter}</strong>
            <NewsletterForm variant="footer" />
          </div>

          <div className="footer-col footer-col-sns">
            <strong className="footer-section-title">{t.connect}</strong>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/studentbpress/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/studentbpress/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/animal-intelligence"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.youtube.com/@studentbpress"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
