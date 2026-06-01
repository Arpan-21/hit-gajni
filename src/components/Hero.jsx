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
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
          alt="Sanjay Singhania Hunt For Revenge"
          className="w-full h-full object-cover object-[60%_top] lg:object-contain lg:object-right opacity-40 lg:opacity-100"
        />
        <div className="absolute inset-0 bg-navy-950/60 lg:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-transparent hidden lg:block" />
      </div>

      {/* FOREGROUND INTERACTIVE CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full my-auto">
        <div className="max-w-3xl text-center lg:text-left">

          <span className="inline-flex items-center text-xs font-bold tracking-widest text-red-500 uppercase bg-red-950/80 border border-red-700/50 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-red-600 mr-2 animate-pulse"></span> 15 Minutes Remaining Until Reset
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
            Revenge Without<br />Forgetting.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
            The clock is ticking. Trace down Ghajini Dharmatma before the short-term memory lapse erases the ultimate motive. Lock your clues and track the targets.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="px-8 py-4 rounded-xl font-bold bg-red-700 text-white hover:bg-red-600 transform hover:-translate-y-0.5 transition-all shadow-lg shadow-red-700/20 active:scale-95"
            >
              Analyze Clues
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-8 py-4 rounded-xl font-bold border border-slate-700 text-slate-300 hover:bg-slate-900 transition-all active:scale-95"
            >
              Log New Evidence
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}