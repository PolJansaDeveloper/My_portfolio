import React, { useState } from 'react'
import MM from '../assets/MM.png'
import QuickEscapeImg from '../assets/quickescape.png'
import TrainFlowImg from '../assets/trainglow.png'


const fallbackDescriptions = {
  quickEscapeDesc:
    'Android app that generates clever excuses to cancel plans in serious or absurd mode. Built with Kotlin and Jetpack Compose, focused on clean UI, user engagement, and Play Store distribution.',
  trainFlowDesc:
    'Workout tracking app focused on planning, session execution, and training history. Built with Kotlin, Jetpack Compose, and a scalable architecture with a strong focus on premium UI and user experience.',
  mediterraneanMarketDesc:
    'Android project developed as a real private application. The source code is not public because it contains private configuration and non-shareable resources.'
}

const initialProjects = [
  {
    id: 1,
    title: 'QuickEscape',
    platform: 'android',
    status: 'published',
    img: QuickEscapeImg,
    descriptionKey: 'quickEscapeDesc',
    links: {
      playStore: '#'
    }
  },
  {
    id: 2,
    title: 'TrainFlow',
    platform: 'android',
    status: 'in-development',
    img: TrainFlowImg,
    descriptionKey: 'trainFlowDesc',
    links: {}
  },
  {
    id: 3,
    title: 'Mediterranean Market',
    platform: 'android',
    status: 'private',
    img: MM,
    descriptionKey: 'mediterraneanMarketDesc',
    links: {}
  }
]

function getStatusStyles(status) {
  switch (status) {
    case 'published':
      return 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
    case 'in-development':
      return 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
    case 'private':
      return 'bg-slate-500/15 text-slate-300 border border-slate-500/30'
    default:
      return 'bg-slate-500/15 text-slate-300 border border-slate-500/30'
  }
}

function getStatusLabel(status, t) {
  switch (status) {
    case 'published':
      return t?.projects?.statuses?.published || 'Published'
    case 'in-development':
      return t?.projects?.statuses?.inDevelopment || 'In Development'
    case 'private':
      return t?.projects?.statuses?.private || 'Private'
    default:
      return status
  }
}

export default function Projects({ t }) {
  const [filter, setFilter] = useState('all')

  const categories = [
    { id: 'all', label: t?.projects?.categories?.all || 'All' },
    { id: 'android', label: t?.projects?.categories?.android || 'Android' },
    { id: 'multiplatform', label: t?.projects?.categories?.multiplatform || 'Multiplatform' }
  ]

  const filteredProjects = initialProjects.filter((project) =>
    filter === 'all' ? true : project.platform === filter
  )

  return (
    <section className="max-w-6xl mx-auto w-full py-12 px-4">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
          {t?.projects?.title || 'Projects'}
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl">
          {t?.projects?.subtitle ||
            'A selection of Android products and mobile projects I have built or I am currently developing.'}
        </p>
      </div>

      <div className="mb-10 flex gap-2 flex-wrap">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
              filter === category.id
                ? 'bg-accent text-slate-900 border-accent shadow-lg shadow-sky-500/20'
                : 'bg-panel/30 text-slate-300 border-slate-700 hover:text-slate-100 hover:border-slate-500'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-slate-700/70 bg-slate-900/50 p-6 text-slate-400">
          {t?.projects?.empty || 'No projects available in this category yet.'}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const hasPublicLink = Boolean(project.links?.playStore && project.links.playStore !== '#')

            return (
              <article
                key={project.id}
                className="group h-full overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/65 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-sky-500/15 text-sky-300 border-sky-500/30">
                      {project.platform === 'android'
                        ? t?.projects?.platforms?.android || 'Android'
                        : t?.projects?.platforms?.multiplatform || 'Multiplatform'}
                    </span>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyles(project.status)}`}
                    >
                      {getStatusLabel(project.status, t)}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col h-[calc(100%-13rem)]">
                  <h3 className="text-xl font-semibold text-slate-100 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-6 flex-1">
                    {t?.projects?.items?.[project.descriptionKey] || fallbackDescriptions[project.descriptionKey]}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.status === 'published' && (
                      <a
                        href={project.links.playStore}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold transition-all ${
                          hasPublicLink
                            ? 'bg-accent text-slate-900 hover:bg-sky-300 shadow-lg shadow-sky-500/20'
                            : 'bg-slate-700 text-slate-300 cursor-not-allowed pointer-events-none'
                        }`}
                      >
                        {t?.projects?.cta?.viewOnGooglePlay || 'View on Google Play'}
                      </a>
                    )}

                    {project.status === 'in-development' && (
                      <span className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        {t?.projects?.cta?.comingSoon || 'Coming soon'}
                      </span>
                    )}

                    {project.status === 'private' && (
                      <span className="inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold bg-slate-700/60 text-slate-300 border border-slate-600">
                        {t?.projects?.cta?.privateProject || 'Private project'}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
