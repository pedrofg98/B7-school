import { Container } from '@/components/Container'
import { Reveal, RevealStagger, RevealItem } from '@/components/ui/reveal'
import { GrainOverlay, Eyebrow, Highlighter, DashedFrame } from '@/components/ui/editorial'
import { PEOPLE } from '@/config/home'

// "Quem faz acontecer" — exalta a jovialidade e a autoridade do time.
export function People() {
  return (
    <section className="relative overflow-hidden bg-marinho py-24 text-nevoa">
      <GrainOverlay opacity={0.1} />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow className="text-ouro">{PEOPLE.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {PEOPLE.title}{' '}
            <span className="font-serif text-[1.05em] font-normal italic normal-case">
              <Highlighter>{PEOPLE.highlight}</Highlighter>
            </span>
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {PEOPLE.members.map((m) => (
            <RevealItem key={m.name}>
              <figure className="group relative overflow-hidden rounded-2xl border border-white/10 bg-meia-noite">
                {/* placeholder de retrato — trocar por foto oficial (fundo escuro) */}
                <div className="relative flex aspect-[4/5] items-center justify-center bg-gradient-to-b from-azul-detalhe/40 to-meia-noite">
                  <span className="font-serif text-5xl italic text-nevoa/25">{m.initials}</span>
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-meia-noite to-transparent" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-lg font-extrabold leading-tight">{m.name}</p>
                  <p className="font-serif text-sm italic text-nevoa/70">{m.role}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* faixa de temas (moldura tracejada estilo Conquer) */}
        <Reveal className="mt-12">
          <DashedFrame className="mx-auto max-w-3xl border-nevoa/30 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-nevoa/60">
              Temas que movem o mercado
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {PEOPLE.topics.map((t) => (
                <span key={t} className="text-lg font-extrabold text-nevoa">
                  <span className="text-ouro">›</span> {t}
                </span>
              ))}
            </div>
          </DashedFrame>
        </Reveal>
      </Container>
    </section>
  )
}
