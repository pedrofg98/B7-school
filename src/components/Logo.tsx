import { cn } from '@/lib/utils'

// Logo oficial da B7 (versão branca, para fundos escuros).
// Extraída do brand book oficial. Arquivo em public/brand/.
// Altura padrão h-9; sobrescreva via className.
export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/brand/logo-b7-branca.png"
      alt="B7 Business School"
      className={cn('h-9 w-auto select-none', className)}
      draggable={false}
    />
  )
}
