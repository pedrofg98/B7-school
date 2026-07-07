import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Check, Clock, MonitorPlay, CalendarDays, GraduationCap } from 'lucide-react'
import { Container } from '@/components/Container'
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/reveal'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { ShimmerButton, GradientBorderButton } from '@/components/ui/shimmer-button'
import { GridBackdrop, AuroraGlow } from '@/components/ui/backdrops'
import { GrainOverlay, Eyebrow, Highlighter, TapeLabel } from '@/components/ui/editorial'
import type { Mba, Module, Faculty, Differential, MbaTestimonial } from '@/config/mbas'

const ease = [0.22, 1, 0.36, 1] as const

// ── HERO ──────────────────────────────────────────────────────
export function MbaHero({ mba, kicker }: { mba: Mba; kicker?: string }) {
  const p = mba.pricing
  return (
    <section className="relative overflow-hidden bg-meia-noite text-nevoa">
      <GridBackdrop />
      <AuroraGlow />
      <GrainOverlay opacity={0.14} />
      <Container className="relative py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
              <Eyebrow className="text-ouro">{kicker ?? 'Programa MBA'}</Eyebrow>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
              className="mt-5 text-balance text-4xl font-extrabold uppercase leading-[1.03] tracking-tight md:text-5xl lg:text-6xl"
            >
              {mba.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mt-6 max-w-xl text-lg text-nevoa/70"
            >
              {mba.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/contato">
                <ShimmerButton>
                  {mba.cta}
                  <ArrowRight className="h-4 w-4" />
                </ShimmerButton>
              </Link>
              <a href="#grade">
                <GradientBorderButton>Ver a grade</GradientBorderButton>
              </a>
            </motion.div>
          </div>

          {/* cartão de resumo (formato + preço) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
              <div className="grid grid-cols-2 gap-5">
                <FormatItem icon={Clock} label="Carga" value={mba.format.carga} />
                <FormatItem icon={CalendarDays} label="Duração" value={mba.format.duracao} />
                <FormatItem icon={MonitorPlay} label="Formato" value={mba.format.formato} />
                <FormatItem icon={GraduationCap} label="Início" value={mba.format.inicio ?? 'Turmas abertas'} />
              </div>
              <div className="mt-6 border-t border-white/10 pt-6">
                {p.from && <p className="text-sm text-nevoa/50 line-through">{p.from}</p>}
                <p className="text-3xl font-extrabold text-ouro">{p.price}</p>
                {p.installments && <p className="mt-1 text-sm text-nevoa/70">{p.installments}</p>}
                {p.cash && <p className="text-sm text-nevoa/70">{p.cash}</p>}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function FormatItem({ icon: Icon, label, value }: { icon: typeof Clock; label: string; value: string }) {
  return (
    <div>
      <Icon className="h-5 w-5 text-ouro" />
      <p className="mt-2 text-xs uppercase tracking-wide text-nevoa/50">{label}</p>
      <p className="text-sm font-semibold leading-snug">{value}</p>
    </div>
  )
}

// ── PARA QUEM É ───────────────────────────────────────────────
export function ForWho({ audience, note }: { audience: string[]; note?: string }) {
  return (
    <section className="bg-background py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow className="text-azul-detalhe">Para quem é</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-marinho md:text-4xl">
              Feito para quem{' '}
              <span className="font-serif text-[1.05em] font-normal italic normal-case">
                <Highlighter>quer o topo</Highlighter>
              </span>
            </h2>
            {note && <p className="mt-4 text-muted-foreground">{note}</p>}
          </Reveal>
          <RevealStagger className="grid gap-4 sm:grid-cols-2">
            {audience.map((a) => (
              <RevealItem key={a}>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ouro/15 text-ouro">
                    <Check className="h-4 w-4" />
                  </span>
                  <p className="font-medium text-marinho">{a}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Container>
    </section>
  )
}

// ── GRADE CURRICULAR ──────────────────────────────────────────
export function Curriculum({ modules, rooms }: { modules: Module[]; rooms?: string[] }) {
  return (
    <section id="grade" className="relative overflow-hidden bg-meia-noite py-24 text-nevoa">
      <GrainOverlay opacity={0.1} />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="text-ouro">Grade Curricular</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {modules.length} módulos{' '}
            <span className="font-serif text-[1.05em] font-normal italic normal-case">
              <Highlighter>na prática</Highlighter>
            </span>
          </h2>
        </Reveal>
        <RevealStagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <RevealItem key={m.title} className="h-full">
              <div className="flex h-full gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <span className="font-serif text-2xl italic text-ouro">{m.n ?? '•'}</span>
                <div>
                  <h3 className="font-bold leading-snug">{m.title}</h3>
                  {m.desc && <p className="mt-1 text-sm text-nevoa/60">{m.desc}</p>}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        {rooms && rooms.length > 0 && (
          <Reveal className="mt-12">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-nevoa/60">
                Market Rooms ao vivo
              </p>
              <div className="flex flex-wrap gap-3">
                {rooms.map((r) => (
                  <span key={r} className="rounded-full border border-ouro/30 bg-ouro/10 px-4 py-1.5 text-sm font-medium text-nevoa">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  )
}

// ── PILARES ───────────────────────────────────────────────────
export function Pillars({ pillars }: { pillars: string[] }) {
  if (!pillars.length) return null
  return (
    <section className="bg-background py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="text-azul-detalhe">O Método</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-marinho md:text-4xl lg:text-5xl">
            Os {pillars.length}{' '}
            <span className="font-serif text-[1.05em] font-normal italic normal-case">
              <Highlighter>pilares</Highlighter>
            </span>
          </h2>
        </Reveal>
        <RevealStagger className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          {pillars.map((p, i) => (
            <RevealItem key={p}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-semibold text-marinho">
                <span className="font-serif text-sm italic text-ouro">0{i + 1}</span>
                {p}
              </span>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  )
}

// ── DIFERENCIAIS ──────────────────────────────────────────────
export function Differentials({ items, dark = true }: { items: Differential[]; dark?: boolean }) {
  return (
    <section className={dark ? 'relative overflow-hidden bg-marinho py-24 text-nevoa' : 'bg-background py-24'}>
      {dark && <GrainOverlay opacity={0.1} />}
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className={dark ? 'text-ouro' : 'text-azul-detalhe'}>Diferenciais</Eyebrow>
          <h2 className={`mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl ${dark ? '' : 'text-marinho'}`}>
            O que só a B7{' '}
            <span className="font-serif text-[1.05em] font-normal italic normal-case">
              <Highlighter>entrega</Highlighter>
            </span>
          </h2>
        </Reveal>
        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((d) => (
            <RevealItem key={d.title} className="h-full">
              <SpotlightCard className="h-full">
                <h3 className="text-lg font-extrabold">{d.title}</h3>
                {d.desc && <p className="mt-2 text-sm text-nevoa/70">{d.desc}</p>}
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  )
}

// ── CORPO DOCENTE ─────────────────────────────────────────────
export function FacultyGrid({ faculty }: { faculty: Faculty[] }) {
  return (
    <section className="bg-nevoa py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="text-azul-detalhe">Corpo Docente</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-marinho md:text-4xl lg:text-5xl">
            Mentores que{' '}
            <span className="font-serif text-[1.05em] font-normal italic normal-case">
              <Highlighter>vivem o mercado</Highlighter>
            </span>
          </h2>
        </Reveal>
        <RevealStagger className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {faculty.map((f) => (
            <RevealItem key={f.name}>
              <figure className="group overflow-hidden rounded-2xl border border-marinho/10 bg-card">
                <div className="flex aspect-square items-center justify-center bg-gradient-to-b from-azul-detalhe/20 to-marinho/80">
                  <span className="font-serif text-3xl italic text-nevoa/50">
                    {f.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                  </span>
                </div>
                <figcaption className="p-3">
                  <p className="text-sm font-bold leading-tight text-marinho">{f.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{f.role}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  )
}

// ── DEPOIMENTOS ───────────────────────────────────────────────
export function MbaTestimonials({ items }: { items: MbaTestimonial[] }) {
  if (!items?.length) return null
  return (
    <section className="bg-background py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="text-azul-detalhe">Provas Reais</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-marinho md:text-4xl lg:text-5xl">
            Carreiras{' '}
            <span className="font-serif text-[1.05em] font-normal italic normal-case">
              <Highlighter>transformadas</Highlighter>
            </span>
          </h2>
        </Reveal>
        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <RevealItem key={t.name} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <blockquote className="flex-1 font-serif text-lg italic leading-relaxed text-marinho/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4 font-bold text-marinho">
                  {t.name}
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  )
}

// ── INVESTIMENTO / CTA ────────────────────────────────────────
export function PricingCta({ mba }: { mba: Mba }) {
  const p = mba.pricing
  return (
    <section className="bg-meia-noite py-24 text-nevoa">
      <Container>
        <Reveal>
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-marinho px-8 py-14 text-center md:px-14">
            <GridBackdrop />
            <GrainOverlay opacity={0.1} />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-ouro/15 blur-3xl" />
            <div className="relative">
              {mba.certification && (
                <TapeLabel tone="gold" className="mb-6">
                  {mba.certification}
                </TapeLabel>
              )}
              <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl">
                Investimento
              </h2>
              <div className="mt-6">
                {p.from && <p className="text-nevoa/50 line-through">{p.from}</p>}
                <p className="text-5xl font-extrabold text-ouro md:text-6xl">{p.price}</p>
                {p.installments && <p className="mt-2 text-nevoa/80">{p.installments}</p>}
                {p.cash && <p className="text-nevoa/80">{p.cash}</p>}
                {p.savings && <p className="mt-1 text-sm text-nevoa/60">Economia de {p.savings}</p>}
                {p.note && <p className="mt-3 text-sm text-nevoa/60">{p.note}</p>}
              </div>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link to="/contato">
                  <ShimmerButton>
                    {mba.cta}
                    <ArrowRight className="h-4 w-4" />
                  </ShimmerButton>
                </Link>
                <Link to="/contato">
                  <GradientBorderButton>Agendar entrevista</GradientBorderButton>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
