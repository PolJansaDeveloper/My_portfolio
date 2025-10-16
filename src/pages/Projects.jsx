import React, { useState } from 'react'
import MM from '../assets/MM.png'
import HL from '../assets/HL.png'

// Lista de proyectos
const initial = [
  {
    id: 1,
    title: 'Mediterranean Market',
    tags: ['Android'],
    desc: 'Plataforma que conecta productores internacionales de alimentos premium con compradores europeos, especializada en cacao y ventas al por mayor.',
    img: MM
  },
  {
    id: 2,
    title: 'Healthy Life Inventive',
    tags: ['Android'],
    desc: 'App para seguimiento de hábitos y vida saludable.',
    img: HL
  }
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Android', 'iOS', 'Flutter']
  const projects = initial.filter(p => filter === 'All' ? true : p.tags.includes(filter))
  const greenColor = '#00FF7F' // Verde Sidebar

  return (
    <div className="max-w-5xl mx-auto w-full py-12">
      <h2 className="text-3xl font-bold mb-6 text-white">Proyectos</h2>

      {/* Filtros */}
      <div className="mb-8 flex gap-2">
        {categories.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded ${
              filter === f ? `bg-green-400 text-black font-bold` : 'bg-panel/30 text-muted'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid de proyectos */}
      {projects.length === 0 ? (
        <p className="text-muted">No hay proyectos en esta categoría todavía.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(p => (
            <article
              key={p.id}
              className="bg-panel/40 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Título encima de la imagen */}
              <h3 className="font-semibold text-xl mb-2 text-green-400 px-4 pt-4">{p.title}</h3>
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                {/* Solo descripción debajo de la imagen */}
                <p className="text-muted text-sm">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

