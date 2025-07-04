'use client'

import '../styles/sections.scss'

export default function Footer() {
  return (
    <footer className="footer" data-scroll-section>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Dang Thanh Quang</h3>
            <p>AI Engineer passionate about innovation and technology</p>
          </div>
          
          <div className="footer-right">
            <div className="footer-links">
              <a href="mailto:dagquag13579@gmail.com">Email</a>
              <a href="https://github.com/DangThanhWang" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/quang-đặng-52a5621aa" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Dang Thanh Quang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}