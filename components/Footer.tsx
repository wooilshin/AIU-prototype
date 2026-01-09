import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>contentcreator[at]student.com</p>
            </div>
          </div>
          <div className="footer-bottom-right">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://www.facebook.com/studentbpress/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/ai_AnimalIntelligence/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2025 Student B Press. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

