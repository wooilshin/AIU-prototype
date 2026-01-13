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
      title: '소개',
      subtitle: '우리는 새로운 스토리텔링 방식을 만듭니다',
      projectTitle: '프로젝트 Animal Intelligence',
      projectDesc: 'Animal Intelligence는 Student B Press가 개발하고 출간한 오리지널 IP 프로젝트입니다. 이 프로젝트는 우리 주변의 동물들을 서사의 중심에 두고, 그들의 시선을 통해 인간의 삶, 사회, 기술, 그리고 궁극적으로 미래를 탐구합니다. 소설과 만화뿐만 아니라 지식 기반 가이드북과 실험적인 AI 기반 미디어를 통해 펼쳐집니다. 이러한 형태들이 함께 작동하여 독자들이 지능, 공존, 그리고 우리가 구축하고 있는 미래를 재고할 수 있도록 하는 살아있는 우주를 만들어냅니다.',
      creatorsTitle: '제작자 소개',
      creatorsDesc: 'Will Shin은 그의 여동생 Alice Shin과 함께 Animal Intelligence 시리즈의 형제 크리에이티브 팀으로 활동합니다. Will은 펜실베이니아 대학교에서 인공지능을, 하버드에서 공공정책을 공부했으며, 그의 학문적 배경은 세계 구축과 미래 기술의 교차점을 탐구하는 프로젝트의 개념적 틀을 제공합니다. Alice Shin은 디자인과 미술을 공부했고, 나중에 조지타운 대학교에서 응용언어학을 추구했습니다. 신화에 대한 강한 관심과 동물에 대한 깊은 애정을 가지고, 그녀는 프로젝트의 시각적 창작을 이끌면서 서사적 감수성에도 기여합니다. 함께 그들은 비인간적 시각을 통해 지식과 미래를 재상상하는 창의적 우주를 구축하고 있습니다.',
      whatWeMakeTitle: '우리가 만드는 것',
      booksTitle: '도서',
      booksDesc: 'Animal Intelligence는 비인간적 시각을 통해 지식을 재구성하는 큐레이션 출판물입니다. 우리의 주력 출간물인 Knowledge Era는 철학, 사회과학, 과학 전반에 걸친 미래 지향적 지식을 체계화하고 제시합니다.',
      comicsTitle: '만화',
      comicsDesc: 'Student B Press는 또한 동물의 시선에서 사회 풍자와 일상적 관찰을 제공하는 가벼운 만화 모음집을 출간합니다.',
      aiTitle: 'AI 시스템',
      aiDesc: 'Student B tech Lab은 AIU 세계를 대화형 형태로 가져오는 AI 기반 에듀테크 콘텐츠로 확장할 계획입니다.'
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

