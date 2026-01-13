'use client'

import { FormEvent, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const translations = {
    en: {
      title: 'Contact Us',
      subtitle: 'We\'d love to hear from you. Get in touch with us.',
      formTitle: 'Send us a Message',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      selectSubject: 'Select a subject',
      general: 'General Inquiry',
      business: 'Business Inquiry',
      sending: 'Sending...',
      sendMessage: 'Send Message',
      networkError: 'Network error. Please check your connection and try again.',
      error: 'Sorry, there was an error sending your message. Please try again later or contact us directly at sns@student-b.com'
    },
    ko: {
      title: '문의하기',
      subtitle: '문의사항이 있으시면 언제든지 연락주세요.',
      formTitle: '메시지 보내기',
      name: '이름',
      email: '이메일',
      subject: '제목',
      message: '메시지',
      selectSubject: '제목을 선택하세요',
      general: '일반 문의',
      business: '비즈니스 문의',
      sending: '전송 중...',
      sendMessage: '메시지 보내기',
      networkError: '네트워크 오류입니다. 연결을 확인하고 다시 시도해주세요.',
      error: '메시지 전송 중 오류가 발생했습니다. 나중에 다시 시도하거나 sns@student-b.com으로 직접 연락주세요.'
    }
  }
  
  const t = translations[language]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 비동기 작업 전에 form 요소를 변수에 저장 (나중에 null이 될 수 있으므로)
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })
      
      // 응답 상태 확인
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.success) {
        alert(data.message)
        // 저장된 form 요소를 사용하여 reset
        if (form) {
          form.reset()
        }
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.error('Error:', error)
      // 네트워크 에러인지 JSON 파싱 에러인지 구분
      if (error instanceof TypeError && error.message.includes('fetch')) {
        alert(t.networkError)
      } else {
        alert(t.error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <section className="contact-hero">
        <div className="container">
          <h1>{t.title}</h1>
          <p>{t.subtitle}</p>
        </div>
      </section>

      <div className="contact-hero-bear-mobile">
        <img src="/images/icon/bear.svg" alt="Bear" />
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-wrapper">
              <h2>{t.formTitle}</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t.name} <span className="required">*</span></label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t.email} <span className="required">*</span></label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">{t.subject} <span className="required">*</span></label>
                  <select id="subject" name="subject" required>
                    <option value="">{t.selectSubject}</option>
                    <option value="general">{t.general}</option>
                    <option value="media">{t.business}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">{t.message} <span className="required">*</span></label>
                  <textarea id="message" name="message" rows={6} required></textarea>
                </div>
                <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? t.sending : t.sendMessage}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

