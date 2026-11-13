'use client'

import { useLanguage } from '@/contexts/LanguageContext'

type Localized = { en: string; ko: string }

type Cover = {
  image: string
  alt: string
  link: string
}

type Highlight = {
  text: Localized
  source?: Localized
  link?: string
}

type Showcase = {
  id: string
  title: Localized
  headline: Localized
  body: Localized
  covers: Cover[]
  highlights: Highlight[]
  quote: Localized
  character: { image: string; alt: string }
}

const SHOWCASES: Showcase[] = [
  {
    id: 'watching-them-humans',
    title: {
      en: 'Watching Them Humans in the AI Age',
      ko: '동물지능 《AI 시대 동물들의 세상관찰기》',
    },
    headline: {
      en: 'The Animal Agents Have Been Deployed!',
      ko: '동물 요원들이 파견되다!',
    },
    body: {
      en: 'Sent into the human world to observe people, the animal agents discover a suspicious object: the monitor. As the monitor, a metaphor for AI, makes its way into the animal world, strange changes begin to unsettle their once-peaceful lives. Familiar animals from fables and folktales, including the fox and the crane, the tortoise and the hare, and the black swan, come together to send a warning to the humans of our time.',
      ko: '인간을 관찰하기 위해 인간 세계로 파견된 동물 요원들은 수상한 물건 하나를 발견한다. 그것은 바로 ‘모니터’. AI를 은유하는 모니터가 동물 세계에 들어오면서, 평화롭던 그들의 세계에도 이상한 변화가 일어나기 시작한다. 우리에게 익숙했던 우화와 이야기 속 동물들, 여우와 학, 토끼와 거북이, 블랙스완 등이 총출동해 지금 시대 인간들에게 경고의 메시지를 보낸다.',
    },
    covers: [
      {
        image: '/images/books/Comic1.svg',
        alt: 'Watching Them Humans in the AI Age',
        link: 'https://www.amazon.com/Watching-Them-Humans-Age-Intelligence-ebook/dp/B0GX555DH9/',
      },
    ],
    highlights: [
      {
        text: {
          en: 'Selected for the 2026 KOMACON Diversity Comics Production Program',
          ko: '2026 한국 만화진흥원 다양성만화 제작 선정작',
        },
      },
    ],
    quote: {
      en: 'A comic series that uses satire and humor to capture the anxiety, confusion, and hope animals face in a rapidly changing world.',
      ko: '빠르게 변하는 세상 속에서 동물들이 마주하는 불안과 혼란, 그리고 희망을 풍자와 유머로 풀어낸 만화 시리즈.',
    },
    character: { image: '/images/home/red-fox.png', alt: 'Red Fox' },
  },
  {
    id: 'my-name-is-series',
    title: {
      en: 'My Name Is... Series',
      ko: '동물지능 《내 이름은...》 시리즈',
    },
    headline: {
      en: 'The Stories of the Animal Agents',
      ko: '동물요원들의 사연',
    },
    body: {
      en: 'My Name Is Nacho and My Name Is Halo are character story books that introduce the animal agents. Within the vast world of the animal agents, rookie agents Nacho and Halo carry out their first missions and, one step at a time, discover the human world and what it means to be human. Each character book can be read as a standalone story, and together they connect into one larger story within the Animal Intelligence Universe.',
      ko: '내 이름은 나초, 내 이름은 헤일로는 동물 요원들을 소개하는 캐릭터 스토리 시리즈이다. 동물 요원들의 거대한 세계관 속에서, 신입 요원 나초 그리고 헤일로가 첫 번째 임무를 수행하며 인간 세상과 인간다움의 의미를 하나씩 알아가게 된다. 각 캐릭터북은 하나의 독립된 이야기로 읽을 수 있으며, 동물지능 세계관 아래 하나의 더 큰 이야기로 연결된다.',
    },
    covers: [
      {
        image: '/images/books/MyNameIsNacho.jpg',
        alt: 'My Name Is Nacho',
        link: 'https://www.amazon.com/stores/author/B0FLCCNGG7',
      },
    ],
    highlights: [
      {
        text: {
          en: '#1 in Brunch Comics & Webtoons for 10 consecutive weeks',
          ko: '브런치 만화웹툰 분야 10주 연속 1위',
        },
      },
    ],
    quote: {
      en: 'A collection of short stories and comics revealing the hidden stories of animal agents such as Nacho, Halo, Python, Swan, and White Giraffe.',
      ko: '나초, 헤일로, 파이썬, 백조, 흰기린 등 동물 요원들의 숨겨진 사연을 만화와 스토리로 풀어낸 단편 모음집',
    },
    character: { image: '/images/home/nacho.png', alt: 'Nacho' },
  },
  {
    id: 'animal-intelligence-universe',
    title: {
      en: 'Animal Intelligence Universe',
      ko: '동물지능 유니버스',
    },
    headline: {
      en: 'The Forgotten History of Animal Civilization',
      ko: '잊혀진 동물 문명의 역사',
    },
    body: {
      en: 'The Book of Forgotten Animals explores history through the eyes of the ancestors of today’s animal agents, including extinct species that once shaped the world. The Guidebook to the Animal Intelligence Universe introduces the seven animal civilizations, 50+ animal agents, and the roles they play in the AIU world.',
      ko: '《잊혀진 동물들의 책》은 한때 세상을 바꾼 멸종 동물들을 포함해, 동물지능 유니버스 조상들의 눈으로 역사를 바라본다. 함께 읽는 《동물지능 유니버스 가이드북》은 일곱 개의 동물 문명과 그 캐릭터, 문화, 그리고 오늘날 세상에서 그들이 맡은 역할을 소개한다.',
    },
    covers: [
      {
        image: '/images/books/History.jpg',
        alt: 'Animal Intelligence History: The Book of Forgotten Animals',
        link: 'https://www.amazon.com/Animal-Intelligence-History-Forgotten-Animals-ebook/dp/B0HMMJ19CC/',
      },
      {
        image: '/images/books/Guide.svg',
        alt: 'Guidebook to the Animal Intelligence Universe',
        link: 'https://www.amazon.com/gp/product/B0GBQKZHD5',
      },
    ],
    highlights: [
      {
        text: {
          en: '“A rich and surprising alternative vision of the past.”',
          ko: '“과거에 대한 풍부하고 놀라운 또 하나의 시선”',
        },
        source: { en: 'Kirkus Reviews, Get It badge', ko: '커커스 리뷰, Get It 배지' },
        link: 'https://www.kirkusreviews.com/book-reviews/will-shin/animal-intelligence-2/',
      },
      {
        text: {
          en: '“Animal Intelligence invites readers into a universe where whales negotiate, cats critique civilisation and extinct species finally tell their side of the story — and the result is a surprisingly elegant argument for seeing the planet anew.”',
          ko: '“고래가 협상하고, 고양이가 문명을 비평하며, 멸종한 종들이 마침내 자신들의 이야기를 들려주는 세계로 독자를 초대한다. 그 결과는 지구를 새롭게 바라보자는, 놀랍도록 우아한 제안이다.”',
        },
        source: { en: 'The European (UK)', ko: '영국 유로피언지 도서소개' },
        link: 'https://the-european.eu/story-54107/book-review-a-history-of-the-world-told-by-animals-and-it-changes-everything.html',
      },
    ],
    quote: {
      en: 'A history of the world told by animals, from the civilizations they built to the species we forgot.',
      ko: '동물들이 세운 문명부터 우리가 잊은 종들까지, 동물들이 들려주는 세계의 역사.',
    },
    character: { image: '/images/home/white-giraffe.png', alt: 'White Giraffe' },
  },
]

