import React, { useState, useEffect } from 'react'
import Typing from '../components/Typing'
import fondo from '../assets/fondo.png'
import LogoPJDev from '../assets/LogoPJDev.png' // Importa tu logo

export default function Home({ setActive }) {
  const [fade, setFade] = useState(true)
  const [mounted, setMounted] = useState(false)
  const greenColor = '#00FF7F' // Verde eléctrico de Sidebar

  useEffect(() => {
    // Animación de fade para el Typing
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => setFade(true), 500) // fade out 0.5s y fade in
    }, 4000)
    // Animación de entrada al montar
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
        opacity: 0.85
      }}
    >
      {/* Overlay para oscurecer un poco la imagen */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        {/* Contenido de la Home */}
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
          style={{ color: '#FFFFFF' }} // Más blanco
        >
          Hola,
        </div>

        <div
          className={`text-2xl mb-6 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          <Typing
            strings={[
              "Me apasiona la arquitectura móvil.",
              "Soy Android Developer.",
              "Desarrollo aplicaciones móviles con arquitectura limpia y rendimiento."
            ]}
            speed={120} 
            pause={1400}
            style={{ color: '#da5c5e' }} // Color dinámico aplicado directamente
          />
        </div>

        <p
          className={`max-w-2xl mx-auto mb-6 transition-transform duration-700 ${
            mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
          style={{ color: '#FFFFFF' }} // Más blanco
        >
          Aplicaciones móviles que conectan usuarios y negocios, con tecnología y estética profesional.
        </p>
      </div>
    </section>
  )
}

