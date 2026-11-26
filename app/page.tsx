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
      'Animal Intelligence is a story about secret animal agents sent to observe humans. Through their adventures, the Animal Intelligence Universe (AIU) explores loss, hope, and the meaning of life in our rapidly changing world. It aims to become a modern fable for the 21st century.',
    ],
    agentsTitle: 'Meet the Animal Agents',
    clickHint: '← Click to find out',
    agentsBody:
      "Meet AIU's animal agents, each with their own field of knowledge, personality, and reason for studying humans.",
  },
  ko: {
    title: '동물지능',
    paragraphs: [
      '동물지능은 인간 세계를 관찰하기 위해 파견된 비밀 동물 요원들의 이야기입니다. 동물들의 시선으로 우리가 살아가는 시대의 희망과 혼란을 이야기하는 ‘21세기를 위한 새로운 우화’입니다.',
    ],
    agentsTitle: '동물 요원 소개',
    clickHint: '← 클릭해서 보기',
    agentsBody:
      '제１세대로부터 제５세대에 이르기까지 각자 다른 지식 분야와 철학을 가진 동물 요원들을 소개합니다.',
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
          <div className="home-hero-news">
            <NewsUpdateSection compact />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
