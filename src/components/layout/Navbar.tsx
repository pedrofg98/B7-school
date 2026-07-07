import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, UserRound } from 'lucide-react'
import { NAV, CTA, type NavItem } from '@/config/site'
import { Logo } from '@/components/Logo'
import { cn } from '@/lib/utils'

function hasDropdown(item: NavItem) {
  return Boolean(item.columns?.length || item.links?.length)
}

function Dropdown({ item }: { item: NavItem }) {
  // Mega menu (várias colunas) ou lista simples
  const isMega = Boolean(item.columns?.length)
  return (
    <div
      className={cn(
        'invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150',
        'group-hover:visible group-hover:opacity-100',
      )}
    >
      <div className="rounded-xl border border-white/10 bg-meia-noite p-6 shadow-2xl shadow-black/40">
        {isMega ? (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-x-10 gap-y-6">
            {item.columns!.map((col) => (
              <div key={col.title} className="min-w-[190px]">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-nevoa/60">
                  {col.title}
                </p>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.href}
                        className="flex items-start gap-2 text-sm text-nevoa/85 transition-colors hover:text-ouro"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-azul-detalhe" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul className="min-w-[220px] space-y-1">
            {item.links!.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="block rounded-md px-3 py-2 text-sm text-nevoa/85 transition-colors hover:bg-white/5 hover:text-ouro"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-marinho/95 backdrop-blur supports-[backdrop-filter]:bg-marinho/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 text-nevoa lg:px-8">
        <Link to="/" aria-label="B7 Business School — início" className="shrink-0 text-2xl">
          <Logo />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-1 xl:flex">
          {NAV.map((item) =>
            hasDropdown(item) ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-nevoa/90 transition-colors hover:text-ouro">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:rotate-180" />
                </button>
                <Dropdown item={item} />
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href!}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:text-ouro',
                  location.pathname === item.href ? 'text-ouro' : 'text-nevoa/90',
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CTA.href}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ouro px-5 py-2.5 text-sm font-bold text-meia-noite transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <UserRound className="h-4 w-4" />
            {CTA.label}
          </a>
          <button
            className="rounded-md p-2 text-nevoa xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Navegação mobile */}
      {open && (
        <div className="border-t border-white/10 bg-meia-noite text-nevoa xl:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
            {NAV.map((item) => (
              <MobileItem key={item.label} item={item} onNavigate={() => setOpen(false)} />
            ))}
            <a
              href={CTA.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-ouro px-5 py-3 text-sm font-bold text-meia-noite"
            >
              <UserRound className="h-4 w-4" /> {CTA.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function MobileItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false)
  const children =
    item.columns?.flatMap((c) => c.links) ?? item.links ?? []

  if (!hasDropdown(item)) {
    return (
      <Link
        to={item.href!}
        onClick={onNavigate}
        className="block rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-wide text-nevoa/90 hover:bg-white/5"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-semibold uppercase tracking-wide text-nevoa/90 hover:bg-white/5"
      >
        {item.label}
        <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
      </button>
      {open && (
        <ul className="ml-3 border-l border-white/10 pl-3">
          {children.map((l) => (
            <li key={l.label}>
              <Link
                to={l.href}
                onClick={onNavigate}
                className="block rounded-md px-3 py-2 text-sm text-nevoa/75 hover:text-ouro"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
