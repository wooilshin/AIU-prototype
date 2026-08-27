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
    musicTitle: string
    musicBody: string
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
      'TECH LAB is currently preparing content for KNOWLEDGE NOTE, an AIU book series. We also develop various technologies to grow the Animal Intelligence Universe into a large-scale edutainment IP.',
    knowledgeNoteTitle: 'Knowledge Note',
    knowledgeNoteBody: 'Coming Soon',
    musicTitle: 'Music',
    musicBody:
      "Listen to the theme songs of AIU's animal agents. Our agents have their own musical tastes, ranging from Trap and Dubstep to Bubble Pop and R&B.",
    postsTitle: 'AIU Tech Posts',
    postsBody:
      'We plan to share short Tech Notes and Commentaries on this page. These posts will cover topics such as our Python-based production pipeline, experiments with game engines and our work with ROS and knowledge-based databases for interactive toys.',
    clickHint: '← Click to find out',
    noteTitle: 'A Note on AI and the Original Works',
    noteBody: [
      'Although the Tech Lab explores AI and emerging technologies, the original Animal Intelligence stories and artwork are created entirely by hand. We chose not to use AI to create the original works because we want to preserve the artistic direction and human authorship.',
      'This distinction is also important to the ideas behind Animal Intelligence itself. At its core, the project explores questions surrounding the responsible use of AI—what we choose to delegate to them and what we choose to keep human.',
    ],
  },
  ko: {
    title: '스튜던트 비 테크랩',
    deviceImageAlt:
      '거북이 캐릭터를 기반으로 한 Ai 피규어 개념도',
    techLabBody:
      'TECH LAB은 AIU 북 시리즈인 KNOWLEDGE NOTE 콘텐츠를 준비하고 있습니다. 또한 동물지능 유니버스를 대규모 에듀테인먼트 IP로 성장시키기 위한 다양한 기술을 개발하고 있습니다.',
    knowledgeNoteTitle: 'Knowledge Note',
    knowledgeNoteBody: 'Coming Soon',
    musicTitle: 'Music',
    musicBody:
      'AIU 동물 에이전트들의 테마곡을 들어보세요. 에이전트마다 Trap, Dubstep부터 Bubble Pop, R&B까지 각자의 음악 취향이 있습니다.',
    postsTitle: 'AIU Tech Posts',
    postsBody:
      '이 페이지에서 짧은 Tech Notes와 Commentaries를 공유할 예정입니다. Python 기반 제작 파이프라인, 게임 엔진 실험, 인터랙티브 토이를 위한 ROS와 지식 기반 데이터베이스 작업 등을 다룰 예정입니다.',
    clickHint: '← 클릭해서 보기',
    noteTitle: '원작과 AI에 대하여',
    noteBody: [
      '테크랩은 AI와 새로운 기술을 탐구하지만, 동물지능의 원작 스토리와 아트워크는 모두 손으로 직접 만듭니다. 예술적 방향과 인간 창작의 주체성을 지키기 위해 원작 제작에는 AI를 사용하지 않았습니다.',
      '이 구분은 동물지능이 다루는 생각과도 맞닿아 있습니다. 이 프로젝트의 핵심은 AI를 어떻게 책임감 있게 쓸 것인가—무엇을 AI에 맡기고, 무엇을 인간의 영역으로 남길 것인가—에 대한 질문입니다.',
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
              <span className="tech-lab-posts-title">{t.knowledgeNoteTitle}</span>
              <span className="tech-lab-click-hint">{t.clickHint}</span>
            </h2>
            <p>{t.knowledgeNoteBody}</p>
          </div>

          <div className="about-section">
            <h2 className="tech-lab-heading-with-hint">
              <Link href="/music" className="tech-lab-music-link">
                {t.musicTitle}
              </Link>
              <span className="tech-lab-click-hint">{t.clickHint}</span>
            </h2>
            <p>{t.musicBody}</p>
          </div>

          <div className="about-section">
            <h2 className="tech-lab-heading-with-hint">
              <span className="tech-lab-posts-title">{t.postsTitle}</span>
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
