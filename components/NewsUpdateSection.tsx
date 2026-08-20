'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Article {
  id: number
  title: string
  description: string
  date: string
  link?: string
}

interface NewsUpdateData {
  sectionTitle: string
  viewAllLink: string
  articles: Article[]
}

export default function NewsUpdateSection() {
  const { language } = useLanguage()
  const [data, setData] = useState<NewsUpdateData | null>(null)

  useEffect(() => {
    let cancelled = false
    setData(null)

    const dataFile = language === 'ko' ? '/data/newsupdate.ko.json' : '/data/newsupdate.json'
    fetch(dataFile)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${dataFile}: ${res.status}`)
        return res.json()
      })
      .then((jsonData: NewsUpdateData) => {
        if (!cancelled) {
          setData({
            ...jsonData,
            articles: [...jsonData.articles].sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            ),
          })
        }
      })
      .catch((err) => console.error('Error loading news update data:', err))

    return () => {
      cancelled = true
    }
  }, [language])

  if (!data) return null

  return (
    <section className="newsupdate-section">
      <div className="container newsupdate-container">
        <div className="newsupdate-header">
          <h2>{data.sectionTitle}</h2>
        </div>
        <div className="newsupdate-list">
          {data.articles.map((article) => (
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
    </section>
  )
}
