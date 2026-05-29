import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMobileAlt,
  faUpload,
  faPlug,
  faWrench,
  faPaintBrush,
  faComments,
  faLayerGroup,
  faRocket
} from '@fortawesome/free-solid-svg-icons'

export default function Services({ t }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      title: 'Mobile App Development',
      description:
        'Development of modern mobile applications for Android and iOS, focused on performance, usability and clean architecture.',
      icon: faMobileAlt
    },
    {
      title: 'App Store & Google Play Publishing',
      description:
        'Preparation and publication of mobile apps on Google Play and the App Store, including store listing, builds, testing tracks and release support.',
      icon: faUpload
    },
    {
      title: 'API & Backend Integration',
      description:
        'Integration with REST APIs, Firebase, authentication systems, cloud services and external platforms to connect your app with real data.',
      icon: faPlug
    },
    {
      title: 'Maintenance & Improvements',
      description:
        'Bug fixing, performance improvements, dependency updates, compatibility reviews and new feature development for existing apps.',
      icon: faWrench
    },
    {
      title: 'Mobile UI/UX Design',
      description:
        'Design and implementation of clean, polished and responsive mobile interfaces that feel professional and easy to use.',
      icon: faPaintBrush
    },
    {
      title: 'Cross-platform Mobile Solutions',
      description:
        'Mobile solutions with a practical approach, choosing the right technology for each project: native Android, iOS or cross-platform when it makes sense.',
      icon: faLayerGroup
    },
    {
      title: 'Product Launch Support',
      description:
        'Support from idea to launch: feature planning, MVP definition, technical decisions, testing, release preparation and post-launch improvements.',
      icon: faRocket
    },
    {
      title: 'Technical Consultation',
      description:
        'Guidance for businesses or founders who need help understanding what their mobile app needs, how to build it and how to launch it properly.',
      icon: faComments
    }
  ]

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-slate-100 px-4 py-14">
      <p
        className={`text-sm uppercase tracking-[0.25em] mb-3 text-sky-400 transition-all duration-700 ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
      >
        Mobile Services
      </p>

      <h2
        className={`text-4xl sm:text-5xl font-bold mb-4 text-center transition-all duration-700 ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}
      >
        Mobile solutions for real products
        <span className="text-sky-400">.</span>
      </h2>

      <p
        className={`text-slate-400 text-center max-w-2xl mb-12 text-base sm:text-lg transition-all duration-700 delay-100 ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
      >
        I help businesses, startups and founders build, improve and launch mobile applications across Android and iOS, with a strong focus on clean development, polished interfaces and real user experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-6xl">
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
