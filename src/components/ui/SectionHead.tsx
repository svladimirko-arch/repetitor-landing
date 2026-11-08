import { Reveal } from './Reveal'

interface SectionHeadProps {
  eyebrow?: string
  title: string
  lead?: string
  align?: 'center' | 'left'
}

/** Стандартная «шапка» секции: бирка + заголовок + подводка */
export function SectionHead({ eyebrow, title, lead, align = 'center' }: SectionHeadProps) {
  return (
    <Reveal className={`section-head section-head--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  )
}
