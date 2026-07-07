import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/Container'
import { ShimmerButton, GradientBorderButton } from '@/components/ui/shimmer-button'
import { GridBackdrop, AuroraGlow } from '@/components/ui/backdrops'
import { GrainOverlay, Highlighter, Eyebrow } from '@/components/ui/editorial'
import { HERO } from '@/config/home'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-meia-noite text-nevoa">
      <GridBackdrop />
      <AuroraGlow />
      <GrainOverlay opacity={0.14} />

      {/* marcas de acento espalhadas (colagem editorial) */}
      <span className="pointer-events-none absolute left-[8%] top-[22%] hidden select-none font-serif text-7xl italic text-ouro/15 lg:block">
        ?
      </span>
      <span className="pointer-events-none absolute right-[10%] top-[30%] hidden select-none text-6xl font-black text-nevoa/5 lg:block">
        ↗
      </span>

      <Container className="relative py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Eyebrow className="text-ouro">{HERO.eyebrow}</Eyebrow>
          </motion.div>

          {/* Título misto: sans pesado + serif itálico + highlight (DNA Conquer) */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-6 text-balance text-4xl leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block font-extrabold uppercase tracking-tight">Educação executiva</span>
            <span className="my-2 block font-serif text-[1.15em] font-normal italic text-nevoa/90">
              conectada ao
            </span>
            <span className="block font-extrabold uppercase tracking-tight">
              <Highlighter>mercado real</Highlighter>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mx-auto mt-8 max-w-2xl text-lg text-nevoa/70 md:text-xl"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to={HERO.primaryCta.href}>
              <ShimmerButton>
                {HERO.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </ShimmerButton>
            </Link>
            <Link to={HERO.secondaryCta.href}>
              <GradientBorderButton>{HERO.secondaryCta.label}</GradientBorderButton>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
