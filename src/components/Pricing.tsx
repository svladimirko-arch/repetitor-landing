import { pricing } from '../data/data'
import { wavesDark, wavesLight } from '../lib/decor'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/SectionHead'
import './Pricing.css'

export function Pricing({ onPick }: { onPick: (planName: string) => void }) {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionHead eyebrow={pricing.eyebrow} title={pricing.title} lead={pricing.lead} />
        <div className="pricing__grid">
          {pricing.plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 120} fill>
              <article
                className={`plan${plan.featured ? ' plan--featured' : ''}`}
                style={plan.featured ? wavesDark : wavesLight}
              >
                {plan.badge && <span className="plan__badge">{plan.badge}</span>}
                <h3>{plan.name}</h3>
                <div className="plan__price">
                  <span className="plan__value">{plan.price}</span>
                  <span className="plan__period">{plan.period}</span>
                </div>
                <ul className="plan__features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <Icon name="check" size={17} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`btn btn--block ${plan.featured ? 'btn--light' : 'btn--primary'}`}
                  onClick={() => onPick(plan.name)}
                >
                  {pricing.ctaLabel}
                </button>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="pricing__note">{pricing.note}</p>
      </div>
    </section>
  )
}
