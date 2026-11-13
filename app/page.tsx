'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsUpdateSection from '@/components/NewsUpdateSection'
import { useLanguage } from '@/contexts/LanguageContext'

const translations = {
  en: {
    title: 'Animal Intelligence',
    paragraphs: [
      'Animal Intelligence tells the story of secret animal agents sent to observe humans. Through the lives and adventures of animals in the Animal Intelligence Universe, it explores human loss, hope, and the meaning of knowledge.',
      'It is a modern fable for the 21st century.',
    ],
    agentsTitle: 'Meet the Animal Agents',
    clickHint: '← Click to find out',
    agentsBody:
      "Meet AIU's animal agents, each with their own field of knowledge, personality, and reason for studying humans. Some observe us. Some learn from us. And some have begun to imagine a future beyond us.",
  },
  ko: {
    title: '동물지능',
    paragraphs: [
      '동물지능은 인간을 관찰하기 위해 파견된 비밀 동물 요원들의 이야기입니다. 동물지능 유니버스 속 동물들의 삶과 모험을 통해 인간의 상실과 희망, 그리고 지식의 의미를 탐구합니다.',
      '21세기를 위한 현대의 우화입니다.',
    ],
    agentsTitle: '동물 요원 소개',
    clickHint: '← 클릭해서 보기',
    agentsBody:
      '각자의 지식 분야와 성격, 그리고 인간을 연구하는 이유를 가진 동물 요원들을 만나보세요. 어떤 요원은 우리를 관찰하고, 어떤 요원은 우리에게서 배우며, 어떤 요원은 이미 우리를 넘어선 미래를 상상하기 시작했습니다.',
  },
}

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const hash = window.location.hash
    if (hash === '#newsletter') {
      setTimeout(() => {
        const target = document.getElementById(hash.slice(1))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="home-page">
      {[2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
        <div key={n} className={`home-paw-bg home-paw-bg--${n}`} aria-hidden="true">
          <img src="/images/icon/paw.svg" alt="" />
        </div>
      ))}
      <Header />
      <div className="home-main">
        <section className="home-hero">
          <div className="home-hero-copy">
            <h1 className="home-hero-title">{t.title}</h1>
            {t.paragraphs.map((paragraph, index) => (
              <p key={index} className="home-hero-text">
                {paragraph}
              </p>
            ))}

            <div className="home-hero-agents">
              <h2 className="tech-lab-heading-with-hint home-hero-agents-title">
                <Link href="/animal-agents" className="tech-lab-music-link">
                  {t.agentsTitle}
                </Link>
                <Link href="/animal-agents" className="tech-lab-click-hint">
                  {t.clickHint}
                </Link>
              </h2>
              <p className="home-hero-agents-text">{t.agentsBody}</p>
            </div>
          </div>
        </section>
        <NewsUpdateSection />
      </div>
      <Footer />
    </div>
  )
}
