'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

const TOC_IDS = [
  'the-oracles',
  'first-generation-agents',
  'second-generation-agents',
  'third-generation-agents',
  'fourth-generation-agents',
  'fifth-generation-agents',
  'independent-agents',
] as const

type TocId = (typeof TOC_IDS)[number]

type Agent = {
  id: string
  image: string | null
  name: { en: string; ko: string }
  field: { en: string; ko: string }
}

const ORACLES: Agent[] = [
  {
    id: 'white-giraffe',
    image: '/images/animal-agents/white-giraffe.jpg',
    name: { en: 'White Giraffe', ko: '흰 기린' },
    field: { en: 'History', ko: '역사' },
  },
  {
    id: 'black-panther',
    image: '/images/animal-agents/black-panther.jpg',
    name: { en: 'Black Panther', ko: '흑표범' },
    field: { en: 'Philosophy', ko: '철학' },
  },
]

const FIRST_GEN_AGENTS: Agent[] = [
  {
    id: 'red-fox',
    image: '/images/animal-agents/red-fox.jpg',
    name: { en: 'Red Fox', ko: '여우' },
    field: { en: 'Cryptography', ko: '암호학' },
  },
  {
    id: 'green-sea-turtle',
    image: '/images/animal-agents/green-sea-turtle.jpg',
    name: { en: 'Green Sea Turtle', ko: '바다거북' },
    field: { en: 'Electronic Engineering', ko: '전자공학' },
  },
  {
    id: 'korat-cat',
    image: '/images/animal-agents/korat-cat.jpg',
    name: { en: 'Korat Cat', ko: '코랏 고양이' },
    field: { en: 'Physics', ko: '물리학' },
  },
  {
    id: 'capybara',
    image: '/images/animal-agents/capybara.jpg',
    name: { en: 'Capybara', ko: '카피바라' },
    field: { en: 'Chemical Engineering', ko: '화학공학' },
  },
  {
    id: 'raccoon',
    image: '/images/animal-agents/raccoon.jpg',
    name: { en: 'Raccoon', ko: '너구리' },
    field: { en: 'Economics', ko: '경제학' },
  },
  {
    id: 'bluebird',
    image: '/images/animal-agents/bluebird.jpg',
    name: { en: 'Bluebird', ko: '파랑새' },
    field: { en: 'Business', ko: '경영' },
  },
  {
    id: 'bunny',
    image: null,
    name: { en: 'Bunny', ko: '토끼' },
    field: { en: 'Art', ko: '미술' },
  },
]

const translations = {
  en: {
    tocLabel: 'Contents',
    toc: [
      { id: 'the-oracles', label: 'The Oracles' },
      { id: 'first-generation-agents', label: '1st Generation Agents' },
      { id: 'second-generation-agents', label: '2nd Generation Agents' },
      { id: 'third-generation-agents', label: '3rd Generation Agents' },
      { id: 'fourth-generation-agents', label: '4th Generation Agents' },
      { id: 'fifth-generation-agents', label: '5th Generation Agents' },
      { id: 'independent-agents', label: 'Independent Agents' },
    ] as { id: TocId; label: string }[],
    sections: {
      oracles: {
        title: 'The Oracles',
        body: 'The Oracles are the guardians of the animal world. The White Oracles foresee the future, while the Black Oracles preserve order in the animal world.',
      },
      first: {
        title: '1st Generation Agents',
        body: 'Known as the “Magnificent Seven,” the first generation of animal agents played a pivotal role in bringing human knowledge into the animal world. Together, they laid the foundation for generations of animals to come.',
      },
    },
  },
  ko: {
    tocLabel: '목차',
    toc: [
      { id: 'the-oracles', label: '오라클' },
      { id: 'first-generation-agents', label: '1세대 요원' },
      { id: 'second-generation-agents', label: '2세대 요원' },
      { id: 'third-generation-agents', label: '3세대 요원' },
      { id: 'fourth-generation-agents', label: '4세대 요원' },
      { id: 'fifth-generation-agents', label: '5세대 요원' },
      { id: 'independent-agents', label: '독립 요원' },
    ] as { id: TocId; label: string }[],
    sections: {
      oracles: {
        title: '오라클',
        body: '오라클은 동물 세계의 수호자입니다. 하얀 오라클은 미래를 내다보고, 검은 오라클은 동물 세계의 질서를 지킵니다.',
      },
      first: {
        title: '1세대 요원',
        body: '“Magnificent Seven”으로 알려진 1세대 동물 요원들은 인간 지식을 동물 세계로 가져오는 데 결정적인 역할을 했습니다. 그들은 함께 이후 세대 동물들을 위한 토대를 마련했습니다.',
      },
    },
  },
} as const

function AgentRow({
  agents,
  language,
  className = 'agent-row',
}: {
  agents: Agent[]
  language: 'en' | 'ko'
  className?: string
}) {
  return (
    <ul className={className}>
      {agents.map((agent) => (
        <li key={agent.id} className="agent-row-item">
          <div className="agent-row-image-wrap">
            {agent.image ? (
              <img src={agent.image} alt={agent.name[language]} className="agent-row-image" />
            ) : (
              <div className="agent-row-image-placeholder" aria-hidden="true" />
            )}
          </div>
          <p className="agent-row-name">{agent.name[language]}</p>
          <p className="agent-row-field">{agent.field[language]}</p>
        </li>
      ))}
    </ul>
  )
}

export default function AnimalAgentsPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [activeId, setActiveId] = useState<TocId>(TOC_IDS[0])

  useEffect(() => {
    const elements = TOC_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    )
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id as TocId)
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.25, 0.5, 1],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [language])

  const handleTocClick = (event: MouseEvent<HTMLAnchorElement>, id: TocId) => {
    event.preventDefault()
    const target = document.getElementById(id)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveId(id)
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <>
      <Header />
      <section className="about-content-section about-prose-page notes-page-section animal-agents-page">
        <div className="container notes-layout">
          <aside className="notes-toc" aria-label={t.tocLabel}>
            <nav className="notes-toc-nav">
              <p className="notes-toc-label">{t.tocLabel}</p>
              <ul>
                {t.toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={activeId === item.id ? 'is-active' : undefined}
                      onClick={(event) => handleTocClick(event, item.id)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="notes-content about-prose">
            <article id="the-oracles" className="about-section notes-article-section">
              <h2>{t.sections.oracles.title}</h2>
              <p>{t.sections.oracles.body}</p>
              <AgentRow
                agents={ORACLES}
                language={language}
                className="agent-row agent-row--compact"
              />
            </article>

            <article
              id="first-generation-agents"
              className="about-section notes-article-section"
            >
              <h2>{t.sections.first.title}</h2>
              <p>{t.sections.first.body}</p>
              <AgentRow agents={FIRST_GEN_AGENTS} language={language} />
            </article>

            <div id="second-generation-agents" className="agent-section-anchor" />
            <div id="third-generation-agents" className="agent-section-anchor" />
            <div id="fourth-generation-agents" className="agent-section-anchor" />
            <div id="fifth-generation-agents" className="agent-section-anchor" />
            <div id="independent-agents" className="agent-section-anchor" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
