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
      introTitle: '동물지능 시리즈',
      introDesc: `동물지능은 인간의 지식을 배우기 위해 인간 세상에 파견된 동물 요원들의 이야기를 담은 출판물 시리즈입니다. 청소년에게는 동물 요원들의 모험과 판타지로, 성인에게는 AI 시대의 인간과 사회를 바라보는 철학적·사회적 우화로 읽힐 수 있으며, 세대를 넘어 함께 읽고 생각할 수 있는 ‘21세기의 새로운 우화’를 지향합니다.`,
      staffTitle: '스튜던트 비 팀 소개',
      ceoTitle: '창작팀',
      ceoDesc: `Student B의 창작팀은 정책학과 인공지능을 전공한 글 작가와 디자인과 언어교육학을 전공한 그림 작가, 두 남매로 이루어져 있습니다. 지금 우리 시대에 필요한 것은 인간다움과 미래를 이야기하는 새로운 스토리텔링이라고 믿으며, ‘동물지능(Animal Intelligence)’ 시리즈를 만드는 데 전념하고 있습니다.`,
      techLabTitle: '크리에이티브 랩',
      techLabDesc: `Student B 크리에이티브 랩은 동물지능 세계를 인터랙티브 콘텐츠로 확장을 준비하고 있습니다. 전자공학 박사 Joseph Sh와 컴퓨터공학 석사 Will이 다양한 콘텐츠와 캐릭터 기반 게임을 기획하고 있습니다.`,
      bizTitle: '비지니스 팀',
      bizDesc:
        'Jin은 노스웨스턴 MBA를 졸업했으며 IP 기획을 담당하고 있습니다. Guinea는 출판 및 홍보를 담당하고 있습니다.',
      studentBTitle: '스튜던트 비에 대하여',
      studentBDesc:
        'Student B는 ‘동물지능(Animal Intelligence)’이라는 하나의 세계관을 바탕으로 만화, 소설, 지식서 등 다양한 콘텐츠를 만드는 출판사이자 IP 스튜디오입니다. AI 시대를 살아가는 사람들에게 새로운 재미와 의미를 전할 수 있는 스토리텔링을 만드는 것을 목표로 합니다.',
      whatWeMakeTitle: '스튜던트 비가 만드는 것들',
      bookStoryTitle: '소설 (내 이름은 시리즈)',
      bookStoryDesc:
        '인간의 지식을 배우기 위해 인간 세상으로 파견된 동물 요원들의 사연과 모험, 성장을 담은 소설 시리즈입니다. 각 동물의 이야기를 통해 AI 시대의 인간과 사회를 은유적으로 그려냅니다.',
      bookKnowledgeTitle: '지식서 (지식 노트 시리즈)',
      bookKnowledgeDesc:
        '동물지능 시리즈와 함께 읽을 수 있는 짧은 교육용 지식서 시리즈입니다. 동물 요원들이 인간에게서 배운 지식을 정리하는 동시에, AI 시대의 새로운 교과서와 배움은 어떤 모습이어야 할지 상상해 보는 Student B의 실험이기도 합니다.',
      comicsTitle: '만화 (세상관찰기 시리즈)',
      comicsDesc:
        '동물지능 캐릭터들의 시선을 통해 AI 시대 인간의 삶과 사회를 관찰하고, 그 속의 모순과 변화를 풍자와 유머로 풀어낸 만화 시리즈입니다.',
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

              {language !== 'ko' && (
              <div className="staff-role">
                <h3>{t.bizTitle}</h3>
                <p>{t.bizDesc}</p>
                <p className="staff-contact-email">
                  ipbusiness [at] student-b.com
                  <br />
                  sns [at] student-b.com
                </p>
              </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
