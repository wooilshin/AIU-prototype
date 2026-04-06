'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AIUProject() {
  const { language } = useLanguage()
  
  const translations = {
    en: {
      title: 'AIU Project',
      subtitle: 'A storytelling project that explores our knowledge world',
      projectTitle: 'The Project',
      projectDesc: `The Animal Intelligence Project is a storytelling project that connects comics, fantasy novels, and knowledge books into one shared universe. The name is similar to "Artificial Intelligence," but it focuses on something different—human responsibility, judgment, and choice in the AI age.

In the story, animal characters observe the human world and learn about human knowledge. They watch how humans live, think, and make decisions. While the stories are full of adventure and imagination, they also have a clear purpose: to question the humans to think about how to live responsibly in a fast-changing world.

The project is made for different age groups. The fantasy stories, which follow the animals' adventures and conflicts, are mainly for middle and high school students. The knowledge books explain topics like engineering and AI in a simple and visual way, so they are suitable for older students, including high school and university level. The satirical comics are more for adults, offering deeper thoughts about how AI is changing society.`,
      storyTitle: 'The Story',
      storyCoverAlt:
        'Book cover: The Last Barbary Lion — Animal Intelligence, by Will Shin and Alice Shin (Student B Press)',
      storyDesc: `The story is planned as a seven-part series—a long-form narrative that portrays the Animal Intelligence Universe. It begins when the last descendant of the Barbary lion—an animal believed to be extinct—is called by the White Giraffe, the prophet of the animal world.

The animals believe that humans are destroying the world. Because of this, they decide to finally learn human knowledge—something they had long ignored—and begin a journey to do so. Their goal is to rediscover something they once had but lost—the right posture for learning and understanding knowledge.

As the story unfolds, the last Barbary lion and his team set out on this journey together.
Will the animal team be able to find that lost posture again?`,
      knowledgeBooksTitle: 'Knowledge Books',
      knowledgeBooksDesc: `Knowledge Book is a companion knowledge series to the AIU universe, written alongside the main narrative.
It serves as an organized collection of knowledge explored by animals, designed to help readers intuitively understand modern ideas through comics and storytelling.

Knowledge Book I — Observation\n\n
The animal world observes and records human concerns and conflicts from the Industrial Revolution through the World Wars and into modernity.
Watching the introduction of artificial intelligence in the present day, the animals sense crises that are likely to repeat within human society.
This volume presents a collection of 20th- and 21st-century human mathematics, philosophy, and history, compiled by a cat who leads the animals' intelligence and espionage efforts.

Knowledge Book II — Engineering\n\n
Having lost trust in humans, the animals begin studying engineering in order to solve the world's problems themselves.
Their ambition is to acquire technologies more advanced than those of humans and ultimately achieve terraforming—the ability to control planetary-scale environments.
However, internal conflicts fracture animal society, and their technological ambitions remain at the conceptual stage.
This era focuses on birds trained in engineering and reptiles with strong IT expertise, exploring applied mathematics, computer science, environmental engineering, and energy engineering.

Knowledge Book III — New Design\n\n
After the collapse of animal society, those who remain realize that technology alone is insufficient to solve the world's problems.
To avoid repeating humanity's long-standing mistake of "technology first, institutions later," the animals decide to redesign society itself.
Centered on cattle who study law and raccoons who study economics, this volume explores AI ethics and new forms of economics shaped by digital technology.

Knowledge Book IV — Expansion\n\n
Exhausted by endless internal conflicts, some birds and Australian marsupials choose not to participate in the new social design.
Instead, they plan to leave Earth. Drawing on materials taken from advanced human research institutes, they begin studying cosmology, survival in space, and the construction of extraterrestrial habitats.
Although they ultimately recognize the limits of their technology and decide to remain on Earth, their research becomes a crucial foundation for the future expansion of the world by both humans and animals.
This volume contains the animals' explorations of cosmology, biology, neuroscience, and urban engineering.`
    },
    ko: {
      title: 'AIU 프로젝트',
      subtitle: '새로운 스토리텔링을 만들어 나갑니다',
      projectTitle: '프로젝트',
      projectDesc: 'Animal Intelligence Project는 만화, 판타지 소설, 지식 도서를 하나의 공유 세계관으로 잇는 스토리텔링 프로젝트입니다. 이름은 “인공지능(Artificial Intelligence)”과 비슷하지만, 초점은 다릅니다—AI 시대에 인간의 책임, 판단, 선택입니다.\n\n이야기 속 동물들은 인간 세계를 관찰하고 인간의 지식을 배웁니다. 인간이 어떻게 살고, 생각하고, 결정하는지 지켜봅니다. 이야기는 모험과 유머, 상상력이 가득하면서도 분명한 목적을 담고 있습니다. 급변하는 세상에서 어떻게 책임감 있게 살아갈지 세계를 질문하도록 이끕니다.\n\n프로젝트는 연령대별로 다르게 구성되어 있습니다. 동물들의 모험과 갈등을 다루는 판타지 이야기는 주로 중·고등학생을 위해 쓰였습니다. 공학과 AI 같은 주제를 쉽고 시각적으로 풀어 주는 지식 도서는 고등학생과 대학 수준을 포함한 더 나이 든 학생들에게 적합합니다. 풍자적 만화는 성인을 위해 AI가 사회를 어떻게 바꾸는지 더 깊게 생각해 보게 합니다.',
      storyTitle: '스토리',
      storyCoverAlt:
        '도서 표지: The Last Barbary Lion — Animal Intelligence, Will Shin·Alice Shin (Student B Press)',
      storyDesc: '이야기는 7부작 장편 서사로 기획되어 있으며, 동물들의 세계를 그립니다. 멸종한 것으로 여겨졌던 바버리 사자의 마지막 자손이 동물 세계의 예언자인 하얀 기린(White Giraffe)에게 부름받으며 시작됩니다.\n\n동물들은 인간이 세상을 망가뜨리고 있다고 믿습니다. 그래서 오랫동안 외면해 온 인간의 지식을 마침내 배우기로 하고, 그 길을 떠나는 여정을 시작합니다. 그들의 목표는 한때 가졌다가 잃어버린 것—지식을 배우고 이해하는 올바른 자세—을 다시 찾는 것입니다.\n\n이야기가 전개되면서 마지막 바버리 사자와 그의 팀은 함께 이 여정을 떠납니다.\n동물 팀은 그 잃어버린 자세를 다시 찾을 수 있을까요?',
      knowledgeBooksTitle: 'Knowledge Books',
      knowledgeBooksDesc: 'Knowledge Book은 메인 서사와 함께 작성된 AIU 세계에 대한 동반 지식 시리즈입니다.\n\n이 시리즈는 동물들이 탐구한 지식의 체계적인 모음집으로, 만화와 스토리텔링을 통해 독자들이 현대적 아이디어를 직관적으로 이해할 수 있도록 설계되었습니다.\n\nKnowledge Book I — Observation\n동물 세계는 산업혁명부터 세계대전을 거쳐 현대에 이르기까지 인간의 관심사와 갈등을 관찰하고 기록합니다.\n현재 인공지능의 도입을 지켜보면서, 동물들은 인간 사회 내에서 반복될 가능성이 있는 위기를 감지합니다.\n이 권은 동물들의 정보 및 첩보 활동을 이끄는 고양이가 편집한 20세기와 21세기 인간의 수학, 철학, 역사 모음집을 제시합니다.\n\nKnowledge Book II — Engineering\n인간에 대한 신뢰를 잃은 동물들은 세계의 문제를 스스로 해결하기 위해 공학을 공부하기 시작합니다.\n그들의 야망은 인간보다 더 진보된 기술을 획득하고 궁극적으로 테라포밍—행성 규모의 환경을 제어하는 능력—을 달성하는 것입니다.\n그러나 내부 갈등이 동물 사회를 분열시키고, 그들의 기술적 야망은 개념적 단계에 머물러 있습니다.\n이 시대는 공학을 배운 새들과 강한 IT 전문성을 가진 파충류에 초점을 맞추며, 응용수학, 컴퓨터 과학, 환경 공학, 에너지 공학을 탐구합니다.\n\nKnowledge Book III — Design\n동물 사회의 붕괴 이후, 남은 자들은 기술만으로는 세계의 문제를 해결하기에 부족하다는 것을 깨닫습니다.\n인간의 오래된 실수인 "기술 우선, 제도 나중"을 반복하지 않기 위해, 동물들은 사회 자체를 재설계하기로 결정합니다.\n법을 공부하는 소와 경제를 공부하는 너구리를 중심으로, 이 권은 AI 윤리와 디지털 기술이 형성한 새로운 형태의 경제를 탐구합니다.\n\nKnowledge Book IV — Expansion\n끝없는 내부 갈등에 지친 일부 새들과 호주 유대류들은 새로운 사회 설계에 참여하지 않기로 선택합니다.\n대신, 그들은 지구를 떠날 계획을 세웁니다. 고급 인간 연구소에서 가져온 자료를 바탕으로, 그들은 우주론, 우주에서의 생존, 외계 거주지 건설을 공부하기 시작합니다.\n비록 그들이 궁극적으로 자신들의 기술의 한계를 인식하고 지구에 남기로 결정하지만, 그들의 연구는 인간과 동물 모두에 의한 세계의 미래 확장을 위한 중요한 기초가 됩니다.\n이 권은 동물들의 우주론, 생물학, 신경과학, 도시 공학 탐구를 담고 있습니다.'
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

          <div className="about-section aiu-story-section">
            <h2>{t.storyTitle}</h2>
            <div className="aiu-story-body">
              <figure className="aiu-story-cover">
                <img
                  src="/images/aiu-project/the-last-barbary-lion-cover.png"
                  alt={t.storyCoverAlt}
                />
              </figure>
              {t.storyDesc.split('\n\n').map((paragraph, index) => (
                paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h2>{t.knowledgeBooksTitle}</h2>
            {t.knowledgeBooksDesc.split('\n\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

