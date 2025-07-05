'use client'

import '../styles/sections.scss'

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const loco = (window as any).__locomotive
    if (loco) {
      loco.scrollTo(`#${sectionId}`)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="hero" className="hero-section" data-scroll-section>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="line">DANG THANH</span>
            <span className="line accent">QUANG</span>
          </h1>
          
          <p className="hero-subtitle">
            AI Engineer specializing in Machine Learning, NLP & Mobile Development
          </p>
          
          <div className="hero-cta">
            <button 
              className="cta-button primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="cta-button secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}
