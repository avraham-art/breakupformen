'use client'

import { useEffect, useState } from 'react'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', stored === 'dark' || (!stored && prefersDark))
  }, [])

  if (!mounted) return <div style={{ visibility: 'hidden' }}>{children}</div>
  return <>{children}</>
}
