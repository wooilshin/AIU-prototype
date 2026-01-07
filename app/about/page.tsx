import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Header />
      <section className="about-hero">
        <div className="container">
          <h1>About</h1>
          <p className="hero-subtitle">We create a new way of storytelling</p>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-section">
            <h2>Project Animal Intelligence</h2>
            <p>
            Animal Intelligence is an original IP project developed and published by Student B Press. The project places the animals around us at the center of its narrative, using their perspectives to explore human life, society, technology, and ultimately the future. It unfolds not only through fiction and comics, but also through knowledge-based guidebooks and experimental AI-powered media. Together, these forms create a living universe that invites readers to rethink intelligence, coexistence, and the future we are building.
            </p>
          </div>

          <div className="about-section">
            <h2>About our Creators</h2>
            <p>
            Will Shin works alongside his sister, Alice Shin, as a sibling creative team behind the Animal Intelligence series. Will studied artificial intelligence at the University of Pennsylvania and public policy at Harvard, and his academic background informs the project’s conceptual framework—exploring the intersections of world-building and future technologies. Alice Shin studied design and art, and later pursued applied linguistics at Georgetown University. With a strong interest in myth and a deep affection for animals, she leads the project’s visual creation while also contributing to its narrative sensibility. Together, they are building a creative universe that reimagines knowledge and the future through non-human perspectives.    
            </p>
          </div>

          <div className="about-section">
            <h2>What We Make</h2>
            <div className="key-areas-grid">
              <div className="key-area-card">
                <div className="key-area-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h3>Books</h3>
                <p>Animal Intelligence is a curated publication that reframes knowledge through non-human perspectives. Our flagship publication, Knowledge Era, organizes and presents future-oriented knowledge across philosophy, social sciences, and science.</p>
              </div>
              <div className="key-area-card">
                <div className="key-area-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                <h3>Comics</h3>
                <p>Student B Press also publishes a collection of light comics, offering social satire and everyday observations from animal perspectives.</p>
              </div>
              <div className="key-area-card">
                <div className="key-area-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <h3>AI-system</h3>
                <p>Student B tech Lab is envisioned to expand into AI-based edutech content that brings the AIU world into an interactive form.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

