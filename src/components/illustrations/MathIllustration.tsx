/** Иллюстрация для карточки «Математика» */
import type { CSSProperties } from 'react'

const draw = (len: number) => ({ '--draw': String(len) }) as CSSProperties

export function MathIllustration() {
  return (
    <svg viewBox="0 0 420 250" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="mi-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e9f1fe" />
          <stop offset="100%" stopColor="#d8e6fd" />
        </linearGradient>
        <linearGradient id="mi-acc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0ea5a0" />
        </linearGradient>
      </defs>
      <rect width="420" height="250" fill="url(#mi-bg)" />

      {/* сетка */}
      <g stroke="#ffffff" strokeOpacity=".55" strokeWidth="1.2">
        <path d="M60 0v250M105 0v250M150 0v250M195 0v250M240 0v250M285 0v250M330 0v250M375 0v250" />
        <path d="M0 40h420M0 85h420M0 130h420M0 175h420M0 220h420" />
      </g>

      {/* оси и график */}
      <path d="M28 198h364" stroke="#9dbdf5" strokeWidth="1.8" />
      <path d="M56 216V28" stroke="#9dbdf5" strokeWidth="1.8" />
      <path
        className="anim-draw"
        style={draw(420)}
        d="M88 192Q210 34 332 192"
        fill="none"
        stroke="url(#mi-acc)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="210" cy="113" r="7" fill="#fbbf24" stroke="#fff" strokeWidth="3" />
      <circle cx="332" cy="192" r="7" fill="#0ea5a0" stroke="#fff" strokeWidth="3" />

      {/* декоративные символы */}
      <text x="46" y="86" fontSize="46" fontWeight="800" fill="#b6cdf6" opacity=".8" className="svg-mono">
        ∑
      </text>
      <text x="352" y="238" fontSize="24" fontWeight="700" fill="#93b8f2" className="svg-mono">
        π
      </text>
      <path d="M368 66h12M374 60v12" stroke="#7ea6ee" strokeWidth="2.4" strokeLinecap="round" />

      {/* чип с уравнением */}
      <rect x="286" y="30" width="106" height="40" rx="13" fill="#fff" stroke="#dbeafe" />
      <text className="svg-mono" x="306" y="56" fontSize="15" fill="#0b2447">
        x² + 1
      </text>
    </svg>
  )
}
