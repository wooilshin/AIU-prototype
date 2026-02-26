'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CreativeTechLabPage() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: 'Creative Tech Lab',
      conceptHeading: 'The Concept',
      paragraphs: [
        'Our first-generation device is a static figurine that connects to an AI system to enable meaningful, character-driven conversations.',
        'At this stage, our primary focus is not on hardware complexity, but on validating and refining the AI system — including dialogue quality, character consistency, and system stability.',
        'Future generation devices will explore the addition of movement and enhanced interactivity, aligned with today\'s technological maturity.',
        'Our core goal — whether through storytelling or interactive devices — is to create experiences that are engaging, educational, and safe.',
        'We aim to design products that genuinely entertain while also supporting learning and positive development.'
      ],
      warning:
        '(WARNING) The current image is a conceptual visualization based on the main turtle character from the Animal Intelligence universe. It is not a commercial product and has not yet been released for sale.'
    },
    ko: {
      title: 'Creative Tech Lab',
      conceptHeading: 'The Concept',
      paragraphs: [
        'Our first-generation device is a static figurine that connects to an AI system to enable meaningful, character-driven conversations.',
        'At this stage, our primary focus is not on hardware complexity, but on validating and refining the AI system — including dialogue quality, character consistency, and system stability.',
        'Future generation devices will explore the addition of movement and enhanced interactivity, aligned with today\'s technological maturity.',
        'Our core goal — whether through storytelling or interactive devices — is to create experiences that are engaging, educational, and safe.',
        'We aim to design products that genuinely entertain while also supporting learning and positive development.'
      ],
      warning:
        '(WARNING) The current image is a conceptual visualization based on the main turtle character from the Animal Intelligence universe. It is not a commercial product and has not yet been released for sale.'
    }
  }

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
          <div className="tech-lab-layout">
            <div className="tech-lab-image-wrapper">
              <img
                src="/images/tech-lab/turtle-device.png"
                alt="Conceptual visualization of the Animal Intelligence turtle device showing internal components"
                className="tech-lab-image"
              />
            </div>

            <div className="tech-lab-content">
              <h2>{t.conceptHeading}</h2>
              {t.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p className="tech-lab-warning">{t.warning}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}


