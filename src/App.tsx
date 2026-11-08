import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Tasks } from './components/Tasks'
import { Subjects } from './components/Subjects'
import { Audiences } from './components/Audiences'
import { Advantages } from './components/Advantages'
import { About } from './components/About'
import { Process } from './components/Process'
import { Reviews } from './components/Reviews'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import { site, cta } from './data/data'
import { scrollToId } from './lib/scroll'

export default function App() {
  // Предмет, выбранный в карточках направлений, — подставляется в форму
  const [subject, setSubject] = useState(cta.defaultSubject)
  const [commentSeed, setCommentSeed] = useState('')

  // SEO из data.ts: title и description едины для всего сайта
  useEffect(() => {
    document.title = site.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', site.meta.description)
  }, [])

  const goToForm = () => scrollToId('cta')

  const pickSubject = (id: string) => {
    setSubject(id)
    goToForm()
  }

  const pickPlan = (planName: string) => {
    setCommentSeed(`Интересует тариф «${planName}»`)
    goToForm()
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Tasks />
        <Subjects onPick={pickSubject} />
        <Audiences />
        <Advantages />
        <About />
        <Process />
        <Reviews />
        <Pricing onPick={pickPlan} />
        <Faq />
        <Cta subject={subject} onSubjectChange={setSubject} commentSeed={commentSeed} />
      </main>
      <Footer />
    </>
  )
}
