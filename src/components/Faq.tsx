import { useState } from 'react'
import { faq } from '../data/data'
import { wavesLight } from '../lib/decor'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import { SectionHead } from './ui/SectionHead'
import './Faq.css'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section section--alt" id="faq">
      <div className="container">
        <SectionHead eyebrow={faq.eyebrow} title={faq.title} />
        <div className="faq__list">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`} style={wavesLight}>
                  <button
                    type="button"
                    className="faq-item__q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <Icon name="chevron-down" size={20} className="faq-item__chev" />
                  </button>
                  <div className="faq-item__a" id={`faq-a-${i}`} role="region">
                    <div className="faq-item__a-inner">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
