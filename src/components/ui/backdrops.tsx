import { cn } from '@/lib/utils'

// Grade sutil de fundo (linhas) — dá profundidade sem poluir.
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0', className)}
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(232,235,240,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(232,235,240,0.06) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)',
      }}
    />
  )
}

// Manchas de luz (aurora) que flutuam devagar.
export function AuroraGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-azul-detalhe/25 blur-[100px] [animation:float-slow_9s_ease-in-out_infinite]" />
      <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-ouro/15 blur-[110px] [animation:float-slow_11s_ease-in-out_infinite]" />
    </div>
  )
}
