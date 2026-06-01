import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 border-y border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest text-forest-400 uppercase">The Fit Era Paradigm</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-white uppercase">Engineered for Daily Utility</h2>
            <p className="mt-6 text-slate-400 leading-relaxed">
              We don't do standard loose loungewear. Generic items either give you rigid, heavy fabrics built strictly for gym sessions or bag out entirely at the knees after one casual evening of rest.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              <strong>Fit Era</strong> balances sharp tapered aesthetics with advanced thread memory. Our premium lowers maintain a crisp streetwear silhouette all day long without losing that cloud-like comfort feel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-navy-900/60 p-8 rounded-2xl border border-slate-800">
              <span className="text-xs font-bold text-forest-400 tracking-wider">01 / SHAPE</span>
              <h3 className="text-lg font-bold text-white mt-2">Zero-Sag Retention</h3>
              <p className="mt-2 text-sm text-slate-400 leading-normal">Premium cross-interlock loops prevent fabric sagging and bagging over extended wear cycles.</p>
            </div>
            <div className="bg-navy-900/60 p-8 rounded-2xl border border-slate-800 sm:mt-6">
              <span className="text-xs font-bold text-forest-400 tracking-wider">02 / CRAFT</span>
              <h3 className="text-lg font-bold text-white mt-2">Custom Fit Pipeline</h3>
              <p className="mt-2 text-sm text-slate-400 leading-normal">Need a specific ankle drop, tapered calf length, or elastic ratio adjustment? Drop your parameters in our inquiry portal below for custom cuts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}