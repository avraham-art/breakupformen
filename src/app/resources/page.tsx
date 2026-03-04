import { resources } from '@/data/resources'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources | BREAKUPFORMEN',
  description: 'Recommended books, courses, and tools for men navigating separation and divorce.',
}

const typeOrder = ['Book', 'Course', 'Journal', 'Guide'] as const

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl lg:text-6xl uppercase tracking-tight mb-4">
            Resources
          </h1>
          <p className="text-xl text-slate-300 font-light">Curated tools for your recovery and growth.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {typeOrder.map((type) => {
          const filtered = resources.filter((r) => r.type === type)
          if (!filtered.length) return null
          return (
            <div key={type} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-display text-2xl uppercase text-primary dark:text-accent tracking-wider">
                  {type}s
                </h2>
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filtered.map((resource) => (
                  <div key={resource.id} className="group">
                    <div className="aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-slate-800 mb-4 relative shadow-md rounded">
                      <img
                        src={resource.image}
                        alt={resource.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                        <a
                          href={resource.link || '#'}
                          className="bg-accent text-primary font-bold px-4 py-2 text-sm uppercase"
                        >
                          View
                        </a>
                      </div>
                    </div>
                    <span className="text-xs font-bold uppercase text-primary dark:text-accent tracking-wider block mb-1">
                      {resource.type}
                    </span>
                    <h3 className="font-bold leading-tight mb-1 dark:text-white">{resource.title}</h3>
                    <p className="text-sm text-slate-500 italic">{resource.author}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                      {resource.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
