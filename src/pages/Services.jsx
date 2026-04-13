import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMobileAlt,
  faUpload,
  faPlug,
  faWrench,
  faPaintBrush,
  faComments
} from '@fortawesome/free-solid-svg-icons'
 
export default function Services({ t }) {
  const [mounted, setMounted] = useState(false)
 
  useEffect(() => {
    setMounted(true)
  }, [])
 
  const services = [
    { ...t.services.items[0], icon: faMobileAlt },
    { ...t.services.items[1], icon: faUpload },
    { ...t.services.items[2], icon: faPlug },
    { ...t.services.items[3], icon: faWrench },
    { ...t.services.items[4], icon: faPaintBrush },
    { ...t.services.items[5], icon: faComments },
  ]
 
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-slate-100 px-4 py-14">
      <p
        className={`text-sm uppercase tracking-[0.25em] mb-3 text-sky-400 transition-all duration-700 ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
      >
        {t.services.tag}
      </p>
 
      <h2
        className={`text-4xl sm:text-5xl font-bold mb-4 transition-all duration-700 ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}
      >
        {t.services.title}
        <span className="text-sky-400">.</span>
      </h2>
 
      <p
        className={`text-slate-400 text-center max-w-xl mb-12 text-base sm:text-lg transition-all duration-700 delay-100 ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
      >
        {t.services.subtitle}
      </p>
 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`group flex flex-col items-start p-6 bg-slate-800/70 rounded-2xl border border-slate-700/70 hover:border-sky-400/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `${100 + idx * 100}ms` }}
          >
            <div className="mb-4 p-3 rounded-xl bg-slate-700/60 group-hover:bg-sky-400/10 transition-colors duration-300">
              <FontAwesomeIcon
                icon={service.icon}
                className="text-2xl text-sky-400"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-100">
              {service.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
