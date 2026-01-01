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
          <p className="hero-subtitle">We create a new way of storytelling for future generations.</p>
        </div>
      </section>

      <section className="about-content-section">
        <div className="container">
          <div className="about-section">
            <h2>Project Animal Intelligence</h2>
            <p>
              Animal Intelligence is an original IP project developed and published by Student B Press.The project began as a publishing initiative and has since expanded into a multi-volume series that includes short comic collections, fiction, and nonfiction works. Its flagship title is Animal Intelligence: Knowledge Era, in which animal narrators reimagine human knowledge and the future through non-human perspectives.
            </p>
          </div>

          <div className="about-section">
            <h2>About the Creators</h2>
            <p>
              Will Shin works alongside his sister, Alice Shin, as a sibling creative team behind the Animal Intelligence series. Will studied artificial intelligence at the University of Pennsylvania and public policy at Harvard, and his academic background informs the conceptual framing of the project—exploring the intersections of world-building, technology, and myth.
            </p>
            <p>
              Alice Shin studied design, art, and language education at Georgetown University and brings a strong visual and narrative sensibility to the project. Together, they are building a creative universe that reimagines knowledge, civilization, and the future through non-human perspectives.
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
                  <i className="fas fa-newspaper"></i>
                </div>
                <h3>Comics</h3>
                <p>We publish a collection of light comics, offering social satire and everyday observations from animal perspectives.</p>
              </div>
              <div className="key-area-card">
                <div className="key-area-icon">
                  <i className="fas fa-unlock"></i>
                </div>
                <h3>AI-system</h3>
                <p>We are also developing an AI engine that will serve as the foundation for future applications. With education in mind, Animal Intelligence is envisioned to expand into edtech platforms and game-based content that bring its world and ideas into interactive form.</p>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <h2>Get in Touch</h2>
            <p>Interested in learning more about the Student B Press? We'd love to hear from you.</p>
            <Link href="/contact" className="cta-button">Contact Us <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

