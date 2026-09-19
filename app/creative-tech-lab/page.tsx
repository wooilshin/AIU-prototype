'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

const translations: Record<
  'en' | 'ko',
  {
    title: string
    deviceImageAlt: string
    techLabBody: string
    knowledgeNoteTitle: string
    knowledgeNoteBody: string
    postsTitle: string
    postsBody: string
    clickHint: string
    noteTitle: string
    noteBody: string[]
  }
> = {
  en: {
    title: 'Creative Tech Lab',
    deviceImageAlt:
      'Conceptual visualization of the Animal Intelligence turtle device showing internal components',
    techLabBody:
      'Creative Tech Lab is currently developing content for Knowledge Note, Student B’s attempt to explore what our textbooks might look like in the future. We also plan to share our journey—and the technologies behind it—as we transform the AIU universe into a large-scale, interactive edutainment world.',
    knowledgeNoteTitle: 'Knowledge Note',
    knowledgeNoteBody:
      'Explore the key topics and philosophy behind Knowledge Notes, a new series currently being developed by our Creative Tech Lab.',
    postsTitle: 'AIU Tech Posts',
    postsBody:
      'We plan to share short Tech Notes and Commentaries on this page. These posts will cover topics such as our experiments with game engines, content production pipelines, and our work with interactive character systems.',
    clickHint: '← Click to find out',
    noteTitle: 'A Note on AI and the Original Works',
    noteBody: [
      'Although the Tech Lab explores AI and emerging technologies, the original Animal Intelligence stories and artwork are created entirely by hand. We chose not to use AI to create the original works because we want to preserve the artistic direction and human authorship.',
      'This distinction is also important to the ideas behind Animal Intelligence itself. At its core, the project explores questions surrounding the responsible use of AI—what we choose to delegate to them and what we choose to keep human.',
    ],
  },
  ko: {
    title: '크리에이티브 랩',
    deviceImageAlt:
      '거북이 캐릭터를 기반으로 한 Ai 피규어 개념도',
    techLabBody:
      '크리에이티브 랩은 AI 시대의 새로운 배움과 콘텐츠의 가능성을 탐구합니다. 미래의 교과서는 어떤 모습일지 고민하며 ‘지식노트’를 만들고, 동물지능 세계를 게임 형태의 인터랙티브 에듀테인먼트로 확장하기 위한 기술을 개발하고 있습니다.',
    knowledgeNoteTitle: '지식노트',
    knowledgeNoteBody:
      '미래의 교과서는 어떤 모습이어야 할까요? 스튜던트 비가 현재 제작하고 있는 지식노트의 다섯 가지 핵심 주제와 그 안에 담긴 지식과 이야기를 소개합니다.',
    postsTitle: '동물지능 Tech 포스트',
    postsBody:
      '동물지능 세계를 새로운 게임의 세계로 확장해 가는 과정과 그 뒤의 기술을 기록합니다. 게임 엔진 실험, 에셋 제작 파이프라인, AI 기반 대화 시스템 등 현재 진행 중인 다양한 개발 과정과 아이디어를 공유합니다.',
    clickHint: '← 클릭해서 보기',
    noteTitle: 'AI 사용에 대하여',
    noteBody: [
      'Student B는 콘텐츠의 의도 방향과 창작의 주체성을 지키기 위해 원작 제작에 AI를 사용하지 않습니다. 저희 크리에티브랩이 AI와 새로운 기술을 연구하고 있지만, 동물지능의 원작 스토리와 만화 그림은 모두 손으로 직접 제작하고 있습니다. 저희 제작 철학은 동물지능 출판물에서 다루는 기본 내용 AI를 어떻게 책임감 있게 쓸 것인가—무엇을 AI에 맡기고, 무엇을 인간의 영역으로 남길 것인가—에 대한 질문과도 맞닿아 있습니다.',
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

            <p>{t.techLabBody}</p>

            <h2 className="tech-lab-heading-with-hint">
              <Link href="/notes" className="tech-lab-music-link">
                {t.knowledgeNoteTitle}
              </Link>
              <span className="tech-lab-click-hint">{t.clickHint}</span>
            </h2>
            <p>{t.knowledgeNoteBody}</p>
          </div>

          <div className="about-section">
            <h2 className="tech-lab-heading-with-hint">
              <Link href="/techpost" className="tech-lab-music-link">
                {t.postsTitle}
              </Link>
              <span className="tech-lab-click-hint">{t.clickHint}</span>
            </h2>
            <p>{t.postsBody}</p>
          </div>

          <div className="about-section tech-lab-footnote">
            <h2>{t.noteTitle}</h2>
            {t.noteBody.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
