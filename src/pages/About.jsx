import React, { useEffect, useState } from 'react'
import { FaJava, FaGithub, FaAndroid } from 'react-icons/fa'
import { SiKotlin, SiJetpackcompose, SiFirebase } from 'react-icons/si'
import { MdSettings, MdPeople } from 'react-icons/md'

import CleanIcon from '../assets/icons/clean.svg'
import CsharpIcon from '../assets/icons/csharp.svg'
import PythonIcon from '../assets/icons/python.svg'
import RestApiIcon from '../assets/icons/restapi.svg'

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const accentColor = '#38bdf8'
  const iconFilter = 'invert(69%) sepia(19%) saturate(1321%) hue-rotate(166deg) brightness(101%) contrast(96%)'

  const skills = [
    { name: 'Kotlin', icon: <SiKotlin size={32} style={{ color: accentColor }} /> },
    { name: 'Java', icon: <FaJava size={32} style={{ color: accentColor }} /> },
    { name: 'C#', icon: <img src={CsharpIcon} alt="C#" className="w-8 h-8" style={{ filter: iconFilter }} /> },
    { name: 'Python', icon: <img src={PythonIcon} alt="Python" className="w-8 h-8" style={{ filter: iconFilter }} /> },
    { name: 'Android SDK', icon: <FaAndroid size={32} style={{ color: accentColor }} /> },
    { name: 'Jetpack Compose', icon: <SiJetpackcompose size={32} style={{ color: accentColor }} /> },
    { name: 'Clean Architecture', icon: <img src={CleanIcon} alt="Clean Architecture" className="w-8 h-8" style={{ filter: iconFilter }} /> },
    { name: 'Firebase', icon: <SiFirebase size={32} style={{ color: accentColor }} /> },
    { name: 'REST APIs', icon: <img src={RestApiIcon} alt="REST APIs" className="w-8 h-8" style={{ filter: iconFilter }} /> },
    { name: 'Git / GitHub', icon: <FaGithub size={32} style={{ color: accentColor }} /> }
  ]

  const workStyle = [
    { text: 'Código limpio y mantenible', icon: <MdSettings size={24} style={{ color: accentColor }} /> },
    { text: 'Arquitectura MVVM y patrones profesionales', icon: <MdSettings size={24} style={{ color: accentColor }} /> },
    { text: 'Enfoque en experiencia de usuario', icon: <MdPeople size={24} style={{ color: accentColor }} /> },
    { text: 'Aprendizaje constante y colaboración', icon: <MdPeople size={24} style={{ color: accentColor }} /> }
  ]

  return (
    <section className="max-w-5xl mx-auto py-12 px-4 text-slate-100 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 2rem)' }}>
      <h2 className={`text-4xl font-bold mb-6 transition-transform duration-700 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        Sobre mí
      </h2>

      <p className={`mb-8 text-lg text-muted transition-transform duration-700 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        Hola, soy Pol Jansa Sierra <span style={{ color: accentColor, fontWeight: 'bold' }}>{'{ } PJDev'}</span>, Junior Android Developer apasionado por crear apps móviles funcionales y bonitas.
      </p>

      <p className={`mb-8 text-muted text-lg transition-transform duration-700 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        Soy Android Developer especializado en Java, Kotlin, Jetpack Compose y Firebase, con enfoque en arquitecturas limpias como MVVM y Clean Architecture.
        Me apasiona crear aplicaciones móviles escalables, con código limpio y experiencia de usuario cuidada.<br /><br />
        Mi trayectoria comenzó en el ámbito deportivo, donde aprendí disciplina, trabajo en equipo y mejora continua como entrenador, profesor de esquí y jugador profesional de hockey.
        A los 28 años decidí seguir mi pasión por la tecnología y me formé en Desarrollo de Aplicaciones Multiplataforma, consolidando mi base en Android.<br /><br />
        He viajado y trabajado en distintos contextos culturales, lo que amplió mi visión global y perfeccionó mi inglés, fortaleciendo mi creatividad y mentalidad abierta.
        Recientemente completé un Máster en Desarrollo Móvil para Android y actualmente busco nuevos retos para crecer, aportar valor y seguir aprendiendo cada día.
      </p>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 rounded-full bg-slate-800/80 border border-slate-600 text-accent hover:bg-slate-700/90 hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              {skill.icon}
              <span className="text-sm text-center mt-1 text-slate-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Mi estilo de trabajo</h3>
        <ul className="space-y-3">
          {workStyle.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 bg-slate-800/80 p-3 rounded border border-slate-700/70 hover:border-accent/60 transition-colors duration-300"
            >
              {item.icon}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
