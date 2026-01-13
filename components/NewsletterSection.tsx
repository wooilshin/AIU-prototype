'use client'

import { FormEvent, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function NewsletterSection() {
  const { language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  
  const translations = {
    en: {
      title: 'Newsletter',
      description: 'Sign up to receive exclusive information about books, sales, and events.',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      processing: 'Processing...',
      signUp: 'Sign up',
      error: 'An error occurred while processing your subscription. Please try again later.',
      networkError: 'Network error. Please check your connection and try again.'
    },
    ko: {
      title: '뉴스레터',
      description: '도서, 할인, 이벤트에 대한 독점 정보를 받아보세요.',
      firstName: '이름',
      lastName: '성',
      email: '이메일',
      processing: '처리 중...',
      signUp: '구독하기',
      error: '구독 처리 중 오류가 발생했습니다. 나중에 다시 시도해주세요.',
      networkError: '네트워크 오류입니다. 연결을 확인하고 다시 시도해주세요.'
    }
  }
  
  const t = translations[language]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    // 비동기 작업 전에 form 요소를 변수에 저장 (나중에 null이 될 수 있으므로)
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: formData,
      })
      
      // 응답 상태 확인
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.success) {
        setMessage(data.message)
        // 저장된 form 요소를 사용하여 reset
        if (form) {
          form.reset()
        }
      } else {
        setMessage(data.message || t.error)
      }
    } catch (error) {
      console.error('Error:', error)
      // 네트워크 에러인지 JSON 파싱 에러인지 구분
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setMessage(t.networkError)
      } else {
        setMessage(t.error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="newsletter" className="newsletter-section">
      <div className="container">
        <h2>{t.title}</h2>
        <p>{t.description}</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="firstName" placeholder={t.firstName} required />
            <input type="text" name="lastName" placeholder={t.lastName} required />
          </div>
          <input type="email" name="email" placeholder={t.email} required />
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? t.processing : t.signUp}
          </button>
          {message && (
            <p style={{ 
              marginTop: '15px', 
              textAlign: 'center',
              color: message.includes('Thank you') ? '#28a745' : '#dc3545'
            }}>
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

