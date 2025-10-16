import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import perfil from '../assets/perfil.png'

const Sidebar = () => {
  return (
    <div className="h-screen w-72 bg-gray-900 text-white flex flex-col justify-between fixed left-0 top-0 shadow-lg">
      {/* Sección superior: Foto + Nombre */}
      <div>
        <div className="flex flex-col items-center mt-8">
          <img
            src={perfil}
            alt="Perfil"
            className="w-28 h-28 rounded-full border-4 border-green-400 shadow-md"
          />
          <h2 className="text-xl font-semibold mt-4 text-center">Pol Jansà Sierra</h2>
          <div className="flex items-center gap-2 mt-1 text-green-400 font-medium">
            <FontAwesomeIcon icon={faMobileAlt} />
            <span>Mobile Developer</span>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-green-400 my-6 mx-6"></div>

        {/* Menú de navegación */}
        <nav className="mt-6">
          <div className="bg-gray-900/30 rounded-lg mx-4 py-4 px-2">
            <ul className="flex flex-col space-y-6 text-center font-medium uppercase tracking-wider">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "Sobre mí" },
                { id: "projects", label: "Proyectos" },
                { id: "services", label: "Servicios" },
                { id: "contact", label: "Contacto" },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="relative inline-block text-white hover:text-green-400 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Separador antes de redes */}
      <div className="border-t border-green-400 my-6 mx-6"></div>

      {/* Sección inferior: redes sociales */}
      <div className="mb-8 flex flex-col items-center space-y-3 text-sm text-green-400">
        <a
          href="https://github.com/PolJansaDeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors duration-300"
        >
          <i className="fab fa-github text-lg"></i> github.com/PolJansaDeveloper
        </a>
        <a
          href="https://es.linkedin.com/in/pol-jansà-sierra-618735193/en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors duration-300"
        >
          <i className="fab fa-linkedin text-lg"></i> linkedin.com/in/pol-jansa-sierra
        </a>
        <a
          href="mailto:poljansa.developer@gmail.com"
          className="flex items-center gap-2 hover:text-white transition-colors duration-300"
        >
          <i className="fas fa-envelope text-lg"></i> poljansa.developer@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

