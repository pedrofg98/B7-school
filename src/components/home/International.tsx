import { Link } from 'react-router-dom'
import { ArrowUpRight, Globe2 } from 'lucide-react'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/ui/reveal'
import { AuroraGlow } from '@/components/ui/backdrops'
import { INTERNATIONAL } from '@/config/home'

export function International() {
  return (
    <section className="relative overflow-hidden bg-marinho py-24 text-nevoa">
      <AuroraGlow />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-ouro/30 bg-ouro/10 px-4 py-1.5 text-sm font-semibold text-ouro">
              <Globe2 className="h-4 w-4" />
              {INTERNATIONAL.eyebrow}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl">{INTERNATIONAL.title}</h2>
            <p className="mt-5 max-w-lg text-nevoa/75">{INTERNATIONAL.desc}</p>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-5 sm:grid-cols-2">
            {INTERNATIONAL.items.map((it) => (
              <Link
                key={it.href}
                to={it.href}
                className="group relative flex min-h-44 flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-azul-detalhe/40 to-meia-noite p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ouro/50"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-ouro/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <h3 className="text-xl font-bold">{it.title}</h3>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-nevoa/80 transition-colors group-hover:text-ouro">
                  Explorar imersão
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
