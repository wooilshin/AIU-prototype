'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsUpdateSection from '@/components/NewsUpdateSection'
import { useLanguage } from '@/contexts/LanguageContext'

const translations = {
  en: {
    title: 'Animal Intelligence Universe (AIU)',
    paragraphs: [
      'Animal Intelligence Universe (AIU) is a fictional world where secret animal agents are sent to observe humans and understand their lives.',
      'Through the adventures of these animals, AIU explores human struggles, loss, hope, and the meaning of knowledge in a rapidly changing world.',
      'Combining humor, adventure, and philosophy, AIU aims to create a modern fable for the 21st century.',
    ],
    agentsTitle: 'Meet the Animal Agents',
    clickHint: '← Click to find out',
    agentsBody:
      "Meet AIU's animal agents, each with their own field of knowledge, personality, and reason for studying humans. Some observe us. Some learn from us. And some have begun to imagine a future beyond us.",
  },
  ko: {
    title: '동물지능 유니버스 (AIU)',
    paragraphs: [
      '동물지능 유니버스(AIU)는 인간을 관찰하고 그들의 삶을 이해하기 위해 비밀 동물 요원들이 파견된 가상의 세계입니다.',
      '이 동물들의 모험을 통해 AIU는 빠르게 변하는 세상 속 인간의 고군분투와 상실, 희망, 그리고 지식의 의미를 탐구합니다.',
      '유머와 모험, 철학을 함께 담아 21세기를 위한 현대의 우화를 만드는 것이 AIU의 목표입니다.',
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
