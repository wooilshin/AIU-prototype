'use client'

import { FormEvent, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

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
        alert('Network error. Please check your connection and try again.')
      } else {
        alert('Sorry, there was an error sending your message. Please try again later or contact us directly at sns@student-b.com')
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
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with us.</p>
        </div>
      </section>

      <div className="contact-hero-bear-mobile">
        <img src="/images/icon/bear.svg" alt="Bear" />
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name <span className="required">*</span></label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject <span className="required">*</span></label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="media">Business Inquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message <span className="required">*</span></label>
                  <textarea id="message" name="message" rows={6} required></textarea>
                </div>
                <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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

