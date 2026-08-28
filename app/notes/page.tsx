'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

const translations = {
  en: {
    pageTitle: 'Knowledge Note',
    heading: 'What Is a Knowledge Note?',
    paragraphs: [
      'Animal Intelligence comics make fun of humans, AI, and animals alike. Our Short Stories follow animal agents as they grow, struggle, and go on adventures.',
      'But we did not want to stop at satire or simply talk about the problems of our time. We started thinking about a bigger question: What does knowledge mean in the age of AI, and what kind of content should we make for the future?',
      'AI can already answer most of questions we learn. As answers become easier to find, students may start to wonder why they need to spend years learning something from the ground up. Traditional textbooks and classes may also have a harder time motivating students who can get answers instantly from AI.',
      'So we decided to try changing the order of learning.',
      'Instead of starting with the basics, we first show the big problems we may face in the future. Then we ask what knowledge we need to solve them and how that knowledge connects to what we learn in math, science, engineering, economics, and philosophy.',
      'This does not mean that hard work or years of study are no longer important. We simply want to add a companion that shows students where that long journey can lead.',
      'We also believe that the next generation may need to become Generalists who can solve problems across many different fields, while at the same time becoming Specialists who deeply understand their own field.',
    ],
    subjectIntro: 'With this idea, we have started working on five subjects:',
    subjects: 'Space & Environment / Engineering / AI / Philosophy / Economics',
    closing:
      'We are exploring these subjects in the AIU way and creating a new kind of learning content. We call them Knowledge Notes.',
  },
  ko: {
    pageTitle: 'Knowledge Note',
    heading: 'Knowledge Note란 무엇인가',
    paragraphs: [
      'Animal Intelligence의 만화는 인간과 AI, 그리고 동물 모두를 풍자합니다. Short Story 시리즈는 동물 요원들의 성장과 애환, 모험을 담고 있습니다.',
      '하지만 우리는 풍자나 시대에 대한 감상에서 그치고 싶지 않았습니다. 앞으로 지식의 의미란 무엇인지, 그리고 어떤 콘텐츠를 만들어야 하는지 고민하기 시작했습니다.',
      '지금은 AI가 수많은 지식의 문제를 대신 해결해주고, 오랜 경쟁과 노력을 통해 얻은 지식의 의미마저 희미해지는 시대입니다. 선생님에 대한 존중은 줄어들고, 밑바닥부터 차근차근 배워야 하는 기존의 교과과정은 이미 수많은 답을 바로 찾을 수 있는 학생들에게 충분한 동기를 주지 못할지도 모릅니다.',
      '그래서 우리는 배움의 순서를 조금 바꿔보는 시도를 하고 있습니다.',
      '먼저 지금 우리 앞에 놓인 미래의 과제가 무엇인지 보여주고, 그 문제를 해결하기 위해 어떤 지식이 필요한지, 그리고 그것이 우리가 배우는 수학·과학·공학·경제·철학과 어떻게 연결되는지를 일찍 보여주는 것입니다.',
      '기존의 노력과 수련을 포기하자는 것은 아닙니다. 오히려 그 긴 수련에 방향을 보여주는 하나의 companion을 덧붙이는 것에 가깝다고 생각합니다.',
      '그리고 다음 세대부터는 한 사람이 광범위한 분야를 이해하는 Generalist이면서 동시에 자신의 분야를 깊이 파고드는 Specialist가 될 수 있다는 가능성도 받아들이려 합니다.',
    ],
    subjectIntro: '현재 우리는 이러한 생각을 바탕으로 우주·환경 / 공학 / AI / 철학 / 경제 다섯 가지 주제를 선정했습니다.',
    subjects: '우주·환경 / 공학 / AI / 철학 / 경제',
    closing: '그리고 이 주제들을 AIU의 방식으로 풀어낸 새로운 형태의 지식 콘텐츠를 집필하기 시작했습니다.',
  },
} as const

export default function NotesPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <>
      <Header />
      <section className="about-hero">
        <div className="container">
          <h1>{t.pageTitle}</h1>
        </div>
      </section>

      <section className="about-content-section about-prose-page">
        <div className="container about-prose">
          <div className="about-section">
            <h2>{t.heading}</h2>
            {t.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <p>{t.subjectIntro}</p>
            <p>{t.subjects}</p>
            <p>{t.closing}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
