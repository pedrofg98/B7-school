import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

// Faixa em rolagem infinita (estilo 21st.dev). Duplica os filhos para loop contínuo.
export function Marquee({
  children,
  className,
  speed = 32,
}: {
  children: ReactNode
  className?: string
  speed?: number
}) {
  return (
    <div
      className={cn(
        'group relative flex w-full overflow-hidden',
        '[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]',
        className,
      )}
    >
      <div
        className="flex shrink-0 items-center gap-4 pr-4 [animation:marquee_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-4 pr-4 [animation:marquee_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
    </div>
  )
}
