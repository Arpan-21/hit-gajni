import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 border-y border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest text-red-500 uppercase">The 15-Minute Flashback</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-white uppercase">Engineered to Never Forget</h2>
            <p className="mt-6 text-slate-400 leading-relaxed">
              We don't do regular, fading thoughts. Normal human brains easily recall ordinary memories, but when a tragic past strikes, your timeline fractures into exactly 900 seconds before resetting into total darkness.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              <strong>Sanjay Singhania</strong> battles this mental void by locking clues in permanent ink and camera film. Our operation matches his obsessive determination-turning fleeting traces into physical, inescapable proof.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-navy-900/60 p-8 rounded-2xl border border-slate-800">
              <span className="text-xs font-bold text-red-500 tracking-wider">01 / INK</span>
              <h3 className="text-lg font-bold text-white mt-2">Permanent Tattoos</h3>
              <p className="mt-2 text-sm text-slate-400 leading-normal">Carve critical targets, phone numbers, and the ultimate mission right onto your chest so it survives the short-term memory reset.</p>
            </div>
            <div className="bg-navy-900/60 p-8 rounded-2xl border border-slate-800 sm:mt-6">
              <span className="text-xs font-bold text-red-500 tracking-wider">02 / FOCUS</span>
              <h3 className="text-lg font-bold text-white mt-2">Polaroid Archive</h3>
              <p className="mt-2 text-sm text-slate-400 leading-normal">Need to instantly identify an ally, a vehicle, or a crime scene? Snap a visual receipt and write down vital facts before the 15 minutes vanish.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}