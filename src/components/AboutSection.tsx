'use client'

import '../styles/sections.scss'

export default function AboutSection() {
  return (
    <section id="about" className="about-section" data-scroll-section>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate about AI and creating innovative solutions</p>
        </div>
        
        <div className="about-content">
          <div className="about-text fade-in">
            <p>
              I'm a dedicated AI Engineer Intern currently pursuing Information Technology 
              at VNU University of Engineering and Technology. With a strong foundation in 
              machine learning and natural language processing, I specialize in developing 
              innovative AI solutions.
            </p>
            
            <p>
              My expertise spans across Python, PyTorch, TensorFlow, and modern web 
              technologies. I have hands-on experience in neural machine translation, 
              mobile app development, and building scalable AI systems.
            </p>
            
            <div className="stats">
              <div className="stat">
                <span className="stat-number">3.79</span>
                <span className="stat-label">GPA</span>
              </div>
              {/* <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div> */}
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
            </div>
          </div>
          
          <div className="about-skills fade-in">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Programming</h4>
                <ul>
                  <li>Python</li>
                  <li>C/C++</li>
                  <li>Java</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Dart</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>AI & ML</h4>
                <ul>
                  <li>PyTorch</li>
                  <li>TensorFlow</li>
                  <li>Hugging Face</li>
                  <li>OpenCV</li>
                  <li>scikit-learn</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>Development</h4>
                <ul>
                  <li>Next.js/React</li>
                  <li>Flutter</li>
                  <li>FastAPI</li>
                  <li>MongoDB</li>
                  <li>Git/GitHub</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}