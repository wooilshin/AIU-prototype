import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroCarousel from '@/components/HeroCarousel'
import BookSection from '@/components/BookSection'
import NewsletterSection from '@/components/NewsletterSection'
import NewsUpdateSection from '@/components/NewsUpdateSection'

export default function Home() {
  return (
    <>
      <Header />
      <HeroCarousel />
      <BookSection dataFile="new-releases.json" sectionClass="new-releases-section" />
      <BookSection dataFile="knowledge-era.json" sectionClass="knowledge-era-section" />
      <BookSection dataFile="kids.json" sectionClass="kids-section" />
      <NewsUpdateSection />
      <NewsletterSection />
      <Footer />
    </>
  )
}

