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
    bridgeImageAlt: string
    postsTitle: string
    postsBody: string
    postsImageAlt: string
    clickHint: string
    noteTitle: string
    noteBody: string[]
    nftTitle: string
    nftHint: string
    nftBody: string
  }
> = {
  en: {
    title: 'Creative Tech Lab',
    deviceImageAlt:
      'Illustration of the turtle agent taking notes, wiring a server, and designing a circuit board in VR',
    techLabBody:
      'Creative Tech Lab is currently developing content for Knowledge Note, Student B’s attempt to explore what our textbooks might look like in the future. We also plan to share our journey—and the technologies behind it—as we transform the AIU universe into a large-scale, interactive edutainment world.',
    knowledgeNoteTitle: 'Knowledge Note',
    knowledgeNoteBody:
      'Explore the key topics and philosophy behind Knowledge Notes, a new series currently being developed by our Creative Tech Lab.',
    bridgeImageAlt:
      'Illustration of Student B characters coding, reading, and drawing',
    postsTitle: 'AIU Tech Posts',
    postsBody:
      'We plan to share short Tech Notes and Commentaries on this page. These posts will cover topics such as our experiments with game engines, content production pipelines, and our work with interactive character systems.',
    postsImageAlt:
      'Cutaway of the turtle device showing the microphone, speaker, communication module, battery, NFC tag, and charging port',
    clickHint: '← Click to find out',
    noteTitle: 'A Note on AI and the Original Works',
    noteBody: [
      'Although the Tech Lab explores AI and emerging technologies, the original Animal Intelligence stories and artwork are created entirely by hand. We chose not to use AI to create the original works because we want to preserve the artistic direction and human authorship.',
      'This distinction is also important to the ideas behind Animal Intelligence itself. At its core, the project explores questions surrounding the responsible use of AI—what we choose to delegate to them and what we choose to keep human.',
    ],
    nftTitle: 'Animal Intelligence NFTs',
    nftHint: '← View Collection on OpenSea',
    nftBody:
      'The inaugural digital collectibles of the Animal Intelligence Universe, created as tokens of remembrance.',
  },
  ko: {
    title: '테크랩',
    deviceImageAlt:
      '메모하고, 서버에 선을 연결하고, VR로 회로기판을 설계하는 거북이 요원 일러스트',
    techLabBody:
      '스튜던트 비 테크랩은 AI 시대에 우리가 새로 배워야 할 지식과 새로운 콘텐츠의 가능성을 탐구합니다.',
    knowledgeNoteTitle: '지식노트',
    knowledgeNoteBody:
      '미래의 교과서는 어떤 모습이어야 할까요? 스튜던트 비 테크랩이 현재 기획하고 있는 다섯 가지 지식노트의 핵심 주제와 그 철학을 소개합니다.',
    bridgeImageAlt:
      '코딩하고, 책을 읽고, 그림을 그리는 스튜던트 비 캐릭터 일러스트',
    postsTitle: 'Tech 포스트',
    postsBody:
      '동물지능 세계를 새로운 디지털 콘텐츠로 확장해 가는 과정을 기록합니다. 게임 엔진 실험, 애니메이션 에셋 제작 파이프라인, AI 기반 대화 시스템 등 현재 기획 중인 다양한 아이디어의 기록을 공유합니다.',
    postsImageAlt:
      '마이크, 스피커, 통신 모듈, 배터리, NFC 태그, 충전 포트가 표시된 거북이 장치 단면도',
    clickHint: '← 클릭해서 보기',
    noteTitle: 'AI 사용에 대하여',
    noteBody: [
      '스튜던트 비는 창작의 주체성과 의도를 지키기 위해 원작 제작에 AI를 사용하지 않습니다. 저희 테크랩이 AI를 활용해 애니메이션과 게임 제작을 기획하고 있지만, 원작 스토리와 만화 그림은 직접 제작하고 있습니다. 이는 동물지능 출판물에서 다루는 기본 철학, 즉 ’무엇을 AI에 맡기고, 무엇을 인간의 영역으로 남길 것인가‘에 대한 고민과도 맞닿아 있습니다.',
    ],
    nftTitle: 'Animal Intelligence NFTs',
    nftHint: '← View Collection on OpenSea',
    nftBody:
      'The inaugural digital collectibles of the Animal Intelligence Universe, created as tokens of remembrance.',
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
                src="/images/tech-lab/turtle-agents.png"
                alt={t.deviceImageAlt}
                className="tech-lab-image tech-lab-image--banner"
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

          <figure className="tech-lab-bridge-figure">
            <img
              src="/images/tech-lab/knowledge-tech-illustration.jpg"
              alt={t.bridgeImageAlt}
              className="tech-lab-bridge-image"
            />
          </figure>

          <div className="about-section">
            <h2 className="tech-lab-heading-with-hint">
              <Link href="/techpost" className="tech-lab-music-link">
                {t.postsTitle}
              </Link>
              <span className="tech-lab-click-hint">{t.clickHint}</span>
            </h2>
            <p>{t.postsBody}</p>
          </div>

          <figure className="tech-lab-bridge-figure">
            <img
              src="/images/tech-lab/turtle-device-cutaway.png"
              alt={t.postsImageAlt}
              className="tech-lab-bridge-image tech-lab-bridge-image--plain"
            />
          </figure>

          <div className="about-section tech-lab-footnote">
            <h2>{t.noteTitle}</h2>
            {t.noteBody.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {language === 'en' && (
              <>
                <h2 className="tech-lab-heading-with-hint tech-lab-nft-heading">
                  <a
                    href="https://opensea.io/collection/animalintelligence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-lab-music-link"
                  >
                    {t.nftTitle}
                  </a>
                  <span className="tech-lab-click-hint">{t.nftHint}</span>
                </h2>
                <p>{t.nftBody}</p>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
