'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AIUProject() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: 'AIU Project',
      subtitle:
        'A story-driven IP universe where animals learn from humans and use that knowledge to build a civilization of their own.',
      introDesc: `AIU, short for Animal Intelligence Universe, is an original IP project about animals who observe humans, learn human knowledge, and begin to build their own civilization.

The project brings together comics, fantasy novels, illustrated knowledge books, character goods, music, short-form animation, and educational content into one connected world.

At the center of AIU is a simple question:

What if animals learned everything humans know — and built a world of their own?`,
      ipTitle: 'The IP',
      ipDesc: `AIU is designed as a multi-format character IP.

The fantasy stories follow the animals as they explore, learn, fight, and grow.
The knowledge books introduce topics such as science, technology, space, philosophy, economics, and society in a visual and accessible way.
The satirical comics use animal characters to reflect on AI, education, power, and the strange direction of the human world.

Together, these stories and characters can expand across publishing, animation, education, merchandise, music, and digital content.`,
      visionTitle: 'Our Vision',
      visionDesc: `AIU is not just a story about animals.

It is a new way to turn knowledge into characters, stories, and worlds.

By making learning emotional, visual, and story-driven, AIU aims to become a global knowledge-based character IP for readers, learners, and audiences of all ages.`,
    },
    ko: {
      title: 'AIU 프로젝트',
      subtitle:
        '동물들이 인간에게서 배우고, 그 지식으로 자신만의 문명을 세워 가는 스토리 중심 IP 세계관입니다.',
      introDesc: `AIU는 Animal Intelligence Universe의 약자로, 인간을 관찰하고 인간의 지식을 배우며 스스로의 문명을 세워 가기 시작하는 동물들에 관한 오리지널 IP 프로젝트입니다.

이 프로젝트는 만화, 판타지 소설, 그림 지식서, 캐릭터 굿즈, 음악, 숏폼 애니메이션, 교육 콘텐츠를 하나의 연결된 세계로 묶습니다.

AIU의 중심에는 간단한 질문이 있습니다.

동물들이 인간이 아는 모든 것을 배우고, 그들만의 세계를 세운다면 어떻게 될까요?`,
      ipTitle: 'The IP',
      ipDesc: `AIU는 다양한 형식의 캐릭터 IP로 설계되었습니다.

판타지 이야기는 동물들이 탐험하고, 배우고, 싸우고, 성장하는 과정을 따라갑니다.
지식 도서는 과학, 기술, 우주, 철학, 경제, 사회 같은 주제를 시각적이고 접근하기 쉬운 방식으로 소개합니다.
풍자 만화는 동물 캐릭터를 통해 AI, 교육, 권력, 인간 세계의 기묘한 방향을 비춰 봅니다.

이 이야기와 캐릭터들은 출판, 애니메이션, 교육, 머천다이즈, 음악, 디지털 콘텐츠로 확장될 수 있습니다.`,
      visionTitle: 'Our Vision',
      visionDesc: `AIU는 단순히 동물에 관한 이야기가 아닙니다.

지식을 캐릭터, 이야기, 세계로 바꾸는 새로운 방식입니다.

학습을 감정적이고, 시각적이며, 스토리 중심으로 만들어, AIU는 모든 연령의 독자·학습자·관객을 위한 글로벌 지식 기반 캐릭터 IP가 되는 것을 목표로 합니다.`,
    },
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
            {t.introDesc.split('\n\n').map(
              (paragraph, index) =>
                paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
            )}
          </div>

          <div className="about-section">
            <h2>{t.ipTitle}</h2>
            {t.ipDesc.split('\n\n').map(
              (paragraph, index) =>
                paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
            )}
          </div>

          <div className="about-section">
            <h2>{t.visionTitle}</h2>
            {t.visionDesc.split('\n\n').map(
              (paragraph, index) =>
                paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
