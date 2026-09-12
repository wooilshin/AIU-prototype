'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

const TOC_IDS = [
  'why-building-virtual-world',
  'what-working-on-now',
  'what-building-first',
  'where-do-we-use-ai',
  'level-ai',
  'character-ai',
  'generative-ai',
] as const

type TocId = (typeof TOC_IDS)[number]

const translations = {
  en: {
    tocLabel: 'Contents',
    toc: [
      { id: 'why-building-virtual-world', label: 'Why Are We Building a Virtual World?', level: 1 },
      { id: 'what-working-on-now', label: 'What Are We Working on Now?', level: 1 },
      { id: 'what-building-first', label: 'What Are We Building First?', level: 1 },
      { id: 'where-do-we-use-ai', label: 'Where Do We Use AI?', level: 1 },
      { id: 'level-ai', label: 'Level AI — Letting the World Change', level: 2 },
      { id: 'character-ai', label: 'Character AI — Characters That Talk and Act', level: 2 },
      {
        id: 'generative-ai',
        label: 'Generative AI — Reducing the Time It Takes to Build',
        level: 2,
      },
    ] as { id: TocId; label: string; level: 1 | 2 }[],
    why: {
      title: 'Why Are We Building a Virtual World?',
      paragraphs: [
        'As AI advances, building virtual worlds filled with characters, environments, stories, and interactions will become dramatically easier. But just because we can create more worlds does not mean that every world deserves to exist. Virtual worlds still consume electricity, computing resources, hardware, and, perhaps most importantly, human attention.',
        'As the number of worlds we can create approaches abundance, choosing which worlds are worth building becomes even more important. Eventually, we will have to ask ourselves: “Why should we spend all these resources to create yet another virtual world?”',
        'With the Animal Intelligence Universe (AIU), we want to explore a different possibility: a virtual world that is not simply a place for entertainment or escape, but a place where people can learn, teach, experiment, and think about possible futures.',
      ],
    },
    working: {
      title: 'What Are We Working on Now?',
      paragraphs: [
        'We are currently exploring how to design systems that have educational meaning without sacrificing what makes a game fun.',
        'In games, a system is essentially a set of rules that determines how one state changes into another. When many such systems interact, they create the dynamics—and much of the fun—of a game. We are currently asking how some of the most fundamental game systems should work differently in AIU.',
      ],
      systems: [
        {
          label: 'Quest System',
          text: 'How can knowledge and learning become goals, challenges, and adventures?',
        },
        {
          label: 'Combat System',
          text: 'Many traditional games use combat to create competition, challenge, and reward. What should play that role in AIU?',
        },
        {
          label: 'Item System',
          text: 'How can knowledge and growth become meaningful items? And how might those items connect to UGC (User-Generated Content)?',
        },
      ],
      closing:
        'And there is one thing we consider just as important as learning: fun. We believe that being educational is never an excuse for making a boring game.',
    },
    first: {
      title: 'What Are We Building First?',
      paragraphs: [
        'Our long-term dream is to develop AIU into a large-scale virtual world and, eventually, to build technologies—and perhaps even an engine—designed specifically for that world.',
        'But we are still at a very early stage. For now, we are focused on building a small prototype in which players talk with an Animal Agent, teach it, and help its knowledge and abilities grow.',
        'The immediate goal is to prove the core game loop:',
      ],
      loop: 'Learn → Teach the Agent → The Agent remembers and applies what it learned → New problems and quests emerge',
      closing: [
        'Before building a massive world, we want to answer a much simpler and more important question: Is this experience itself fun?',
        'We plan to share the prototype and what we learn from developing it on this page.',
      ],
    },
    ai: {
      title: 'Where Do We Use AI?',
      level: {
        title: '1. Level AI — Letting the World Change',
        paragraphs: [
          'One area we consider particularly important is Level AI. We are exploring how AI can be connected to Level Design and Procedural Content Generation (PCG), allowing the world to change in response to the actions of players and Animal Agents.',
          'We are especially interested in emergence.',
          'AIU does have a clear long-term objective. Animal Agents must eventually save their world, and the world has a World Countdown Clock marking the time remaining before its end. But we do not want to predetermine every path that leads toward that goal.',
          'We want to experiment with what happens when different knowledge is learned and taught, when different intermediate goals are chosen, and when differently developed Animal Agents begin interacting with one another. Could these choices lead the Agents—and eventually the world itself—in directions that even we did not anticipate?',
          'AIU could become an experimental space for studying this kind of emergent learning and behavior.',
        ],
      },
      character: {
        title: '2. Character AI — Characters That Talk and Act',
        paragraphs: [
          'AI is used first and foremost to enable conversations with Animal Agents and to evaluate what they learn. But conversation is only part of the experience.',
          'We also plan to use AI to explore how characters move, make decisions, and respond to the world around them. We will begin with traditional Game AI techniques such as A* and FSMs, while also experimenting over time with how learning-based approaches such as Reinforcement Learning might be incorporated.',
          'Ultimately, one of the questions we want to investigate is simple: Can what an Agent learns through conversation actually change how it behaves?',
        ],
      },
      generative: {
        title: '3. Generative AI — Reducing the Time It Takes to Build',
        intro:
          'We also plan to use Generative AI extensively to reduce repetitive and time-consuming parts of game production.',
        assets: {
          title: '3D Assets',
          paragraphs: [
            'When turning our original character designs into 3D assets, we plan to use AI-assisted tools for processes such as mesh generation and rigging—tasks that traditionally required substantial manual work in tools such as Blender.',
            'However, the original character artwork itself is drawn by us, not generated by AI.',
            'As we have emphasized throughout the project, we prefer to create the fundamental parts of the work—the stories, characters, and original artwork—by hand whenever possible. These are the things that determine the original creative direction of AIU.',
            'For us, AI is less a tool for deciding that direction than a tool for bringing what we have created into the world faster.',
          ],
        },
        music: {
          title: 'Sound & Music',
          linkText: "AIU's music",
          afterLink:
            " is currently produced by DJ Dachshund, with our early experiments centered mainly around EDM. Over time, we plan to expand into pop and other genres, giving individual Agents music that reflects their personalities, stories, and place within the AIU world.",
        },
      },
    },
  },
  ko: {
    tocLabel: '목차',
    toc: [
      {
        id: 'why-building-virtual-world',
        label: '왜 또 하나의 새로운 가상세계를 만들려고 하는가',
        level: 1,
      },
      { id: 'what-working-on-now', label: '지금 우리팀은 무엇을 하고 있는가', level: 1 },
      { id: 'what-building-first', label: '당장 무엇을 할 것인가', level: 1 },
      { id: 'where-do-we-use-ai', label: 'AI는 어디에 활용되는가', level: 1 },
      { id: 'level-ai', label: 'Level AI — 세계가 스스로 변화하게 만들기', level: 2 },
      { id: 'character-ai', label: 'Character AI — 말하고 행동하는 캐릭터 AI', level: 2 },
      {
        id: 'generative-ai',
        label: 'Generative AI — 제작 시간을 줄이는 도구',
        level: 2,
      },
    ] as { id: TocId; label: string; level: 1 | 2 }[],
    why: {
      title: '왜 또 하나의 새로운 가상세계를 만들려고 하는가',
      paragraphs: [
        'AI의 발전으로 앞으로는 캐릭터와 환경, 이야기와 상호작용을 갖춘 가상세계를 만드는 일이 지금보다 훨씬 쉬워질 것이다. 그러나 만들기 쉬워진다고 해서 모든 세계가 존재할 가치가 생기는 것은 아니다. 가상세계 역시 전기와 연산 자원, 하드웨어, 그리고 사람들의 시간을 소비한다.',
        '수많은 세계를 만들 수 있는 시대가 올수록 선택은 오히려 중요해진다. 결국 우리는 언젠가 “왜 이렇게 많은 자원을 사용하면서 또 하나의 Virtual World를 만들어야 하는가?”라는 질문을 하게 될 것이다.',
        'Animal Intelligence Universe(AIU)는 가상세계를 단순한 오락이나 현실도피의 공간이 아니라, 배우고, 가르치고, 실험하며 미래를 생각해볼 수 있는 공간으로 만들고 싶다.',
      ],
    },
    working: {
      title: '지금 우리팀은 무엇을 하고 있는가',
      paragraphs: [
        "우리는 현재 '교육적인 의미를 담으면서도 게임으로서의 재미를 잃지 않는 시스템을 어떻게 설계할 것인가'를 고민하고 있다.",
        '게임에서 시스템은 어떤 상태가 다른 상태로 어떻게 변화하는지를 결정하는 규칙의 집합이다. 이러한 시스템들이 서로 맞물리면서 게임의 재미와 세계의 역동성이 만들어진다. 우리는 특히 다음과 같은 기본적인 게임 시스템을 AIU에서는 어떻게 구현해야 할지 논의하고 있다.',
      ],
      systems: [
        {
          label: '퀘스트 시스템(Quest System)',
          text: '지식과 학습을 어떻게 목표와 모험으로 바꿀 것인가.',
        },
        {
          label: '전투 시스템(Combat System)',
          text: '기존의 많은 게임이 전투를 통해 경쟁, 도전, 보상을 구현했다면 AIU에서는 무엇이 그 역할을 할 것인가.',
        },
        {
          label: '아이템 시스템(Item System)',
          text: '지식과 성장의 결과를 어떤 아이템으로 구현할 것인가. 그리고 이를 UGC(User-Generated Content)와 어떻게 연결할 것인가.',
        },
      ],
      closing:
        "그리고 우리가 학습만큼이나 중요하게 생각하는 것이 '재미'다. 교육적이라는 이유로 재미없는 게임이 되어서는 안 된다는 것이 우리의 믿음이다.",
    },
    first: {
      title: '당장 무엇을 할 것인가',
      paragraphs: [
        '장기적으로는 AIU를 대규모 가상세계로 발전시키고, 그 세계에 적합한 자체 기술과 엔진까지 구축하는 것이 우리의 꿈이다.',
        '하지만 우리는 아직 아주 초기 단계에 있다. 지금은 동물 요원과 대화하고, 요원을 가르치면서 지식과 능력을 성장시키는 설정이 구현된 작은 프로토타입을 만드는 것에 집중하고 있다.',
      ],
      loop: '사람이 배우고 → 요원에게 가르치고 → 요원이 그것을 기억하고 활용하며 → 새로운 문제와 퀘스트가 열린다',
      closing: [
        '핵심 게임 루프를 증명하는 것이 목표다. 그리고 무엇보다 이 경험 자체가 재미있는지를 확인하려 한다.',
        '프로토타입의 개발 과정과 결과는 이 페이지를 통해 공개할 예정이다.',
      ],
    },
    ai: {
      title: 'AI는 어디에 활용되는가',
      level: {
        title: '1. Level AI — 세계가 스스로 변화하게 만들기',
        paragraphs: [
          '우리가 특히 중요하게 생각하는 영역이 Level AI다. AI를 게임의 Level Design과 Procedural Content Generation(PCG)에 연결하여 플레이어와 동물요원의 행동에 따라 세계가 변화하도록 만드는 방법을 고민하고 있다.',
          "우리는 특히 창발(Emergence)에 관심을 두고 있다. 동물지능 세계관에는 분명한 장기 목표가 있다. 요원들은 제한된 시간 안에 세상을 구해야 하며, 세계에는 종말까지 남은 시간을 나타내는 '종말 시계'도 존재한다. 하지만 그 목표에 도달하는 과정까지 미리 정해놓고 싶지는 않다.",
          '어떤 지식을 배우고, 누구에게 가르치고, 어떤 중간 목표를 선택하느냐에 따라 동물요원들의 세계가 예상하지 못했던 새로운 방향으로 발전할 수 있는지를 실험하고 싶다.',
        ],
      },
      character: {
        title: '2. Character AI — 말하고 행동하는 캐릭터 AI',
        paragraphs: [
          'AI는 기본적으로 Animal Agent와의 대화와 학습 평가에 사용된다. 하지만 그것만으로 끝나지 않는다. 캐릭터가 어떻게 움직이고, 판단하고, 주변 세계에 반응하는지에도 AI를 활용할 예정이다.',
          'A*, FSM과 같은 전통적인 Game AI 기법을 기본으로 활용하면서, 장기적으로는 Reinforcement Learning과 같은 학습 기반 접근법을 어디까지 적용할 수 있는지도 실험할 것이다.',
          '궁극적으로 우리가 보고 싶은 것은 Agent가 대화를 통해 배운 것이 실제 행동의 변화로 이어지는가이다.',
        ],
      },
      generative: {
        title: '3. Generative AI — 제작 시간을 줄이는 도구',
        intro:
          'Generative AI는 반복적이고 시간이 많이 드는 게임 제작 과정을 줄이는 데 적극적으로 활용할 것이다.',
        assets: {
          title: '3D Assets',
          paragraphs: [
            '캐릭터 원화를 기반으로 3D 에셋을 만들 때 Mesh 생성, Rigging 등 과거에는 Blender에서 많은 시간이 필요했던 작업에 AI 기반 도구를 적극 활용할 예정이다.',
            '다만 캐릭터의 원화 자체는 AI가 아니라 우리가 손으로 직접 그린다. 계속 우리의 철학을 강조해왔듯이, 우리는 이야기와 캐릭터, 그림처럼 작품의 최초 방향을 결정하는 근원적인 창작은 가능한 한 사람이 직접 만드는 것을 선호한다. AI는 그 방향을 대신 결정하는 존재라기보다, 우리가 만든 것을 더 빠르게 세계 속에 구현하는 도구에 가깝다.',
          ],
        },
        music: {
          title: '사운드와 음악',
          linkText: '동물지능의 음악',
          afterLink:
            '은 현재 DJ 닥스훈트가 담당하고 있으며 EDM을 중심으로 실험하고 있다. 앞으로는 Pop을 비롯한 다양한 장르로 확장하여 각 요원들의 성격과 이야기, 세계관을 음악으로 표현할 예정이다.',
        },
      },
    },
  },
} as const

