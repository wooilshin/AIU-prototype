'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

interface Slide {
  id: number
  imageLabel?: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
  imageStyle?: string
  imagePath?: string
}

interface CarouselData {
  slides: Slide[]
}

export default function HeroCarousel() {
  const { language } = useLanguage()
  const [slides, setSlides] = useState<Slide[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    let cancelled = false
    setSlides([])

    const dataFile = language === 'ko' ? '/data/carousel.ko.json' : '/data/carousel.json'
    fetch(dataFile)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${dataFile}: ${res.status}`)
        return res.json()
      })
      .then((data: CarouselData) => {
        if (!cancelled) setSlides(data.slides)
      })
      .catch((err) => console.error('Error loading carousel:', err))

    return () => {
      cancelled = true
    }
  }, [language])

  useEffect(() => {
    if (slides.length === 0) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  if (slides.length === 0) return null

  const changeSlide = (direction: number) => {
    setCurrentSlide((prev) => {
      if (direction > 0) {
        return (prev + 1) % slides.length
      } else {
        return prev === 0 ? slides.length - 1 : prev - 1
      }
    })
  }

  const storeLabel = language === 'ko' ? '스토어 둘러보기' : 'Browse Store'

  return (
    <section className="hero-section">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="container">
              <div className="hero-content">
                <div className="hero-text">
                  {slide.imageLabel && (
                    <p className="hero-status">{slide.imageLabel}</p>
                  )}
                  <h1>
                    {slide.title.split('\n').map((line, lineIndex, lines) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < lines.length - 1 && <br />}
                      </span>
                    ))}
                  </h1>
                  <p>{slide.description}</p>
                </div>

                <div className="hero-panel">
                  <div className="hero-image">
                    {slide.imagePath ? (
                      <div className="hero-image-placeholder">
                        <img
                          src={slide.imagePath}
                          alt={slide.title}
                          className="hero-image-content"
                        />
                      </div>
                    ) : (
                      <div
                        className="hero-image-placeholder"
                        style={{ background: slide.imageStyle }}
                      />
                    )}
                  </div>
                  <div className="hero-panel-actions">
                    {slide.buttonLink.startsWith('http') ? (
                      <a
                        href={slide.buttonLink}
                        className="cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {slide.buttonText}
                      </a>
                    ) : (
                      <Link href={slide.buttonLink} className="cta-button">
                        {slide.buttonText}
                      </Link>
                    )}
                    <a href="#store" className="hero-secondary-button">
                      {storeLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button className="carousel-btn prev" onClick={() => changeSlide(-1)}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="carousel-btn next" onClick={() => changeSlide(1)}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  )
}
