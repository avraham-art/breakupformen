export default function HeroSection() {
  return (
    <header className="hero-gradient relative py-24 lg:py-32 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl lg:text-7xl mb-6 leading-tight tracking-tight uppercase">
            You don&apos;t have to navigate <br />
            <span className="text-accent">this alone.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-300 mb-10 leading-relaxed font-light">
            Practical guidance and emotional fortitude for men starting over. We help you rebuild your
            life with clarity, strength, and purpose.
          </p>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 w-full max-w-xl">
            <h3 className="text-xl font-semibold mb-4 text-accent">Free Guide: The First 30 Days</h3>
            <p className="text-slate-200 mb-6">
              A tactical roadmap for stabilizing your emotions and protecting your future during a
              separation or breakup.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 bg-white text-slate-900 rounded focus:ring-2 focus:ring-accent outline-none"
              />
              <button
                type="submit"
                className="bg-accent text-primary px-6 py-3 font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                Send Me The Guide
              </button>
            </form>
            <p className="text-xs mt-4 text-slate-400">100% Private. We respect your confidentiality.</p>
          </div>
        </div>
      </div>
    </header>
  )
}
