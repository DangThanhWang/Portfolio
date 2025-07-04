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