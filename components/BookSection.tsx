'use client'

import { useState, useEffect } from 'react'

interface Book {
  id: number
  title: string
  titleSmall: string
  author: string
  coverStyle: string
}

interface BookSectionData {
  sectionTitle: string
  viewAllLink: string
  books: Book[]
}

interface BookSectionProps {
  dataFile: string
  sectionClass: string
}

export default function BookSection({ dataFile, sectionClass }: BookSectionProps) {
  const [data, setData] = useState<BookSectionData | null>(null)

  useEffect(() => {
    fetch(`/data/${dataFile}`)
      .then(res => res.json())
      .then((jsonData: BookSectionData) => setData(jsonData))
      .catch(err => console.error(`Error loading ${dataFile}:`, err))
  }, [dataFile])

  if (!data) return null

  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="section-header">
          <h2>{data.sectionTitle}</h2>
          <a href={data.viewAllLink} className="view-all-link">View all</a>
        </div>
        <div className="books-grid">
          {data.books.map((book) => (
            <div key={book.id} className="book-card">
              <div
                className="book-cover"
                style={{ background: book.coverStyle }}
              >
                <div className="book-title-small">{book.titleSmall}</div>
              </div>
              <div className="book-info">
                <h3>{book.title}</h3>
                <p className="book-author">{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

