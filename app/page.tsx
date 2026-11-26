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
      '동물지능은 인간을 관찰하기 위해 파견된 비밀 동물 요원들의 모험을 다루는 출판물 시리즈입니다. 각기 다른 전공과 철학을 가진 동물 요원들의 모험을 통해 빠르게 변하는 세상 속 상실과 희망을 이야기하는 “21세기를 위한 새로운 우화”를 만나보세요.',
    ],
    agentsTitle: '동물 요원 소개',
    clickHint: '← 클릭해서 보기',
    agentsBody:
      '각자의 지식 분야와 성격, 그리고 인간을 연구하는 이유를 가진 동물지능의 요원들을 만나보세요.',
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
