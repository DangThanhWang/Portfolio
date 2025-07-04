'use client'

import '../styles/sections.scss'

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Vietnamese-Lao Machine Translation",
      description: "Developed multilingual neural machine translation models using M2M100 and Transformer networks, achieving BLEU 41 on test data.",
      tech: ["Python", "PyTorch", "Transformers", "M2M100"],
      link: "https://github.com/LuongManhLinh/NLP-Machine-Translation",
      image: "/images/project1.jpg"
    },
    {
      id: 2,
      title: "English Learning App with AI Chatbot",
      description: "Cross-platform mobile app with AI chatbot powered by Qwen2-1.5B, featuring speech recognition and gamified learning.",
      tech: ["Flutter", "Dart", "FastAPI", "MongoDB", "Qwen2"],
      link: "https://github.com/DangThanhWang/Mobile-app",
      image: "/images/project2.jpg"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern portfolio website built with Next.js 14, featuring smooth animations and responsive design.",
      tech: ["Next.js", "TypeScript", "GSAP", "SCSS"],
      link: "#",
      image: "/images/project3.jpg"
    },
    {
      id: 4,
      title: "StarUs Game - 2D Pacman-inspired Game",
      description: "Developed complete 2D game with OOP architecture, AI pathfinding algorithms for ghost enemies, collision detection system, and modular menu management with multiple difficulty levels.",
      tech: ["C++", "SDL2", "OOP", "AI Pathfinding", "Game Development"],
      link: "https://github.com/DangThanhWang/StarUs_Game",
      image: "/images/starus-game.jpg"
    },
    {
      id: 5,
      title: "EDUET - English Learning Dictionary Application",
      description: "Comprehensive English learning application with dictionary management, API integrations (Google Translate, Speech Recognition, Grammar Checker), mini-games (Snake, Hangman), IELTS listening tests, and AI chatbot assistant using Firebase backend.",
      tech: ["Java", "JavaFX", "Firebase/Firestore", "Google APIs", "Multi-threading", "OOP Design"],
      link: "https://github.com/snozywolf59/OOP-Project",
      image: "/images/eduet-app.jpg"
    },
    {
      id: 6,
      title: "Q-Airline Flight Booking System",
      description: "Full-stack airline booking platform with React frontend and Node.js backend. Features comprehensive flight search, seat selection, payment processing, user authentication, and robust admin management system with real-time statistics and flight operations control.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "Chart.js", "Framer Motion", "bcrypt", "Cookie-parser"],
      link: "https://github.com/TranHauNam/Q-Airline",
      image: "/images/q-airline.jpg"
    }
  ]

  return (
    <section id="projects" className="projects-section" data-scroll-section>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A showcase of my latest work and innovations</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>{project.title.charAt(0)}</span>
                </div>
                <div className="project-overlay">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}