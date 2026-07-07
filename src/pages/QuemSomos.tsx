import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Quote } from 'lucide-react'
import { Container } from '@/components/Container'
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/reveal'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { NumberTicker } from '@/components/ui/number-ticker'
import { ShimmerButton, GradientBorderButton } from '@/components/ui/shimmer-button'
import { GridBackdrop, AuroraGlow } from '@/components/ui/backdrops'
import { GrainOverlay, Eyebrow, Highlighter, TapeLabel } from '@/components/ui/editorial'
import {
  QS_HERO,
  QS_INTRO,
  QS_TIMELINE,
  QS_ECOSYSTEM,
  QS_VALUES,
  QS_STATS,
  QS_LEADER,
} from '@/config/quem-somos'

const ease = [0.22, 1, 0.36, 1] as const

export function QuemSomos() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-meia-noite text-nevoa">
        <GridBackdrop />
        <AuroraGlow />
        <GrainOverlay opacity={0.14} />
        <span className="pointer-events-none absolute right-[10%] top-[26%] hidden select-none text-6xl font-black text-nevoa/5 lg:block">
          ↗
        </span>
        <Container className="relative py-24 md:py-32 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
              <Eyebrow className="text-ouro">{QS_HERO.eyebrow}</Eyebrow>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
              className="mt-6 text-balance text-4xl leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block font-extrabold uppercase tracking-tight">{QS_HERO.titleTop}</span>
              <span className="mt-2 block font-serif text-[1.1em] font-normal italic">
                {QS_HERO.titleSerif} <Highlighter>{QS_HERO.titleHighlight}</Highlighter>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mx-auto mt-8 max-w-2xl text-lg text-nevoa/70 md:text-xl"
            >
              {QS_HERO.subtitle}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* INTRO / MANIFESTO */}
      <section className="bg-background py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-marinho md:text-4xl">
                Feita por quem{' '}
                <span className="font-serif text-[1.05em] font-normal italic normal-case">
                  <Highlighter>vive o mercado</Highlighter>
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="space-y-5 text-lg text-muted-foreground">
              <p className="font-serif text-xl italic text-marinho">{QS_INTRO.statement}</p>
              {QS_INTRO.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* NÚMEROS */}
      <section className="bg-nevoa py-20">
        <Container>
          <RevealStagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {QS_STATS.map((s) => (
              <RevealItem key={s.label} className="text-center">
                <div className="text-4xl font-extrabold tracking-tight text-marinho md:text-5xl">
                  <NumberTicker value={s.value} suffix={s.suffix} />
                </div>
                <p className="mx-auto mt-3 max-w-[15rem] text-sm text-muted-foreground">{s.label}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* NOSSA HISTÓRIA — TIMELINE */}
      <section className="relative overflow-hidden bg-meia-noite py-24 text-nevoa">
        <GrainOverlay opacity={0.1} />
        <Container className="relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow className="text-ouro">Nossa História</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Uma trajetória{' '}
              <span className="font-serif text-[1.05em] font-normal italic normal-case">
                <Highlighter>sem atalho</Highlighter>
              </span>
            </h2>
          </Reveal>

          <div className="relative mx-auto mt-16 max-w-3xl">
            {/* linha vertical */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/15 md:left-1/2" />
            <RevealStagger className="space-y-10">
              {QS_TIMELINE.map((item, i) => (
                <RevealItem key={item.title}>
                  <div
                    className={`relative pl-8 md:w-1/2 md:pl-0 ${
                      i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    {/* marcador */}
                    <span
                      className={`absolute top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ouro bg-meia-noite left-0 ${
                        i % 2 === 0 ? 'md:left-auto md:-right-[7px]' : 'md:-left-[7px]'
                      }`}
                    />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-ouro">
                      {item.phase}
                    </span>
                    <h3 className="mt-2 text-xl font-extrabold">{item.title}</h3>
                    <p className="mt-2 text-sm text-nevoa/70">{item.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      {/* ECOSSISTEMA */}
      <section className="bg-background py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow className="text-azul-detalhe">O Ecossistema</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-marinho md:text-4xl lg:text-5xl">
              Não é uma escola.{' '}
              <span className="font-serif text-[1.05em] font-normal italic normal-case">
                <Highlighter>É um grupo</Highlighter>
              </span>
            </h2>
          </Reveal>
          <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {QS_ECOSYSTEM.map((e) => (
              <RevealItem key={e.name} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ouro/50 hover:shadow-[0_16px_40px_-16px_rgba(10,35,66,0.25)]">
                  <h3 className="text-lg font-extrabold text-marinho">{e.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* VALORES */}
      <section className="relative overflow-hidden bg-marinho py-24 text-nevoa">
        <GrainOverlay opacity={0.1} />
        <Container className="relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow className="text-ouro">No que acreditamos</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Nossos{' '}
              <span className="font-serif text-[1.05em] font-normal italic normal-case">
                <Highlighter>princípios</Highlighter>
              </span>
            </h2>
          </Reveal>
          <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {QS_VALUES.map((v, i) => (
              <RevealItem key={v.title} className="h-full">
                <SpotlightCard className="h-full">
                  <span className="font-serif text-3xl italic text-ouro">0{i + 1}</span>
                  <h3 className="mt-4 text-xl font-extrabold">{v.title}</h3>
                  <p className="mt-2 text-sm text-nevoa/70">{v.desc}</p>
                </SpotlightCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      {/* LIDERANÇA */}
      <section className="bg-nevoa py-24">
        <Container>
          <Reveal className="mx-auto max-w-4xl">
            <div className="grid items-center gap-10 md:grid-cols-[280px_1fr]">
              {/* retrato placeholder */}
              <figure className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-marinho/10">
                <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-b from-azul-detalhe/25 to-marinho/90">
                  <span className="font-serif text-6xl italic text-nevoa/40">FL</span>
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-marinho to-transparent p-4 text-nevoa">
                  <p className="text-lg font-extrabold">{QS_LEADER.name}</p>
                  <p className="font-serif text-sm italic text-nevoa/80">{QS_LEADER.role}</p>
                </figcaption>
              </figure>
              <div>
                <TapeLabel tone="gold" className="mb-6">
                  {QS_LEADER.eyebrow}
                </TapeLabel>
                <Quote className="h-9 w-9 text-ouro" />
                <blockquote className="mt-4 font-serif text-2xl italic leading-relaxed text-marinho md:text-3xl">
                  “{QS_LEADER.quote}”
                </blockquote>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="bg-background py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-marinho px-8 py-16 text-center text-nevoa md:px-16 md:py-20">
              <GridBackdrop />
              <GrainOverlay opacity={0.1} />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-ouro/15 blur-3xl" />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl">
                  Faça parte da{' '}
                  <span className="font-serif italic">
                    <Highlighter>próxima geração</Highlighter>
                  </span>{' '}
                  do mercado financeiro
                </h2>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                  <Link to="/contato">
                    <ShimmerButton>
                      Falar com um consultor
                      <ArrowRight className="h-4 w-4" />
                    </ShimmerButton>
                  </Link>
                  <Link to="/mba/wealth-management">
                    <GradientBorderButton>Ver os MBAs</GradientBorderButton>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
