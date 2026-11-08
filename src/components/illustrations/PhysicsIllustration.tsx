/** Иллюстрация для карточки «Физика» */
import type { CSSProperties } from 'react'

const draw = (len: number) => ({ '--draw': String(len) }) as CSSProperties

export function PhysicsIllustration() {
  return (
    <svg viewBox="0 0 420 250" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="pi-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e4f7f4" />
          <stop offset="100%" stopColor="#d3efe9" />
        </linearGradient>
      </defs>
      <rect width="420" height="250" fill="url(#pi-bg)" />

      {/* сетка точек */}
      <g fill="#ffffff" opacity=".7">
        {Array.from({ length: 12 }, (_, r) =>
          Array.from({ length: 16 }, (_, c) => (
            <circle key={`${r}-${c}`} cx={28 + c * 26} cy={26 + r * 20} r="1.6" />
          )),
        )}
      </g>

      {/* маятник */}
      <path d="M96 46 132 46 114 20Z" fill="#0b2447" />
      <circle cx="114" cy="46" r="4" fill="#0b2447" />
      <path d="M114 46v126" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 6" />
      <path
        className="anim-draw"
        style={draw(260)}
        d="M44 66Q79 160 114 172"
        fill="none"
        stroke="#0ea5a0"
        strokeWidth="2"
        strokeDasharray="5 6"
        strokeLinecap="round"
      />
      <g className="anim-float-1" style={{ transformOrigin: '114px 46px' }}>
        <path d="M114 46 148 128" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
        <circle cx="148" cy="128" r="17" fill="#0ea5a0" stroke="#fff" strokeWidth="3.5" />
      </g>
      <path d="M170 60l14 10M184 70l-2-9M184 70l-9 1" stroke="#0d9488" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* атом */}
      <g transform="translate(330 74)">
        <g className="anim-float-2">
          <g className="anim-pulse" stroke="#0ea5a0" strokeWidth="2.2" fill="none">
            <ellipse rx="30" ry="11.5" transform="rotate(30)" />
            <ellipse rx="30" ry="11.5" transform="rotate(-30)" />
            <ellipse rx="30" ry="11.5" transform="rotate(90)" />
          </g>
          <circle r="5.5" fill="#fbbf24" />
        </g>
      </g>

      {/* чип формулы */}
      <g className="anim-float-3">
        <rect x="282" y="168" width="112" height="42" rx="13" fill="#fff" stroke="#ccfbf1" />
        <text className="svg-mono" x="308" y="195" fontSize="16" fill="#0b2447">
          F = ma
        </text>
      </g>
      <text className="svg-mono" x="40" y="226" fontSize="15" fill="#8cc7bf">
        v = S / t
      </text>
    </svg>
  )
}
