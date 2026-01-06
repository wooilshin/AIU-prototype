'use client'

import { FormEvent, useState } from 'react'

export default function NewsletterSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

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
        setMessage(data.message || 'An error occurred while processing your subscription. Please try again later.')
      }
    } catch (error) {
      console.error('Error:', error)
      // 네트워크 에러인지 JSON 파싱 에러인지 구분
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setMessage('Network error. Please check your connection and try again.')
      } else {
        setMessage('An error occurred while processing your subscription. Please try again later.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="newsletter" className="newsletter-section">
      <div className="container">
        <h2>Newsletter</h2>
        <p>Sign up to receive exclusive information about books, sales, and events.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
          </div>
          <input type="email" name="email" placeholder="Email" required />
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Sign up'}
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

