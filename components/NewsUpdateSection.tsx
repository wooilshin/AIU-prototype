'use client'

import { useState, useEffect } from 'react'

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
  const [data, setData] = useState<NewsUpdateData | null>(null)

  useEffect(() => {
    fetch('/data/newsupdate.json')
      .then(res => res.json())
      .then((jsonData: NewsUpdateData) => setData(jsonData))
      .catch(err => console.error('Error loading news update data:', err))
  }, [])

  if (!data) return null

  return (
    <section className="newsupdate-section">
      <div className="container">
        <div className="section-header">
          <h2>{data.sectionTitle}</h2>
          <a href={data.viewAllLink} className="view-all-link">View all</a>
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

