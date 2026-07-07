import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

// ─────────────────────────────────────────────────────────────
// Primitivas de estilo editorial (DNA Conquer → paleta B7)
// ─────────────────────────────────────────────────────────────

// Marca-texto (highlighter) atrás da palavra — leve rotação, texto escuro.
export function Highlighter({
  children,
  className,
  color = 'bg-ouro',
  rotate = '-rotate-1',
}: {
  children: ReactNode
  className?: string
  color?: string
  rotate?: string
}) {
  return (
    <span className={cn('relative inline-block', className)}>
      <span
        aria-hidden
        className={cn('absolute inset-x-[-0.12em] bottom-[0.02em] top-[0.14em] -z-0', color, rotate)}
      />
      <span className="relative z-10 text-meia-noite">{children}</span>
    </span>
  )
}

// Rótulo em "fita" (tape) rotacionada — uppercase, tracking largo.
export function TapeLabel({
  children,
  className,
  tone = 'light',
  rotate = '-rotate-2',
}: {
  children: ReactNode
  className?: string
  tone?: 'light' | 'gold'
  rotate?: string
}) {
  return (
    <span
      className={cn(
        'inline-block px-4 py-1.5 text-sm font-extrabold uppercase tracking-[0.18em] shadow-md',
        tone === 'gold' ? 'bg-ouro text-meia-noite' : 'bg-nevoa text-meia-noite',
        rotate,
        className,
      )}
    >
      {children}
    </span>
  )
}

// Moldura tracejada (como o bloco "temas que moldaram uma década").
export function DashedFrame({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-xl border-2 border-dashed border-current/40 p-6',
        className,
      )}
    >
      {children}
    </div>
  )
}

// Eyebrow editorial — uppercase, tracking bem largo.
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p className={cn('text-xs font-bold uppercase tracking-[0.32em]', className)}>{children}</p>
  )
}

// Overlay de grão/ruído sutil (dá textura editorial). Cobre o container pai.
const GRAIN_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

export function GrainOverlay({
  className,
  opacity = 0.12,
}: {
  className?: string
  opacity?: number
}) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 mix-blend-overlay', className)}
      style={{ backgroundImage: GRAIN_URI, opacity }}
    />
  )
}
