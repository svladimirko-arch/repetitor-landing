import { subjects } from '../data/data'
import { wavesLight } from '../lib/decor'
import { MachineNotebook } from './MachineNotebook'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/SectionHead'
import { MathIllustration } from './illustrations/MathIllustration'
import { PhysicsIllustration } from './illustrations/PhysicsIllustration'
import './Subjects.css'

const illustrations: Record<string, () => JSX.Element> = {
  math: MathIllustration,
  physics: PhysicsIllustration,
}

export function Subjects({ onPick }: { onPick: (subjectId: string) => void }) {
  return (
    <section className="section section--alt" id="subjects">
      <div className="container">
        <div className="subjects__head-row">
          <SectionHead eyebrow={subjects.eyebrow} title={subjects.title} lead={subjects.lead} />
          <div className="subjects__machine">
            <MachineNotebook />
          </div>
        </div>
        <div className="subjects__grid">
          {subjects.items.map((s, i) => {
            const Art = illustrations[s.id]
            return (
              <Reveal key={s.id} delay={i * 120}>
                <article className={`subject-card subject-card--${s.id}`}>
                  <div className="subject-card__art">
                    {s.art ? (
                      <img
                        src={s.art}
                        alt={`Иллюстрация: ${s.title.toLowerCase()}`}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      Art && <Art />
                    )}
                  </div>
                  <div className="subject-card__body" style={wavesLight}>
                    <div className="subject-card__head">
                      <span className="icon-tile subject-card__icon">
                        <Icon name={s.icon} size={26} />
                      </span>
                      <div>
                        <h3>{s.title}</h3>
                        <p className="subject-card__tagline">{s.tagline}</p>
                      </div>
                    </div>
                    <ul className="subject-card__list">
                      {s.bullets.map((b) => (
                        <li key={b}>
                          <Icon name="check" size={18} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <button type="button" className="btn btn--outline" onClick={() => onPick(s.id)}>
                      {s.cta}
                      <Icon name="arrow-right" size={18} />
                    </button>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
