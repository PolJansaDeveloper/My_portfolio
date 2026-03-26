import React, { useState } from 'react'
import MM from '../assets/MM.png'
import HL from '../assets/HL.png'

const initial = [
  {
    id: 1,
    title: 'Mediterranean Market',
    tags: ['android'],
    descKey: 'mmDesc',
    img: MM
  },
  {
    id: 2,
    title: 'Healthy Life Inventive',
    tags: ['android'],
    descKey: 'hlDesc',
    img: HL
  }
]

export default function Projects({ t }) {
  const [filter, setFilter] = useState('all')

  const categories = [
    { id: 'all', label: t.projects.categories.all },
    { id: 'android', label: t.projects.categories.android },
    { id: 'ios', label: t.projects.categories.ios },
    { id: 'flutter', label: t.projects.categories.flutter }
  ]

  const projects = initial.filter((p) => (filter === 'all' ? true : p.tags.includes(filter)))

  return (
    <div className="max-w-5xl mx-auto w-full py-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-100">{t.projects.title}</h2>

      <div className="mb-8 flex gap-2 flex-wrap">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-3 py-1 rounded-md border transition-colors ${
              filter === category.id
                ? 'bg-accent text-slate-900 border-accent font-bold'
                : 'bg-panel/30 text-muted border-slate-700 hover:text-slate-100'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {projects.length === 0 ? (
        <p className="text-muted">{t.projects.empty}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="bg-panel/70 border border-slate-700/70 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:border-accent/60"
            >
              <h3 className="font-semibold text-xl mb-2 text-accent px-4 pt-4">{p.title}</h3>
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-muted text-sm">{t.projects.items[p.descKey]}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
