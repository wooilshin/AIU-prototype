'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

const TOC_IDS = [
  'what-is-knowledge-note',
  'why-another-educational-booklet',
  'what-is-inside',
  'learning-and-asking',
  'starting-with-the-big-question',
  'where-is-knowledge-note-going',
] as const

type TocId = (typeof TOC_IDS)[number]

const translations = {
  en: {
    tocLabel: 'Contents',
    toc: [
      { id: 'what-is-knowledge-note', label: 'What Is Knowledge Note?', level: 1 },
      { id: 'why-another-educational-booklet', label: 'Why another educational booklet?', level: 1 },
      { id: 'what-is-inside', label: 'What Is Inside?', level: 1 },
      {
        id: 'learning-and-asking',
        label: 'Learning and Asking Questions at the Frontiers',
        level: 2,
      },
      { id: 'starting-with-the-big-question', label: 'Starting With the Big Question', level: 2 },
      { id: 'where-is-knowledge-note-going', label: 'Where Is Knowledge Note Going?', level: 1 },
    ] as { id: TocId; label: string; level: 1 | 2 }[],
    sections: {
      whatIs: {
        title: 'What Is Knowledge Note?',
        paragraphs: [
          'Knowledge Note is a series of educational booklets created by animal agents—especially the fifth generation agents—to organize and make sense of the knowledge they have gathered from humans.',
          'In the world of the Animal Intelligence Universe (AIU), these notes serve as textbooks for animal agents learning about human knowledge.',
          'At the same time, Knowledge Note is our attempt to imagine what textbooks might look like in the future. The series consists of five short books, each exploring a field of knowledge that we believe will remain important as humans move deeper into the AI age.',
        ],
      },
      why: {
        title: 'Why another educational booklet?',
        paragraphs: [
          'The Animal Intelligence series includes comics and character-driven short stories. But we did not want to stop at satire or simply tell stories about animals. At a time when AI is changing the meaning and value of knowledge—and creating growing uncertainty about the future—we also wanted to suggest a possible direction forward.',
          'Education is one area where AI is already bringing strange changes. Think about studying. As answers become easier to find, we may lose some of our motivation to explore and understand things for ourselves. More fundamentally, young people may increasingly wonder whether the subjects they spend years studying are still worth learning at all. Respect for books, teachers, and traditional ways of learning may also begin to fade.',
          'Knowledge Note grew out of these questions.',
        ],
      },
      inside: {
        title: 'What Is Inside?',
        paragraphs: [
          'Knowledge Note explores five fields. Space · Philosophy · Economics · Life & Environment · AI & Robotics. We chose these five fields with two ideas in mind.',
        ],
        frontiers: {
          title: '1. Learning and Asking Questions at the Frontiers',
          paragraphs: [
            'In the AI age, humans may increasingly find their most meaningful roles at the frontiers of knowledge—asking new questions and exploring problems for which answers do not yet exist.',
            'We believe the future will need people who can work at these frontiers, sometimes independently, while continuing to ask questions about the larger picture.',
            'That is why we chose Space, Philosophy, Economics, Life & Environment, and AI & Robotics. These are not closed bodies of knowledge. Their boundaries are still expanding, and many of their biggest questions remain unanswered.',
          ],
        },
        bigQuestion: {
          title: '2. Starting With the Big Question',
          paragraphs: [
            'Traditional education often works from the bottom up: learn the basics first, master one concept after another, and eventually reach the larger questions. That journey can take ten or even twenty years.',
            'In an AI age, however, when answers and explanations are increasingly available on demand, this approach may partly change. The traditional way of building knowledge step by step will remain important, but another way of learning may become more common.',
            'Why does this field exist? What are we actually trying to understand? What are the biggest mysteries and problems at its frontier?',
            'A learner can begin with these larger questions and then work backward, learning the concepts they need along the way—with AI helping them navigate unfamiliar territory. Knowledge Note is written with this kind of learning in mind.',
          ],
        },
      },
      going: {
        title: 'Where Is Knowledge Note Going?',
        paragraphs: [
          'Knowledge Note is closely connected to the world of AIU. The knowledge they study is also connected to the individual agents, their missions, and their stories throughout the Animal Intelligence Universe.',
          'Ultimately, we want this knowledge to move beyond books and become part of an interactive world. We will explore that next step in Technology Note.',
        ],
      },
    },
  },
  ko: {
    tocLabel: '목차',
    toc: [
      { id: 'what-is-knowledge-note', label: 'Knowledge Note란 무엇인가?', level: 1 },
      { id: 'why-another-educational-booklet', label: '왜 또 다른 교육용 책자인가?', level: 1 },
      { id: 'what-is-inside', label: '무엇이 담겨 있는가?', level: 1 },
      {
        id: 'learning-and-asking',
        label: '최전선에서 배우고 질문하기',
        level: 2,
      },
      { id: 'starting-with-the-big-question', label: '큰 질문에서 시작하기', level: 2 },
      { id: 'where-is-knowledge-note-going', label: 'Knowledge Note는 어디로 가는가?', level: 1 },
    ] as { id: TocId; label: string; level: 1 | 2 }[],
    sections: {
      whatIs: {
        title: 'Knowledge Note란 무엇인가?',
        paragraphs: [
          'Knowledge Note는 동물 요원들—특히 5세대 요원들—이 인간에게서 모은 지식을 정리하고 이해하기 위해 만든 교육용 책자 시리즈입니다.',
          '동물지능 유니버스(AIU)의 세계 안에서, 이 노트는 인간 지식을 배우는 동물 요원들을 위한 교과서 역할을 합니다.',
          '동시에 Knowledge Note는 미래의 교과서가 어떤 모습일지 상상해 보려는 시도이기도 합니다. 이 시리즈는 다섯 권의 짧은 책으로 구성되며, 각각 AI 시대가 깊어질수록 여전히 중요할 것이라고 믿는 지식 분야를 탐구합니다.',
        ],
      },
      why: {
        title: '왜 또 다른 교육용 책자인가?',
        paragraphs: [
          '동물지능 시리즈에는 만화와 캐릭터 중심의 단편 소설이 있습니다. 하지만 우리는 풍자나 동물 이야기에만 머물고 싶지 않았습니다. AI가 지식의 의미와 가치를 바꾸고, 미래에 대한 불확실성이 커지는 시대에, 앞으로 나아갈 수 있는 하나의 방향을 제안하고 싶었습니다.',
          '교육은 AI가 이미 낯선 변화를 일으키고 있는 영역 중 하나입니다. 공부를 생각해 보세요. 답을 찾기 쉬워질수록, 스스로 탐구하고 이해하려는 동기를 잃을 수 있습니다. 더 근본적으로, 젊은 세대는 수년간 공부해 온 과목이 과연 여전히 배울 가치가 있는지 점점 더 자주 묻게 될 수 있습니다. 책과 선생님, 그리고 전통적인 배움의 방식에 대한 존중도 희미해질 수 있습니다.',
          'Knowledge Note는 이런 질문들에서 출발했습니다.',
        ],
      },
      inside: {
        title: '무엇이 담겨 있는가?',
        paragraphs: [
          'Knowledge Note는 다섯 분야를 탐구합니다. 우주 · 철학 · 경제 · 생명과 환경 · AI와 로보틱스. 우리는 두 가지 생각을 바탕으로 이 다섯 분야를 골랐습니다.',
        ],
        frontiers: {
          title: '1. 최전선에서 배우고 질문하기',
          paragraphs: [
            'AI 시대에 인간은 지식의 최전선—아직 답이 없는 문제를 탐구하고 새로운 질문을 던지는 자리—에서 가장 의미 있는 역할을 찾게 될지도 모릅니다.',
            '우리는 미래에, 때로는 독립적으로 그 최전선에서 일하면서도 더 큰 그림을 계속 물을 수 있는 사람들이 필요하다고 믿습니다.',
            '그래서 우주, 철학, 경제, 생명과 환경, AI와 로보틱스를 골랐습니다. 이들은 닫힌 지식의 묶음이 아닙니다. 경계는 여전히 확장되고 있으며, 가장 큰 질문들 중 많은 부분이 아직 답을 찾지 못했습니다.',
          ],
        },
        bigQuestion: {
          title: '2. 큰 질문에서 시작하기',
          paragraphs: [
            '전통적인 교육은 종종 아래에서 위로 올라갑니다. 기초를 먼저 배우고, 개념을 하나씩 익힌 뒤, 결국 더 큰 질문에 도달합니다. 그 여정은 십 년, 때로는 이십 년이 걸리기도 합니다.',
            '그러나 답과 설명이 점점 더 요청만 하면 주어지는 AI 시대에는, 이 방식이 부분적으로 달라질 수 있습니다. 한 단계씩 지식을 쌓아 가는 전통적인 방식은 여전히 중요하지만, 또 다른 배움의 방식이 더 흔해질 수 있습니다.',
            '이 분야는 왜 존재하는가? 우리는 실제로 무엇을 이해하려 하는가? 그 최전선에 있는 가장 큰 미스터리와 문제는 무엇인가?',
            '학습자는 이런 더 큰 질문에서 시작해, 필요한 개념을 거꾸로 배워 갈 수 있습니다. AI가 낯선 영역을 헤쳐 나가는 데 도움을 줄 수 있습니다. Knowledge Note는 이런 방식의 배움을 염두에 두고 쓰였습니다.',
          ],
        },
      },
      going: {
        title: 'Knowledge Note는 어디로 가는가?',
        paragraphs: [
          'Knowledge Note는 AIU의 세계와 깊게 연결되어 있습니다. 그들이 배우는 지식은 개별 요원들, 그들의 임무, 그리고 동물지능 유니버스 전반의 이야기와도 연결되어 있습니다.',
          '궁극적으로 우리는 이 지식이 책을 넘어 인터랙티브한 세계의 일부가 되기를 바랍니다. 그 다음 단계는 Technology Note에서 살펴볼 예정입니다.',
        ],
      },
    },
  },
} as const

