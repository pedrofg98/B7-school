import { useRef, type ReactNode, type MouseEvent } from 'react'
import { cn } from '@/lib/utils'

// Card com spotlight que segue o cursor + borda em degradê no hover (estilo 21st.dev).
export function SpotlightCard({
  children,
  className,
  spotlightColor = 'rgba(235,179,24,0.14)',
}: {
  children: ReactNode
  className?: string
  spotlightColor?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8',
        'transition-all duration-300 hover:border-ouro/40 hover:-translate-y-1',
        className,
      )}
    >
      {/* brilho radial que segue o mouse */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(320px circle at var(--mx) var(--my), ${spotlightColor}, transparent 65%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
