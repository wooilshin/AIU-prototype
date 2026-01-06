import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Bluehost SMTP 설정
const createTransporter = () => {
  const smtpHost = process.env.SMTP_HOST || 'mail.student-b.com' // Bluehost SMTP 호스트
  const smtpPort = parseInt(process.env.SMTP_PORT || '465')
  const smtpUser = process.env.SMTP_USER // Bluehost 이메일 주소
  const smtpPassword = process.env.SMTP_PASSWORD // Bluehost 이메일 비밀번호
  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'contentdirector@student-b.com'

  if (!smtpUser || !smtpPassword) {
    console.error('SMTP 설정이 완료되지 않았습니다. 환경 변수를 확인해주세요.')
    return null
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // 465 포트는 SSL, 587 포트는 TLS
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    // 입력 검증
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: '모든 필드를 입력해주세요.',
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
          message: '유효한 이메일 주소를 입력해주세요.',
        },
        { status: 400 }
      )
    }

    // SMTP 전송기 생성
    const transporter = createTransporter()
    if (!transporter) {
      return NextResponse.json(
        {
          success: false,
          message: '이메일 서버 설정 오류가 발생했습니다. 관리자에게 문의해주세요.',
        },
        { status: 500 }
      )
    }

    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'contentdirector@student-b.com'
    
    // 주제 옵션 매핑
    const subjectMap: { [key: string]: string } = {
      general: 'General Inquiry',
      author: 'Author Inquiry',
      media: 'Business Inquiry',
      other: 'Other',
    }
    const subjectText = subjectMap[subject] || subject

    // 이메일 내용 구성
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: recipientEmail,
      subject: `[Contact Form] ${subjectText}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #87CEEB; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subjectText}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #87CEEB; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the contact form on your website.</p>
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subjectText}

Message:
${message}

---
This email was sent from the contact form on your website.
      `.trim(),
    }

    // 이메일 발송
    const emailResult = await transporter.sendMail(mailOptions)
    
    // 이메일 발송 결과 상세 로그
    console.log('Contact form email sent successfully:', { 
      name, 
      email, 
      subject,
      messageId: emailResult.messageId,
      response: emailResult.response,
      accepted: emailResult.accepted,
      rejected: emailResult.rejected
    })

    // 이메일이 실제로 수락되었는지 확인
    if (emailResult.rejected && emailResult.rejected.length > 0) {
      console.error('Email was rejected:', emailResult.rejected)
      return NextResponse.json(
        {
          success: false,
          message: 'Sorry, there was an error sending your message. Please try again later.',
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    })
  } catch (error) {
    // 예상치 못한 에러 발생 시 상세 로그 출력
    console.error('Error processing contact form:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
      // nodemailer 에러인 경우 추가 정보 출력
      if ('code' in error) {
        console.error('Error code:', error.code)
      }
      if ('command' in error) {
        console.error('SMTP command:', error.command)
      }
    }
    return NextResponse.json(
      {
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again later.',
      },
      { status: 500 }
    )
  }
}

