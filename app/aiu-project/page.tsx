'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AIUProject() {
  const { language } = useLanguage()

  const translations = {
    en: {
      introTitle: 'AIU Project',
      introDesc: `AIU, short for Animal Intelligence Universe, is an original IP project about secret animal agents who observe humans and learn human knowledge.

AIU is more than a story about animal agents. It is a new fable for the 21st century—one that blends philosophy, knowledge, and storytelling for audiences of all ages.`,
      staffTitle: 'Staff',
      ceoTitle: 'CEO & Creative Lead',
      ceoDesc: `Alice serves as the CEO and Creative Lead of Student B.

She studied design and art at the undergraduate level before pursuing applied linguistics at Georgetown University. At Student B, she leads the visual storytelling and overall creative direction of the Animal Intelligence Universe.`,
      techLabTitle: 'Tech Lab Engineers',
      techLabDesc: `Joseph SH holds a Ph.D. in Electrical Engineering from the University of Maryland. He develops safe and playful interactive character toys.

Will studied Computer Science at the University of Pennsylvania and public policy at Harvard. He develops AI-powered character games at Student B's Tech Lab.`,
      bizTitle: 'Biz Team',
      bizDesc: `Jin holds an MBA from Northwestern and works on IP planning. Guinea handles publishing and publicity.`,
      studentBTitle: 'About Student B',
      studentBDesc:
        'Student B is a startup built around original IP and founded to explore new standards in edutainment. The company is currently focused on publishing AIU-related books and contents.',
      whatWeMakeTitle: 'What We Make',
      bookStoryTitle: 'Book (The Animal Intelligence Story)',
      bookStoryDesc:
        'Student B creates short- and long-form fantasy narratives centered on animal agents who infiltrate the human world to study human knowledge. While presented as the story of animal agents, the series also serves as an allegory for a post-AI world.',
      bookKnowledgeTitle: 'Book (Knowledge Note Series)',
      bookKnowledgeDesc:
        'Student B also produces short educational booklets. These volumes serve as accessible companion books to the narrative series, while organizing key areas of knowledge that animal agents need to navigate the age of AI.',
      comicsTitle: 'Comic (Watching them Humans Series)',
      comicsDesc:
        "As Student B's flagship series and the entry point to its universe, the comic series presents short-form illustrated stories that explore human life in the age of AI through satire and humor.",
      charactersAlt:
        'Animal Intelligence main characters: Red Fox, Blue Bird, Green Sea Turtle, Capybara, Beaglier, Bunny, Raccoon, White Giraffe, Korat Cat, Barbary Lion, Squirrel, and Black Panther',
    },
    ko: {
      introTitle: '동물지능 프로젝트',
      introDesc: `동물지능 IP는 비밀리에 인간의 지식을 배우는 동물 요원들 그리고 그들이 세워가는 문명에 관한 이야기이며, 그 내용들을 풍자만화, 판타지 소설, 지식서 등의 풀어내고 있는 콘텐츠입니다.

동물지능 시리즈의 중심에는 간단한 질문이 있습니다. 동물들이 인간이 아는 모든 것을 배우고, 그들만의 세계를 세운다면 그들 그리고 우리의 미래는 어떻게 될까요?`,
      staffTitle: '스튜던트 비 팀소개',
      ceoTitle: '크리에이티브 리드',
      ceoDesc: `Alice는 스튜던트 비의 CEO이자 크리에이티브 리드입니다.

Alice는 학부에서 디자인과 미술을 공부한 뒤 조지타운 대학교에서 언어학을 전공하였으며 현재 동물지능 IP의 전체 디자인을 이끌고 있습니다.`,
      techLabTitle: '스튜던트 비 테크랩',
      techLabDesc: `Joseph SH는 메릴랜드 대학교에서 전기공학 박사 학위를 취득했습니다. 안전하고 즐거운 인터랙티브 캐릭터 토이를 개발합니다.

Will은 펜실베이니아 대학교에서 인공지능을, 하버드에서 공공정책을 공부했습니다. 스튜던트 비 테크랩에서 AI 기반 캐릭터 게임을 개발합니다.`,
      bizTitle: '비지니스 팀',
      bizDesc:
        'Jin은 노스웨스턴 MBA를 졸업했으며 IP 기획을 담당하고 있습니다. Guinea는 출판 및 홍보를 담당하고 있습니다.',
      studentBTitle: '스튜던트 비에 대하여',
      studentBDesc:
        '스튜던트 비는 오리지널 IP를 중심으로 에듀테인먼트의 새로운 기준을 탐구하기 위해 설립된 스타트업입니다. 회사는 현재 동물지능 관련 도서와 콘텐츠 출판에 집중하고 있습니다.',
      whatWeMakeTitle: '스튜던트 비가 만드는 것들',
      bookStoryTitle: '도서 (내이름은 시리즈)',
      bookStoryDesc:
        '스튜던트 비는 인간 세계에 잠입해 인간의 지식을 배우는 동물 요원들을 중심으로 한 단편·장편 판타지 서사를 만듭니다. 동물 요원들의 이야기로 읽히지만, 이 시리즈는 포스트 AI 세계에 대한 우화이기도 합니다.',
      bookKnowledgeTitle: '도서 (Knowledge Note 시리즈)',
      bookKnowledgeDesc:
        '동물지능 스토리에 등장하는 동물요원들이 인간 세계를 염탐하며 배운 내용들을 담고 있습니다. 인간세계의 주요 지식, 즉 과학, 사회과학, 인문학의 내용을 직관적으로 정리한 내용들을 담고 있습니다.',
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

            {language === 'en' && (
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
            )}

            <div className="about-section about-student-b">
              <h2>{t.studentBTitle}</h2>
              {t.studentBDesc.split('\n\n').map(
                (paragraph, index) =>
                  paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
              )}

              <div className="staff-role what-we-make">
                <h3>{t.whatWeMakeTitle}</h3>
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
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
