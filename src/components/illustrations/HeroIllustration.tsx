/**
 * Главная иллюстрация первого экрана: онлайн-урок «доска + физика».
 * Чистый SVG — заменяется фотографией через data.ts (hero.photo).
 */
import type { CSSProperties } from 'react'

const draw = (len: number) => ({ '--draw': String(len) }) as CSSProperties
export function HeroIllustration() {
  return (
    <svg
      className="hero-art__svg"
      viewBox="0 0 560 480"
      role="img"
      aria-label="Иллюстрация: онлайн-занятие по математике и физике"
    >
      <defs>
        <linearGradient id="hi-blob" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#ccfbf1" />
        </linearGradient>
        <linearGradient id="hi-acc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0ea5a0" />
        </linearGradient>
      </defs>

      {/* мягкий фон */}
      <circle cx="285" cy="235" r="212" fill="url(#hi-blob)" />
      <circle cx="66" cy="92" r="7" fill="#bfdbfe" />
      <circle cx="512" cy="330" r="6" fill="#99f6e4" />
      <circle cx="502" cy="66" r="5" fill="#fcd34d" />
      <path d="M56 296h12M62 290v12" stroke="#93c5fd" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M518 178h12M524 172v12" stroke="#5eead4" strokeWidth="2.2" strokeLinecap="round" />
      <path d="m84 398 16 16M100 398l-16 16" stroke="#fbbf24" strokeWidth="2.6" strokeLinecap="round" opacity=".65" />

      {/* доска с графиком */}
      <g>
        <rect x="88" y="94" width="308" height="240" rx="26" fill="#fff" stroke="#e3ebf5" />
        {/* сетка */}
        <g stroke="#eef3fa" strokeWidth="1.2">
          <path d="M88 168h308M88 208h308M88 248h308M88 288h308" />
          <path d="M148 94v240M208 94v240M268 94v240M328 94v240" />
        </g>
        {/* оси */}
        <path d="M112 310H374" stroke="#c4d3e6" strokeWidth="1.8" />
        <path d="M140 148v162" stroke="#c4d3e6" strokeWidth="1.8" />
        {/* парабола */}
        <path
          className="anim-draw"
          style={draw(430)}
          d="M150 300Q240 128 330 300"
          fill="none"
          stroke="url(#hi-acc)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        {/* направляющие и точки */}
        <path d="M240 214v96M240 214h-100" stroke="#94a3b8" strokeWidth="1.4" strokeDasharray="4 5" fill="none" />
        <circle cx="240" cy="214" r="7" fill="#fbbf24" stroke="#fff" strokeWidth="3" />
        <circle cx="330" cy="300" r="7" fill="#0ea5a0" stroke="#fff" strokeWidth="3" />
        {/* формула-чип */}
        <rect x="108" y="114" width="122" height="34" rx="11" fill="#f1f5f9" />
        <text className="svg-mono" x="122" y="137" fontSize="15" fill="#0b2447">
          y = x² − 4
        </text>
        <text className="svg-mono" x="306" y="242" fontSize="13" fill="#7c93ad">
          a² + b² = c²
        </text>
      </g>

      {/* атом справа сверху */}
      <g transform="translate(448 128)">
        <g className="anim-float-2">
          <g className="anim-pulse" stroke="#0ea5a0" strokeWidth="2.4" fill="none">
            <ellipse rx="34" ry="13" transform="rotate(30)" />
            <ellipse rx="34" ry="13" transform="rotate(-30)" />
            <ellipse rx="34" ry="13" transform="rotate(90)" />
          </g>
          <circle r="6.5" fill="#fbbf24" />
        </g>
      </g>

      {/* карточка физики */}
      <g className="anim-float-3">
        <rect x="52" y="326" width="172" height="68" rx="18" fill="#0b2447" />
        <g stroke="#5eead4" strokeWidth="2" fill="none">
          <ellipse cx="86" cy="360" rx="16" ry="6.5" transform="rotate(-24 86 360)" />
          <ellipse cx="86" cy="360" rx="16" ry="6.5" transform="rotate(46 86 360)" />
        </g>
        <circle cx="86" cy="360" r="3.4" fill="#fbbf24" />
        <text className="svg-mono" x="112" y="367" fontSize="18" fill="#fff">
          E = mc²
        </text>
      </g>

      {/* плавающие чипы */}
      <g className="anim-float-1">
        <rect x="396" y="250" width="128" height="44" rx="22" fill="#fff" stroke="#e3ebf5" />
        <circle cx="418" cy="272" r="5" fill="#0ea5a0" />
        <text x="430" y="277" fontSize="14" fontWeight="600" fill="#0b2447">
          Онлайн
        </text>
      </g>
      <g className="anim-float-2">
        <rect x="34" y="58" width="150" height="44" rx="22" fill="#fff7ed" stroke="#fed7aa" />
        <text className="svg-mono" x="72" y="86" fontSize="14" fill="#b45309" fontWeight="700">
          ОГЭ · ЕГЭ
        </text>
      </g>
      <g className="anim-float-3">
        <rect x="322" y="386" width="172" height="44" rx="22" fill="#eaf1fe" stroke="#bfdbfe" />
        <text x="352" y="413" fontSize="14" fontWeight="600" fill="#1e4fb8">
          1–11 классы
        </text>
      </g>
    </svg>
  )
}
