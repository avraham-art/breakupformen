'use client'

import { useState, type FormEvent } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="p-8 bg-primary/5 dark:bg-primary/20 border border-primary/20 rounded text-center">
        <span className="material-symbols-outlined text-5xl text-primary dark:text-accent mb-4 block">
          check_circle
        </span>
        <h3 className="font-display text-2xl uppercase text-primary dark:text-accent mb-2">
          Message Received
        </h3>
        <p className="text-slate-600 dark:text-slate-400">
          We'll respond within 24 hours. Your confidentiality is protected.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">First Name</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-white">Last Name</label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2 dark:text-white">Email</label>
        <input
          required
          type="email"
          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2 dark:text-white">
          Where are you in the process?
        </label>
        <select className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent">
          <option>Just beginning to consider separation</option>
          <option>In the process of separation</option>
          <option>Recently separated/divorced</option>
          <option>Several years post-separation, still rebuilding</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2 dark:text-white">Message</label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent resize-none"
          placeholder="What's on your mind? Everything shared here is confidential."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-4 font-bold uppercase tracking-wider hover:opacity-90 transition rounded"
      >
        Send Message
      </button>
      <p className="text-xs text-slate-400 text-center">
        100% confidential. We never share your information.
      </p>
    </form>
  )
}
