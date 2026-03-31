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
      creatorsTitle: 'Our Creators',
      creatorsDesc: 'Will Shin works alongside his sister, Alice Shin, as a sibling creative team behind the Animal Intelligence series.\n\n Will Shin is trained in artificial intelligence at the University of Pennsylvania and public policy at Harvard University. He chose to move into full-time writing out of a conviction that storytelling is essential for creating space where people can think reflectively about AI. The project\'s title, Animal Intelligence, was deliberately chosen to emphasize the importance of cultural and philosophical intelligence alongside artificial intelligence in the AI era.\n\nAlice Shin studied design and art at the undergraduate level before pursuing applied linguistics at Georgetown University. She leads the project\'s visual storytelling. By intentionally adopting a "cute" illustrative style, she lowers the barrier to engaging with serious subjects, inviting readers to approach complex questions about the future without resistance.',
      techLabTitle: 'Our Creative Tech Lab',
      techLabDesc: 'Our Creative Tech Lab operates with a long-term vision of bringing the characters of Animal Intelligence into the real world. We are currently exploring and experimenting with early-stage ideas that connect storytelling, AI systems, and physical toy devices.\n\nJoseph SH Chun holds a Ph.D. in Electrical Engineering from the University of Maryland and is a specialist in communications and embedded systems. He is particularly interested in designing animal character–based physical devices that are safe, playful, and educationally meaningful for the next generation.',
      studentBTitle: 'About Student B',
      studentBDesc: 'Student B is a startup and publishing house founded to explore and redefine new standards in edutainment. It is currently focused on publishing AIU-related works.',
      whatWeMakeTitle: 'What We Make',
      bookStoryTitle: 'Book (Story)',
      bookStoryDesc: 'Student B creates a long-form narrative fantasy centered on animals who travel across the world to study human knowledge. While presented as an animal-driven epic, the story functions as an allegory for the civilization in the post–AI era.',
      bookKnowledgeTitle: 'Book (Knowledge Series)',
      bookKnowledgeDesc: 'Student B also produces a nonfiction book series that explores science, social science, and philosophy before and after the emergence of AI. These volumes serve as accessible companion books to the narrative series, intuitively introducing the knowledge and ideas that the animal characters encounter.',
      comicsTitle: 'Comic (Watching them Humans Series)',
      comicsDesc: 'As Student B\'s flagship and entry point, the comic series consists of short-form illustrated works that reflect on human life in the age of AI. Through satire and observation, these comics invite readers to pause and reconsider everyday assumptions.',
      aiTitle: 'AI System',
      aiDesc: 'Student B operates an AI tech lab where we develop experimental systems that bring comic characters to life. These characters are designed to be embedded in lightweight smart toys or figurines, allowing users to engage in learning through storytelling-driven AI experiences.'
    },
    ko: {
      title: '소개',
      creatorsTitle: '제작자',
      creatorsDesc: 'Student B의 작가진은 남매인 Will과 Alice로 구성되어 있습니다. 펜실베이니아 공대에서 인공지능 그리고 하버드에서 개발경제학을 공부한 Will은 AI의 세계관을 만드는데 주력하고 있으며, 디자인과 응용언어학을 전공한 Alice는 AI 세계의 동물들이 많은 독자들에게 어필하도록 일러스트와 디자인을 맡고 있습니다.',
      techLabTitle: 'Our Creative Tech Lab',
      techLabDesc: 'Our Creative Tech Lab은 Animal Intelligence의 캐릭터들을 현실 세계로 가져오는 장기적인 비전으로 운영됩니다. 우리는 현재 스토리텔링, AI 시스템, 물리적 장치를 연결하는 초기 단계 아이디어를 탐구하고 실험하고 있습니다.\n\nJoseph SH Chun은 메릴랜드 대학교에서 전기공학 박사 학위를 취득했으며 통신 및 임베디드 시스템 전문가입니다. 그는 특히 다음 세대를 위해 안전하고 재미있으며 교육적으로 의미 있는 동물 캐릭터 기반 물리적 장치를 설계하는 데 관심이 있습니다.',
      studentBTitle: '스튜던트 비',
      studentBDesc: 'Student B는 AIU 관련 출판물 및 관련 미디어를 제작하는 회사입니다.',
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
            <h2>{t.creatorsTitle}</h2>
            {t.creatorsDesc.split('\n\n').map((paragraph, index) => (
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
            <p>{t.studentBDesc}</p>
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

