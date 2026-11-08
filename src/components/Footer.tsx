import { useRef } from 'react'
import { contacts, nav, navCta, privacy, site, teacher } from '../data/data'
import { Icon } from './ui/Icon'
import './Footer.css'

export function Footer() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const socials = [
    { name: 'Telegram' as const, href: contacts.telegram, icon: 'telegram' as const },
    { name: 'WhatsApp' as const, href: contacts.whatsapp, icon: 'whatsapp' as const },
    { name: 'VK' as const, href: contacts.vk, icon: 'vk' as const },
  ]

  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#hero" className="logo logo--footer" aria-label={`${site.brand} — к началу страницы`}>
              <span className="logo__badge">
                <Icon name="atom" size={22} />
              </span>
              <span className="logo__text">{site.brand}</span>
            </a>
            <p>{site.tagline}</p>
            <p className="footer__teacher">
              Репетитор: {teacher.name}. {teacher.role}.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Навигация в подвале">
            <b>Разделы</b>
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
            <a href={`#${navCta.target}`}>Записаться</a>
          </nav>

          <div className="footer__contacts">
            <b>Контакты</b>
            <a className="footer__phone" href={contacts.phoneHref}>
              <Icon name="phone" size={19} />
              {contacts.phone}
            </a>
            <div className="footer__socials">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name} репетитора`}
                  title={s.name}
                >
                  <Icon name={s.icon} size={20} />
                </a>
              ))}
            </div>
            <p className="footer__note">Демо-контакты — замените в data.ts</p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {site.brand}. Все права защищены.</span>
          <span className="footer__bottom-right">
            <button type="button" className="footer__privacy" onClick={() => dialogRef.current?.showModal()}>
              {privacy.label}
            </button>
            <span className="footer__demo">{site.demoNote}</span>
          </span>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="privacy-modal"
        aria-label={privacy.title}
        onClick={(e) => {
          // закрытие по клику на подложку
          if (e.target === dialogRef.current) dialogRef.current?.close()
        }}
      >
        <button
          type="button"
          className="privacy-modal__close"
          aria-label="Закрыть"
          onClick={() => dialogRef.current?.close()}
        >
          <Icon name="x" size={20} />
        </button>
        <h3>{privacy.title}</h3>
        {privacy.paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </dialog>
    </footer>
  )
}
