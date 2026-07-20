import type { Metadata } from 'next'
import { headers } from 'next/headers'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { detectLanguageFromHostname, type Language } from '@/lib/language'

export const metadata: Metadata = {
  title: 'Student B Press',
  description: 'Animal Intelligence is a curated publication that reframes knowledge through non-human perspectives.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const host = headers().get('host') ?? ''
  const language: Language = detectLanguageFromHostname(host)
  const siteClass = language === 'ko' ? 'site-ko' : 'site-en'

  return (
    <html lang={language} className={siteClass}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var k=location.hostname.indexOf('student-b.co.kr')!==-1;var r=document.documentElement;r.lang=k?'ko':'en';r.classList.remove('site-ko','site-en');r.classList.add(k?'site-ko':'site-en');})();`,
          }}
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body>
        <LanguageProvider initialLanguage={language}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

