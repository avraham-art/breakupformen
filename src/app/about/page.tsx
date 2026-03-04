import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Operator | BREAKUPFORMEN',
  description: 'About the founder of BREAKUPFORMEN — a personal and professional story of rebuilding.',
}

const stats = [
  { value: '—', label: 'Years Experience' },
  { value: '—', label: 'Men Helped' },
  { value: '—', label: 'Articles Published' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-display uppercase tracking-widest text-sm mb-4 block">
            The Operator
          </span>
          <h1 className="font-display text-5xl lg:text-6xl uppercase tracking-tight">About</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] bg-slate-200 dark:bg-slate-800 rounded overflow-hidden flex items-center justify-center">
              <span className="material-symbols-outlined text-slate-400 text-7xl">person</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl uppercase text-primary dark:text-accent mb-6">
              Biography Coming Soon
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p className="text-lg">
                The full biography will be added here — combining the human dimension of fatherhood
                with professional expertise to inspire and guide the men who visit this site.
              </p>
              <p>
                This platform was built on the belief that men deserve dedicated, practical, and
                honest support during one of life's most challenging transitions.
              </p>
              <p>
                The journey through separation or divorce is one of the hardest roads a man can
                walk. But it doesn't have to be walked alone, and it doesn't have to end in
                defeat.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 border border-slate-200 dark:border-slate-700 rounded"
                >
                  <div className="font-display text-3xl text-primary dark:text-accent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {[
            {
              icon: 'psychology',
              title: 'The Personal Side',
              body: 'A father who has been through it. Who understands what it means to navigate separation while keeping your children at the center of every decision.',
            },
            {
              icon: 'workspace_premium',
              title: 'The Professional Side',
              body: 'Years of expertise in [field — to be added]. Translated into practical frameworks that work in the real world, not just in theory.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded"
            >
              <div className="w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary dark:text-accent text-2xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-display text-xl uppercase text-primary dark:text-accent mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
