import { Container } from '@/components/Container'
import { Reveal } from '@/components/ui/reveal'
import { GrainOverlay, TapeLabel } from '@/components/ui/editorial'
import { MANIFESTO } from '@/config/home'

// Seção-manifesto full ouro — o "slide amarelão" de impacto (DNA Conquer).
export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-ouro py-24 text-meia-noite md:py-28">
      <GrainOverlay opacity={0.1} className="mix-blend-multiply" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <TapeLabel tone="light" rotate="-rotate-2" className="mb-8">
            {MANIFESTO.tape}
          </TapeLabel>
          <h2 className="text-3xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {MANIFESTO.before}
            <span className="font-serif italic normal-case">{MANIFESTO.highlight}</span>
            {MANIFESTO.after}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium text-meia-noite/75">
            {MANIFESTO.desc}
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
