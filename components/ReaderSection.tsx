'use client'

import { useState, useEffect } from 'react'

interface Article {
  id: number
  title: string
  description: string
  author: string
}

interface ReaderData {
  sectionTitle: string
  viewAllLink: string
  articles: Article[]
}

export default function ReaderSection() {
  const [data, setData] = useState<ReaderData | null>(null)

  useEffect(() => {
    fetch('/data/reader.json')
      .then(res => res.json())
      .then((jsonData: ReaderData) => setData(jsonData))
      .catch(err => console.error('Error loading reader data:', err))
  }, [])

  if (!data) return null

  return (
    <section className="reader-section">
      <div className="container">
        <div className="section-header">
          <h2>{data.sectionTitle}</h2>
          <a href={data.viewAllLink} className="view-all-link">View all</a>
        </div>
        <div className="reader-articles">
          {data.articles.map((article) => (
            <article key={article.id} className="reader-article">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <span className="article-author">{article.author}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

