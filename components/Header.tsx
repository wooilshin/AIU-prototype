import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img src="/images/header/Logo.svg" alt="Logo" className="logo-image" />
            </Link>
          </div>
          <nav className="nav-menu">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/#interactive">Interactive (Beta)</Link>
          </nav>
          <div className="header-actions">
            <button className="newsletter-btn">Newsletter</button>
            <button className="search-btn"><i className="fas fa-search"></i></button>
          </div>
        </div>
      </div>
    </header>
  )
}

