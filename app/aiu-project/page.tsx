'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AIUProject() {
  const { language } = useLanguage()

  const translations = {
    en: {
      introTitle: 'AIU Project',
      introDesc: `AIU, short for Animal Intelligence Universe, is an original IP project about secret animal agents who observe humans and learn from human knowledge.

But AIU is more than a story about animal agents. It aims to be a new fable for the 21st century—one that invites us to imagine the future together with hope in these unsettled times.`,
      staffTitle: 'Staff',
      ceoTitle: 'CEO & Creative Lead',
      ceoDesc: `Alice serves as the CEO and Creative Lead of Student B.

She studied design and art at the undergraduate level before pursuing applied linguistics at Georgetown University. At Student B, she leads the overall creative direction of the Animal Intelligence Universe.`,
      techLabTitle: 'Creative Tech Lab',
      techLabDesc: `Joseph SH holds a Ph.D. in Electrical Engineering from the University of Maryland. He develops safe and playful interactive character systems.

Wooil studied Computer Science at the University of Pennsylvania. He develops AI-powered character games at Student B's Tech Lab.`,
      bizTitle: 'Biz Team',
      bizDesc: `Jin holds an MBA from Northwestern and works on IP planning. Guinea handles publishing and publicity.`,
      studentBTitle: 'About Student B',
      studentBDesc:
        'Student B is an independent IP studio dedicated to publications from the Animal Intelligence Universe (AIU). We are a small studio with a big dream. We aim to create stories and a new educational world for the next generation—one that offers comfort and a sense of direction in this uncertain and rapidly changing age of AI.',
      whatWeMakeTitle: 'What We Make',
      bookStoryTitle: 'Book (The Animal Intelligence Story)',
      bookStoryDesc:
        'Student B creates short- and long-form fantasy narratives centered on animal agents who infiltrate the human world to study human knowledge. While presented as the story of animal agents, the series also serves as an allegory for a post-AI world.',
      bookKnowledgeTitle: 'Book (Knowledge Note Series)',
      bookKnowledgeDesc:
        'Student B also produces short educational booklets that serve as companion books to the narrative series. These booklets are Student B’s attempt to imagine what textbooks might look like in the AI age.',
      comicsTitle: 'Comic (Watching them Humans Series)',
      comicsDesc:
        "As Student B's flagship series and the entry point to its universe, the comic series presents short-form illustrated stories that explore human life in the age of AI through satire and humor.",
      charactersAlt:
        'Animal Intelligence main characters: Red Fox, Blue Bird, Green Sea Turtle, Capybara, Beaglier, Bunny, Raccoon, White Giraffe, Korat Cat, Barbary Lion, Squirrel, and Black Panther',
    },
    ko: {
      introTitle: '동물지능 프로젝트',
      introDesc: `AIU, Animal Intelligence Universe의 약자로, 인간을 관찰하며 인간의 지식에서 배우는 비밀 동물 요원들에 관한 오리지널 IP 프로젝트입니다.

하지만 AIU는 단순히 동물 요원들의 이야기 그 이상입니다. AIU는 불안정한 이 시대에 희망을 품고 함께 미래를 상상하게 하는 21세기의 새로운 우화가 되고자 합니다.`,
      staffTitle: '스튜던트 비 팀소개',
      ceoTitle: '크리에이티브 리드',
      ceoDesc: `Alice는 스튜던트 비의 CEO이자 크리에이티브 리드입니다.

Alice는 학부에서 디자인과 미술을 공부한 뒤 조지타운 대학교에서 언어학을 전공하였으며 현재 동물지능 IP의 전체 디자인을 이끌고 있습니다.`,
      techLabTitle: '크리에이티브 테크랩',
      techLabDesc: `Joseph SH는 메릴랜드 대학교에서 전기공학 박사 학위를 취득했습니다. 안전하고 즐거운 인터랙티브 캐릭터 시스템을 개발합니다.

Wooil은 펜실베이니아 대학교에서 컴퓨터 과학을 공부했습니다. 스튜던트 비 테크랩에서 AI 기반 캐릭터 게임을 개발합니다.`,
      bizTitle: '비지니스 팀',
      bizDesc:
        'Jin은 노스웨스턴 MBA를 졸업했으며 IP 기획을 담당하고 있습니다. Guinea는 출판 및 홍보를 담당하고 있습니다.',
      studentBTitle: '스튜던트 비에 대하여',
      studentBDesc:
        '스튜던트 비는 Animal Intelligence Universe(AIU)의 출판물에 전념하는 독립 IP 스튜디오입니다. 우리는 작은 스튜디오이지만 큰 꿈을 갖고 있습니다. 불확실하고 빠르게 변하는 AI 시대에 위안과 방향감을 주는, 다음 세대를 위한 이야기와 새로운 교육 세계를 만들고자 합니다.',
      whatWeMakeTitle: '스튜던트 비가 만드는 것들',
      bookStoryTitle: '도서 (내이름은 시리즈)',
      bookStoryDesc:
        '스튜던트 비는 인간 세계에 잠입해 인간의 지식을 배우는 동물 요원들을 중심으로 한 단편·장편 판타지 서사를 만듭니다. 동물 요원들의 이야기로 읽히지만, 이 시리즈는 포스트 AI 세계에 대한 우화이기도 합니다.',
      bookKnowledgeTitle: '도서 (Knowledge Note 시리즈)',
      bookKnowledgeDesc:
        '스튜던트 비는 또한 서사 시리즈의 동반자 역할을 하는 짧은 교육용 책자를 만듭니다. 이 책자들은 AI 시대의 교과서가 어떤 모습일지 상상해 보려는 스튜던트 비의 시도입니다.',
      comicsTitle: '인간관찰기 (만화 시리즈)',
      comicsDesc:
        '스튜던트 비의 플래그십 시리즈이자 세계관의 진입점인 만화 시리즈는, 풍자와 유머를 통해 AI 시대 인간의 삶을 탐구하는 짧은 일러스트 스토리로 구성되어 있습니다.',
      charactersAlt:
        'Animal Intelligence 주요 캐릭터: Red Fox, Blue Bird, Green Sea Turtle, Capybara, Beaglier, Bunny, Raccoon, White Giraffe, Korat Cat, Barbary Lion, Squirrel, Black Panther',
    },
  }

  const t = translations[language]

  return (
    <div className="aiu-page">
      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
        <div key={n} className={`aiu-paw-bg aiu-paw-bg--${n}`} aria-hidden="true">
          <img src="/images/icon/paw.svg" alt="" />
        </div>
      ))}
      <Header />
      <div className="aiu-main">
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

            <div className="about-section about-student-b">
              <h2>{t.studentBTitle}</h2>
              {t.studentBDesc.split('\n\n').map(
                (paragraph, index) =>
                  paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
              )}
            </div>

            <div className="about-section what-we-make">
              <h2>{t.whatWeMakeTitle}</h2>
              <div className="key-areas-grid">
                <div className="key-area-card">
                  <div className="key-area-icon">
                    <i className="fas fa-comments"></i>
                  </div>
                  <h3>{t.comicsTitle}</h3>
                  <p>{t.comicsDesc}</p>
                </div>
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
              </div>
            </div>

            <div className="about-section about-staff">
              <h2>{t.staffTitle}</h2>

              <div className="staff-role">
                <h3>{t.ceoTitle}</h3>
                {t.ceoDesc.split('\n\n').map(
                  (paragraph, index) =>
                    paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
                )}
                <p className="staff-contact-email">artdirector [at] student-b.com</p>
              </div>

              <div className="staff-role">
                <h3>{t.techLabTitle}</h3>
                {t.techLabDesc.split('\n\n').map(
                  (paragraph, index) =>
                    paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
                )}
                <p className="staff-contact-email">techlab [at] student-b.com</p>
              </div>

              <div className="staff-role">
                <h3>{t.bizTitle}</h3>
                <p>{t.bizDesc}</p>
                <p className="staff-contact-email">
                  ipbusiness [at] student-b.com
                  <br />
                  sns [at] student-b.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
