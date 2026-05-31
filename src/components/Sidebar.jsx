import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import perfil from '../assets/perfilbo.png'

const Sidebar = ({ active, setActive, lang, setLang, t }) => {
  const items = [
    { id: 'home', label: t.sidebar.nav.home },
    { id: 'about', label: t.sidebar.nav.about },
    { id: 'projects', label: t.sidebar.nav.projects },
    { id: 'services', label: t.sidebar.nav.services },
    { id: 'contact', label: t.sidebar.nav.contact }
  ]

  return (
    <div className="h-screen w-72 bg-panel/95 text-slate-100 flex flex-col justify-between fixed left-0 top-0 shadow-2xl shadow-black/40 border-r border-slate-700/50">
      <div>
        <div className="flex flex-col items-center mt-8">
          <img
            src={perfil}
            alt="Perfil"
            className="w-28 h-28 rounded-full border-4 border-accent/70 shadow-lg shadow-accent/10"
          />
          <h2 className="text-xl font-semibold mt-4 text-center">Pol Jansà Sierra</h2>
          <div className="flex items-center gap-2 mt-1 text-accent font-medium">
            <FontAwesomeIcon icon={faMobileAlt} />
            <span>{t.sidebar.role}</span>
          </div>
        </div>

        <div className="border-t border-slate-700/60 my-6 mx-6"></div>

        <nav className="mt-6">
          <div className="bg-slate-900/40 rounded-lg mx-4 py-4 px-2 border border-slate-700/40">
            <ul className="flex flex-col space-y-4 text-center font-medium uppercase tracking-wider text-sm">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setActive(item.id)}
                    className={`relative inline-block transition-colors duration-300 ${
                      active === item.id ? 'text-accent' : 'text-slate-100 hover:text-accent'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="mt-5 mx-4 rounded-lg border border-slate-700/40 bg-slate-900/40 py-3 px-3">
          <p className="text-xs uppercase tracking-widest text-slate-400 mb-2 text-center">{t.sidebar.language}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setLang('es')}
              className={`flex-1 rounded-md border px-3 py-1.5 text-sm font-semibold transition-colors ${
                lang === 'es'
                  ? 'border-accent bg-accent text-slate-900'
                  : 'border-slate-600 text-slate-200 hover:border-accent/70 hover:text-accent'
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`flex-1 rounded-md border px-3 py-1.5 text-sm font-semibold transition-colors ${
                lang === 'en'
                  ? 'border-accent bg-accent text-slate-900'
                  : 'border-slate-600 text-slate-200 hover:border-accent/70 hover:text-accent'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700/60 my-6 mx-6"></div>

      <div className="mb-8 flex flex-col items-center space-y-3 text-sm text-slate-300 px-4">
        <a
          href="https://github.com/PolJansaDeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
        >
          <i className="fab fa-github text-lg"></i> github.com/PolJansaDeveloper
        </a>
        <a
          href="https://es.linkedin.com/in/pol-jansà-sierra-618735193/en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
        >
          <i className="fab fa-linkedin text-lg"></i> linkedin.com/in/pol-jansa-sierra
        </a>
        <a
          href="mailto:poljansa.developer@gmail.com"
          className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
        >
          <i className="fas fa-envelope text-lg"></i> poljansa.developer@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Sidebar
