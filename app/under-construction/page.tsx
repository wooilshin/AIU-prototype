import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student B · Under Construction',
  robots: { index: false, follow: false },
}

export default function UnderConstructionPage() {
  return (
    <main className="under-construction">
      <img src="/images/header/Logo.svg" alt="Student B" className="under-construction-logo" />
      <h1 className="under-construction-title">Under Construction</h1>
      <p className="under-construction-text">사이트 준비 중입니다</p>
    </main>
  )
}
