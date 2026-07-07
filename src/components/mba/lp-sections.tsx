import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Check, AlertCircle, Trophy, Plus, Minus, ShieldCheck, Clock, CalendarDays, MonitorPlay } from 'lucide-react'
import { Container } from '@/components/Container'
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/reveal'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { GridBackdrop, AuroraGlow } from '@/components/ui/backdrops'
import { GrainOverlay, Eyebrow, Highlighter, TapeLabel } from '@/components/ui/editorial'
import type { Mba, Faq } from '@/config/mbas'

const ease = [0.22, 1, 0.36, 1] as const
const CTA_TARGET = '#oferta'

// ── HERO DE LP ────────────────────────────────────────────────
export function LpHero({ mba }: { mba: Mba }) {
  const p = mba.pricing
  return (
    <section className="relative overflow-hidden bg-meia-noite text-nevoa">
      <GridBackdrop />
      <AuroraGlow />
      <GrainOverlay opacity={0.14} />
      <Container className="relative py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="flex flex-wrap items-center gap-3"
            >
              {mba.enrollment?.turma && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-ouro/30 bg-ouro/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ouro">
                  <CalendarDays className="h-3.5 w-3.5" /> {mba.enrollment.turma}
                </span>
              )}
              {mba.enrollment?.vagas && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide text-nevoa/80">
                  {mba.enrollment.vagas}
                </span>
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease }}
              className="mt-6"
            >
              <Eyebrow className="text-ouro">{mba.name}</Eyebrow>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="mt-4 text-balance text-4xl font-extrabold uppercase leading-[1.03] tracking-tight md:text-5xl lg:text-6xl"
            >
              {mba.promise ?? mba.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-6 max-w-xl text-lg text-nevoa/70"
            >
              {mba.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mt-8"
            >
              <a href={CTA_TARGET}>
                <ShimmerButton>
                  {mba.cta}
                  <ArrowRight className="h-4 w-4" />
                </ShimmerButton>
              </a>
              <p className="mt-3 text-sm text-nevoa/50">
                {mba.format.carga} · {mba.format.duracao} · {mba.format.formato}
              </p>
            </motion.div>
          </div>

          {/* cartão de oferta */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease }}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
              <div className="grid grid-cols-3 gap-4 text-center">
                <MiniStat icon={Clock} value={mba.format.carga} />
                <MiniStat icon={CalendarDays} value={mba.format.duracao} />
                <MiniStat icon={MonitorPlay} value={mba.format.formato} />
              </div>
              <div className="mt-6 rounded-xl bg-meia-noite/60 p-5 text-center">
                {p.from && <p className="text-sm text-nevoa/50 line-through">{p.from}</p>}
                <p className="text-4xl font-extrabold text-ouro">{p.price}</p>
                {p.installments && <p className="mt-1 text-sm text-nevoa/70">ou {p.installments}</p>}
              </div>
              <a href={CTA_TARGET} className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-ouro py-3 font-bold text-meia-noite transition-transform hover:scale-[1.02]">
                {mba.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function MiniStat({ icon: Icon, value }: { icon: typeof Clock; value: string }) {
  return (
    <div>
      <Icon className="mx-auto h-5 w-5 text-ouro" />
      <p className="mt-1.5 text-xs font-medium leading-tight text-nevoa/80">{value}</p>
    </div>
  )
}

// ── DOR / VOCÊ SE IDENTIFICA ──────────────────────────────────
export function PainSection({ pains }: { pains: string[] }) {
  return (
    <section className="bg-background py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="text-azul-detalhe">Você se identifica?</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-marinho md:text-4xl">
            O que{' '}
            <span className="font-serif text-[1.05em] font-normal italic normal-case">
              <Highlighter>trava a sua carreira</Highlighter>
            </span>
          </h2>
        </Reveal>
        <RevealStagger className="mx-auto mt-12 grid max-w-3xl gap-4">
          {pains.map((pain) => (
            <RevealItem key={pain}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <p className="text-marinho">{pain}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal className="mt-10 text-center">
          <p className="font-serif text-xl italic text-marinho">
            Se você marcou pelo menos um, este programa é para você.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}

// ── RESULTADOS ────────────────────────────────────────────────
export function ResultsSection({ results }: { results: string[] }) {
  return (
    <section className="relative overflow-hidden bg-marinho py-24 text-nevoa">
      <GrainOverlay opacity={0.1} />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="text-ouro">O que você conquista</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Ao final, você{' '}
            <span className="font-serif text-[1.05em] font-normal italic normal-case">
              <Highlighter>vai saber fazer</Highlighter>
            </span>
          </h2>
        </Reveal>
        <RevealStagger className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {results.map((r) => (
            <RevealItem key={r}>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-ouro" />
                <p className="text-nevoa/90">{r}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  )
}

// ── O QUE ESTÁ INCLUSO (stack de entregas) ────────────────────
export function Deliverables({ mba }: { mba: Mba }) {
  const items: string[] = []
  if (mba.marketRooms?.length) items.push(`Market Rooms ao vivo (${mba.marketRooms.length} frentes por semana)`)
  items.push('War Room — simulações práticas de mercado')
  items.push('Immersion Bootcamp — encontros presenciais')
  items.push('Bionics — 4 agentes de IA exclusivos')
  items.push('Mentoria individual 1:1 com líderes de mercado')
  items.push('Talent Hub — vagas exclusivas e recrutadores')
  if (mba.certification) items.push(`Certificação: ${mba.certification}`)
  items.push(`${mba.format.carga} de conteúdo ao vivo`)
  items.push('Acesso à plataforma durante todo o programa')

  return (
    <section className="bg-background py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="text-azul-detalhe">O que está incluso</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-marinho md:text-4xl lg:text-5xl">
            Tudo o que você{' '}
            <span className="font-serif text-[1.05em] font-normal italic normal-case">
              <Highlighter>recebe</Highlighter>
            </span>
          </h2>
        </Reveal>
        <RevealStagger className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
          {items.map((it) => (
            <RevealItem key={it}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ouro/15 text-ouro">
                  <Check className="h-4 w-4" />
                </span>
                <p className="font-medium text-marinho">{it}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  )
}

// ── JORNADA (stepper "role para avançar") ─────────────────────
const JOURNEY = [
  { title: 'Market Rooms', desc: 'Aulas ao vivo toda semana com quem vive o mercado.' },
  { title: 'War Room', desc: 'Simulações práticas: entrevistas, comitês e defesa de portfólio.' },
  { title: 'Immersion Bootcamp', desc: 'Encontros presenciais com workshops e networking.' },
  { title: 'Bionics (IA)', desc: 'Agentes de IA que aceleram estudo e performance.' },
  { title: 'Talent Hub', desc: 'Conexão com vagas e recrutadores para o próximo passo.' },
]

export function Journey() {
  return (
    <section className="relative overflow-hidden bg-meia-noite py-24 text-nevoa">
      <GrainOverlay opacity={0.1} />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="text-ouro">A Jornada</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Como você{' '}
            <span className="font-serif text-[1.05em] font-normal italic normal-case">
              <Highlighter>evolui</Highlighter>
            </span>
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-nevoa/40">role para avançar ↓</p>
        </Reveal>
        <div className="relative mx-auto mt-14 max-w-2xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/15" />
          <RevealStagger className="space-y-8">
            {JOURNEY.map((step, i) => (
              <RevealItem key={step.title}>
                <div className="relative flex gap-5 pl-0">
                  <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ouro bg-meia-noite font-serif text-lg italic text-ouro">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-xl font-extrabold">{step.title}</h3>
                    <p className="mt-1 text-nevoa/70">{step.desc}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Container>
    </section>
  )
}

// ── FAIXA DE CTA (repetida entre seções) ──────────────────────
export function CtaBand({ mba }: { mba: Mba }) {
  return (
    <section className="bg-ouro py-14 text-meia-noite">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
              Pronto para dar o próximo passo?
            </h3>
            <p className="mt-1 font-medium text-meia-noite/70">
              {mba.enrollment?.turma ?? 'Turmas abertas'} · {mba.enrollment?.vagas ?? 'Vagas limitadas'}
            </p>
          </div>
          <a
            href={CTA_TARGET}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-meia-noite px-7 py-3.5 font-bold text-nevoa transition-transform hover:scale-[1.03]"
          >
            {mba.cta} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}

// ── MENTOR / CEO ──────────────────────────────────────────────
export function MentorCeo() {
  return (
    <section className="bg-nevoa py-24">
      <Container>
        <Reveal className="mx-auto max-w-4xl">
          <div className="grid items-center gap-10 md:grid-cols-[260px_1fr]">
            <figure className="relative mx-auto w-full max-w-[260px] overflow-hidden rounded-2xl border border-marinho/10">
              <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-b from-azul-detalhe/25 to-marinho/90">
                <span className="font-serif text-6xl italic text-nevoa/40">FL</span>
              </div>
            </figure>
            <div>
              <TapeLabel tone="gold" className="mb-5">Quem te guia</TapeLabel>
              <h3 className="text-2xl font-extrabold text-marinho md:text-3xl">Fábio Louzada</h3>
              <p className="font-serif italic text-muted-foreground">CEO & Fundador da B7 Business School</p>
              <blockquote className="mt-5 font-serif text-xl italic leading-relaxed text-marinho/90">
                “A gente não vende sonho. Vende o preparo que faz o profissional ocupar as melhores
                cadeiras do mercado.”
              </blockquote>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

// ── FAQ (accordion) ───────────────────────────────────────────
export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="bg-background py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="text-azul-detalhe">Dúvidas Frequentes</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-marinho md:text-4xl">
            Perguntas{' '}
            <span className="font-serif text-[1.05em] font-normal italic normal-case">
              <Highlighter>frequentes</Highlighter>
            </span>
          </h2>
        </Reveal>
        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="overflow-hidden rounded-xl border border-border bg-card">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-bold text-marinho">{f.q}</span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-ouro" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-azul-detalhe" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-muted-foreground">{f.a}</div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

// ── OFERTA / INVESTIMENTO (âncora #oferta, com garantia) ──────
export function LpOffer({ mba }: { mba: Mba }) {
  const p = mba.pricing
  return (
    <section id="oferta" className="relative overflow-hidden bg-meia-noite py-24 text-nevoa">
      <GrainOverlay opacity={0.1} />
      <Container className="relative">
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-marinho px-8 py-14 text-center md:px-14">
            <GridBackdrop />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-ouro/15 blur-3xl" />
            <div className="relative">
              {mba.enrollment?.turma && (
                <TapeLabel tone="gold" className="mb-6">{mba.enrollment.turma}</TapeLabel>
              )}
              <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl">
                Garanta sua vaga
              </h2>
              <div className="mt-6">
                {p.from && <p className="text-nevoa/50 line-through">De {p.from} por</p>}
                <p className="text-5xl font-extrabold text-ouro md:text-6xl">{p.price}</p>
                {p.installments && <p className="mt-2 text-nevoa/80">ou {p.installments}</p>}
                {p.cash && <p className="text-nevoa/80">{p.cash}</p>}
                {p.savings && <p className="mt-1 text-sm text-nevoa/60">Economia de {p.savings}</p>}
              </div>
              <div className="mt-8">
                <Link to="/contato">
                  <ShimmerButton>
                    {mba.cta}
                    <ArrowRight className="h-4 w-4" />
                  </ShimmerButton>
                </Link>
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-nevoa/60">
                <ShieldCheck className="h-4 w-4 text-ouro" />
                Processo seletivo por entrevista · {mba.enrollment?.vagas ?? 'Vagas limitadas'}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

// ── BARRA DE CTA FIXA (aparece ao rolar) ──────────────────────
export function StickyCta({ mba }: { mba: Mba }) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-meia-noite/95 backdrop-blur transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 text-nevoa lg:px-8">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold">{mba.name}</p>
          <p className="text-xs text-nevoa/60">
            <span className="text-ouro">{mba.pricing.price}</span>
            {mba.pricing.installments ? ` · ${mba.pricing.installments}` : ''}
          </p>
        </div>
        <a
          href={CTA_TARGET}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ouro px-5 py-2.5 text-sm font-bold text-meia-noite transition-transform hover:scale-[1.03]"
        >
          {mba.cta} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
