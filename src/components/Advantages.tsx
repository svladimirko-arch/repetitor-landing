import { advantages } from '../data/data'
import { wavesLight } from '../lib/decor'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/SectionHead'
import './Advantages.css'

const tints = ['tint-blue', 'tint-teal', 'tint-amber', 'tint-violet', 'tint-blue', 'tint-teal']

export function Advantages() {
  return (
    <section className="section" id="advantages">
      <div className="container">
        <SectionHead eyebrow={advantages.eyebrow} title={advantages.title} lead={advantages.lead} />
        <div className="advantages__grid">
          {advantages.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 100} fill>
              <article className="advantage-card" style={wavesLight}>
                <span className={`icon-tile ${tints[i % tints.length]}`}>
                  <Icon name={item.icon} size={25} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
