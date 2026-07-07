import { Quote } from 'lucide-react'
import { Container } from '@/components/Container'
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/reveal'
import { Eyebrow, Highlighter } from '@/components/ui/editorial'
import { TESTIMONIALS } from '@/config/home'

export function Testimonials() {
  return (
    <section className="bg-nevoa py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="text-azul-detalhe">Depoimentos</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-marinho md:text-4xl lg:text-5xl">
            Quem{' '}
            <span className="font-serif text-[1.05em] font-normal italic normal-case">
              <Highlighter>transformou a carreira</Highlighter>
            </span>
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <RevealItem key={i} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
                <Quote className="h-8 w-8 text-ouro" />
                <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-marinho/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-bold text-marinho">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  )
}
