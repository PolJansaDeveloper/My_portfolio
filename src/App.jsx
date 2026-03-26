import React, { useState, useRef, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { translations } from './i18n'

export default function App() {
  const views = ['home', 'about', 'services', 'projects', 'contact']
  const [active, setActive] = useState('home')
  const [lang, setLang] = useState('es')
  const trackRef = useRef()
  const t = translations[lang]

  useEffect(() => {
    const idx = views.indexOf(active)
    if (trackRef.current) {
      trackRef.current.style.transform = `translateY(-${idx * 100}vh)`
    }
  }, [active])

  return (
    <div className="app-shell">
      <aside className="sidebar-fixed">
        <Sidebar active={active} setActive={setActive} lang={lang} setLang={setLang} t={t} />
      </aside>
      <main className="content-area">
        <div ref={trackRef} className="view-track">
          <section id="home" className="section-full bg-gradient-to-b from-bg/60 to-transparent"><Home t={t} /></section>
          <section id="about" className="section-full"><About t={t} /></section>
          <section id="services" className="section-full"><Services t={t} /></section>
          <section id="projects" className="section-full"><Projects t={t} /></section>
          <section id="contact" className="section-full"><Contact t={t} /></section>
        </div>
      </main>
    </div>
  )
}
