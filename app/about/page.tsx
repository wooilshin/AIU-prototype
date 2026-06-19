'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { language } = useLanguage()
  
  const translations = {
    en: {
      title: 'About',
      ceoTitle: 'CEO & Creative Lead',
      ceoDesc: `Alice Shin serves as the CEO and Creative Lead of Student B.

She studied design and art at the undergraduate level before pursuing applied linguistics at Georgetown University. At Student B, she leads the visual storytelling and overall creative direction of the Animal Intelligence Universe.

By adopting a cute and accessible illustrative style, she helps make serious subjects easier to approach and invites readers to engage with complex questions about knowledge, technology, and the future.`,
      techLabTitle: 'Tech Lab Engineers',
      techLabDesc: `Will Shin and Joseph SH Chun lead Student B's Tech Lab as engineers and product developers.

Will Shin is trained in artificial intelligence at the University of Pennsylvania and public policy at Harvard University. At Student B's Tech Lab, he works on character-based learning concepts and the integration of generative AI into the Animal Intelligence Universe.

Joseph SH Chun holds a Ph.D. in Electrical Engineering from the University of Maryland and is a specialist in communications and embedded systems. At Student B's Tech Lab, he focuses on designing animal character–based physical devices that are safe, playful, and educationally meaningful for the next generation.`,
      studentBTitle: 'About Student B',
      studentBDesc: `Student B is a startup built around original IP and founded to explore new standards in edutainment.

The company is currently focused on publishing AIU-related books, music, videos, and other content works, while also developing AI-driven character toys.`,
      whatWeMakeTitle: 'What We Make',
      bookStoryTitle: 'Book (The Animal Intelligence Story)',
      bookStoryDesc: 'Student B creates a long-form narrative fantasy centered on animals who travel across the world to study human knowledge. While presented as an animal-driven epic, the story functions as an allegory for the civilization in the post–AI era.',
      bookKnowledgeTitle: 'Book (Knowledge Era Series)',
      bookKnowledgeDesc: 'Student B also produces a nonfiction book series that explores science, social science, and philosophy before and after the emergence of AI. These volumes serve as accessible companion books to the narrative series, intuitively introducing the knowledge and ideas that the animal characters encounter.',
      comicsTitle: 'Comic (Watching them Humans Series)',
      comicsDesc: 'As Student B\'s flagship and entry point, the comic series consists of short-form illustrated works that reflect on human life in the age of AI. Through satire and observation, these comics invite readers to pause and reconsider everyday assumptions.',
      aiTitle: 'AI-driven toys',
      aiDesc: 'Student B operates an AI tech lab where we develop experimental systems that bring comic characters to life. These characters are designed to be embedded in lightweight smart toys or figurines, allowing users to engage in learning through storytelling-driven AI experiences.'
    },
    ko: {
      title: '소개',
      ceoTitle: 'CEO & Creative Lead',
      ceoDesc: `Alice Shin은 Student B의 CEO이자 Creative Lead입니다.

학부에서 디자인과 미술을 공부한 뒤 조지타운 대학교에서 응용언어학을 전공했습니다. Student B에서 Animal Intelligence Universe의 비주얼 스토리텔링과 전체 크리에이티브 방향을 이끕니다.

귀엽고 접근하기 쉬운 일러스트 스타일을 통해 진지한 주제를 더 쉽게 다가가게 하고, 독자들이 지식·기술·미래에 대한 복잡한 질문에 참여하도록 이끕니다.`,
      techLabTitle: 'Tech Lab Engineers',
      techLabDesc: `Will Shin과 Joseph SH Chun은 Student B Tech Lab의 엔지니어이자 제품 개발자로 활동합니다.

Will Shin은 펜실베이니아 대학교에서 인공지능을, 하버드 대학교에서 공공정책을 공부했습니다. Student B Tech Lab에서 캐릭터 기반 학습 개념과 Animal Intelligence Universe에 생성형 AI를 통합하는 작업을 담당합니다.

Joseph SH Chun은 메릴랜드 대학교에서 전기공학 박사 학위를 취득했으며, 통신 및 임베디드 시스템 전문가입니다. Student B Tech Lab에서 다음 세대를 위한 안전하고, 유희적이며, 교육적으로 의미 있는 동물 캐릭터 기반 물리적 디바이스 설계에 집중합니다.`,
      studentBTitle: 'About Student B',
      studentBDesc: `Student B는 오리지널 IP를 중심으로 설립된 스타트업으로, 에듀테인먼트의 새로운 기준을 탐구하기 위해 만들어졌습니다.

회사는 현재 AIU 관련 도서, 음악, 영상 및 기타 콘텐츠 작품 출판에 집중하면서, AI 기반 캐릭터 장난감 개발도 함께 진행하고 있습니다.`,
      whatWeMakeTitle: 'AIU의 출판물 및 미디어',
      bookStoryTitle: '도서 (스토리)',
      bookStoryDesc: 'Student B는 인간의 지식을 연구하기 위해 세계를 여행하는 동물들을 중심으로 한 장편 서사 판타지를 제작합니다. 동물 중심의 서사시로 제시되지만, 이 이야기는 AI 이후 시대의 문명에 대한 우화로 기능합니다.',
      bookKnowledgeTitle: '도서 (지식 시리즈)',
      bookKnowledgeDesc: 'Student B는 또한 AI의 등장 전후의 과학, 사회과학, 철학을 탐구하는 논픽션 도서 시리즈를 제작합니다. 이 권들은 서사 시리즈에 대한 접근 가능한 동반 도서 역할을 하며, 동물 캐릭터들이 만나는 지식과 아이디어를 직관적으로 소개합니다.',
      comicsTitle: '만화',
      comicsDesc: 'Student B의 플래그십이자 진입점인 만화 시리즈는 AI 시대의 인간의 삶을 반영하는 단편 삽화 작품들로 구성됩니다. 풍자와 관찰을 통해 이 만화들은 독자들이 일시 정지하고 일상적인 가정을 재고하도록 초대합니다.',
      aiTitle: 'AI 시스템',
      aiDesc: 'Student B는 만화 캐릭터를 생생하게 만드는 실험적 시스템을 개발하는 AI 기술 연구소를 운영합니다. 이 캐릭터들은 경량 스마트 장난감이나 피규어에 내장되도록 설계되어 사용자가 스토리텔링 기반 AI 경험을 통해 학습에 참여할 수 있도록 합니다.'
    }
  }
  
  const t = translations[language]
  
  return (
    <>
      <Header />
      <section className="about-hero">
        <div className="container">
          <h1>{t.title}</h1>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-section">
            <h2>{t.ceoTitle}</h2>
            {t.ceoDesc.split('\n\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>

          <div className="about-section">
            <h2>{t.techLabTitle}</h2>
            {t.techLabDesc.split('\n\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>

          <div className="about-section">
            <h2>{t.studentBTitle}</h2>
            {t.studentBDesc.split('\n\n').map((paragraph, index) => (
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
                <h3>{t.bookStoryTitle}</h3>
                <p>{t.bookStoryDesc}</p>
              </div>
              <div className="key-area-card">
                <div className="key-area-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                <h3>{t.bookKnowledgeTitle}</h3>
                <p>{t.bookKnowledgeDesc}</p>
              </div>
              <div className="key-area-card">
                <div className="key-area-icon">
                  <i className="fas fa-comments"></i>
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

