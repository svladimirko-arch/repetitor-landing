import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import { cta } from '../data/data'
import { Icon } from './ui/Icon'
import { Reveal } from './ui/Reveal'
import './Cta.css'

type FormState = {
  name: string
  contact: string
  subject: string
  grade: string
  comment: string
}

type Field = 'name' | 'contact' | 'grade'
type Errors = Partial<Record<Field, string>>

const grades = Array.from({ length: 11 }, (_, i) => i + 1)

export function Cta({
  subject,
  onSubjectChange,
  commentSeed,
}: {
  subject: string
  onSubjectChange: (s: string) => void
  commentSeed: string
}) {
  const [form, setForm] = useState<FormState>({
    name: '',
    contact: '',
    subject,
    grade: '',
    comment: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  // Предмет, выбранный в карточках направлений
  useEffect(() => {
    setForm((f) => ({ ...f, subject }))
  }, [subject])

  // Тариф, выбранный в секции цен, — в комментарий
  useEffect(() => {
    if (commentSeed) setForm((f) => ({ ...f, comment: f.comment || commentSeed }))
  }, [commentSeed])

  const update =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value = e.target.value
      setForm((f) => ({ ...f, [key]: value }))
      if (key in errors) setErrors((prev) => ({ ...prev, [key]: undefined }))
    }

  const validate = (): Errors => {
    const errs: Errors = {}
    if (form.name.trim().length < 2) errs.name = cta.form.errors.name
    if (form.contact.trim().length < 5) errs.contact = cta.form.errors.contact
    if (!form.grade) errs.grade = cta.form.errors.grade
    return errs
  }

  // Демонстрационная обработка: без сервера, данные только в console.log
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).some((k) => errs[k as Field])) return
    console.info('[DEMO] Заявка с сайта (никуда не отправляется):', form)
    setSent(true)
  }

  const reset = () => {
    setForm({ name: '', contact: '', subject: cta.defaultSubject, grade: '', comment: '' })
    setErrors({})
    setSent(false)
  }

  return (
    <section className="section" id="cta">
      <div className="container">
        <Reveal>
          <div className="cta-card">
            {/* декоративный фон-картинка под градиентом (без растяжения: object-fit: cover) */}
            {cta.backgroundImage && (
              <img
                className="cta-card__bg"
                src={`${import.meta.env.BASE_URL}${cta.backgroundImage}`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
            )}
            {/* декоративные формулы на градиенте */}
            <span className="cta-card__formula cta-card__formula--1" aria-hidden="true">
              E = mc²
            </span>
            <span className="cta-card__formula cta-card__formula--2" aria-hidden="true">
              ∫ f(x)dx
            </span>
            <span className="cta-card__formula cta-card__formula--3" aria-hidden="true">
              a² + b² = c²
            </span>

            <div className="cta-card__info">
              <span className="eyebrow eyebrow--light">{cta.eyebrow}</span>
              <h2>{cta.title}</h2>
              <p className="cta-card__sub">{cta.subtitle}</p>
              <ul className="cta-card__bullets">
                {cta.bullets.map((b) => (
                  <li key={b}>
                    <span className="cta-card__check">
                      <Icon name="check" size={15} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="cta-card__form-wrap">
              {sent ? (
                <div className="form-success" role="status" aria-live="polite">
                  <span className="form-success__icon">
                    <Icon name="check" size={30} />
                  </span>
                  <h3>{cta.form.success.title}</h3>
                  <p>{cta.form.success.text}</p>
                  <button type="button" className="btn btn--ghost" onClick={reset}>
                    {cta.form.success.againLabel}
                  </button>
                </div>
              ) : (
                <form className="cta-form" onSubmit={onSubmit} noValidate>
                  <p className="cta-form__demo">
                    <Icon name="sparkles" size={14} />
                    {cta.form.demoNote}
                  </p>

                  <div className="field">
                    <label htmlFor="f-name">{cta.form.nameLabel}</label>
                    <input
                      id="f-name"
                      className={`input${errors.name ? ' input--error' : ''}`}
                      type="text"
                      placeholder={cta.form.namePlaceholder}
                      value={form.name}
                      onChange={update('name')}
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && (
                      <span className="field-error" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="field">
                    <label htmlFor="f-contact">{cta.form.contactLabel}</label>
                    <input
                      id="f-contact"
                      className={`input${errors.contact ? ' input--error' : ''}`}
                      type="text"
                      placeholder={cta.form.contactPlaceholder}
                      value={form.contact}
                      onChange={update('contact')}
                      aria-invalid={Boolean(errors.contact)}
                    />
                    {errors.contact && (
                      <span className="field-error" role="alert">
                        {errors.contact}
                      </span>
                    )}
                  </div>

                  <div className="field">
                    <span className="cta-form__label">{cta.form.subjectLabel}</span>
                    <div className="cta-form__pills" role="radiogroup" aria-label={cta.form.subjectLabel}>
                      {cta.form.subjectOptions.map((opt) => (
                        <label key={opt.value} className="cta-form__pill">
                          <input
                            type="radio"
                            name="subject"
                            value={opt.value}
                            checked={form.subject === opt.value}
                            onChange={() => {
                              setForm((f) => ({ ...f, subject: opt.value }))
                              onSubjectChange(opt.value)
                            }}
                          />
                          <span>{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="f-grade">{cta.form.gradeLabel}</label>
                    <select
                      id="f-grade"
                      className={`input${errors.grade ? ' input--error' : ''}`}
                      value={form.grade}
                      onChange={update('grade')}
                      aria-invalid={Boolean(errors.grade)}
                    >
                      <option value="" disabled>
                        {cta.form.gradePlaceholder}
                      </option>
                      {grades.map((g) => (
                        <option key={g} value={g}>
                          {g} класс
                        </option>
                      ))}
                    </select>
                    {errors.grade && (
                      <span className="field-error" role="alert">
                        {errors.grade}
                      </span>
                    )}
                  </div>

                  <div className="field">
                    <label htmlFor="f-comment">{cta.form.commentLabel}</label>
                    <textarea
                      id="f-comment"
                      className="input"
                      placeholder={cta.form.commentPlaceholder}
                      value={form.comment}
                      onChange={update('comment')}
                      rows={3}
                    />
                  </div>

                  <button type="submit" className="btn btn--primary btn--lg btn--block">
                    {cta.form.submitLabel}
                    <Icon name="send" size={18} />
                  </button>
                  <p className="cta-form__privacy">{cta.form.privacyNote}</p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
