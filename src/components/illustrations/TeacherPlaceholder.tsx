/**
 * Нейтральная заглушка для фотографии преподавателя.
 * Показывается, пока в data.ts не указан путь к реальному фото
 * (public/images/teacher.jpg) или пока файл не загрузился.
 */
export function TeacherPlaceholder() {
  return (
    <svg viewBox="0 0 420 500" role="img" aria-label="Место для фотографии преподавателя">
      <defs>
        <linearGradient id="tp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0b2447" />
          <stop offset="55%" stopColor="#153a7d" />
          <stop offset="100%" stopColor="#0d5f66" />
        </linearGradient>
        <clipPath id="tp-clip">
          <rect width="420" height="500" rx="28" />
        </clipPath>
      </defs>

      <g clipPath="url(#tp-clip)">
        <rect width="420" height="500" fill="url(#tp-bg)" />

        {/* декоративная сетка */}
        <g stroke="#ffffff" strokeOpacity=".07" strokeWidth="1.2">
          <path d="M84 0v500M168 0v500M252 0v500M336 0v500" />
          <path d="M0 84h420M0 168h420M0 252h420M0 336h420M0 420h420" />
        </g>

        {/* орбиты-акценты */}
        <g stroke="#7dd3fc" strokeOpacity=".25" strokeWidth="2" fill="none">
          <ellipse cx="210" cy="196" rx="150" ry="58" transform="rotate(-18 210 196)" />
          <ellipse cx="210" cy="196" rx="150" ry="58" transform="rotate(24 210 196)" />
        </g>

        {/* силуэт */}
        <circle cx="210" cy="188" r="56" fill="#ffffff" fillOpacity=".2" />
        <path
          d="M96 470c6-118 66-158 114-158s108 40 114 158Z"
          fill="#ffffff"
          fillOpacity=".2"
        />

        {/* значок камеры */}
        <g transform="translate(186 404)">
          <circle r="28" fill="#ffffff" fillOpacity=".16" />
          <g fill="none" stroke="#ffffff" strokeOpacity=".85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M-12 -5.5a2 2 0 0 1 2-2h2.4l1.2-2h6.8l1.2 2H10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-18a2 2 0 0 1-2-2Z" transform="translate(1 -1)" />
            <circle r="4.4" transform="translate(0 2.6)" />
          </g>
        </g>
      </g>

      <text x="210" y="452" textAnchor="middle" fontSize="17" fontWeight="700" fill="#ffffff">
        Фото преподавателя
      </text>
      <text
        className="svg-mono"
        x="210"
        y="474"
        textAnchor="middle"
        fontSize="11.5"
        fill="#ffffff"
        fillOpacity=".75"
      >
        public/images/teacher.jpg
      </text>
    </svg>
  )
}
