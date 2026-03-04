import Link from 'next/link'
import { resources } from '@/data/resources'

export default function ResourcesCarousel() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-display text-3xl uppercase tracking-widest text-accent">
            Recommended Resources
          </h2>
          <Link
            href="/resources"
            className="text-accent border border-accent/30 px-4 py-2 text-sm uppercase tracking-wider hover:bg-accent/10 transition rounded"
          >
            View All
          </Link>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="flex-none w-72 bg-white/5 border border-white/10 p-6 rounded group hover:bg-white/10 transition"
            >
              <div className="aspect-[3/4] bg-slate-800 mb-6 overflow-hidden relative shadow-xl">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="object-cover h-full w-full"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <a
                    href={resource.link || '#'}
                    className="bg-accent text-primary font-bold px-4 py-2 text-sm uppercase"
                  >
                    Quick View
                  </a>
                </div>
              </div>
              <span className="text-xs font-bold uppercase text-accent tracking-tighter block mb-2">
                {resource.type}
              </span>
              <h4 className="font-bold text-lg mb-1 leading-tight">{resource.title}</h4>
              <p className="text-slate-400 text-sm italic">{resource.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
