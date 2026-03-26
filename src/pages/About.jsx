import React, { useEffect, useState } from 'react'
import { FaJava, FaGithub, FaAndroid } from 'react-icons/fa'
import {
  SiKotlin,
  SiJetpackcompose,
  SiFirebase,
  SiGit,
  SiIntellijidea
} from 'react-icons/si'
import { MdOutlineArchitecture, MdPhoneIphone, MdAutoAwesome } from 'react-icons/md'

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

  const skills = [
    { name: 'Kotlin', icon: <SiKotlin size={30} style={{ color: accentColor }} /> },
    { name: 'Java', icon: <FaJava size={30} style={{ color: accentColor }} /> },
    { name: 'Android SDK', icon: <FaAndroid size={30} style={{ color: accentColor }} /> },
    { name: 'Jetpack Compose', icon: <SiJetpackcompose size={30} style={{ color: accentColor }} /> },
    { name: 'Firebase', icon: <SiFirebase size={30} style={{ color: accentColor }} /> },
    { name: 'REST APIs', icon: <img src={RestApiIcon} alt="REST APIs" className="w-7 h-7" style={{ filter: iconFilter }} /> },
    { name: 'Clean Architecture', icon: <img src={CleanIcon} alt="Clean Architecture" className="w-7 h-7" style={{ filter: iconFilter }} /> },
    { name: 'MVVM', icon: <MdOutlineArchitecture size={30} style={{ color: accentColor }} /> },
    { name: 'Git', icon: <SiGit size={30} style={{ color: accentColor }} /> },
    { name: 'GitHub', icon: <FaGithub size={30} style={{ color: accentColor }} /> },
    { name: 'Android Studio', icon: <SiIntellijidea size={30} style={{ color: accentColor }} /> },
    { name: 'Mobile UI', icon: <MdPhoneIphone size={30} style={{ color: accentColor }} /> }
  ]

  const workStyle = [
    {
      text: t.about.workStyle[0],
      icon: <MdOutlineArchitecture size={22} style={{ color: accentColor }} />
    },
    {
      text: t.about.workStyle[1],
      icon: <MdOutlineArchitecture size={22} style={{ color: accentColor }} />
    },
    {
      text: t.about.workStyle[2],
      icon: <MdAutoAwesome size={22} style={{ color: accentColor }} />
    },
    {
      text: t.about.workStyle[3],
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
        <p
          className="text-sm uppercase tracking-[0.25em] mb-3"
          style={{ color: accentColor }}
        >
          {t.about.tag}
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          {t.about.title}
          <span style={{ color: accentColor }}>.</span>
        </h2>
      </div>

      <div
        className={`transition-all duration-700 delay-100 ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
      >
        <p className="mb-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-4xl">
          {t.about.intro}
        </p>

        <p className="mb-10 text-base sm:text-lg text-slate-400 leading-relaxed max-w-4xl whitespace-pre-line">
          {t.about.detail}
        </p>
      </div>

      <div
        className={`mb-14 transition-all duration-700 delay-200 ${
          mounted ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
      >
        <h3 className="text-2xl font-semibold mb-5 text-slate-100">{t.about.skillsTitle}</h3>

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
        <h3 className="text-2xl font-semibold mb-5 text-slate-100">{t.about.workTitle}</h3>

        <ul className="grid gap-4 md:grid-cols-2">
          {workStyle.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 bg-slate-800/70 p-5 rounded-2xl border border-slate-700/70 hover:border-sky-400/40 transition-all duration-300"
            >
              <div className="mt-0.5">{item.icon}</div>
              <span className="text-slate-300 leading-relaxed">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
