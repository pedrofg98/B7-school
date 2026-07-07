import { Container } from '@/components/Container'

// Página provisória — recebe título e nota até o conteúdo real ser construído.
export function Placeholder({ title, note }: { title: string; note?: string }) {
  return (
    <section className="bg-marinho py-28 text-nevoa">
      <Container className="text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-ouro">
          Em construção
        </p>
        <h1 className="text-4xl md:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-nevoa/70">
          {note ?? 'Esta página será construída na sequência. Estrutura e tema já estão prontos.'}
        </p>
      </Container>
    </section>
  )
}
