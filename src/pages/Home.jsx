import React, { useState, useEffect } from 'react'
import Typing from '../components/Typing'
import fondo from '../assets/fondo.png'
import LogoPJDev from '../assets/LogoPJDev.png'

export default function Home({ t }) {
  const [fade, setFade] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => setFade(true), 500)
    }, 4000)
    setMounted(true)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="w-full min-h-screen text-center relative flex flex-col justify-center px-4"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.9
      }}
    >
      <div className="absolute inset-0 bg-slate-950/65"></div>

      <div className="relative z-10">
        <h2
          className={`text-5xl font-extrabold mb-2 transition-transform duration-700 ${
            mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          <img src={LogoPJDev} alt="Logo PJDev" className="mx-auto h-[10.5rem] w-auto" />
        </h2>

        <div
          className={`mb-4 small-muted transition-transform duration-700 ${
            mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          {t.home.hello}
        </div>

        <div
          className={`text-2xl mb-6 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          <Typing strings={t.home.typing} speed={120} pause={1400} style={{ color: '#7dd3fc' }} />
        </div>

        <p
          className={`max-w-2xl mx-auto mb-6 text-slate-100 transition-transform duration-700 ${
            mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          {t.home.description}
        </p>
      </div>
    </section>
  )
}
