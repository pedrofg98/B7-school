import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ShimmerButtonProps = {
  children: ReactNode
  className?: string
} & ComponentProps<'button'>

// Botão com brilho percorrendo a borda (estilo 21st.dev / magicui).
export function ShimmerButton({ children, className, ...props }: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full',
        'bg-ouro px-7 py-3.5 font-bold text-meia-noite',
        'shadow-[0_4px_24px_-4px_rgba(235,179,24,0.5)] transition-transform duration-200 hover:scale-[1.03] active:scale-95',
        className,
      )}
      {...props}
    >
      {/* faixa de brilho que atravessa no hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  )
}

// Variante "ghost" com borda em degradê animada, para CTAs secundários.
export function GradientBorderButton({ children, className, ...props }: ShimmerButtonProps) {
  return (
    <button
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 rounded-full p-[1.5px]',
        'bg-[linear-gradient(110deg,transparent,rgba(235,179,24,0.6),transparent)] bg-[length:200%_100%]',
        'transition-transform duration-200 hover:scale-[1.03] active:scale-95',
        '[animation:shimmer-x_3s_linear_infinite]',
        className,
      )}
      {...props}
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-marinho px-6 py-3 font-semibold text-nevoa transition-colors group-hover:text-ouro">
        {children}
      </span>
    </button>
  )
}
