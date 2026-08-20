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
      <div className="container">
        <div className="section-header">
          <h2>{data.sectionTitle}</h2>
          <a href={data.viewAllLink} className="view-all-link">
            {language === 'ko' ? '전체보기' : 'View all'}
          </a>
        </div>
        <div className="newsupdate-articles">
          {data.articles.map((article) => (
            <article 
              key={article.id} 
              className={`newsupdate-article ${article.link ? 'clickable' : ''}`}
              onClick={() => article.link && window.open(article.link, '_blank')}
            >
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <span className="article-date">{article.date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

