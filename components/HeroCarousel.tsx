'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
  const [slides, setSlides] = useState<Slide[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    fetch('/data/carousel.json')
      .then(res => res.json())
      .then((data: CarouselData) => {
        setSlides(data.slides)
      })
      .catch(err => console.error('Error loading carousel:', err))
  }, [])

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
                <div className="hero-image">
                  {slide.imagePath ? (
                    <div className="hero-image-placeholder">
                      <img
                        src={slide.imagePath}
                        alt={slide.title}
                        className="hero-image-content"
                      />
                      {slide.imageLabel && (
                        <span className="image-label">{slide.imageLabel}</span>
                      )}
                    </div>
                  ) : (
                    <div
                      className="hero-image-placeholder"
                      style={{ background: slide.imageStyle }}
                    >
                      {slide.imageLabel && (
                        <span className="image-label">{slide.imageLabel}</span>
                      )}
                    </div>
                  )}
                </div>
                <div className="hero-text">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
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

