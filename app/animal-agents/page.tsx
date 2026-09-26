'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

const TOC_IDS = [
  'first-generation-agents',
  'second-generation-agents',
  'third-generation-agents',
  'fourth-generation-agents',
  'fifth-generation-agents',
  'independent-agents',
] as const

type TocId = (typeof TOC_IDS)[number]

const translations = {
  en: {
    tocLabel: 'Contents',
    toc: [
      { id: 'first-generation-agents', label: '1st Generation Agents' },
      { id: 'second-generation-agents', label: '2nd Generation Agents' },
      { id: 'third-generation-agents', label: '3rd Generation Agents' },
      { id: 'fourth-generation-agents', label: '4th Generation Agents' },
      { id: 'fifth-generation-agents', label: '5th Generation Agents' },
      { id: 'independent-agents', label: 'Independent Agents' },
    ] as { id: TocId; label: string }[],
    sections: {
      first: { title: '1st Generation Agents' },
      second: { title: '2nd Generation Agents' },
      third: { title: '3rd Generation Agents' },
      fourth: { title: '4th Generation Agents' },
      fifth: { title: '5th Generation Agents' },
      independent: { title: 'Independent Agents' },
    },
  },
  ko: {
    tocLabel: '목차',
    toc: [
      { id: 'first-generation-agents', label: '1세대 요원' },
      { id: 'second-generation-agents', label: '2세대 요원' },
      { id: 'third-generation-agents', label: '3세대 요원' },
      { id: 'fourth-generation-agents', label: '4세대 요원' },
      { id: 'fifth-generation-agents', label: '5세대 요원' },
      { id: 'independent-agents', label: '독립 요원' },
    ] as { id: TocId; label: string }[],
    sections: {
      first: { title: '1세대 요원' },
      second: { title: '2세대 요원' },
      third: { title: '3세대 요원' },
      fourth: { title: '4세대 요원' },
      fifth: { title: '5세대 요원' },
      independent: { title: '독립 요원' },
    },
  },
} as const

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

  const sectionEntries = [
    { id: 'first-generation-agents' as const, title: t.sections.first.title },
    { id: 'second-generation-agents' as const, title: t.sections.second.title },
    { id: 'third-generation-agents' as const, title: t.sections.third.title },
    { id: 'fourth-generation-agents' as const, title: t.sections.fourth.title },
    { id: 'fifth-generation-agents' as const, title: t.sections.fifth.title },
    { id: 'independent-agents' as const, title: t.sections.independent.title },
  ]

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
            {sectionEntries.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="about-section notes-article-section"
              >
                <h2>{section.title}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
