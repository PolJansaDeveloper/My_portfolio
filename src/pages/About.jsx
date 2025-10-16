import React, { useEffect, useState } from 'react'
import { FaJava, FaGithub, FaAndroid } from 'react-icons/fa'
import { SiKotlin, SiJetpackcompose, SiFirebase } from 'react-icons/si'
import { MdSettings, MdPeople } from 'react-icons/md'

// Importamos tus SVGs desde assets/icons
import CleanIcon from '../assets/icons/clean.svg'
import CsharpIcon from '../assets/icons/csharp.svg'
import PythonIcon from '../assets/icons/python.svg'
import RestApiIcon from '../assets/icons/restapi.svg'

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Verde exacto usado en Sidebar y botón
  const greenColor = '#00FF7F'
  const greenFilter = `invert(66%) sepia(85%) saturate(5400%) hue-rotate(78deg) brightness(95%) contrast(95%)`

  // Lista de skills con sus logos
  const skills = [
    { name: 'Kotlin', icon: <SiKotlin size={32} className="text-green-400" style={{ color: greenColor }} /> },
    { name: 'Java', icon: <FaJava size={32} className="text-green-400" style={{ color: greenColor }} /> },
    { name: 'C#', icon: <img src={CsharpIcon} alt="C#" className="w-8 h-8" style={{ filter: greenFilter }} /> },
    { name: 'Python', icon: <img src={PythonIcon} alt="Python" className="w-8 h-8" style={{ filter: greenFilter }} /> },
    { name: 'Android SDK', icon: <FaAndroid size={32} className="text-green-400" style={{ color: greenColor }} /> },
    { name: 'Jetpack Compose', icon: <SiJetpackcompose size={32} className="text-green-400" style={{ color: greenColor }} /> },
    { name: 'Clean Architecture', icon: <img src={CleanIcon} alt="Clean Architecture" className="w-8 h-8" style={{ filter: greenFilter }} /> },
    { name: 'Firebase', icon: <SiFirebase size={32} className="text-green-400" style={{ color: greenColor }} /> },
    { name: 'REST APIs', icon: <img src={RestApiIcon} alt="REST APIs" className="w-8 h-8" style={{ filter: greenFilter }} /> },
    { name: 'Git / GitHub', icon: <FaGithub size={32} className="text-green-400" style={{ color: greenColor }} /> }
  ]

  // Estilo de trabajo
  const workStyle = [
    { text: 'Código limpio y mantenible', icon: <MdSettings size={24} style={{ color: greenColor }} /> },
    { text: 'Arquitectura MVVM y patrones profesionales', icon: <MdSettings size={24} style={{ color: greenColor }} /> },
    { text: 'Enfoque en experiencia de usuario', icon: <MdPeople size={24} style={{ color: greenColor }} /> },
    { text: 'Aprendizaje constante y colaboración', icon: <MdPeople size={24} style={{ color: greenColor }} /> }
  ]

  return (
    <section className="max-w-5xl mx-auto py-12 px-4 text-white overflow-y-auto" style={{ maxHeight: 'calc(100vh - 2rem)' }}>
      {/* Título */}
      <h2 className={`text-4xl font-bold mb-6 transition-transform duration-700 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        Sobre mí
      </h2>

      {/* Introducción */}
      <p className={`mb-8 text-lg text-muted transition-transform duration-700 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        Hola, soy Pol Jansa Sierra <span style={{ color: greenColor, fontWeight: 'bold' }}>{'{ } PJDev'}</span>, Junior Android Developer apasionado por crear apps móviles funcionales y bonitas.
      </p>

      {/* Historia con saltos de línea */}
      <p className={`mb-8 text-muted text-lg transition-transform duration-700 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        Soy Android Developer especializado en Java, Kotlin, Jetpack Compose y Firebase, con enfoque en arquitecturas limpias como MVVM y Clean Architecture.  
        Me apasiona crear aplicaciones móviles escalables, con código limpio y experiencia de usuario cuidada.<br/><br/>
        Mi trayectoria comenzó en el ámbito deportivo, donde aprendí disciplina, trabajo en equipo y mejora continua como entrenador, profesor de esquí y jugador profesional de hockey.  
        A los 28 años decidí seguir mi pasión por la tecnología y me formé en Desarrollo de Aplicaciones Multiplataforma, consolidando mi base en Android.<br/><br/>
        He viajado y trabajado en distintos contextos culturales, lo que amplió mi visión global y perfeccionó mi inglés, fortaleciendo mi creatividad y mentalidad abierta.  
        Recientemente completé un Máster en Desarrollo Móvil para Android y actualmente busco nuevos retos para crecer, aportar valor y seguir aprendiendo cada día.
      </p>

      {/* Skills */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 rounded-full bg-white/10 border border-green-400 text-green-400 hover:bg-green-400/20 hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              {skill.icon}
              <span className="text-sm text-center mt-1">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Estilo de trabajo */}
      <div>
        <h3 className="text-2xl font-semibold mb-4">Mi estilo de trabajo</h3>
        <ul className="space-y-3">
          {workStyle.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 bg-white/10 p-3 rounded hover:bg-green-400/20 transition-colors duration-300"
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

