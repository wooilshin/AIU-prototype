'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AIUProject() {
  const { language } = useLanguage()
  
  const translations = {
    en: {
      title: 'AIU Project',
      subtitle: 'A storytelling project that explores our knowledge world through animal perspectives',
      projectTitle: 'The Project',
      projectDesc: `The Animal Intelligence Project is a cross-format storytelling initiative that brings together comics, fantasy novels, and future knowledge guidebooks within one connected universe. Its name was intentionally chosen to echo Artificial Intelligence, emphasizing not only the rise of AI but also the importance of human responsibility, judgment, and choice in shaping the future.

The animal characters—who study knowledge and attempt to understand human civilization—serve as metaphors for ourselves. While the stories highlight adventure, humor, and imagination, they also carry a clear purpose: to encourage open discussion about how humans can grow and act responsibly in a rapidly changing technological world.

Designed for multiple generations, the project offers different formats for different age groups. The fantasy fiction series, which follows the animals' adventures and conflicts, is primarily written for middle and high school readers. The knowledge-focused volumes combine engineering and AI concepts with comics and accessible explanations, making them suitable for older high school and university students. The satirical comics are aimed more at adults, offering deeper reflections on how AI is transforming society.`,
      storyTitle: 'The Story',
      storyDesc: `The story begins when animals start to notice the accelerating crises of human civilization. Sensing that humans may be heading toward self-destruction, they decide to study human knowledge in order to help. However, this process does not merely transform their understanding of humans—it also triggers profound social, political, and ethical changes within the animal world itself.

As the narrative unfolds, the animals encounter a series of crises and disasters caused by the misuse of knowledge.`,
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
      projectDesc: 'Animal Intelligence Project는 동물 중심의 스토리텔링을 통해 독자들이 미래와 삶 자체에 대해 성찰하도록 초대하는 스토리 중심 콘텐츠입니다.\n\n이 프로젝트는 AI 주도 사회 변화를 반영하기 위해 풍자를 포함하지만, 균형 잡힌 성찰적 관점을 유지합니다. 제도적 실패와 윤리적 위험에 대한 비판과 함께, 전 세계적 재난과 체계적 위험을 해결하고 과학적 발견과 우주 탐사를 가능하게 하는 등 AI의 긍정적 잠재력을 탐구합니다. 두려움이나 맹목적 낙관론을 조장하기보다는, Animal Intelligence는 인간과 지능 시스템이 미래에 책임감 있게 공존할 수 있는 방법에 대한 성찰을 위한 사고의 공간을 만들고자 합니다.',
      storyTitle: '스토리',
      storyDesc: '이야기는 동물들이 인간 문명의 이상한 모순과 가속화되는 위기를 알아차리기 시작할 때 시작됩니다. 인간이 자멸로 향하고 있을 수 있다고 감지한 동물들은 도움을 주기 위해 인간의 지식을 공부하기로 결정합니다. AI의 도움으로 동물들은 과학, 역사, 기술을 배우기 시작합니다. 그러나 이 과정은 단순히 인간에 대한 그들의 이해를 변화시키는 것이 아니라, 동물 세계 자체 내에서 깊은 사회적, 정치적, 윤리적 변화를 촉발합니다.\n\n서사가 전개되면서 동물들은 AI의 오용으로 인한 일련의 위기와 재난을 만나게 됩니다. 이러한 경험을 통해 그들은 근본적인 질문들과 마주해야 합니다: 어떻게 살아야 하는가? 의미 있는 삶의 핵심은 무엇인가? 지식과 AI를 맹목적이거나 파괴적으로가 아니라 사려 깊게 사용할 수 있는 방법은 무엇인가? 그리고 다음 세대가 앞으로 나아가야 할 희망과 의미는 어떤 종류인가?\n\n이 우주는 풍자 만화, 장편 판타지 시리즈, 삽화 출판물을 포함한 다양한 형식으로 전개됩니다.',
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

          <div className="about-section">
            <h2>{t.storyTitle}</h2>
            {t.storyDesc.split('\n\n').map((paragraph, index) => (
              paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
            ))}
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

