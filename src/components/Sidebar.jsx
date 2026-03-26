import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import perfil from '../assets/perfil.png'

const Sidebar = ({ active, setActive }) => {
  const items = [
    { id: "home", label: "Home" },
    { id: "about", label: "Sobre mí" },
    { id: "projects", label: "Proyectos" },
    { id: "services", label: "Servicios" },
    { id: "contact", label: "Contacto" },
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
            <span>Mobile Developer</span>
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
  );
};

export default Sidebar;
