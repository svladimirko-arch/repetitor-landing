import { reviews } from '../data/data'
import { wavesLight } from '../lib/decor'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/SectionHead'
import './Reviews.css'

function initials(name: string) {
  return name
    .replace(/[^А-Яа-яA-Za-z\s]/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')
}

export function Reviews() {
  return (
    <section className="section section--alt" id="reviews">
      <div className="container">
        <SectionHead eyebrow={reviews.eyebrow} title={reviews.title} lead={reviews.lead} />
        <div className="reviews__grid">
          {reviews.items.map((r, i) => (
            <Reveal key={r.name + r.role} delay={i * 110} fill>
              <article className="review-card" style={wavesLight}>
                <span className="review-card__demo">{reviews.demoBadge}</span>
                <div className="review-card__stars" aria-label={`Оценка ${r.rating} из 5`}>
                  {Array.from({ length: r.rating }, (_, k) => (
                    <Icon key={k} name="star" size={16} />
                  ))}
                </div>
                <p className="review-card__text">«{r.text}»</p>
                <footer className="review-card__footer">
                  <span className="review-card__avatar" aria-hidden="true">
                    {initials(r.name)}
                  </span>
                  <div>
                    <b>{r.name}</b>
                    <span>
                      {r.role} · {r.subject}
                    </span>
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