export default function TechPostPage() {
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
      <section className="about-content-section about-prose-page techpost-page-section notes-page-section">
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
            <article id="why-building-virtual-world" className="about-section notes-article-section">
              <h2>{t.why.title}</h2>
              {t.why.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>

            <article id="what-working-on-now" className="about-section notes-article-section">
              <h2>{t.working.title}</h2>
              {t.working.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <ul className="techpost-system-list">
                {t.working.systems.map((system) => (
                  <li key={system.label}>
                    <strong>{system.label}</strong> — {system.text}
                  </li>
                ))}
              </ul>
              <p>{t.working.closing}</p>
            </article>

            <article id="what-building-first" className="about-section notes-article-section">
              <h2>{t.first.title}</h2>
              {t.first.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p className="techpost-loop">{t.first.loop}</p>
              {t.first.closing.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>

            <article id="where-do-we-use-ai" className="about-section notes-article-section">
              <h2>{t.ai.title}</h2>

              <div id="level-ai" className="notes-subsection">
                <h3>{t.ai.level.title}</h3>
                {t.ai.level.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div id="character-ai" className="notes-subsection">
                <h3>{t.ai.character.title}</h3>
                {t.ai.character.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div id="generative-ai" className="notes-subsection">
                <h3>{t.ai.generative.title}</h3>
                <p>{t.ai.generative.intro}</p>

                <div className="techpost-topic">
                  <h4>{t.ai.generative.assets.title}</h4>
                  {t.ai.generative.assets.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="techpost-topic">
                  <h4>{t.ai.generative.music.title}</h4>
                  <p>
                    <Link href="/music" className="techpost-inline-link">
                      {t.ai.generative.music.linkText}
                    </Link>
                    {t.ai.generative.music.afterLink}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
