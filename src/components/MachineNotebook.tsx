import { useEffect, useRef, type CSSProperties } from 'react'
import './MachineNotebook.css'

/**
 * Тетрадный лист с электрофорной машиной (по мотивам классического рисунка):
 * большой диск с секторами за A-рамой, две банки-цилиндра по бокам,
 * разрядные стержни с шариками сверху, ременной привод с маховиком.
 *
 * Анимация привязана к прокрутке (scroll-scrub): компонент выставляет на листе
 * переменную --p (0…1) из положения в окне. Скролл остановился — рисунок
 * замер на текущем кадре. По ходу решения диск раскручивается,
 * шарики на стержнях сближаются, между ними проскакивает искра.
 *
 * Блок размещается НАД карточками предметов (см. Subjects.tsx).
 */

const st = (s: number, extra?: Record<string, string | number>): CSSProperties =>
  ({ '--s': s, ...extra }) as CSSProperties

// радиальные линии-секторы диска (12 штук), рисуются по очереди
const sectors = Array.from({ length: 12 }, (_, k) => {
  const a = (k * 30 * Math.PI) / 180
  return {
    d: `M${(172 + 18 * Math.sin(a)).toFixed(1)} ${(128 - 18 * Math.cos(a)).toFixed(1)} L${(172 + 88 * Math.sin(a)).toFixed(1)} ${(128 - 88 * Math.cos(a)).toFixed(1)}`,
    s: 0.4 + k * 0.012,
  }
})