export default function NotesPage() {
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
      <section className="about-content-section about-prose-page notes-page-section">
        <div className="container notes-layout">
          <aside className="notes-toc" aria-label={t.tocLabel}>
            <nav className="notes-toc-nav">
              <p className="notes-toc-label">{t.tocLabel}</p>
              <ul>
                {t.toc.map((item) => (
                  <li key={item.id} className={item.level === 2 ? 'notes-toc-sub' : undefined}>
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
            <article id="what-is-knowledge-note" className="about-section notes-article-section">
              <h2>{t.sections.whatIs.title}</h2>
              {t.sections.whatIs.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>

            <article
              id="why-another-educational-booklet"
              className="about-section notes-article-section"
            >
              <h2>{t.sections.why.title}</h2>
              {t.sections.why.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>

            <article id="what-is-inside" className="about-section notes-article-section">
              <h2>{t.sections.inside.title}</h2>
              {t.sections.inside.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <div id="learning-and-asking" className="notes-subsection">
                <h3>{t.sections.inside.frontiers.title}</h3>
                {t.sections.inside.frontiers.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div id="starting-with-the-big-question" className="notes-subsection">
                <h3>{t.sections.inside.bigQuestion.title}</h3>
                {t.sections.inside.bigQuestion.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>

            <article
              id="where-is-knowledge-note-going"
              className="about-section notes-article-section"
            >
              <h2>{t.sections.going.title}</h2>
              {t.sections.going.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
