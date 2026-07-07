import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Logo } from '@/components/Logo'

// Cortina de abertura no carregamento (estilo novaera): overlay meia-noite
// com a logo, que revela a página com um wipe para cima. 1× por sessão.
const ease = [0.76, 0, 0.24, 1] as const

export function IntroReveal() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Aparece a cada carregamento/refresh da página (não em navegações internas,
    // pois o componente monta só uma vez na raiz do app).
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setShow(true)
    const t = setTimeout(() => setShow(false), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-meia-noite"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo className="h-14 w-auto" />
          </motion.div>

          {/* linha ouro que cresce sob a logo */}
          <motion.div
            className="absolute bottom-[calc(50%-52px)] h-[2px] bg-ouro"
            initial={{ width: 0 }}
            animate={{ width: 180 }}
            transition={{ duration: 1, delay: 0.2, ease }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
