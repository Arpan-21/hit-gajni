import React, { useState } from 'react';
const phoneNumber = "9999999999";

export default function Contact({ inquiryText, setInquiryText }) {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // TODO: Link your actual Formspree hash here
    const response = await fetch('https://formspree.io/f/mykvanwq', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();
      setInquiryText('');
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Ghajini Themed Contact Form */}
          <div className="lg:col-span-7 bg-navy-950 p-8 md:p-10 rounded-3xl border border-slate-800/80 shadow-2xl">
            {status === 'SUCCESS' ? (
              <div className="text-center py-12">
                <span className="inline-flex p-3 rounded-full bg-red-950 border border-red-800 text-red-500 font-bold mb-4">📸</span>
                <h3 className="text-xl font-bold text-white uppercase tracking-wide">Memory Tattooed Successfully</h3>
                <p className="text-sm text-slate-400 mt-1">This clue has been captured in a Polaroid photo. Sanjay Singhania will read this before his 15 minutes are up.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center pb-4 border-b border-slate-800">
                  <h3 className="text-lg font-bold uppercase tracking-widest text-red-500">🚨 Case File: Hunt for Ghajini</h3>
                  <p className="text-xs text-slate-400 mt-1">Warning: Information will expire from brain cells in 15 minutes. Record it instantly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Informer / Ally Name</label>
                    <input id="form-name" type="text" name="name" placeholder="e.g., Sunita (Medical Student)" required className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 bg-slate-900 text-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Secure Drop Email</label>
                    <input type="email" name="email" placeholder="kalpana_forever@domain.com" required className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 bg-slate-900 text-white transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Write down the lead (Tattoo logs, Ghajini's hideout locations, weapon details...)
                  </label>
                  <textarea
                    id="form-msg"
                    name="message"
                    rows="5"
                    required
                    value={inquiryText}
                    onChange={(e) => setInquiryText(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-500 bg-slate-900 text-white resize-none transition-all"
                    placeholder="Sanjay, remember! The iron rod is in your hand... Ghajini killed Kalpana... write down his car number here..."
                  />
                </div>

                <button type="submit" className="w-full py-4 bg-red-700 hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-md uppercase tracking-widest text-xs">
                  Tattoo this onto memory (Submit Clue)
                </button>
                {status === 'ERROR' && <p className="text-red-500 text-center text-xs font-semibold">Memory Lapse! The system forgot the entry. Please try writing it again.</p>}
              </form>
            )}
          </div>

          {/* Contact Info (With Updated Header/Subheader and Raw Contact Details Preserved) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-red-500 uppercase">Short-Term Memory Storage Hub</span>
              <h2 className="mt-3 text-4xl font-black text-white uppercase tracking-tight">Remember Kalpana</h2>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">Do you have vital evidence against Ghajini Dharmatma? Leave your trace before the 15-minute timer resets the mind. Reach out directly below.</p>
            </div>

            <div className="space-y-6 border-t border-slate-800 pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-950 border border-slate-800 rounded-xl text-red-500">
                  📍
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Manufactured By:</h4>
                  <p className="text-slate-200 text-sm font-semibold mt-1">Aamir Creations</p>
                  <p className="text-slate-200 text-sm mt-1">GALI NO. 420, Tapri CHowk, Near Model School, Panipat, Haryana - 132001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-950 border border-slate-800 rounded-xl text-red-500">
                  ✉️
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email us</h4>
                  <p className="text-slate-200 text-sm font-semibold mt-1 hover:text-red-400"><a href="mailto:david@yahoo.com">david@yahoo.com</a></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-950 border border-slate-800 rounded-xl text-red-500">
                  📞
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Contact Now!</h4>
                  <p className="text-slate-200 text-sm font-semibold mt-1">
                    <a href={`tel:${phoneNumber}`}> +91-99999-99999 </a> (Mon - Sat, 10 AM - 8 PM) </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}