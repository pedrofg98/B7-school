import { Outlet, Link } from 'react-router-dom'
import { Logo } from '@/components/Logo'

// Layout enxuto para landing pages de conversão: sem navegação completa,
// só logo + CTA de âncora. Reduz pontos de fuga.
export function LpLayout() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-meia-noite/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 text-nevoa lg:px-8">
          <Link to="/" aria-label="B7 Business School" className="text-xl">
            <Logo />
          </Link>
          <a
            href="#oferta"
            className="rounded-full bg-ouro px-5 py-2.5 text-sm font-bold text-meia-noite transition-transform hover:scale-[1.03]"
          >
            Garantir minha vaga
          </a>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-meia-noite py-8 text-nevoa/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm sm:flex-row lg:px-8">
          <div className="text-lg text-nevoa">
            <Logo />
          </div>
          <p>© {new Date().getFullYear()} B7 Business School. Todos os direitos reservados.</p>
          <Link to="/" className="hover:text-ouro">
            Voltar ao site
          </Link>
        </div>
      </footer>
    </div>
  )
}
