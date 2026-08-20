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
  showCenteredPaw?: boolean
}

export default function BookSection({ dataFile, sectionClass, showCenteredPaw = false }: BookSectionProps) {
  const { language } = useLanguage()
  const [data, setData] = useState<BookSectionData | null>(null)

  useEffect(() => {
    let cancelled = false
    setData(null)

    const baseFileName = dataFile.endsWith('.json') ? dataFile.replace('.json', '') : dataFile
    const langFile = language === 'ko' ? `${baseFileName}.ko.json` : `${baseFileName}.json`

    fetch(`/data/${langFile}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${langFile}: ${res.status}`)
        return res.json()
      })
      .then((jsonData: BookSectionData) => {
        if (!cancelled) setData(jsonData)
      })
      .catch((err) => console.error(`Error loading ${langFile}:`, err))

    return () => {
      cancelled = true
    }
  }, [dataFile, language])

  if (!data) return null

  const footerLabel = language === 'ko'
    ? (bookHasLink: boolean) => (bookHasLink ? 'Buy on Amazon →' : 'Coming soon')
    : (bookHasLink: boolean) => (bookHasLink ? 'Buy on Amazon →' : 'Coming soon')

  return (
    <section className={sectionClass}>
      {showCenteredPaw && (
        <div className="home-paw-bg home-paw-bg--stories-center" aria-hidden="true">
          <img src="/images/icon/paw.svg" alt="" />
        </div>
      )}
      <div className="container">
        <div className="section-header">
          <div>
            <h2>
              {data.sectionTitle.split('\n').map((line, index, lines) => (
                <span key={index}>
                  {line}
                  {index < lines.length - 1 && <br />}
                </span>
              ))}
            </h2>
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
                  <span className="book-card-footer">{footerLabel(!!book.link)}</span>
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
