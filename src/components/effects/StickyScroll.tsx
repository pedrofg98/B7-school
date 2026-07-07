import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useMotionValueEvent, useTransform } from 'motion/react'
import { Container } from '@/components/Container'
import { Eyebrow, Highlighter, GrainOverlay } from '@/components/ui/editorial'

export type StickyItem = { title: string; desc: string }

// Seção com scroll sticky (estilo novaera): o painel fixa na tela e os itens
// avançam "01 / 0X" conforme o usuário rola. Usa scroll progress do container.
export function StickyScroll({
  eyebrow,
  heading,
  highlight,
  items,
}: {
  eyebrow: string
  heading: string
  highlight: string
  items: StickyItem[]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(items.length - 1, Math.floor(v * items.length))
    setActive(idx < 0 ? 0 : idx)
  })

  const barScale = useTransform(scrollYProgress, [0, 1], [0.06, 1])

  const total = String(items.length).padStart(2, '0')
  const current = String(active + 1).padStart(2, '0')

  return (
    <section ref={ref} style={{ height: `${items.length * 90}vh` }} className="relative bg-meia-noite text-nevoa">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <GrainOverlay opacity={0.1} />
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Esquerda: eyebrow + contador + barra de progresso */}
            <div>
              <Eyebrow className="text-ouro">{eyebrow}</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl">
                {heading}{' '}
                <span className="font-serif text-[1.05em] font-normal italic normal-case">
                  <Highlighter>{highlight}</Highlighter>
                </span>
              </h2>
              <div className="mt-8 flex items-center gap-4">
                <span className="font-serif text-5xl italic text-ouro">{current}</span>
                <span className="text-nevoa/40">/ {total}</span>
              </div>
              <div className="mt-4 h-1 w-40 overflow-hidden rounded-full bg-white/10">
                <motion.div style={{ scaleX: barScale }} className="h-full origin-left rounded-full bg-ouro" />
              </div>
            </div>

            {/* Direita: conteúdo do item ativo (crossfade) */}
            <div className="relative min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-serif text-6xl italic text-white/10">{current}</span>
                  <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">{items[active].title}</h3>
                  <p className="mt-4 max-w-lg text-lg text-nevoa/70">{items[active].desc}</p>
                </motion.div>
              </AnimatePresence>

              {/* indicadores */}
              <div className="mt-8 flex gap-2">
                {items.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? 'w-8 bg-ouro' : 'w-4 bg-white/15'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-xs uppercase tracking-[0.3em] text-nevoa/30">
            role para continuar ↓
          </p>
        </Container>
      </div>
    </section>
  )
}
