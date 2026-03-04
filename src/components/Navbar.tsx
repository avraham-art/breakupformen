'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button onClick={toggle} className="p-2 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-accent transition">
      <span className="material-symbols-outlined text-xl">{dark ? 'light_mode' : 'dark_mode'}</span>
    </button>
  )
}

const navLinks = [
  { href: '/blog', label: 'Articles' },
  { href: '/resources', label: 'Resources' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-primary/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-display text-2xl tracking-widest text-primary dark:text-accent">BREAKUPFORMEN</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  pathname.startsWith(link.href)
                    ? 'text-primary dark:text-accent'
                    : 'hover:text-primary dark:hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-primary dark:bg-accent dark:text-primary text-white font-semibold rounded hover:opacity-90 transition shadow-sm"
            >
              Get Help Now
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700 space-y-3 pb-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium hover:text-primary dark:hover:text-accent transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-2 px-5 py-2.5 bg-primary text-white font-semibold rounded hover:opacity-90 transition text-center"
              onClick={() => setMenuOpen(false)}
            >
              Get Help Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
