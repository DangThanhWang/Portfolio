'use client'

import { useEffect, useRef } from 'react'

interface LocomotiveProviderProps {
  children: React.ReactNode
}

export default function LocomotiveProvider({ children }: LocomotiveProviderProps) {
  const scrollRef = useRef<any>(null)

  useEffect(() => {
    let locoInstance: any

    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default

      locoInstance = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 1,
      })

      // Gán instance global
      ;(window as any).__locomotive = locoInstance

      // Gọi update() sau khi khởi tạo
      requestAnimationFrame(() => {
        locoInstance?.update()
      })

      // Nếu dùng ScrollTrigger của GSAP
      locoInstance.on('scroll', () => {
        if ((window as any).ScrollTrigger) {
          (window as any).ScrollTrigger.update()
        }
      })
    }

    initLocomotiveScroll()

    return () => {
      locoInstance?.destroy()
    }
  }, [])

  return <>{children}</>
}
