import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/ui/reveal'
import { ShimmerButton, GradientBorderButton } from '@/components/ui/shimmer-button'
import { GridBackdrop } from '@/components/ui/backdrops'

export function FinalCta() {
  return (
    <section className="bg-background py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-marinho px-8 py-16 text-center text-nevoa md:px-16 md:py-20">
            <GridBackdrop />
            <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-azul-detalhe/30 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-ouro/15 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">
                Pronto para dar o próximo passo na sua carreira?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-nevoa/75">
                Fale com um consultor e descubra qual formação da B7 é ideal para o seu momento no
                mercado financeiro.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link to="/contato">
                  <ShimmerButton>
                    Falar com um consultor
                    <ArrowRight className="h-4 w-4" />
                  </ShimmerButton>
                </Link>
                <Link to="/quem-somos">
                  <GradientBorderButton>Conhecer a B7</GradientBorderButton>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
