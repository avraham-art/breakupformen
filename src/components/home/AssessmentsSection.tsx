const assessments = [
  {
    icon: 'psychology',
    title: 'Emotional Resilience',
    description: 'Measure your current coping mechanisms and find areas for immediate mental improvement.',
  },
  {
    icon: 'family_restroom',
    title: 'Co-Parenting Readiness',
    description: "Navigating children through a split. Evaluate your communication strategies for the kids' sake.",
  },
  {
    icon: 'account_balance',
    title: 'Practical Logistics',
    description: 'From housing to finances, identify the most critical logistical steps you need to take right now.',
  },
]

export default function AssessmentsSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl text-primary dark:text-accent uppercase tracking-wide mb-4">
            Assess Your Situation
          </h2>
          <div className="w-20 h-1 bg-primary dark:bg-accent mx-auto"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Take our professional questionnaires to get tailored advice for your specific circumstances.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {assessments.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary dark:text-accent text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">{item.description}</p>
              <a
                href="#"
                className="text-primary dark:text-accent font-bold uppercase text-sm flex items-center gap-2 hover:gap-3 transition-all"
              >
                Take Assessment{' '}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
