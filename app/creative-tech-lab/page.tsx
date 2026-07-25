'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

const translations: Record<
  'en' | 'ko',
  {
    title: string
    deviceImageAlt: string
    paragraphs: string[]
  }
> = {
  en: {
    title: 'Creative Tech Lab',
    deviceImageAlt:
      'Conceptual visualization of the Animal Intelligence turtle device showing internal components',
    paragraphs: [
      'We are a small technology team working to bring the characters of Animal Intelligence into the real world. Our idea is simple: What if characters were not just something you watch, but something you could live with?',
      'Using AI and robotics, we are exploring a new kind of character—one that can talk, think, learn, and grow alongside people.',
      'Our first step is creating AI-connected character figures. Over time, we hope to create characters that become part of everyday life—not just as companions, but as lifelong partners in learning.',
    ],
  },
  ko: {
    title: '스튜던트 비 테크랩',
    deviceImageAlt:
      '거북이 캐릭터를 기반으로 한 Ai 피규어 개념도',
    paragraphs: [
      '동물지능 테크랩은 동물지능의 캐릭터들을 현실 세계로 가져오려고 작업하고 있는 작은 기술 팀입니다.',
      '동물지능의 동물 요원 캐릭터가 우리 옆에서 함께 지식을 배우고 성장하는 존재가 된다면 어떤 느낌일까요? 저희팀의 첫미션은 AI에 활용할 지식 데이터베이스를 만들고 그 시스템에 연결된 AI 캐릭터 피규어를 만드는 것입니다.',
    ],
  },
}

export default function CreativeTechLabPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <>
      <Header />
      <section className="about-hero">
        <div className="container">
          <h1>{t.title}</h1>
        </div>
      </section>

      <section className="about-content-section about-prose-page tech-lab-section">
        <div className="container about-prose">
          <div className="about-section">
            <figure className="tech-lab-figure">
              <div className="tech-lab-photo-stack" aria-hidden="true">
                <img
                  src="/images/tech-lab/Techlab_1.jpg"
                  alt=""
                  className="tech-lab-bg-photo tech-lab-bg-photo--left"
                />
                <img
                  src="/images/tech-lab/Techlab_2.png"
                  alt=""
                  className="tech-lab-bg-photo tech-lab-bg-photo--right"
                />
              </div>
              <img
                src="/images/tech-lab/turtle-device.png"
                alt={t.deviceImageAlt}
                className="tech-lab-image"
              />
            </figure>
            {t.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
