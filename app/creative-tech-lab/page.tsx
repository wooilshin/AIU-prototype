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
    title: 'Creative Tech Lab',
    deviceImageAlt:
      'Animal Intelligence 거북이 캐릭터를 기반으로 한 개념 시각화(내부 구성 요소 표시)',
    paragraphs: [
      '우리는 Animal Intelligence의 캐릭터들을 현실 세계로 가져오려는 작은 기술 팀입니다. Our idea is simple: 캐릭터가 단순히 보는 존재가 아니라, 함께 살 수 있는 존재라면 어떨까요?',
      'AI와 로보틱스를 활용해 말하고, 생각하고, 배우며, 사람과 함께 성장하는 새로운 캐릭터를 탐구하고 있습니다.',
      '첫걸음은 AI에 연결된 캐릭터 피규어를 만드는 것입니다. 시간이 지나면 이 캐릭터들이 일상의 일부—단순한 동반자를 넘어 평생 학습의 파트너—가 되기를 바랍니다.',
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
