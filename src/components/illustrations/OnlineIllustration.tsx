/** Иллюстрация для секции «Как проходят занятия»: ноутбук с онлайн-уроком */
import type { CSSProperties } from 'react'

const draw = (len: number) => ({ '--draw': String(len) }) as CSSProperties

export function OnlineIllustration() {
  return (
    <svg viewBox="0 0 480 380" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ol-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e9f1fe" />
          <stop offset="100%" stopColor="#dff5f1" />
        </linearGradient>
        <linearGradient id="ol-acc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#0ea5a0" />
        </linearGradient>
      </defs>
      <circle cx="240" cy="196" r="176" fill="url(#ol-bg)" />

      {/* Wi-Fi */}
      <g stroke="#0ea5a0" strokeWidth="2.6" strokeLinecap="round" fill="none" className="anim-pulse">
        <path d="M104 52a26 26 0 0 1 36 0" />
        <path d="M112 62a16 16 0 0 1 20 0" />
      </g>
      <circle cx="122" cy="72" r="3.2" fill="#0ea5a0" />

      {/* ноутбук: экран */}
      <rect x="82" y="78" width="316" height="212" rx="18" fill="#0b2447" />
      <rect x="94" y="90" width="292" height="188" rx="10" fill="#fff" />

      {/* доска с графиком */}
      <g stroke="#eef3fa" strokeWidth="1.1">
        <path d="M94 130h200M94 170h200M94 210h200" />
        <path d="M144 90v188M194 90v188M244 90v188" />
      </g>
      <path d="M108 236h172" stroke="#c4d3e6" strokeWidth="1.6" />
      <path
        className="anim-draw"
        style={draw(330)}
        d="M118 228Q196 118 268 228"
        fill="none"
        stroke="url(#ol-acc)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect className="svg-mono" x="106" y="102" width="96" height="26" rx="8" fill="#f1f5f9" />
      <text className="svg-mono" x="116" y="120" fontSize="12" fill="#0b2447">
        y = kx + b
      </text>
      <path d="M232 190c2-8 6-14 12-14 8 0 8 10 0 10 8 0 8 10 0 10-6 0-10-2-12-6" stroke="#f59e0b" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* плитки участников */}
      <g>
        <rect x="302" y="90" width="84" height="88" rx="8" fill="#f1f5f9" />
        <circle cx="344" cy="124" r="16" fill="#c7dbfa" />
        <path d="M326 164c2-12 10-17 18-17s16 5 18 17Z" fill="#c7dbfa" />
        <rect x="312" y="168" width="64" height="5" rx="2.5" fill="#dbe4f0" />
      </g>
      <g>
        <rect x="302" y="190" width="84" height="88" rx="8" fill="#eaf1fe" />
        <circle cx="344" cy="224" r="16" fill="#a7e6dd" />
        <path d="M326 264c2-12 10-17 18-17s16 5 18 17Z" fill="#a7e6dd" />
        <rect x="312" y="268" width="64" height="5" rx="2.5" fill="#cfe0f6" />
      </g>

      {/* курсор-указка на доске */}
      <path d="M252 150l0 24 6-5 4 9 6-3-4-9 8-1Z" fill="#2563eb" />

      {/* корпус ноутбука */}
      <path d="M66 290h348l24 26a10 10 0 0 1-9 14H51a10 10 0 0 1-9-14Z" fill="#123a7a" />
      <rect x="206" y="290" width="68" height="9" rx="4.5" fill="#0b2447" />

      {/* чипы */}
      <g className="anim-float-1">
        <rect x="330" y="46" width="132" height="42" rx="21" fill="#fff" stroke="#dbe6f3" />
        <circle cx="352" cy="67" r="5" fill="#0ea5a0" />
        <text x="364" y="72" fontSize="13.5" fontWeight="600" fill="#0b2447">
          Видеосвязь
        </text>
      </g>
      <g className="anim-float-2">
        <rect x="18" y="316" width="176" height="42" rx="21" fill="#fff" stroke="#dbe6f3" />
        <circle cx="40" cy="337" r="5" fill="#2563eb" />
        <text x="52" y="342" fontSize="13.5" fontWeight="600" fill="#0b2447">
          Интерактивная доска
        </text>
      </g>
    </svg>
  )
}
