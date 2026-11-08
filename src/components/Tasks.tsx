import { tasks } from '../data/data'
import { wavesLight } from '../lib/decor'
import { DivisionNotebook } from './DivisionNotebook'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/SectionHead'
import './Tasks.css'

export function Tasks() {
  return (
    <section className="section" id="tasks">
      <div className="container">
        <div className="tasks__head-row">
          <div className="tasks__division">
            <DivisionNotebook />
          </div>
          <SectionHead eyebrow={tasks.eyebrow} title={tasks.title} lead={tasks.lead} />
        </div>
        <div className="tasks__grid">
          {tasks.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} fill>
              <article className="task-card" style={wavesLight}>
                <span className={`icon-tile tint-${item.tint}`}>
                  <Icon name={item.icon} size={26} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
