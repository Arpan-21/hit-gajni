import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-40 backdrop-blur-md bg-navy-950/80 border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl font-black tracking-widest text-white uppercase">
              Hit<span className="text-forest-400">.</span>Gajni
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" class="text-sm font-semibold tracking-wide text-slate-400 hover:text-white transition-colors duration-200">Home</a>
              <a href="#about" class="text-sm font-semibold tracking-wide text-slate-400 hover:text-white transition-colors duration-200">About</a>
              <a href="#collection" class="text-sm font-semibold tracking-wide text-slate-400 hover:text-white transition-colors duration-200">Collection</a>
              <a href="#contact" class="text-sm font-semibold tracking-wide text-slate-400 hover:text-white transition-colors duration-200">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} class="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-navy-900 border-b border-slate-800 px-2 pt-2 pb-4 space-y-1 sm:px-3">
          <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">About</a>
          <a href="#collection" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Collection</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Contact</a>
        </div>
      )}
    </nav>
  );
}