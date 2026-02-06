'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { language } = useLanguage()
  
  const translations = {
    en: {
      title: 'About',
      subtitle: 'We create a new way of storytelling',
      projectTitle: 'Project Animal Intelligence',
      projectDesc: `Animal Intelligence is a story-driven content universe that invites readers to reflect on future technologies—and on life itself—through animal-centered storytelling, with a particular focus on AI. 
      
      The story begins when animals start to notice the strange contradictions and accelerating crises of human civilization. Sensing that humans may be heading toward self-destruction, they decide to study human knowledge in order to help. With the assistance of AI, the animals begin learning science, history, and technology. However, this process does not merely transform their understanding of humans—it also triggers profound social, political, and ethical changes within the animal world itself.

      As the narrative unfolds, the animals encounter a series of crises and disasters caused by the misuse of AI.

      This universe unfolds across multiple formats, including satirical comics, a long-form fantasy series, and illustrated publications that intuitively explain future technologies, particularly AI.
      
      While the project incorporates satire to reflect AI-driven social change, it maintains a balanced and reflective perspective. Alongside critiques of institutional failure and ethical risk, it also explores AI's positive potential—from addressing global disasters and systemic risks to enabling scientific discovery and space exploration. Rather than promoting fear or blind optimism, Animal Intelligence aims to create a thoughtful space for reflection on how humans and intelligent systems might coexist responsibly in the future.`,
      targetAudienceTitle: 'Target Audience',
      targetAudienceDesc: `The primary target community of Animal Intelligence is, in principle, multi-generational, though the intended audience varies slightly by publication format. The fantasy fiction is primarily aimed at middle and high school readers, while the knowledge-focused volumes—which combine engineering and AI concepts with comics—are designed for older high school students and university-level readers. The satirical comics, in contrast, are largely directed toward adults and reflect on AI-driven social change from a more critical perspective.

      This multi-layered audience design is intentional. Rather than separating content strictly by age, Animal Intelligence is structured so that a single narrative world can be experienced differently across generations. By engaging readers of different ages with the same characters and themes, the project encourages shared interpretation, discussion, and discovery—allowing families, students, and educators to explore the story together and exchange perspectives on the future shaped by AI.`,
      creatorsTitle: 'About our Creators',
      creatorsDesc: 'Will Shin works alongside his sister, Alice Shin, as a sibling creative team behind the Animal Intelligence series.\n\n Will studied artificial intelligence at the University of Pennsylvania and public policy at Harvard, and his academic background informs the project\'s conceptual framework—exploring the intersections of world-building and future technologies. \n\nAlice Shin studied design and art, and later pursued applied linguistics at Georgetown University. With a strong interest in myth and a deep affection for animals, she leads the project\'s visual creation while also contributing to its narrative sensibility. Together, they are building a creative universe that reimagines knowledge and the future through non-human perspectives.',
      whatWeMakeTitle: 'What We Make',
      booksTitle: 'Books',
      booksDesc: 'Animal Intelligence is a curated publication that reframes knowledge through non-human perspectives. Our flagship publication, Knowledge Era, organizes and presents future-oriented knowledge across philosophy, social sciences, and science.',
      comicsTitle: 'Comics',
      comicsDesc: 'Student B Press also publishes a collection of light comics, offering social satire and everyday observations from animal perspectives.',
      aiTitle: 'AI-system',
      aiDesc: 'Student B tech Lab is envisioned to expand into AI-based edutech content that brings the AIU world into an interactive form.'
    },
    ko: {
      title: 'AI 동물지능 소개',
      subtitle: '새로운 스토리텔링을 만들어 나갑니다',
      projectTitle: '프로젝트',
      projectDesc: 'AI (Animal Intelligence)는 격변하는 시대 인간의 현재 그리고 미래 기술, 사회, 그리고 삶을 조망하기 위한 목적으로 시작되었습니다. 동 프로젝트는 동물의 시선으로 인간 세상을 바라본다는 설정 아래 풍자 만화, 픽션, 및 지식 교양서 그리고 AI 시스템 기반 미디어 등 다양한 미디어를 제작하고 있습니다.',
      targetAudienceTitle: '타겟 오디언스',
      targetAudienceDesc: 'Animal Intelligence의 주요 타겟 커뮤니티는 원칙적으로 다세대를 대상으로 하며, 출판 형식에 따라 약간씩 다른 독자층을 목표로 합니다. 판타지 픽션은 주로 중고등학생 독자를 대상으로 하며, 엔지니어링과 AI 개념을 만화와 결합한 지식 중심 권은 고등학생 후반과 대학 수준의 독자를 위해 설계되었습니다. 반면 풍자 만화는 주로 성인을 대상으로 하며 AI 주도 사회 변화를 더 비판적인 관점에서 반영합니다.\n\n이러한 다층적 오디언스 설계는 의도적입니다. 연령에 따라 콘텐츠를 엄격하게 분리하기보다는, Animal Intelligence는 단일 서사 세계가 세대에 따라 다르게 경험될 수 있도록 구조화되어 있습니다. 서로 다른 연령대의 독자들이 같은 캐릭터와 주제로 참여함으로써, 이 프로젝트는 공유된 해석, 토론, 발견을 장려합니다—가족, 학생, 교육자가 함께 이야기를 탐구하고 AI가 형성한 미래에 대한 관점을 교환할 수 있도록 합니다.',
      creatorsTitle: '제작자',
      creatorsDesc: 'Student B의 작가진은 남매인 Will과 Alice로 구성되어 있습니다. 펜실베이니아 공대에서 인공지능 그리고 하버드에서 개발경제학을 공부한 Will은 AI의 세계관을 만드는데 주력하고 있으며, 디자인과 응용언어학을 전공한 Alice는 AI 세계의 동물들이 많은 독자들에게 어필하도록 일러스트와 디자인을 맡고 있습니다.',
      whatWeMakeTitle: 'AIU의 출판물 및 미디어',
      booksTitle: '도서',
      booksDesc: '동물의 관점에서 현대사회의 철학, 사회과학, 과학지식을 통합적으로 그리고 재미있게 설명하는 지식편 그리고 아동을 위한 21세기형 동물 모험기 이야기편을 제작하고 있습니다.',
      comicsTitle: '만화',
      comicsDesc: '격변하는 시대 인간 사회와 문명을 풍자하는 레트로 형식의 2컷, 3컷 만화 모음집을 제작하고 있습니다.',
      aiTitle: 'AI 시스템',
      aiDesc: '스튜던트 비 Tech Lab은 AIU 세계의 동물들의 지식을 담은 커스텀 LLM 시스템을 개발중입니다.'
    }
  }
  
  const t = translations[language]
  
  return (
    <>
      <Header />
      <section className="about-hero">
        <div className="container">
          <h1>{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-section">
            <h2>{t.projectTitle}</h2>
            {t.projectDesc.split('\n\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>

          <div className="about-section">
            <h2>{t.targetAudienceTitle}</h2>
            {t.targetAudienceDesc.split('\n\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>

          <div className="about-section">
            <h2>{t.creatorsTitle}</h2>
            {t.creatorsDesc.split('\n\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>

          <div className="about-section">
            <h2>{t.whatWeMakeTitle}</h2>
            <div className="key-areas-grid">
              <div className="key-area-card">
                <div className="key-area-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>{t.booksTitle}</h3>
                <p>{t.booksDesc}</p>
              </div>
              <div className="key-area-card">
                <div className="key-area-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                <h3>{t.comicsTitle}</h3>
                <p>{t.comicsDesc}</p>
              </div>
              <div className="key-area-card">
                <div className="key-area-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <h3>{t.aiTitle}</h3>
                <p>{t.aiDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

