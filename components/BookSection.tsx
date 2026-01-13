'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Book {
  id: number
  title: string
  description?: string
  coverStyle?: string
  coverImage?: string
  link?: string
}

interface BookSectionData {
  sectionTitle: string
  sectionDescription?: string
  viewAllLink: string
  books: Book[]
}

interface BookSectionProps {
  dataFile: string
  sectionClass: string
}

export default function BookSection({ dataFile, sectionClass }: BookSectionProps) {
  const { language } = useLanguage()
  const [data, setData] = useState<BookSectionData | null>(null)

  useEffect(() => {
    // dataFile이 "new-releases.json" 형식이면 baseFileName은 "new-releases"
    const baseFileName = dataFile.endsWith('.json') ? dataFile.replace('.json', '') : dataFile
    const langFile = language === 'ko' ? `${baseFileName}.ko.json` : `${baseFileName}.json`
    fetch(`/data/${langFile}`)
      .then(res => res.json())
      .then((jsonData: BookSectionData) => setData(jsonData))
      .catch(err => console.error(`Error loading ${langFile}:`, err))
  }, [dataFile, language])

  if (!data) return null

  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="section-header">
          <div>
            <h2>{data.sectionTitle}</h2>
            {data.sectionDescription && (
              <p className="section-description">{data.sectionDescription}</p>
            )}
          </div>
          <a href={data.viewAllLink} className="view-all-link">
            {language === 'ko' ? '전체보기' : 'View all'}
          </a>
        </div>
        <div className="books-grid">
          {data.books.map((book) => {
            const bookCardContent = (
              <>
                {book.coverImage ? (
                  <div className="book-cover">
                    <img 
                      src={book.coverImage} 
                      alt={book.title}
                      className="book-cover-image"
                    />
                  </div>
                ) : (
                  <div
                    className="book-cover"
                    style={{ background: book.coverStyle }}
                  >
                    {book.description && (
                      <div className="book-title-small">{book.description}</div>
                    )}
                  </div>
                )}
                <div className="book-info">
                  <h3>
                    {book.title.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < book.title.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                  {book.description && (
                    <p className="book-description">{book.description}</p>
                  )}
                </div>
              </>
            )

            return book.link ? (
              <a
                key={book.id}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="book-card"
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                {bookCardContent}
              </a>
            ) : (
              <div key={book.id} className="book-card">
                {bookCardContent}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

