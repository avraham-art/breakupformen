import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact HQ | BREAKUPFORMEN',
  description: 'Reach out for guidance and support. Everything is treated with complete confidentiality.',
}

const expectations = [
  { icon: 'schedule', text: 'Response within 24 hours' },
  { icon: 'lock', text: 'Complete confidentiality — always' },
  { icon: 'support', text: 'No judgment, no unsolicited advice' },
  { icon: 'route', text: 'Directed to the right resource for your situation' },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-display uppercase tracking-widest text-sm mb-4 block">
            Contact HQ
          </span>
          <h1 className="font-display text-5xl lg:text-6xl uppercase tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-300 font-light max-w-2xl">
            Everything shared here is treated with complete confidentiality. You reached out — that
            takes strength.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactForm />

          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl uppercase text-primary dark:text-accent mb-6">
                What to Expect
              </h2>
              <ul className="space-y-4">
                {expectations.map((item) => (
                  <li key={item.icon} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 dark:bg-accent/10 rounded flex items-center justify-center flex-none">
                      <span className="material-symbols-outlined text-primary dark:text-accent">
                        {item.icon}
                      </span>
                    </div>
                    <span className="text-slate-600 dark:text-slate-400">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded border border-slate-200 dark:border-slate-700">
              <h3 className="font-display text-lg uppercase text-primary dark:text-accent mb-3">
                Crisis Resources
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                If you&apos;re in immediate emotional distress, please reach out to a crisis service.
              </p>
              <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  <strong>National Crisis Hotline:</strong> 988
                </li>
                <li>
                  <strong>Crisis Text Line:</strong> Text HOME to 741741
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
