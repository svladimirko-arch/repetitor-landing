import { process } from '../data/data'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/SectionHead'
import { OnlineIllustration } from './illustrations/OnlineIllustration'
import './Process.css'

export function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <SectionHead eyebrow={process.eyebrow} title={process.title} lead={process.lead} />
        <div className="process__grid">
          <Reveal className="process__visual">
            <div className="process__art">
              {process.image ? (
                <img
                  src={process.image}
                  alt="Ученик на онлайн-занятии: видеосвязь с преподавателем"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <OnlineIllustration />
              )}
            </div>
            <p className="process__note">{process.note}</p>
          </Reveal>

          <ol className="process__steps">
            {process.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 110} fill>
                <li className="process-step">
                  <span className="process-step__num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div className="process-step__body">
                    <h3>
                      <Icon name={step.icon} size={19} />
                      {step.title}
                    </h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
