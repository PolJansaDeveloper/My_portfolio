import React, { useEffect, useMemo, useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { translations } from './i18n'

export default function App() {
  const [active, setActive] = useState('home')
  const [lang, setLang] = useState('es')

  const t = translations[lang]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [active])

  const ActivePage = useMemo(() => {
    switch (active) {
      case 'home':
        return <Home t={t} />

      case 'about':
        return <About t={t} />

      case 'services':
        return <Services t={t} />

      case 'projects':
        return <Projects t={t} />

      case 'contact':
        return <Contact t={t} />

      default:
        return <Home t={t} />
    }
  }, [active, t])

  return (
    <div className="app-shell min-h-screen">
      <aside className="sidebar-fixed">
        <Sidebar
          active={active}
          setActive={setActive}
          lang={lang}
          setLang={setLang}
          t={t}
        />
      </aside>

      <main className="content-area min-h-screen overflow-y-auto">
        <div
          key={`${active}-${lang}`}
          className="min-h-screen w-full animate-fadeIn"
        >
          {ActivePage}
        </div>
      </main>
    </div>
  )
}
