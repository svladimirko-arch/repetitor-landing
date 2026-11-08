import { useEffect, useRef, type CSSProperties } from 'react'
import './DivisionNotebook.css'

/**
 * Декоративный блок-переход между первым экраном и «Задачами»:
 * слева — тетрадный лист в клетку с размытыми краями, на котором
 * «рукой» пишется деление столбиком 33764 ÷ 23 = 1468.
 *
 * Анимация привязана к прокрутке (scroll-scrub): прогресс задаётся
 * CSS-переменной --p (0…1) и вычисляется из положения листа в окне.
 * Скролл остановился — анимация замерла на текущем кадре.
 * Каждая цифра стоит строго в своей клетке; частное появляется
 * по одной цифре по ходу решения.
 */

const CELL = 28 // размер клетки, px
const OX = 20 // отступ сетки слева, px
const OY = 12 // отступ сетки сверху, px

type Digit = { ch: string; col: number; row: number; s: number }

const digits: Digit[] = []
const put = (word: string, col: number, row: number, s: number, step = 0.015) => {
  word.split('').forEach((ch, i) => digits.push({ ch, col: col + i, row, s: s + i * step }))
}

// делимое и делитель
put('33764', 1, 0, 0.1)
put('23', 7, 0, 0.175)
// шаги: вычитаемое, остаток и по одной цифре частного за шаг
put('−23', 0, 1, 0.26)
put('107', 1, 2, 0.355)
put('1', 7, 1, 0.4, 0)
put('−92', 1, 3, 0.455)
put('156', 2, 4, 0.545)
put('4', 8, 1, 0.59, 0)
put('−138', 1, 5, 0.645)
put('184', 3, 6, 0.75)
put('6', 9, 1, 0.795, 0)
put('−184', 2, 7, 0.85)
put('0', 5, 8, 0.955, 0.01)
put('8', 10, 1, 0.94, 0)

// линейки-прочерки: под делителем и под вычитаемыми
const rules = [
  { x: 20, y: 66, w: 84, s: 0.305 },
  { x: 204, y: 38, w: 92, s: 0.205 },
  { x: 48, y: 122, w: 84, s: 0.495 },
  { x: 48, y: 178, w: 112, s: 0.7 },
  { x: 76, y: 234, w: 112, s: 0.905 },
]

const st = (x: number, y: number, s: number, extra?: CSSProperties): CSSProperties =>
  ({ left: x, top: y, '--s': s, ...extra }) as CSSProperties

export function DivisionNotebook() {
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
      const start = vh * 0.9 // лист вошёл в окно на 90% высоты — начало записи
      const end = vh * 0.5 // лист поднялся до середины окна — запись завершена
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
    <>
      <div className="division__outer">
        <div className="division__wrap">
          <div
            ref={sheetRef}
            className="division__sheet"
            role="img"
            aria-label="Тетрадный лист в клетку: деление столбиком 33764 разделить на 23 равно 1468"
          >
              {/* цифры примера — каждая строго в своей клетке */}
              {digits.map((d, idx) => (
                <span
                  key={`d${idx}`}
                  className="div-el div-num"
                  style={st(OX + d.col * CELL, OY + d.row * CELL - 4, d.s, {
                    width: CELL,
                  })}
                  aria-hidden="true"
                >
                  {d.ch}
                </span>
              ))}

              {/* линейки-прочерки */}
              {rules.map((r, idx) => (
                <span
                  key={`r${idx}`}
                  className="div-el div-rule"
                  style={st(r.x, r.y, r.s, { width: r.w })}
                  aria-hidden="true"
                />
              ))}

              {/* вертикальная черта — прочерчивается сверху вниз */}
              <span className="div-el div-bar" style={st(186, 4, 0.1, { height: 262 })} aria-hidden="true" />

              {/* «рукописная» обводка частного */}
              <svg
                className="div-circle"
                style={st(200, 28, 0.95)}
                width="140"
                height="54"
                viewBox="0 0 140 54"
                fill="none"
                aria-hidden="true"
              >
                <ellipse
                  cx="70"
                  cy="27"
                  rx="64"
                  ry="22"
                  stroke="#f59e0b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  transform="rotate(-2 70 27)"
                />
              </svg>

              {/* карандаш следует за записью по мере прокрутки */}
              <svg className="div-pencil" viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
                <path
                  d="M16.5 2.5l5 5L8 21l-6 1 1-6Z"
                  fill="#f59e0b"
                  stroke="#b45309"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <path d="M16.5 2.5l5 5-2.2 2.2-5-5Z" fill="#fde68a" />
              </svg>
          </div>
        </div>
      </div>
    </>
  )
}
