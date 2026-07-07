import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, animate } from 'motion/react'

// Conta de 0 até `value` quando entra na viewport.
export function NumberTicker({
  value,
  duration = 1.6,
  suffix = '',
  prefix = '',
  className,
}: {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15%' })
  const mv = useMotionValue(0)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(mv, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    })
    return controls.stop
  }, [inView, value, duration, mv])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(display).toLocaleString('pt-BR')}
      {suffix}
    </span>
  )
}
