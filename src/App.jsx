import React, { useState, useRef, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App(){
  const views = ['home','about','services','projects','contact']
  const [active, setActive] = useState('home')
  const trackRef = useRef()

  // when active changes, move the track vertically so the selected section is visible
  useEffect(()=>{
    const idx = views.indexOf(active)
    if(trackRef.current){
      trackRef.current.style.transform = `translateY(-${idx * 100}vh)`
    }
  },[active])

  return (
    <div className="app-shell">
      <aside className="sidebar-fixed">
        <Sidebar active={active} setActive={setActive} />
      </aside>
      <main className="content-area">
        <div ref={trackRef} className="view-track">
          <section id="home" className="section-full bg-gradient-to-b from-bg/60 to-transparent"><Home setActive={setActive} /></section>
          <section id="about" className="section-full"><About /></section>
          <section id="services" className="section-full"><Services /></section>
          <section id="projects" className="section-full"><Projects /></section>
          <section id="contact" className="section-full"><Contact /></section>
        </div>
      </main>
    </div>
  )
}