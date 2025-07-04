'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    let locoScroll: any

    const init = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default

      locoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      })

      // scrollerProxy
      ScrollTrigger.scrollerProxy('[data-scroll-container]', {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
            : locoScroll.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        },
        pinType: (document.querySelector('[data-scroll-container]') as HTMLElement)?.style.transform
          ? 'transform'
          : 'fixed'
      })

      locoScroll.on('scroll', ScrollTrigger.update)
      ScrollTrigger.addEventListener('refresh', () => locoScroll.update())
      ScrollTrigger.refresh()

      // Hero animations
      const tl = gsap.timeline()
      tl.from('.hero-title', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power4.out'
      })
        .from('.hero-subtitle', {
          duration: 1,
          y: 50,
          opacity: 0,
          ease: 'power3.out'
        }, '-=0.8')
        .from('.hero-cta', {
          duration: 0.8,
          y: 30,
          opacity: 0,
          ease: 'power2.out'
        }, '-=0.5')

      // Fade-in
      gsap.utils.toArray('.fade-in').forEach((element: any) => {
        gsap.fromTo(element,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              scroller: '[data-scroll-container]',
              start: 'top 80%',
              end: 'bottom 20%',
            }
          }
        )
      })
    }

    init()

    return () => {
      if (locoScroll) locoScroll.destroy()
    }
  }, [])

  return (
    <main data-scroll-container>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
