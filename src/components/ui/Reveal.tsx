import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** задержка появления в мс — для «каскада» карточек */
  delay?: number
  /** растянуть обёртку на всю высоту родителя (для карточек в grid) */
  fill?: boolean
}

/**
 * Обёртка «появление при прокрутке» на IntersectionObserver.
 * При prefers-reduced-motion блоки показываются сразу, без анимации.
 */
export function Reveal({ children, className = '', delay = 0, fill = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -32px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal${fill ? ' reveal--fill' : ''}${shown ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
