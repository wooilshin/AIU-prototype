'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

const translations = {
  en: {
    heading: 'What Is a Knowledge Note?',
    paragraphs: [
      'Animal Intelligence comics make fun of humans, AI, and animals alike. Our Short Stories follow animal agents as they grow, struggle, and go on adventures.',
      'But we did not want to stop at satire or simply talk about the problems of our time. We wanted to create something that could give knowledge new meaning.',
      'AI is changing our society in strange ways. As answers become easier to find, we may lose some of our motivation to learn step by step, explore things for ourselves, and try to understand more. Respect for books and teachers may also fade. And yet, we are entering a world where people without knowledge may eventually be left behind.',
      'So we decided to try a different way of learning. From the perspective of our animal agents, we selected five areas of human knowledge worth “stealing.” Instead of always starting with the basics, we begin with the big problems we may face in the future. Then we explore what knowledge we need to understand and solve them.',
      'We believe the next generation may need to become Generalists, learning across a much wider range of fields than today, while at the same time becoming Specialists who can creatively expand their own fields.',
      'With this idea, we want to add Knowledge Notes—a companion for students and adults living in the age of AI, helping them understand what to learn and where to go next.',
    ],
    subjectIntro: '',
    subjects: '',
    finalNote: '',
  },
  ko: {
    heading: 'Knowledge Note란 무엇인가',
    paragraphs: [
      'Animal Intelligence의 만화는 인간과 AI, 그리고 동물 모두를 풍자합니다. Short Story 시리즈는 동물 요원들의 성장과 애환, 모험을 담고 있습니다.',
      '하지만 우리는 풍자나 시대에 대한 감상에서 그치고 싶지 않았습니다. 앞으로 지식의 의미란 무엇인지, 그리고 어떤 콘텐츠를 만들어야 하는지 고민하기 시작했습니다.',
      '지금은 AI가 수많은 지식의 문제를 대신 해결해주고, 오랜 경쟁과 노력을 통해 얻은 지식의 의미마저 희미해지는 시대입니다. 선생님에 대한 존중은 줄어들고, 밑바닥부터 차근차근 배워야 하는 기존의 교과과정은 이미 수많은 답을 바로 찾을 수 있는 학생들에게 충분한 동기를 주지 못할지도 모릅니다.',
      '그래서 우리는 배움의 순서를 조금 바꿔보는 시도를 하고 있습니다. 먼저 지금 우리 앞에 놓인 미래의 과제가 무엇인지 보여주고, 그 문제를 해결하기 위해 어떤 지식을 배워야 하는지 설명합니다.',
      '그리고 다음 세대부터는 한 사람이 광범위한 분야를 이해하는 Generalist이면서 동시에 자신의 분야를 깊이 파고드는 Specialist가 될 수 있다는 가능성도 받아들이려 합니다.',
    ],
    subjectIntro: '현재 우리는 이러한 생각을 바탕으로 우주·환경 / 공학 / AI / 철학 / 경제 다섯 가지 주제를 선정했습니다.',
    subjects: '우주·환경 / 공학 / AI / 철학 / 경제',
    finalNote:
      '기존의 노력과 수련을 포기하자는 것은 아닙니다. 오히려 그 긴 수련에 방향을 보여주는 하나의 companion을 덧붙이는 것에 가깝다고 생각합니다.',
  },
} as const

export default function NotesPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <>
      <Header />
      <section className="about-content-section about-prose-page notes-page-section">
        <div className="container about-prose">
          <div className="about-section">
            <h2>{t.heading}</h2>
            {t.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {t.subjectIntro && <p>{t.subjectIntro}</p>}
            {t.subjects && <p>{t.subjects}</p>}
            {t.finalNote && <p>{t.finalNote}</p>}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
