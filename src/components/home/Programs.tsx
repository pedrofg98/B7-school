import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/Container'
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/reveal'
import { Eyebrow, Highlighter } from '@/components/ui/editorial'
import { PROGRAMS } from '@/config/home'

export function Programs() {
  return (
    <section className="bg-background py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="text-azul-detalhe">Certificações & Programas</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-marinho md:text-4xl lg:text-5xl">
            Do início{' '}
            <span className="font-serif text-[1.05em] font-normal italic normal-case">
              <Highlighter>ao topo</Highlighter>
            </span>
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p) => (
            <RevealItem key={p.href} className="h-full">
              <Link
                to={p.href}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ouro/50 hover:shadow-[0_16px_40px_-16px_rgba(10,35,66,0.25)]"
              >
                <h3 className="text-lg font-bold text-marinho">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-azul-detalhe">
                  Saiba mais
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  )
}
