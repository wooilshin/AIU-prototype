'use client'

import { FormEvent } from 'react'

export default function NewsletterSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    
    alert(`Thank you for subscribing, ${firstName} ${lastName}! We'll send updates to ${email}`)
    e.currentTarget.reset()
  }

  return (
    <section className="newsletter-section">
      <div className="container">
        <h2>Newsletter</h2>
        <p>Sign up to receive exclusive information about books, sales, and giveaways.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
          </div>
          <input type="email" name="email" placeholder="Email" required />
          <button type="submit" className="submit-btn">Sign up</button>
        </form>
      </div>
    </section>
  )
}

