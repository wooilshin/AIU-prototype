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
      projectDesc: 'Animal Intelligence is an original IP project developed and published by Student B Press. The project places the animals around us at the center of its narrative, using their perspectives to explore human life, society, technology, and ultimately the future. It unfolds not only through fiction and comics, but also through knowledge-based guidebooks and experimental AI-powered media. Together, these forms create a living universe that invites readers to rethink intelligence, coexistence, and the future we are building.',
      creatorsTitle: 'About our Creators',
      creatorsDesc: 'Will Shin works alongside his sister, Alice Shin, as a sibling creative team behind the Animal Intelligence series. Will studied artificial intelligence at the University of Pennsylvania and public policy at Harvard, and his academic background informs the project\'s conceptual framework—exploring the intersections of world-building and future technologies. Alice Shin studied design and art, and later pursued applied linguistics at Georgetown University. With a strong interest in myth and a deep affection for animals, she leads the project\'s visual creation while also contributing to its narrative sensibility. Together, they are building a creative universe that reimagines knowledge and the future through non-human perspectives.',
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
      creatorsTitle: '제작자',
      creatorsDesc: 'Student B의 작가진은 남매인 Will과 Alice로 구성되어 있습니다. 펜실베이니아 공대에서 인공지능 그리고 하버드에서 개발경제학을 공부한 Will은 AI의 세계관을 만드는데 주력하고 있으며, 디자인과 응용언어학을 전공한 Alice는 AI 세계의 동물들이 많은 독자들에게 어필하도록 일러스트와 디자인을 맡고 있습니다.',
      whatWeMakeTitle: 'AIU의 출판물 및 미디어',
      booksTitle: '도서',
      booksDesc: '동물의 관점에서 현대사회의 철학, 사회과학, 과학지식을 통합적으로 그리고 재미있게 설명하는 '지식편' 및 아동을 위한 21세기형 동물우화인 '스토리'를 제작하고 있습니다.',
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
            <p>{t.projectDesc}</p>
          </div>

          <div className="about-section">
            <h2>{t.creatorsTitle}</h2>
            <p>{t.creatorsDesc}</p>
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

