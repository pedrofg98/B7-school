import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/Container'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/reveal'
import { GrainOverlay, Eyebrow, Highlighter } from '@/components/ui/editorial'
import { MBA_ITEMS } from '@/config/home'

export function MbaShowcase() {
  return (
    <section className="relative overflow-hidden bg-meia-noite py-24 text-nevoa">
      <GrainOverlay opacity={0.1} />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="text-ouro">Programas MBA</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            5 MBAs como uma{' '}
            <span className="font-serif text-[1.05em] font-normal italic normal-case">
              <Highlighter>trilha de carreira</Highlighter>
            </span>
          </h2>
          <p className="mt-5 text-nevoa/70">
            Do varejo ao private banking — escolha o caminho que acelera sua evolução no mercado
            financeiro.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MBA_ITEMS.map((m) => (
            <RevealItem key={m.href} className="h-full">
              <Link to={m.href} className="block h-full">
                <SpotlightCard className="flex h-full flex-col">
                  <span className="mb-4 inline-flex w-fit rounded-full border border-ouro/30 bg-ouro/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ouro">
                    {m.tag}
                  </span>
                  <h3 className="text-xl font-bold leading-snug">{m.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-nevoa/70">{m.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-nevoa transition-colors group-hover:text-ouro">
                    Ver programa
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </SpotlightCard>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  )
}
