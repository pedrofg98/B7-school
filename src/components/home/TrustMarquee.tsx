import { Container } from '@/components/Container'
import { Marquee } from '@/components/ui/marquee'
import { TRUST_LOGOS } from '@/config/home'

export function TrustMarquee() {
  return (
    <section className="border-y border-border bg-background py-12">
      <Container>
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Nossos alunos atuam nas principais instituições do mercado
        </p>
      </Container>
      <Marquee speed={30}>
        {TRUST_LOGOS.map((bank) => (
          <div
            key={bank.name}
            className="flex h-16 w-44 shrink-0 items-center justify-center"
          >
            <img
              src={bank.src}
              alt={bank.name}
              title={bank.name}
              loading="lazy"
              className="max-h-11 w-auto max-w-[140px] object-contain opacity-55 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
