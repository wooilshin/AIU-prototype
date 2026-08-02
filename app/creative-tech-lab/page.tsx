'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

const translations: Record<
  'en' | 'ko',
  {
    title: string
    sectionHeading: string
    deviceImageAlt: string
    paragraphs: string[]
  }
> = {
  en: {
    title: 'Creative Tech Lab',
    sectionHeading: 'Our Team',
    deviceImageAlt:
      'Conceptual visualization of the Animal Intelligence turtle device showing internal components',
    paragraphs: [
      'We want to make one thing clear: the original Animal Intelligence stories and artwork are created entirely by hand. We did not want to use AI to create the original works because we want to preserve the philosophy, identity, and artistic direction of the IP exactly as we envision it.',
      'At the same time, our Tech Team is focused on two long-term goals.',
      'First, we believe AI will become an important tool for expanding the Animal Intelligence universe into a large-scale edutainment IP. We are currently developing a Python-based production pipeline that best supports our creative workflow for images, videos, and other digital content.',
      'Second, we are laying the foundation for knowledge-based animal companion toys. Our long-term dream is to create companion animal toys that can live alongside people, talk about science, philosophy, history, and many other subjects, and inspire curiosity through everyday conversations.',
      'We also plan to share short Tech Notes and Commentaries on this page. Our goal is to openly share what we learn along the way as we build our technology. These posts will cover topics such as our Python-based production pipeline, modifying image generation and game engine, our experiments with ROS development and knowledge-based databases for interactive companion toys.',
    ],
  },
  ko: {
    title: '스튜던트 비 테크랩',
    sectionHeading: '우리 팀',
    deviceImageAlt:
      '거북이 캐릭터를 기반으로 한 Ai 피규어 개념도',
    paragraphs: [
      '한 가지를 분명히 하겠습니다. 동물지능의 원작 스토리와 아트워크는 모두 손으로 직접 만듭니다. 이 IP의 철학, 정체성, 예술적 방향을 우리가 구상한 그대로 지키기 위해, 원작 제작에는 AI를 사용하지 않았습니다.',
      '동시에 저희 테크 팀은 두 가지 장기 목표에 집중하고 있습니다.',
      '첫째, AI가 동물지능 세계관을 대규모 에듀테인먼트 IP로 확장하는 데 중요한 도구가 될 것이라 믿습니다. 현재 이미지, 영상 및 기타 디지털 콘텐츠를 위한 저희의 창작 워크플로를 가장 잘 지원하는 Python 기반 제작 파이프라인을 개발하고 있습니다.',
      '둘째, 지식 기반 동물 컴패니언 토이의 기반을 다지고 있습니다. 장기적으로는 사람과 함께 생활하며 과학, 철학, 역사 등 다양한 주제로 대화하고, 일상적인 대화를 통해 호기심을 불러일으키는 컴패니언 동물 토이를 만드는 것이 저희의 꿈입니다.',
      '또한 이 페이지에서 짧은 Tech Notes와 Commentaries를 공유할 예정입니다. 기술을 만들어 가는 과정에서 배운 내용을 솔직하게 나누는 것이 목표입니다. 게시글에서는 Python 기반 제작 파이프라인, 이미지 생성·게임 엔진 수정, 인터랙티브 컴패니언 토이를 위한 ROS 개발 및 지식 기반 데이터베이스 실험 등의 주제를 다룰 예정입니다.',
    ],
  },
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

      <section className="about-content-section about-prose-page tech-lab-section">
        <div className="container about-prose">
          <div className="about-section">
            <figure className="tech-lab-figure">
              <div className="tech-lab-photo-stack" aria-hidden="true">
                <img
                  src="/images/tech-lab/Techlab_1.jpg"
                  alt=""
                  className="tech-lab-bg-photo tech-lab-bg-photo--left"
                />
                <img
                  src="/images/tech-lab/Techlab_2.png"
                  alt=""
                  className="tech-lab-bg-photo tech-lab-bg-photo--right"
                />
              </div>
              <img
                src="/images/tech-lab/turtle-device.png"
                alt={t.deviceImageAlt}
                className="tech-lab-image"
              />
            </figure>
            <h2>{t.sectionHeading}</h2>
            {t.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
