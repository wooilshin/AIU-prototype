import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import nodemailer from 'nodemailer'

// 환경 변수에서 Supabase 설정 가져오기 (Newsletter 전용)
const supabaseUrl = process.env.NEWSLETTER_SUPABASE_URL
const supabaseKey = process.env.NEWSLETTER_SUPABASE_SERVICE_ROLE_KEY

// Supabase 클라이언트 생성 (환경 변수가 있을 때만)
const supabase = supabaseUrl && supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null

// Bluehost SMTP 설정
const createTransporter = () => {
  const smtpHost = process.env.SMTP_HOST || 'mail.student-b.com'
  const smtpPort = parseInt(process.env.SMTP_PORT || '465')
  const smtpUser = process.env.SMTP_USER
  const smtpPassword = process.env.SMTP_PASSWORD

  if (!smtpUser || !smtpPassword) {
    console.warn('SMTP configuration is not complete. Email notifications will not be sent.')
    return null
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  })
}

// 이메일 발송 함수
async function sendNewsletterEmails(
  firstName: string,
  lastName: string,
  email: string
) {
  const transporter = createTransporter()
  if (!transporter) {
    return // SMTP 설정이 없으면 이메일 발송 건너뛰기
  }

  const fullName = `${firstName} ${lastName}`
  const adminEmail = process.env.NEWSLETTER_ADMIN_EMAIL || process.env.CONTACT_RECIPIENT_EMAIL || 'contentdirector@student-b.com'
  const smtpUser = process.env.SMTP_USER

  // SMTP_USER가 없으면 이메일 발송 건너뛰기
  if (!smtpUser) {
    console.warn('SMTP_USER is not set. Skipping email sending.')
    return
  }

  try {
    // 1. 구독자에게 환영 이메일 발송
    await transporter.sendMail({
      from: `"Student B Press" <${smtpUser}>`,
      to: email,
      subject: 'Welcome to Student B Press Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #87CEEB; margin: 0;">Welcome to Student B Press!</h1>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 30px; border-radius: 5px; margin-bottom: 20px;">
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Dear ${firstName},
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Thank you for subscribing to our newsletter! We're thrilled to have you join our community.
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              You'll now receive exclusive updates about:
            </p>
            <ul style="font-size: 16px; line-height: 1.8; color: #333;">
              <li>New book releases and publications</li>
              <li>Special sales and promotions</li>
              <li>Upcoming events and author interviews</li>
              <li>Educational content and resources</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 14px;">
              We look forward to sharing exciting content with you!
            </p>
            <p style="color: #666; font-size: 14px; margin-top: 10px;">
              Best regards,<br>
              <strong>The Student B Press Team</strong>
            </p>
          </div>
        </div>
      `,
      text: `
Welcome to Student B Press!

Dear ${firstName},

Thank you for subscribing to our newsletter! We're thrilled to have you join our community.

You'll now receive exclusive updates about:
- New book releases and publications
- Special sales and promotions
- Upcoming events and author interviews
- Educational content and resources

We look forward to sharing exciting content with you!

Best regards,
The Student B Press Team
      `.trim(),
    })

    // 2. 관리자에게 새 구독자 알림 이메일 발송
    await transporter.sendMail({
      from: `"Newsletter System" <${smtpUser}>`,
      to: adminEmail,
      subject: `[Newsletter] New Subscriber: ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; border-bottom: 2px solid #87CEEB; padding-bottom: 10px;">
            New Newsletter Subscriber
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subscribed At:</strong> ${new Date().toLocaleString('en-US')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This is an automated notification from the newsletter subscription system.</p>
          </div>
        </div>
      `,
      text: `
New Newsletter Subscriber

Name: ${fullName}
Email: ${email}
Subscribed At: ${new Date().toLocaleString('en-US')}

This is an automated notification from the newsletter subscription system.
      `.trim(),
    })

    console.log('Newsletter subscription emails sent successfully:', { email, fullName })
  } catch (error) {
    // 이메일 발송 실패해도 DB 저장은 성공한 것으로 처리
    console.error('Error sending newsletter emails:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    // Supabase 설정 확인
    if (!supabase) {
      console.error('Supabase environment variables are not set.')
      return NextResponse.json(
        {
          success: false,
          message: 'Server configuration error. Please contact the administrator.',
        },
        { status: 500 }
      )
    }

    const formData = await request.formData()
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string

    // 입력 검증
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill in all fields.',
        },
        { status: 400 }
      )
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please enter a valid email address.',
        },
        { status: 400 }
      )
    }

    // 중복 이메일 확인
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('email', email)
      .single()

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'This email is already subscribed.',
        },
        { status: 400 }
      )
    }

    // DB에 저장
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email: email,
          subscribed_at: new Date().toISOString(),
        },
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        {
          success: false,
          message: 'An error occurred while processing your subscription. Please try again later.',
        },
        { status: 500 }
      )
    }

    // DB 저장이 성공했으므로 성공 응답 반환
    const response = NextResponse.json({
      success: true,
      message: `Thank you for subscribing, ${firstName} ${lastName}! We'll send updates to ${email}.`,
    })

    // DB 저장 성공 후 이메일 발송 (비동기, 실패해도 구독은 성공 처리)
    // 이메일 발송은 응답 반환 후 백그라운드에서 실행되며, 실패해도 구독은 성공한 것으로 처리
    // setTimeout을 사용하여 응답 반환 후 실행되도록 보장
    setTimeout(() => {
      sendNewsletterEmails(firstName, lastName, email).catch((err) => {
        console.error('Newsletter email sending failed (non-blocking):', err)
      })
    }, 0)

    return response
  } catch (error) {
    // 예상치 못한 에러 발생 시 상세 로그 출력
    console.error('Error processing newsletter subscription:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your subscription. Please try again later.',
      },
      { status: 500 }
    )
  }
}