export default function PublicationShowcase() {
  const { language } = useLanguage()
  const clickToBuy = language === 'ko' ? '구매하기' : 'Click to buy'

  return (
    <div className="pub-showcase">
      {SHOWCASES.map((item) => (
        <section key={item.id} id={item.id} className="pub-section">
          <div className="container pub-container">
            <h2 className="pub-title">{item.title[language]}</h2>

            <div className="pub-grid">
              <div className="pub-covers">
                {item.covers.map((cover) => (
                  <a
                    key={cover.image}
                    className="pub-cover"
                    href={cover.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="pub-cover-frame">
                      <img src={cover.image} alt={cover.alt} className="pub-cover-image" />
                    </span>
                    <span className="pub-cover-cta">{clickToBuy}</span>
                  </a>
                ))}
              </div>

              <div className="pub-copy">
                <h3 className="pub-headline">{item.headline[language]}</h3>
                <p className="pub-body">{item.body[language]}</p>
              </div>

              <aside className="pub-aside">
                <ul className="pub-highlights">
                  {item.highlights.map((highlight, index) => (
                    <li key={index}>
                      <span className="pub-highlight-text">{highlight.text[language]}</span>
                      {highlight.source &&
                        (highlight.link ? (
                          <a
                            className="pub-highlight-source"
                            href={highlight.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {highlight.source[language]}
                          </a>
                        ) : (
                          <span className="pub-highlight-source">{highlight.source[language]}</span>
                        ))}
                    </li>
                  ))}
                </ul>
                <img
                  className="pub-character"
                  src={item.character.image}
                  alt={item.character.alt}
                />
              </aside>
            </div>

            <blockquote className="pub-quote">
              <p>{item.quote[language]}</p>
            </blockquote>
          </div>
        </section>
      ))}
    </div>
  )
}
