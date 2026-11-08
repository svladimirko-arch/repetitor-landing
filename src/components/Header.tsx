import { useEffect, useState } from 'react'
import { nav, navCta, site } from '../data/data'
import { Icon } from './ui/Icon'
import './Header.css'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  // Тень/фон, подсветка активного раздела и сброс в начале страницы
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 12)
      if (y < 240) {
        setActive('')
        return
      }
      let current = ''
      for (const { id } of nav) {
        const el = document.getElementById(id)
        if (el && el.offsetTop - 170 <= y) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Блокируем прокрутку страницы при открытом меню
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#hero" className="logo" aria-label={`${site.brand} — к началу страницы`}>
          <span className="logo__badge">
            <Icon name="atom" size={22} />
          </span>
          <span className="logo__text">{site.brand}</span>
        </a>

        <nav className="header__nav" aria-label="Основная навигация">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={active === item.id ? 'is-active' : ''}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href={`#${navCta.target}`} className="btn btn--primary btn--sm">
            {navCta.label}
          </a>
          <button
            type="button"
            className="header__burger"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-menu" aria-label="Мобильная навигация">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={`#${navCta.target}`} className="btn btn--primary" onClick={() => setOpen(false)}>
            {navCta.label}
          </a>
        </nav>
      )}
    </header>
  )
}
