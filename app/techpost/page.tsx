import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TechPostPage() {
  return (
    <>
      <Header />
      <section className="about-content-section about-prose-page techpost-page-section">
        <div className="container about-prose">
          <div className="about-section">
            <h2>Technology Blueprint : Animal Intelligence Universe -</h2>
            <p>Why build another world and how to make it</p>
            <p>Technology Note / Long-Term R&amp;D Blueprint · Version 1.0 · 2026 Fall</p>
            <p>
              <a
                href="/documents/Animal_Intelligence_Universe_Why_Build_Another_World_V1.0_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="techpost-pdf-link"
              >
                Technology Blueprint
              </a>
            </p>
          </div>
          <p>
            <Link href="/creative-tech-lab">← Back to Creative Tech Lab</Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
