'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Article {
  id: number
  title: string
  description: string
  date: string
  link?: string
  image?: string
}

interface NewsUpdateData {
  sectionTitle: string
  viewAllLink: string
  articles: Article[]
}

interface AiuNewsData {
  sectionTitle: string
  blurb: string
  articles: Article[]
}

const VISIBLE_COUNT = 2

const SNS_LINKS = [
  {
    href: 'https://www.instagram.com/studentbpress/',
    label: 'Instagram',
    icon: 'fab fa-instagram',
  },
  {
    href: 'https://x.com/studentbpress',
    label: 'X',
    icon: 'svg-x' as const,
  },
  {
    href: 'https://www.facebook.com/studentbpress/',
    label: 'Facebook',
    icon: 'fab fa-facebook-f',
  },
  {
    href: 'https://www.linkedin.com/company/animal-intelligence',
    label: 'LinkedIn',
    icon: 'fab fa-linkedin-in',
  },
] as const

export default function NewsUpdateSection() {
  const { language } = useLanguage()
  const [data, setData] = useState<NewsUpdateData | null>(null)
  const [aiuData, setAiuData] = useState<AiuNewsData | null>(null)
  const [startIndex, setStartIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    let cancelled = false
    setData(null)
    setAiuData(null)
    setStartIndex(0)

    const studentBFile = language === 'ko' ? '/data/newsupdate.ko.json' : '/data/newsupdate.json'
    const aiuFile = language === 'ko' ? '/data/aiu-news.ko.json' : '/data/aiu-news.json'

    Promise.all([
      fetch(studentBFile).then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${studentBFile}: ${res.status}`)
        return res.json()
      }),
      fetch(aiuFile).then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${aiuFile}: ${res.status}`)
        return res.json()
      }),
    ])
      .then(([studentBJson, aiuJson]: [NewsUpdateData, AiuNewsData]) => {
        if (cancelled) return
        setData({
          ...studentBJson,
          articles: [...studentBJson.articles].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ),
        })
        setAiuData({
          ...aiuJson,
          articles: [...(aiuJson.articles || [])].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          ),
        })
      })
      .catch((err) => console.error('Error loading news data:', err))

    return () => {
      cancelled = true
    }
  }, [language])

  if (!data) return null

  const maxStart = Math.max(0, data.articles.length - VISIBLE_COUNT)
  const visibleArticles = isMobile
    ? data.articles
    : data.articles.slice(startIndex, startIndex + VISIBLE_COUNT)
  const showDesktopArrows = !isMobile && data.articles.length > VISIBLE_COUNT
  const aiuArticles = aiuData?.articles ?? []
  const hasAiuArticles = aiuArticles.length > 0

  return (
    <section className="newsupdate-section">
      <div className="container newsupdate-container">
        <div className="newsupdate-layout">
          <div className="newsupdate-left-pane">
            <div className="newsupdate-left">
              <div className="newsupdate-header">
                <h2>
                  <span className="newsupdate-header-brand">Student B</span>
                  <span className="newsupdate-header-rest">
                    {language === 'ko' ? '뉴스 & 공지' : 'News & Announcements'}
                  </span>
                </h2>
                {showDesktopArrows && (
                  <div className="newsupdate-nav">
                    <button
                      type="button"
                      className="newsupdate-nav-btn"
                      aria-label={language === 'ko' ? '이전 뉴스' : 'Previous news'}
                      disabled={startIndex === 0}
                      onClick={() => setStartIndex((prev) => Math.max(0, prev - 1))}
                    >
                      <i className="fas fa-chevron-left" aria-hidden="true"></i>
                    </button>
                    <button
                      type="button"
                      className="newsupdate-nav-btn"
                      aria-label={language === 'ko' ? '다음 뉴스' : 'Next news'}
                      disabled={startIndex >= maxStart}
                      onClick={() => setStartIndex((prev) => Math.min(maxStart, prev + 1))}
                    >
                      <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    </button>
                  </div>
                )}
              </div>
              <div className="newsupdate-list">
                {visibleArticles.map((article) => (
                  <article
                    key={article.id}
                    className={`newsupdate-item ${article.link ? 'clickable' : ''}`}
                    onClick={() => article.link && window.open(article.link, '_blank')}
                  >
                    <span className="newsupdate-item-icon" aria-hidden="true">
                      ✦
                    </span>
                    <div className="newsupdate-item-body">
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      <span className="article-date">{article.date}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="newsupdate-divider" aria-hidden="true" />
          </div>

          <aside className="newsupdate-right" id="aiu-news" aria-label="AIU News">
            <div className="aiu-news-header">
              <h2 className="aiu-news-title">
                <span className="aiu-news-line1">AIU</span>
                <span className="aiu-news-line2">
                  <span className="aiu-news-line2-text">News & Agent Reports</span>
                  <span className="aiu-news-follow-group">
                    <span className="aiu-news-follow">Follow Us</span>
                    <span className="aiu-news-social">
                      {SNS_LINKS.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={item.label}
                        >
                          {item.icon === 'svg-x' ? (
                            <svg
                              className="x-social-icon"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              focusable="false"
                              fill="currentColor"
                              width="1em"
                              height="1em"
                            >
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          ) : (
                            <i className={item.icon} aria-hidden="true"></i>
                          )}
                        </a>
                      ))}
                    </span>
                  </span>
                </span>
              </h2>
            </div>

            <div className={`aiu-news-panel ${hasAiuArticles ? 'has-articles' : ''}`}>
              <p className="aiu-news-blurb">
                {aiuData?.blurb ||
                  (language === 'ko'
                    ? '요원들이 전하는 인간 세상 소식'
                    : 'Human-world news delivered by our agents')}
              </p>

              {hasAiuArticles ? (
                <div className="aiu-news-list">
                  {aiuArticles.map((article) => (
                    <article
                      key={article.id}
                      className={`aiu-news-item ${article.link ? 'clickable' : ''}`}
                      onClick={() => article.link && window.open(article.link, '_blank')}
                    >
                      {article.image && (
                        <img
                          className="aiu-news-item-image"
                          src={article.image}
                          alt=""
                          loading="lazy"
                        />
                      )}
                      <div className="aiu-news-item-copy">
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <span className="article-date">{article.date}</span>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="aiu-news-coming-soon">COMING SOON</p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
