import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    // Here you would typically send an email using a service like SendGrid, Resend, etc.
    // For now, we'll just return a success message
    
    console.log('Contact form submission:', { name, email, subject, message })

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again later.',
      },
      { status: 500 }
    )
  }
}

