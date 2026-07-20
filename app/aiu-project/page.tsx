'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AIUProject() {
  const { language } = useLanguage()

  const translations = {
    en: {
      introTitle: 'AIU Project',
      introDesc: `AIU, short for Animal Intelligence Universe, is an original IP project about animals who observe humans, learn human knowledge, and begin to build their own civilization.

At the center of AIU is a simple question: What if animals learned everything humans know — and built a world of their own?`,
      visionTitle: 'Our Vision',
      visionDesc: `AIU is not just a story about animals. It is a new way to turn knowledge into characters, stories, and worlds. By making learning emotional, visual, and story-driven, AIU aims to become a global knowledge-based character IP for readers, learners, and audiences of all ages.`,
      staffTitle: 'Staff',
      ceoTitle: 'CEO & Creative Lead',
      ceoDesc: `Alice Shin serves as the CEO and Creative Lead of Student B.

She studied design and art at the undergraduate level before pursuing applied linguistics at Georgetown University. At Student B, she leads the visual storytelling and overall creative direction of the Animal Intelligence Universe.`,
      techLabTitle: 'Tech Lab Engineers',
      techLabDesc: `Joseph SH Chun holds a Ph.D. in Electrical Engineering from the University of Maryland and is a specialist in communications and embedded systems. At Student B's Tech Lab, he focuses on designing animal character–based physical devices that are safe, playful, and educationally meaningful for the next generation.

Will Shin is trained in artificial intelligence at the University of Pennsylvania and public policy at Harvard University. At Student B's Tech Lab, he works on character-based learning concepts and the integration of generative AI into the Animal Intelligence Universe.`,
      bizTitle: 'Biz Team',
      bizDesc: `Jin holds an MBA from Northwestern and works on IP planning. Soy graduated from Seoul National University's Business School and manages entertainment rights. Guinea handles publishing and publicity.`,
      studentBTitle: 'About Student B',
      studentBDesc:
        'Student B is a startup built around original IP and founded to explore new standards in edutainment. The company is currently focused on publishing AIU-related books, music, videos, and other content works, while also developing AI-driven character toys.',
      whatWeMakeTitle: 'What We Make',
      bookStoryTitle: 'Book (The Animal Intelligence Story)',
      bookStoryDesc:
        'Student B creates a long-form narrative fantasy centered on animals who travel across the world to study human knowledge. While presented as an animal-driven epic, the story functions as an allegory for the civilization in the post–AI era.',
      bookKnowledgeTitle: 'Book (Knowledge Era Series)',
      bookKnowledgeDesc:
        'Student B also produces a nonfiction book series that explores science, social science, and philosophy before and after the emergence of AI. These volumes serve as accessible companion books to the narrative series, intuitively introducing the knowledge and ideas that the animal characters encounter.',
      comicsTitle: 'Comic (Watching them Humans Series)',
      comicsDesc:
        "As Student B's flagship and entry point, the comic series consists of short-form illustrated works that reflect on human life in the age of AI. Through satire and observation, these comics invite readers to pause and reconsider everyday assumptions.",
      aiTitle: 'AI-driven toys',
      aiDesc:
        'Student B operates an AI tech lab where we develop experimental systems that bring comic characters to life. These characters are designed to be embedded in lightweight smart toys or figurines, allowing users to engage in learning through storytelling-driven AI experiences.',
      charactersAlt:
        'Animal Intelligence main characters: Red Fox, Blue Bird, Green Sea Turtle, Capybara, Beaglier, Bunny, Raccoon, White Giraffe, Korat Cat, Barbary Lion, Squirrel, and Black Panther',
    },
    ko: {
      introTitle: '동물지능 프로젝트',
      introDesc: `동물지능은 인간의 지식을 배우고 결국에는 스스로의 문명을 세워 가게되는 동물 문명에 관한 이야기입니다.

동 프로젝트는 동물들이 인간세계를 관찰하며 배운 내용과 그 서사를 풍자만화, 판타지 소설, 지식서 등으로 풀어낸 새로운 개념의 우화이자 스토리텔링 콘텐츠입니다.

AIU의 중심에는 간단한 질문이 있습니다. 동물들이 인간이 아는 모든 것을 배우고, 그들만의 세계를 세운다면 어떻게 될까요?`,
      visionTitle: '비전',
      visionDesc: `AIU는 단순히 동물에 관한 이야기가 아닙니다. 지식을 캐릭터, 이야기, 세계로 바꾸는 새로운 방식입니다.

학습을 감정적이고, 시각적이며, 스토리 중심으로 만들어, AIU는 모든 연령의 독자·학습자·관객을 위한 글로벌 지식 기반 캐릭터 IP가 되는 것을 목표로 합니다.`,
      staffTitle: '스튜던트 비 팀소개',
      ceoTitle: '크리에이티브 리드',
      ceoDesc: `Alice는 스튜던트 비의 CEO이자 크리에이티브 리드입니다.

Alice는 학부에서 디자인과 미술을 공부한 뒤 조지타운 대학교에서 언어학을 전공하였으며 현재 동물지능 IP의 전체 디자인을 이끌고 있습니다.`,
      techLabTitle: '테크랩 엔지니어',
      techLabDesc: `Joseph SH는 메릴랜드 대학교에서 전기공학 박사 학위를 취득했으며, 통신 및 임베디드 시스템 전문가입니다. 스튜던트 비 테크랩에서 교육적으로 의미 있는 동물 캐릭터 기반 물리적 디바이스 설계에 전념하고 있습니다.

Will은 펜실베이니아 대학교에서 인공지능을, 하버드 대학교에서 공공정책을 공부했습니다. 스튜던트 비 테크랩에서 캐릭터에 생성형 AI를 통합하는 작업을 담당하고 있습니다.`,
      bizTitle: '비지니스 팀',
      bizDesc:
        'Jin은 노스웨스턴 MBA를 졸업했으며 IP 기획을 담당하고 있으며, Soy는 서울대 경영학과를 졸업하고 엔터테인먼트 판권 관리를 맡고 있습니다. Guinea는 출판 및 홍보를 담당하고 있습니다.',
      studentBTitle: '스튜던트 비에 대하여',
      studentBDesc:
        '스튜던트 비는 동물지능 IP를 중심으로 에듀테인먼트의 새로운 기준을 탐구하기 위해 만들어진 스타트업 IP 스튜디오이자 출판사입니다. 회사는 현재 동물지능 관련 도서, 음악, 및 AI 기반 캐릭터 장난감 개발에 집중하고 있습니다.',
      whatWeMakeTitle: '스튜던트 비가 만드는 것들',
      bookStoryTitle: '도서 (내이름은 시리즈)',
      bookStoryDesc:
        '동물지능의 핵심 캐릭터 동물들의 서사를 담은 단편 소설 시리즈입니다. 나초, 헤일로, 흰기린 등 주요 동물 캐릭터가 각자의 동물세계 그리고 인간세계를 보며 느낀 점들을 기록하고 있습니다.',
      bookKnowledgeTitle: '도서 (지식 시리즈)',
      bookKnowledgeDesc:
        '동물지능 스토리에 등장하는 동물요원들이 인간 세계를 염탐하며 배운 내용들을 담고 있습니다. 인간세계의 주요 지식, 즉 과학, 사회과학, 인문학의 내용을 직관적으로 정리한 내용들을 담고 있습니다.',
      comicsTitle: '인간관찰기 (만화 시리즈)',
      comicsDesc:
        '동물지능의 진입점인 만화 시리즈입니다. 인간 세상관찰기 AI 시대의 인간의 사회 그리고 삶을 동물의 입장에서 바라보는 짧은 단편 만화들로 구성이 되어있습니다.',
      aiTitle: '동물지능 AI 시스템',
      aiDesc:
        '스튜던트 비의 궁극적인 목표는 동물지능의 동물 캐릭터를 현실에서 재현하는 것입니다. 이를 위해 테크랩에서는 경량화한 AI를 장난감이나 피규어에 내장하도록 설계하고 있습니다.',
      charactersAlt:
        'Animal Intelligence 주요 캐릭터: Red Fox, Blue Bird, Green Sea Turtle, Capybara, Beaglier, Bunny, Raccoon, White Giraffe, Korat Cat, Barbary Lion, Squirrel, Black Panther',
    },
  }

  const t = translations[language]

  return (
    <>
      <Header />
      <section className="about-content-section about-prose-page">
        <div className="container aiu-characters-wrap aiu-characters-wrap--lead">
          <figure className="aiu-main-characters">
            <img
              src="/images/aiu-project/main-characters.png"
              alt={t.charactersAlt}
            />
          </figure>
        </div>

        <div className="container about-prose">
          <div className="about-section">
            <h2>{t.introTitle}</h2>
            {t.introDesc.split('\n\n').map(
              (paragraph, index) =>
                paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
            )}
          </div>

          <div className="about-section about-staff">
            <h2>{t.staffTitle}</h2>

            <div className="staff-role">
              <h3>{t.ceoTitle}</h3>
              {t.ceoDesc.split('\n\n').map(
                (paragraph, index) =>
                  paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
              )}
            </div>

            <div className="staff-role">
              <h3>{t.techLabTitle}</h3>
              {t.techLabDesc.split('\n\n').map(
                (paragraph, index) =>
                  paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
              )}
            </div>

            <div className="staff-role">
              <h3>{t.bizTitle}</h3>
              <p>{t.bizDesc}</p>
            </div>
          </div>

          <div className="about-section about-student-b">
            <h2>{t.studentBTitle}</h2>
            {t.studentBDesc.split('\n\n').map(
              (paragraph, index) =>
                paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
            )}

            <div className="staff-role">
              <h3>{t.visionTitle}</h3>
              {t.visionDesc.split('\n\n').map(
                (paragraph, index) =>
                  paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
              )}
            </div>

            <div className="staff-role what-we-make">
              <h3>{t.whatWeMakeTitle}</h3>
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
        </div>
      </section>
      <Footer />
    </>
  )
}
