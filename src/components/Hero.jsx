import React from 'react';

export default function Hero() {
  
  // ROBUST SCROLL: Calculates exact pixel depth and forces the browser window to move.
  const scrollToSection = (e, sectionId) => {
    e.preventDefault(); // Stops the URL hash from aggressively jumping the page
    const target = document.getElementById(sectionId);
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-48 md:pb-28 min-h-screen flex flex-col justify-between overflow-hidden bg-navy-950">

      {/* BACKGROUND LAYER (z-0) */}
      <div className="absolute inset-y-0 right-0 z-0 pointer-events-none w-full lg:w-[110%] xl:w-[80%] transition-transform duration-500">
        <img
          src="img/model_fitness.webp"
          alt="Fit Era Performance Background"
          className="w-full h-full object-cover object-[60%_top] lg:object-contain lg:object-right opacity-40 lg:opacity-100"
        />
        <div className="absolute inset-0 bg-navy-950/60 lg:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-transparent hidden lg:block" />
      </div>

      {/* FOREGROUND INTERACTIVE CONTENT */}
      {/* FIX 1: Boosted to `z-20`. This places the text and buttons physically ABOVE the background.
        Removed all pointer-events hacks because the layer stack is now absolute.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full my-auto">
        <div className="max-w-3xl text-center lg:text-left">

          <span className="inline-flex items-center text-xs font-bold tracking-widest text-emerald-400 uppercase bg-forest-950/80 border border-forest-700/50 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span> Now Serving Pan-India
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
            Move Without<br />Restrictions.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
            Premium custom-knit lowers engineered to bridge the divide between high-intensity physical agility and deep down-time muscle recovery.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            
            {/* FIX 2: Standard anchor links paired with the math-based scroll function.
              This guarantees the touch target is registered by mobile operating systems.
            */}
            <a
              href="#collection"
              onClick={(e) => scrollToSection(e, 'collection')}
              className="px-8 py-4 rounded-xl font-bold bg-forest-600 text-white hover:bg-forest-500 transform hover:-translate-y-0.5 transition-all shadow-lg shadow-forest-600/20 active:scale-95"
            >
              Explore Collection
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-8 py-4 rounded-xl font-bold border border-slate-700 text-slate-300 hover:bg-slate-900 transition-all active:scale-95"
            >
              Request Custom Fit
            </a>
          </div>

        </div>
      </div>

      {/* BRAND PROMISE INTEGRATION GRID */}
      {/* Boosted to z-20 so these cards don't block clicks from above */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-800/80 pt-10">
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <span className="text-2xl">🇮🇳</span>
            <div className="text-left">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Pan-India Shipping</h4>
              <p className="text-xs text-slate-400 mt-0.5">Tracked door-to-door delivery across all pin codes.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <span className="text-2xl">🧵</span>
            <div className="text-left">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Bespoke Customization</h4>
              <p className="text-xs text-slate-400 mt-0.5">Tailored waist, length, and styling adjustments on demand.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <span className="text-2xl">💪</span>
            <div className="text-left">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Zero-Sag Stitching</h4>
              <p className="text-slate-400 mt-0.5 text-xs">Reinforced interlock loops built to never lose shape.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}