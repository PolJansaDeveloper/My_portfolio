import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faClock } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    { title: 'Próximamente', description: 'Servicios disponibles muy pronto.', icon: faTools },
    { title: 'En construcción', description: 'Estoy trabajando para ofrecerte lo mejor.', icon: faClock },
    { title: 'Coming Soon', description: 'Mantente atento a futuras actualizaciones.', icon: faTools }
  ]

  return (
    <section className="h-screen flex flex-col justify-center items-center text-white px-4">
      <h2 className={`text-4xl font-bold mb-12 transition-transform duration-700 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        Servicios
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center p-6 bg-white/10 rounded-lg border border-green-400 text-green-400 hover:bg-green-400/20 transition-all duration-500 cursor-pointer ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${idx * 200}ms` }}
          >
            <FontAwesomeIcon icon={service.icon} className="text-4xl mb-4 animate-bounce" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-center text-muted">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
