'use client'

import { FormEvent, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })
      
      const data = await response.json()
      
      if (data.success) {
        alert(data.message)
        e.currentTarget.reset()
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Sorry, there was an error sending your message. Please try again later or contact us directly at sns@student-b.com')
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

      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <p><a href="mailto:info@mitpress.mit.edu">info@mitpress.mit.edu</a></p>
                  </div>
                </div>
              </div>

              <div className="social-contact">
                <h3>Follow Us</h3>
                <div className="social-icons-contact">
                  <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                  <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                  <a href="#linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>

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
                    <option value="author">Author Inquiry</option>
                    <option value="media">Business Inquiry</option>
                    <option value="other">Other</option>
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

