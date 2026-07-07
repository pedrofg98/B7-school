import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'

// Módulo-level para permitir acesso ao Lenis de fora (âncoras, etc.)
let lenisInstance: Lenis | null = null
export function getLenis() {
  return lenisInstance
}

// Smooth scroll global com inércia (estilo novaera). Respeita prefers-reduced-motion.
export function SmoothScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })
    lenisInstance = lenis

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    // âncoras internas (#oferta, etc.) com scroll suave
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!a) return
      const id = a.getAttribute('href')!.slice(1)
      const el = id ? document.getElementById(id) : null
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el, { offset: -80 })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onClick)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])

  // topo a cada troca de rota
  useEffect(() => {
    if (lenisInstance) lenisInstance.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname])

  return null
}
