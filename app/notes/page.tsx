'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

const translations = {
  en: {
    heading: 'What Is a Knowledge Note?',
    paragraphs: [
      'Animal Intelligence comics make fun of humans, AI, and animals alike. Our Short Stories follow animal agents as they grow, struggle, and go on adventures.',
      'But we did not want to stop at satire or simply talk about the problems of our time. We wanted to create something that could give new meaning.',
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
      'Animal Intelligence의 만화는 인간과 AI, 그리고 동물 모두를 풍자합니다. Short Story 시리즈는 동물 요원들이 성장하고, 고군분투하며, 모험을 떠나는 이야기를 따라갑니다.',
      '하지만 우리는 풍자나 단순히 우리 시대의 문제를 이야기하는 데 그치고 싶지 않았습니다. 새로운 의미를 부여할 수 있는 무언가를 만들고 싶었습니다.',
      'AI는 우리 사회를 낯선 방식으로 바꾸고 있습니다. 답을 찾기 쉬워질수록 우리는 한 단계씩 배우고, 스스로 탐구하고, 더 깊이 이해하려는 동기를 잃을 수도 있습니다. 책과 선생님에 대한 존중도 희미해질 수 있습니다. 그럼에도 우리는 지식이 없는 사람들이 결국 뒤처질 수 있는 세상으로 들어서고 있습니다.',
      '그래서 우리는 다른 방식의 배움을 시도하기로 했습니다. 동물 요원들의 관점에서, 우리는 ‘훔칠’ 가치가 있는 인간 지식의 다섯 영역을 골랐습니다. 항상 기초부터 시작하는 대신, 앞으로 우리가 마주할 큰 문제에서 출발합니다. 그런 다음 그 문제를 이해하고 해결하기 위해 어떤 지식이 필요한지 탐구합니다.',
      '우리는 다음 세대가 오늘날보다 훨씬 더 넓은 범위의 분야를 배우는 Generalist가 되어야 하는 동시에, 자신의 분야를 창의적으로 확장할 수 있는 Specialist가 되어야 할 수도 있다고 믿습니다.',
      '이러한 생각을 바탕으로 우리는 AI 시대를 살아가는 학생과 성인들이 무엇을 배우고 다음에 어디로 나아가야 할지 이해하도록 돕는 동반자, Knowledge Notes를 더하고자 합니다.',
    ],
    subjectIntro: '',
    subjects: '',
    finalNote: '',
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
