'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

type TechLabSection = {
  title: string
  paragraphs: string[]
}

const translations: Record<
  'en' | 'ko',
  {
    title: string
    deviceImageAlt: string
    sections: TechLabSection[]
  }
> = {
  en: {
    title: 'Creative Tech Lab',
    deviceImageAlt:
      'Conceptual visualization of the Animal Intelligence turtle device showing internal components',
    sections: [
      {
        title: 'What our Tech team is building',
        paragraphs: [
          'We are a small tech team trying to bring our Animal Intelligence characters into the human world. Using AI and robotics, we are exploring a simple idea: what if characters were not just something you watch, but something you live with?',
          'Organizations like Disney Imagineering have already shown that characters can exist in physical space in surprisingly believable ways. But those characters are still built mainly for performance—for short moments of entertainment. What we want is different. We want to give characters a voice that can think and grow, and expand the field of edutainment.'
        ]
      },
      {
        title: 'What is edutainment?',
        paragraphs: [
          'Edutainment means learning through fun—through movies, games, music, and stories. It may sound like a new concept, but in truth, it has been part of our lives for a long time. One of the most well-known examples is Sesame Street.',
          'Think back to characters like Elmo, Cookie Monster, and even the big yellow bird. Without even realizing it, children learn the alphabet, numbers, and even their sense of humor. At least at that stage, learning does not feel like studying.',
          'But as time passes, Sesame Street slowly fades away, and that kind of learning does not continue forever. As we grow older, the knowledge we need to learn becomes more complex—too complex for Elmo and his friends to explain. The tone also changes. What once felt playful becomes serious. And in their place, teachers with serious faces take over.',
          'Is this the limit of edutainment?'
        ]
      },
      {
        title: 'A new movement in edutainment',
        paragraphs: [
          'For the first time, it feels like a real edutainment movement could begin. The ultimate form of edutainment now feels within reach. There are two reasons for this.',
          'First, we now have tools that can explain knowledge in ways that are easier than ever before. Second, characters are no longer confined to screens or pages—they can begin to exist alongside us.',
          'Imagine not just watching a character but living with one. You talk with them, argue with them, and learn from them. Not like a distant, overly serious teacher, but like a friend.',
          'What we are building is still small. We are beginning with the simplest forms—AI-connected figures—and will gradually move toward something more complex. Over time, these characters will sit next to you, read with you, and think with you. Ultimately, this is what we aim for: learning becomes something you live with, something that grows with you, and maybe, for the first time, something that can truly feel interesting again.'
        ]
      }
    ]
  },
  ko: {
    title: 'Creative Tech Lab',
    deviceImageAlt:
      'Animal Intelligence 거북이 캐릭터를 기반으로 한 개념 시각화(내부 구성 요소 표시)',
    sections: [
      {
        title: '우리 기술 팀이 하려는 일',
        paragraphs: [
          '우리는 Animal Intelligence의 캐릭터들을 인간의 세계로 가져오려는 작은 기술 팀입니다. AI와 로보틱스를 활용해 이런 질문을 탐구하고 있습니다. 캐릭터가 그저 보는 존재가 아니라, 함께 사는 존재가 된다면 어떨까?',
          '디즈니 이매지니어링 같은 조직은 이미 캐릭터가 물리적 공간에 놀랄 만큼 자연스럽게 존재할 수 있음을 보여 주었습니다. 하지만 그런 캐릭터들은 여전히 연주(퍼포먼스)를 위해—짧은 순간의 오락을 위해—주로 만들어집니다. 우리가 원하는 것은 다릅니다. 생각하고 성장할 수 있는 목소리를 캐릭터에게 주고, 에듀테인먼트의 영역을 넓히고 싶습니다.'
        ]
      },
      {
        title: '에듀테인먼트란?',
        paragraphs: [
          '에듀테인먼트는 영화, 게임, 음악, 이야기를 통해 즐거움 속에서 배우는 것을 뜻합니다. 새로운 개념처럼 들릴 수도 있지만, 사실 오랫동안 우리 삶의 일부였습니다. 가장 잘 알려진 예 중 하나가 세서미 스트리트입니다.',
          '엘모, 쿠키 몬스터, 그리고 큰 노란 새까지 떠올려 보세요. 아이들은 스스로도 모르게 알파벳과 숫자, 심지어 유머 감각까지 배웁니다. 적어도 그 시기에는 배움이 공부처럼 느껴지지 않습니다.',
          '하지만 시간이 지나면 세서미 스트리트는 서서히 멀어지고, 그런 식의 배움도 영원히 이어지지는 않습니다. 나이가 들수록 배워야 할 지식은 더 복잡해지고—엘모와 친구들이 설명하기엔 너무 복잡합니다. 분위기도 바뀝니다. 한때 장난스러웠던 것은 진지해지고, 그 자리를 진지한 표정의 선생님들이 대신합니다.',
          '그렇다면 이것이 에듀테인먼트의 한계일까요?'
        ]
      },
      {
        title: '에듀테인먼트의 새로운 움직임',
        paragraphs: [
          '처음으로, 진짜 에듀테인먼트 운동이 시작될 수 있다는 느낌이 듭니다. 궁극의 에듀테인먼트 형태가 이제 손에 닿을 것 같습니다. 이유는 두 가지입니다.',
          '첫째, 지금은 그 어느 때보다 쉽게 지식을 설명해 줄 도구가 있습니다. 둘째, 캐릭터는 더 이상 화면이나 페이지에만 갇혀 있지 않고, 우리 곁에 존재하기 시작할 수 있습니다.',
          '그리고 그것이 모든 것을 바꿉니다.',
          '캐릭터를 보기만 하는 것이 아니라 함께 사는 것을 상상해 보세요. 대화하고, 다투고, 그들에게서 배웁니다. 먼 곳의 지나치게 진지한 선생님이 아니라 친구처럼요. 그런 관계에서는 배움이 억지로 해야 할 일이 아니게 됩니다. 스스로 하고 싶은 일이 됩니다.',
          '우리가 만들고 있는 것은 아직 작습니다. 가장 단순한 형태—AI에 연결된 피규어—부터 시작해 점점 더 복잡한 것으로 나아갈 예정입니다. 시간이 지나면 이 캐릭터들은 옆에 앉아 함께 읽고, 함께 생각하게 될 것입니다. 한 걸음씩, 사물이 아니라 존재로 바뀌기 시작할 것입니다.',
          '궁극적으로 우리가 지향하는 것은 이것입니다. 배움이 함께 사는 것이 되고, 함께 성장하는 것이 되며, 어쩌면 처음으로 진짜 흥미롭게 느껴질 수 있는 무언가가 되는 것입니다.'
        ]
      }
    ]
  }
}

export default function CreativeTechLabPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <>
      <Header />
      <section className="about-hero">
        <div className="container">
          <h1>{t.title}</h1>
        </div>
      </section>

      <section className="tech-lab-section">
        <div className="container">
          <div className="tech-lab-page-layout">
            <aside className="tech-lab-visual-column">
              <img
                src="/images/tech-lab/turtle-device.png"
                alt={t.deviceImageAlt}
                className="tech-lab-image"
              />
            </aside>
            <div className="tech-lab-text-column tech-lab-content">
              {t.sections.map((section, sectionIndex) => (
                <div key={section.title} className="tech-lab-content-block">
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={`${sectionIndex}-${pIndex}`}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
