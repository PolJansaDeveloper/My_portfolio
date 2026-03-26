import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faClock } from '@fortawesome/free-solid-svg-icons'

export default function Services({ t }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    { ...t.services.items[0], icon: faTools },
    { ...t.services.items[1], icon: faClock },
    { ...t.services.items[2], icon: faTools }
  ]

  return (
    <section className="h-screen flex flex-col justify-center items-center text-slate-100 px-4">
      <h2 className={`text-4xl font-bold mb-12 transition-transform duration-700 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        {t.services.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center p-6 bg-slate-800/80 rounded-lg border border-slate-700 text-accent hover:border-accent/70 hover:bg-slate-700/70 transition-all duration-500 cursor-pointer ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${idx * 200}ms` }}
          >
            <FontAwesomeIcon icon={service.icon} className="text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-slate-100">{service.title}</h3>
            <p className="text-center text-muted">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
