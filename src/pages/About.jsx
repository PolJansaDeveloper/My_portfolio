import React, { useEffect, useState } from 'react'
import { FaJava, FaGithub, FaAndroid, FaApple } from 'react-icons/fa'
import {
  SiKotlin,
  SiSwift,
  SiJetpackcompose,
  SiFirebase,
  SiGit,
  SiIntellijidea,
  SiGoogleplay,
  SiAppstore
} from 'react-icons/si'
import {
  MdOutlineArchitecture,
  MdPhoneIphone,
  MdAutoAwesome,
  MdDevices,
  MdRocketLaunch,
  MdDesignServices,
  MdVerified,
  MdCode,
  MdSpeed
} from 'react-icons/md'

import CleanIcon from '../assets/icons/clean.svg'
import RestApiIcon from '../assets/icons/restapi.svg'

export default function About({ t }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const accentColor = '#38bdf8'
  const iconFilter =
    'invert(69%) sepia(19%) saturate(1321%) hue-rotate(166deg) brightness(101%) contrast(96%)'

  const about = t?.about || {}

  const tag = about.tag || 'Mobile Developer'

  const title =
    about.title || 'Mobile developer building reliable apps with a product mindset'

  const intro =
    about.intro ||
    'I design and build mobile applications focused on clean architecture, polished interfaces and real product value.'

  const detail =
    about.detail ||
    'I work across the mobile development process: planning, architecture, UI implementation, data handling, API integrations, testing and store release. My focus is building apps that are easy to use, technically solid and ready to evolve.'

  const skillsTitle = about.skillsTitle || 'Mobile stack & tools'
  const workTitle = about.workTitle || 'What I bring to a project'

  const highlights = [
    {
      value: about.highlights?.[0]?.value || 'Mobile',
      label: about.highlights?.[0]?.label || 'Android, iOS and cross-platform vision',
      icon: <MdPhoneIphone size={22} style={{ color: accentColor }} />
    },
    {
      value: about.highlights?.[1]?.value || 'Product',
      label: about.highlights?.[1]?.label || 'From idea to store-ready app',
      icon: <MdRocketLaunch size={22} style={{ color: accentColor }} />
    },
    {
      value: about.highlights?.[2]?.value || 'Quality',
      label: about.highlights?.[2]?.label || 'Clean code, UX and performance',
      icon: <MdVerified size={22} style={{ color: accentColor }} />
    }
  ]

  const skills = [
    { name: 'Kotlin', icon: <SiKotlin size={30} style={{ color: accentColor }} /> },
    { name: 'Swift', icon: <SiSwift size={30} style={{ color: accentColor }} /> },
    { name: 'Android', icon: <FaAndroid size={30} style={{ color: accentColor }} /> },
    { name: 'iOS', icon: <FaApple size={30} style={{ color: accentColor }} /> },
    { name: 'Jetpack Compose', icon: <SiJetpackcompose size={30} style={{ color: accentColor }} /> },
    { name: 'Kotlin Multiplatform', icon: <MdDevices size={30} style={{ color: accentColor }} /> },
    { name: 'Firebase', icon: <SiFirebase size={30} style={{ color: accentColor }} /> },
    {
      name: 'REST APIs',
      icon: (
        <img
          src={RestApiIcon}
          alt="REST APIs"
          className="w-7 h-7"
          style={{ filter: iconFilter }}
        />
      )
    },
    {
      name: 'Clean Architecture',
      icon: (
        <img
          src={CleanIcon}
          alt="Clean Architecture"
          className="w-7 h-7"
          style={{ filter: iconFilter }}
        />
      )
    },
    { name: 'MVVM', icon: <MdOutlineArchitecture size={30} style={{ color: accentColor }} /> },
    { name: 'Mobile UI/UX', icon: <MdDesignServices size={30} style={{ color: accentColor }} /> },
    { name: 'Product mindset', icon: <MdRocketLaunch size={30} style={{ color: accentColor }} /> },
    { name: 'Google Play', icon: <SiGoogleplay size={30} style={{ color: accentColor }} /> },
    { name: 'App Store', icon: <SiAppstore size={30} style={{ color: accentColor }} /> },
    { name: 'Git', icon: <SiGit size={30} style={{ color: accentColor }} /> },
    { name: 'GitHub', icon: <FaGithub size={30} style={{ color: accentColor }} /> },
    { name: 'Android Studio', icon: <SiIntellijidea size={30} style={{ color: accentColor }} /> },
    { name: 'Java', icon: <FaJava size={30} style={{ color: accentColor }} /> }
  ]

  const fallbackWorkStyle = [
    'I turn ideas into structured mobile products with clear flows, solid foundations and maintainable code.',
    'I care about the full user experience: interface, performance, reliability and small details that make an app feel professional.',
    'I work with modern architecture, clean separation of responsibilities and practical technical decisions.',
    'I can support the full mobile cycle: MVP definition, development, testing, publishing and post-launch improvements.'
  ]

  const workStyleTexts =
    Array.isArray(about.workStyle) && about.workStyle.length >= 4
      ? about.workStyle
      : fallbackWorkStyle

  const workStyle = [
    {
      text: workStyleTexts[0],
      icon: <MdRocketLaunch size={22} style={{ color: accentColor }} />
    },
    {
      text: workStyleTexts[1],
      icon: <MdSpeed size={22} style={{ color: accentColor }} />
    },
    {
      text: workStyleTexts[2],
      icon: <MdCode size={22} style={{ color: accentColor }} />
    },
    {
      text: workStyleTexts[3],
      icon: <MdAutoAwesome size={22} style={{ color: accentColor }} />
    }
  ]

  return (
    <section
      className="max-w-6xl mx-auto py-14 px-4 sm:px-6 text-slate-100 overflow-y-auto"
      style={{ maxHeight: 'calc(100vh - 2rem)' }}
    >
      <div
        className={`transition-all duration-700 ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
      >
        <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/70 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/25">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative z-10">
            <p
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-sky-300"
            >
              <MdPhoneIphone size={18} />
              {tag}
            </p>

            <h2 className="mt-6 max-w-5xl text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-50">
              {title}
              <span style={{ color: accentColor }}>.</span>
            </h2>

            <p className="mt-6 max-w-4xl text-base sm:text-lg leading-8 text-slate-300">
              {intro}
            </p>

            <p className="mt-4 max-w-4xl text-sm sm:text-base leading-7 text-slate-400">
              {detail}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-700/70 bg-slate-800/60 p-5"
                >
                  <div className="mb-3">
                    {item.icon}
                  </div>

                  <p className="text-lg font-semibold text-slate-100">
                    {item.value}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`mb-14 mt-12 transition-all duration-700 delay-200 ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
      >
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold text-slate-100">
            {skillsTitle}
          </h3>

          <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-300">
            Android · iOS · Architecture · Publishing
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center min-h-[120px] p-4 rounded-2xl bg-slate-800/70 border border-slate-700/70 hover:border-sky-400/50 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>

              <span className="text-sm text-center text-slate-200 leading-snug">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`transition-all duration-700 delay-300 ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
      >
        <h3 className="text-2xl font-semibold mb-5 text-slate-100">
          {workTitle}
        </h3>

        <ul className="grid gap-4 md:grid-cols-2">
          {workStyle.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 bg-slate-800/70 p-5 rounded-2xl border border-slate-700/70 hover:border-sky-400/40 transition-all duration-300"
            >
              <div className="mt-0.5 shrink-0">
                {item.icon}
              </div>

              <span className="text-slate-300 leading-relaxed">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
