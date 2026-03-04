import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-xl tracking-widest text-primary dark:text-accent uppercase">
                BREAKUPFORMEN
              </span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed">
              A dedicated platform for men seeking clarity, strength, and recovery after a life-altering breakup.
            </p>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-wider text-sm mb-6 text-slate-800 dark:text-white">
              Guidance
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {[
                { href: '/blog?category=psychology', label: 'Mental Health' },
                { href: '/blog?category=legal', label: 'Legal Advice' },
                { href: '/blog?category=family', label: 'Co-Parenting' },
                { href: '/blog?category=health', label: 'Health & Recovery' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary dark:hover:text-accent transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-wider text-sm mb-6 text-slate-800 dark:text-white">
              The Site
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {[
                { href: '/about', label: 'About' },
                { href: '/resources', label: 'Resources' },
                { href: '/contact', label: 'Contact' },
                { href: '/privacy', label: 'Privacy Policy' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary dark:hover:text-accent transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-wider text-sm mb-6 text-slate-800 dark:text-white">
              Stay Grounded
            </h4>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              Weekly insights delivered to your inbox. No spam, just substance.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded px-3 py-2 text-sm w-full outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary text-white px-4 py-2 rounded text-xs font-bold uppercase">Join</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
          <p>© 2025 BREAKUPFORMEN. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/terms" className="hover:text-primary dark:hover:text-accent transition">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary dark:hover:text-accent transition">Confidentiality</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
