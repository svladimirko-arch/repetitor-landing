import { hero } from '../data/data'
import { Icon } from './ui/Icon'
import { HeroIllustration } from './illustrations/HeroIllustration'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero" id="hero">
      {/* едва заметные формулы на фоне */}
      <span className="hero__formula hero__formula--1" aria-hidden="true">
        ∑
      </span>
      <span className="hero__formula hero__formula--2" aria-hidden="true">
        π
      </span>
      <span className="hero__formula hero__formula--3" aria-hidden="true">
        Δt
      </span>
      <span className="hero__formula hero__formula--4" aria-hidden="true">
        √x
      </span>

      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__badge fade-item" style={{ animationDelay: '.05s' }}>
            <Icon name="sparkles" size={16} />
            {hero.badge}
          </span>

          <h1 className="hero__title fade-item" style={{ animationDelay: '.15s' }}>
            {hero.titleBefore}
            <span className="hero__highlight">{hero.titleHighlight}</span>
            {hero.titleAfter}
          </h1>

          <p className="hero__subtitle fade-item" style={{ animationDelay: '.25s' }}>
            {hero.subtitle}
          </p>

          <ul className="hero__points fade-item" style={{ animationDelay: '.35s' }}>
            {hero.points.map((p) => (
              <li key={p.label}>
                <Icon name={p.icon} size={18} />
                <span>{p.label}</span>
              </li>
            ))}
          </ul>

          <div className="hero__actions fade-item" style={{ animationDelay: '.45s' }}>
            <a href={`#${hero.primaryCta.target}`} className="btn btn--primary btn--lg">
              {hero.primaryCta.label}
            </a>
            <a href={`#${hero.secondaryCta.target}`} className="btn btn--ghost btn--lg">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero__art fade-item" style={{ animationDelay: '.3s' }}>
          {hero.photo ? (
            hero.photoMobile ? (
              // отдельная картинка для мобильных (через <picture>), десктопная — по умолчанию
              <picture>
                <source media="(max-width: 767px)" srcSet={hero.photoMobile} />
                <img src={hero.photo} alt={hero.photoAlt} loading="eager" decoding="async" />
              </picture>
            ) : (
              <img src={hero.photo} alt={hero.photoAlt} loading="eager" decoding="async" />
            )
          ) : (
            <HeroIllustration />
          )}
        </div>
      </div>
    </section>
  )
}
