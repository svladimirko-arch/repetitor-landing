import { audiences } from '../data/data'
import { wavesLight } from '../lib/decor'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/SectionHead'
import './Audiences.css'

export function Audiences() {
  return (
    <section className="section" id="audiences">
      <div className="container">
        <SectionHead eyebrow={audiences.eyebrow} title={audiences.title} lead={audiences.lead} />
        <div className="audiences__grid">
          {audiences.items.map((a, i) => (
            <Reveal key={a.grades} delay={i * 110} fill>
              <article className={`audience-card audience-card--${a.accent}`} style={wavesLight}>
                <span className="audience-card__grades" aria-hidden="true">
                  {a.grades}
                </span>
                <span className={`icon-tile tint-${a.accent}`}>
                  <Icon name={a.icon} size={26} />
                </span>
                <h3>
                  <span className="audience-card__classes">{a.grades} классы</span> · {a.title}
                </h3>
                <p>{a.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
