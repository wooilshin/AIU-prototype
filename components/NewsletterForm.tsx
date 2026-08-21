'use client'

import { FormEvent, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

type NewsletterFormVariant = 'page' | 'footer'

interface NewsletterFormProps {
  variant?: NewsletterFormVariant
}

export default function NewsletterForm({ variant = 'page' }: NewsletterFormProps) {
  const { language } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const translations = {
    en: {
      name: 'Name',
      email: 'Email',
      blurb: 'Sign up for the latest news from AIU.',
      processing: 'Processing...',
      signUp: 'Sign up',
      error: 'An error occurred while processing your subscription. Please try again later.',
      networkError: 'Network error. Please check your connection and try again.',
    },
    ko: {
      name: '이름',
      email: '이메일',
      blurb: 'AIU의 최신 소식을 받아보세요.',
      processing: '처리 중...',
      signUp: '구독하기',
      error: '구독 처리 중 오류가 발생했습니다. 나중에 다시 시도해주세요.',
      networkError: '네트워크 오류입니다. 연결을 확인하고 다시 시도해주세요.',
    },
  }

  const t = translations[language]
  const isFooter = variant === 'footer'

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.success) {
        setMessage(data.message)
        form.reset()
      } else {
        setMessage(data.message || t.error)
      }
    } catch (error) {
      console.error('Error:', error)
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
    <form
      className={isFooter ? 'footer-newsletter-form' : 'newsletter-form'}
      onSubmit={handleSubmit}
    >
      {isFooter ? (
        <div className="footer-newsletter-fields">
          <input type="email" name="email" placeholder={t.email} required />
          <button
            type="submit"
            className="footer-newsletter-submit"
            disabled={isSubmitting}
            aria-label={t.signUp}
          >
            {isSubmitting ? '…' : <i className="fas fa-arrow-right" aria-hidden="true"></i>}
          </button>
        </div>
      ) : (
        <>
          <input type="text" name="name" placeholder={t.name} required />
          <input type="email" name="email" placeholder={t.email} required />
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? t.processing : t.signUp}
          </button>
        </>
      )}
      {message && (
        <p
          className={isFooter ? 'footer-newsletter-message' : undefined}
          style={
            isFooter
              ? undefined
              : {
                  marginTop: '15px',
                  textAlign: 'center',
                  color: message.includes('Thank you') ? '#28a745' : '#dc3545',
                }
          }
        >
          {message}
        </p>
      )}
    </form>
  )
}
