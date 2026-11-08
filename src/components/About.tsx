import { useState } from 'react'
import { teacher } from '../data/data'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { TeacherPlaceholder } from './illustrations/TeacherPlaceholder'
import './About.css'

export function About() {
  const [broken, setBroken] = useState(false)
  const showPhoto = Boolean(teacher.photo) && !broken

  return (
    <section className="section section--alt" id="about">
      <div className="container about__grid">
        <Reveal className="about__photo-wrap">
          <div className="about__photo">
            {showPhoto ? (
              <img
                src={teacher.photo}
                alt={`Фотография преподавателя — ${teacher.name}`}
                onError={() => setBroken(true)}
              />
            ) : (
              <TeacherPlaceholder />
            )}
            <span className="about__badge">
              <Icon name={teacher.badge.icon} size={20} />
              {teacher.badge.text}
            </span>
          </div>
        </Reveal>

        <div className="about__content">
          <Reveal>
            <span className="eyebrow">{teacher.role}</span>
            <h2 className="about__title">{teacher.title}</h2>
          </Reveal>
          <Reveal delay={120}>
            {teacher.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="about__text">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={220}>
            <div className="about__stats">
              {teacher.stats.map((s) => (
                <div key={s.label} className="about__stat">
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
