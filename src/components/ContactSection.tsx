'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'
import '../styles/sections.scss'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    emailjs.send(
      'service_y5elpxf', // Thay bằng Service ID
      'template_lg7cn0t', // Thay bằng Template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.name + " " + formData.email + " Message: " + formData.message,
      },
      'wqh2Km07HkynQJ1hB' // Thay bằng Public Key
    ).then(
      (result) => {
        console.log('SUCCESS!', result.text)
        alert('Thank you! Your message has been sent.')
        setFormData({ name: '', email: '', message: '' })
      },
      (error) => {
        console.log('FAILED...', error.text)
        alert('Something went wrong. Please try again.')
      }
    )
  }

  return (
    <section id="contact" className="contact-section" data-scroll-section>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let&apos;s work together on your next project</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info fade-in">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:dagquag13579@gmail.com">dagquag13579@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone:</span>
              <a href="tel:+84862501407">+84 862501407</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/quang-đặng-52a5621aa" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">GitHub:</span>
              <a href="https://github.com/DangThanhWang" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </div>
          </div>
          
          <form className="contact-form fade-in" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}