export function MachineNotebook() {
  const sheetRef = useRef<HTMLDivElement>(null)

  // прогресс анимации следует за прокруткой
  useEffect(() => {
    const el = sheetRef.current
    if (!el) return
    const set = (p: number) => el.style.setProperty('--p', p.toFixed(4))
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      set(1)
      return
    }
    const update = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const start = vh * 0.9
      const end = vh * 0.5
      const p = Math.min(1, Math.max(0, (start - r.top) / (start - end)))
      set(p)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="machine__outer">
      <div className="machine__wrap">
        <div
          ref={sheetRef}
          className="machine__sheet"
          role="img"
          aria-label="Тетрадный лист: рисунок электрофорной машины — диски раскручиваются, шарики на разрядных стержнях сближаются и возникает искра"
        >
          <svg className="machine__svg" viewBox="0 0 344 336" fill="none" aria-hidden="true">
            {/* стол-основание */}
            <path className="m-el m-draw m-thick" style={st(0.1, { '--dur': 0.04 })} pathLength="1" d="M70 304 H280" />
            <path className="m-el m-draw" style={st(0.1, { '--dur': 0.04 })} pathLength="1" d="M78 296 H272" />

            {/* банки-цилиндры */}
            <g className="m-el m-draw" style={st(0.14, { '--dur': 0.06 })} aria-hidden="true">
              <path pathLength="1" d="M64 216 V296" />
              <path pathLength="1" d="M110 216 V296" />
              <path pathLength="1" d="M64 296 H110" />
              <ellipse pathLength="1" cx="87" cy="216" rx="23" ry="6" />
              <path pathLength="1" d="M64 234 H110" strokeWidth="2" />
              <path pathLength="1" d="M64 250 H110" strokeWidth="2" />
              <path pathLength="1" d="M64 266 H110" strokeWidth="2" />
              <path pathLength="1" d="M64 282 H110" strokeWidth="2" />
            </g>
            <g className="m-el m-draw" style={st(0.2, { '--dur': 0.06 })} aria-hidden="true">
              <path pathLength="1" d="M234 216 V296" />
              <path pathLength="1" d="M284 216 V296" />
              <path pathLength="1" d="M234 296 H284" />
              <ellipse pathLength="1" cx="259" cy="216" rx="23" ry="6" />
              <path pathLength="1" d="M234 234 H284" strokeWidth="2" />
              <path pathLength="1" d="M234 250 H284" strokeWidth="2" />
              <path pathLength="1" d="M234 266 H284" strokeWidth="2" />
              <path pathLength="1" d="M234 282 H284" strokeWidth="2" />
            </g>

            {/* A-рама и ось */}
            <path className="m-el m-draw" style={st(0.26, { '--dur': 0.04 })} pathLength="1" d="M150 296 L172 158" />
            <path className="m-el m-draw" style={st(0.28, { '--dur': 0.04 })} pathLength="1" d="M194 296 L172 158" />
            <circle className="m-el m-draw" style={st(0.3, { '--dur': 0.03 })} pathLength="1" cx="172" cy="152" r="13" />
            <circle className="m-el m-draw" style={st(0.31, { '--dur': 0.03 })} pathLength="1" cx="172" cy="152" r="5" />

            {/* большой диск с секторами — раскручивается */}
            <circle className="m-el m-draw" style={st(0.34, { '--dur': 0.06 })} pathLength="1" cx="172" cy="128" r="90" />
            <circle className="m-el m-draw" style={st(0.35, { '--dur': 0.06 })} pathLength="1" cx="172" cy="128" r="80" />
            <g className="m-disc-spin">
              {sectors.map((sec, idx) => (
                <path
                  key={idx}
                  className="m-el m-draw m-sector"
                  style={st(sec.s, { '--dur': 0.04 })}
                  pathLength="1"
                  d={sec.d}
                />
              ))}
            </g>
            <circle className="m-el m-draw" style={st(0.55, { '--dur': 0.03 })} pathLength="1" cx="172" cy="128" r="16" />

            {/* разрядные стержни с шариками — сближаются при прокрутке */}
            <g className="m-rod m-rod-l">
              <path className="m-el m-draw" style={st(0.57, { '--dur': 0.06 })} pathLength="1" d="M87 212 L146 58" />
              <circle className="m-el m-fill" style={st(0.62, { '--dur': 0.04 })} cx="146" cy="58" r="8" fill="#1e4fb8" />
            </g>
            <g className="m-rod m-rod-r">
              <path className="m-el m-draw" style={st(0.6, { '--dur': 0.06 })} pathLength="1" d="M259 212 L200 58" />
              <circle className="m-el m-fill" style={st(0.64, { '--dur': 0.04 })} cx="200" cy="58" r="8" fill="#1e4fb8" />
            </g>

            {/* ременной привод и маховик */}
            <path className="m-el m-draw" style={st(0.66, { '--dur': 0.04 })} pathLength="1" d="M159 152 L146 240" />
            <path className="m-el m-draw" style={st(0.68, { '--dur': 0.04 })} pathLength="1" d="M185 152 L198 240" />
            <circle className="m-el m-draw" style={st(0.7, { '--dur': 0.05 })} pathLength="1" cx="172" cy="258" r="26" />
            <circle className="m-el m-draw" style={st(0.72, { '--dur': 0.03 })} pathLength="1" cx="172" cy="258" r="6" />
            <g className="m-pulley-spin">
              <path className="m-el m-draw" style={st(0.73, { '--dur': 0.04 })} pathLength="1" d="M172 232 V284" />
              <path className="m-el m-draw" style={st(0.73, { '--dur': 0.04 })} pathLength="1" d="M146 258 H198" />
            </g>

            {/* вспышка и искра между шариками */}
            <circle className="m-el m-flash" style={st(0.92, { '--dur': 0.07 })} cx="174" cy="55" r="20" fill="#fde68a" />
            <path
              className="m-el m-spark"
              style={st(0.92, { '--dur': 0.04 })}
              pathLength="1"
              d="M157 56 L166 47 L170 62 L191 56"
            />

            {/* подпись */}
            <text className="m-el m-caption" style={st(0.95)} x="172" y="28" textAnchor="middle">
              электрофорная машина
            </text>
          </svg>
        </div>
      </div>
    </div>
  )
}
