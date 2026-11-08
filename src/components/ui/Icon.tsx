import type { ReactNode, SVGProps } from 'react'

/**
 * Набор встроенных SVG-иконок (stroke-стиль, 24×24).
 * Чтобы добавить новую иконку — допишите path в словарь ниже.
 */
export type IconName =
  | 'target'
  | 'video'
  | 'award'
  | 'book-open'
  | 'lightbulb'
  | 'clipboard-check'
  | 'trending-up'
  | 'shapes'
  | 'calculator'
  | 'graduation'
  | 'map'
  | 'message'
  | 'gauge'
  | 'wrench'
  | 'chart'
  | 'search'
  | 'sigma'
  | 'atom'
  | 'check'
  | 'star'
  | 'send'
  | 'chevron-down'
  | 'arrow-right'
  | 'menu'
  | 'x'
  | 'phone'
  | 'telegram'
  | 'whatsapp'
  | 'vk'
  | 'sparkles'
  | 'camera'

const glyphs: Record<IconName, ReactNode> = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  video: (
    <>
      <path d="m21 8-5 4 5 4V8Z" />
      <rect x="2" y="6" width="14" height="12" rx="2.5" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8.5" r="5.5" />
      <path d="M8.6 13 7.5 21.5l4.5-2.6 4.5 2.6L15.4 13" />
    </>
  ),
  'book-open': (
    <>
      <path d="M2 4h6.5a3.5 3.5 0 0 1 3.5 3.5V21a3 3 0 0 0-3-3H2Z" />
      <path d="M22 4h-6.5A3.5 3.5 0 0 0 12 7.5V21a3 3 0 0 1 3-3h7Z" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9.2 18h5.6" />
      <path d="M10.2 21.5h3.6" />
      <path d="M15.2 14.2c.2-1 .7-1.8 1.4-2.5A5.6 5.6 0 1 0 6 8.5c0 1.6.5 2.9 1.9 4.2.6.6 1 1.4 1.2 2.5" />
    </>
  ),
  'clipboard-check': (
    <>
      <rect x="8" y="2.5" width="8" height="3.6" rx="1.2" />
      <path d="M16 4.2h2.5A1.5 1.5 0 0 1 20 5.7v14.8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20.5V5.7a1.5 1.5 0 0 1 1.5-1.5H8" />
      <path d="m9 14.4 2.2 2.2 4-4.4" />
    </>
  ),
  'trending-up': (
    <>
      <path d="m22 7.5-8.2 8.2-5-5L2 17.5" />
      <path d="M16.5 7.5H22v5.5" />
    </>
  ),
  shapes: (
    <>
      <circle cx="8" cy="7.5" r="4.8" />
      <rect x="13.2" y="13.2" width="7.6" height="7.6" rx="1.4" />
      <path d="M3.8 21.5 8.5 13.6l4.7 7.9Z" />
    </>
  ),
  calculator: (
    <>
      <rect x="4.5" y="2.5" width="15" height="19" rx="2.2" />
      <path d="M8.5 6.8h7" />
      <path d="M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 15.4h.01M12 15.4h.01M15.5 15.4h.01M8.5 18.8h.01M12 18.8h.01M15.5 18.8h.01" />
    </>
  ),
  graduation: (
    <>
      <path d="m21.5 9.8-9-4.6a1.2 1.2 0 0 0-1 0l-9 4.6a.6.6 0 0 0 0 1.1l9 4.6a1.2 1.2 0 0 0 1 0l9-4.6a.6.6 0 0 0 0-1.1Z" />
      <path d="M6 12.3V16c0 1.7 2.7 3.2 6 3.2s6-1.5 6-3.2v-3.7" />
      <path d="M21.8 10.2v5.3" />
    </>
  ),
  map: (
    <>
      <path d="M14.1 5.6a2 2 0 0 0 1.8 0l3.6-1.8A1 1 0 0 1 21 4.7v12.7a1 1 0 0 1-.6.9l-4.5 2.3a2 2 0 0 1-1.8 0l-4.2-2.1a2 2 0 0 0-1.8 0l-3.6 1.8a1 1 0 0 1-1.4-.9V6.7a1 1 0 0 1 .6-.9l4.5-2.3a2 2 0 0 1 1.8 0Z" />
      <path d="M15 5.9v14.9" />
      <path d="M9 3.4v14.9" />
    </>
  ),
  message: (
    <>
      <path d="M8 19.4A9 9 0 1 0 4.4 16L3 21Z" />
      <path d="M8.8 12h.01M12 12h.01M15.2 12h.01" />
    </>
  ),
  gauge: (
    <>
      <path d="M12 14.5 15.8 9" />
      <path d="M3.6 18.5a9.6 9.6 0 1 1 16.8 0" />
      <circle cx="12" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.9 6.2a1.1 1.1 0 0 0 0 1.5l1.5 1.5a1.1 1.1 0 0 0 1.5 0l3.5-3.5a6 6 0 0 1-8 8l-6.8 6.8a2.1 2.1 0 0 1-3-3l6.8-6.8a6 6 0 0 1 8-8Z" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7.5 16.5v-3.5M12 16.5v-8M16.5 16.5v-5.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7.5" />
      <path d="m21 21-4.5-4.5" />
    </>
  ),
  sigma: (
    <>
      <path d="M17.5 5.5V4H6.5l6.2 8-6.2 8h11v-1.5" />
    </>
  ),
  atom: (
    <>
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(-60 12 12)" />
    </>
  ),
  check: <path d="m20 6.5-11 11-5-5" />,
  star: (
    <path
      d="M12 2.6l2.9 5.9 6.5 1-4.7 4.5 1.1 6.4L12 17.4l-5.8 3 1.1-6.4L2.6 9.5l6.5-1z"
      fill="currentColor"
      stroke="none"
    />
  ),
  send: (
    <>
      <path d="m22 2.5-7 19-3.5-8.5L3 9.5Z" />
      <path d="M22 2.5 11.5 13" />
    </>
  ),
  'chevron-down': <path d="m6 9.5 6 6 6-6" />,
  'arrow-right': (
    <>
      <path d="M4.5 12h15" />
      <path d="m13 5.5 6.5 6.5-6.5 6.5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  x: <path d="M18 6 6 18M6 6l12 12" />,
  phone: (
    <path d="M22 16.9v2.6a1.9 1.9 0 0 1-2.1 1.9 19.3 19.3 0 0 1-8.4-3 19 19 0 0 1-5.9-5.9 19.3 19.3 0 0 1-3-8.4A1.9 1.9 0 0 1 4.5 2h2.6a1.9 1.9 0 0 1 1.9 1.6c.1.9.3 1.8.7 2.7a1.9 1.9 0 0 1-.4 2L8.1 9.5a15.2 15.2 0 0 0 6.4 6.4l1.2-1.2a1.9 1.9 0 0 1 2-.5c.9.4 1.8.6 2.7.7a1.9 1.9 0 0 1 1.6 2Z" />
  ),
  telegram: (
    <path
      d="M21.6 3.2 2.9 10.5c-1.1.4-1.1 1.3-.2 1.6l4.6 1.5 1.8 5.5c.3.9 1 1 1.6.4l2.5-2.4 4.6 3.4c.8.5 1.7.2 1.9-.8l3.1-14.3c.3-1.2-.5-1.8-1.2-1.6Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  whatsapp: (
    <>
      <path d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.9-1.2A9.5 9.5 0 1 0 12 2.5Z" />
      <path d="M8.9 8.4c.3-.7 1.3-.8 1.7-.1l.5.9c.2.3.1.7-.1 1l-.4.4c.5 1 1.3 1.8 2.3 2.3l.4-.4c.3-.3.7-.3 1-.1l.9.5c.7.4.6 1.4-.1 1.7-.9.4-2 .4-3.2-.3a7.7 7.7 0 0 1-2.7-2.7c-.7-1.2-.7-2.3-.3-3.2Z" fill="currentColor" stroke="none" />
    </>
  ),
  vk: (
    <text
      x="12"
      y="16.4"
      textAnchor="middle"
      fontSize="11.5"
      fontWeight="800"
      fontFamily="inherit"
      fill="currentColor"
      stroke="none"
    >
      VK
    </text>
  ),
  sparkles: (
    <>
      <path d="M12 4.5l1.7 4.3 4.3 1.7-4.3 1.7L12 16.5l-1.7-4.3L6 10.5l4.3-1.7Z" fill="currentColor" stroke="none" />
      <path d="M19 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8Z" fill="currentColor" stroke="none" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8.5A2 2 0 0 1 6 6.5h1.6l1.2-1.8h6.4l1.2 1.8H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <circle cx="12" cy="12.4" r="3.4" />
    </>
  ),
}

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
  size?: number
}

export function Icon({ name, size = 22, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {glyphs[name]}
    </svg>
  )
}
