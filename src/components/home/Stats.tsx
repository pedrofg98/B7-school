import { Container } from '@/components/Container'
import { NumberTicker } from '@/components/ui/number-ticker'
import { RevealStagger, RevealItem } from '@/components/ui/reveal'
import { STATS } from '@/config/home'

export function Stats() {
  return (
    <section className="bg-background py-20">
      <Container>
        <RevealStagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s) => (
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
  )
}
