import React, { useRef, useState } from 'react';

// Added categories to your existing data structure
const productDatabase = [
  { id: 1, category: 'Gangsta', title: 'Elite Utility Gangsta', tag: 'Best Seller', price: '₹1,899.00', colors: 'Olive Green, Onyx Black', material: '100% Interlock Cotton Premium Stretch', desc: 'Tapered athletic ankle lower design built with structural flat-lock stitching patterns.', img: 'gajni/gaj-1.jpg' },
  { id: 2, category: 'Lover', title: 'Urban Failures', tag: 'Tactical Drop', price: '₹2,299.00', colors: 'Charcoal Grey, Matte Black', material: 'Heavyweight Poly-Twill Stretch Performance Weave', desc: 'Bold geometric cargo configurations with heavy drop side layouts.', img: 'gajni/gaj-2.jpg' },
  { id: 3, category: 'Lover', title: 'Premium Sleep Aashiq', tag: 'Cloud Comfort', price: '₹1,499.00', colors: 'Heather Gray, Midnight Blue', material: 'Ultra-Soft Micro-Modal Luxury Knit Elastic', desc: 'Zero-pressure micro-modal knitting configurations built explicitly to maximize overnight airflow.', img: 'gajni/gaj-3.jpg' }
];

// Extract unique categories for the filter tabs dynamically
const categories = ['All', ...new Set(productDatabase.map(p => p.category))];

export default function Collection({ activeModalProduct, setActiveModalProduct, onInquireClick }) {
  const trackRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter products based on selected tab
  const filteredProducts = activeCategory === 'All' 
    ? productDatabase 
    : productDatabase.filter(p => p.category === activeCategory);

  // Calculates exact width to scroll by 1 full card grouping at a time
  const slidePrev = () => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.firstElementChild?.clientWidth + 24 || 300;
      trackRef.current.scrollBy({ left: -cardWidth * 2, behavior: 'smooth' }); // Scrolls 2 cards back
    }
  };

  const slideNext = () => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.firstElementChild?.clientWidth + 24 || 300;
      trackRef.current.scrollBy({ left: cardWidth * 2, behavior: 'smooth' }); // Scrolls 2 cards forward
    }
  };

  return (
    <section id="collection" className="py-24 bg-navy-950 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* HEADER & CONTROLS */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Premium Custom Fit</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-white uppercase">The Collection</h2>
          </div>
          
          {/* Arrow Navigation */}
          <div className="flex gap-3 z-10 hidden md:flex">
            <button onClick={slidePrev} className="p-3 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl text-slate-300 hover:text-white transition-all shadow-md active:scale-95">
              &larr;
            </button>
            <button onClick={slideNext} className="p-3 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl text-slate-300 hover:text-white transition-all shadow-md active:scale-95">
              &rarr;
            </button>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex overflow-x-auto gap-3 pb-4 mb-6 no-scrollbar snap-x">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                // Reset scroll position when changing categories
                if(trackRef.current) trackRef.current.scrollLeft = 0; 
              }}
              className={`snap-start whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-emerald-500 text-navy-950 shadow-lg shadow-emerald-500/20' 
                  : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* THE PEEKING CAROUSEL TRACK 
        To show 4 items on desktop: `lg:w-[calc(25%-18px)]` (Account for gap-6 which is 24px).
        To show "peeking" on mobile: `w-[80vw] sm:w-[45vw]`. This guarantees the next card is partially visible!
      */}
      <div className="w-full relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-8 pt-2"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {filteredProducts.map((p) => (
            <div 
              key={p.id} 
              /* Desktop: Flex exactly 4 items (25% minus gap). 
                Mobile: w-[75vw] guarantees 1 full card + a 25% "peek" of the next card!
              */
              className="w-[80vw] sm:w-[45vw] lg:w-[calc(25%-18px)] flex-none bg-slate-900 rounded-2xl p-4 border border-slate-800 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 snap-start"
            >
              <div 
                onClick={() => setActiveModalProduct(p)}
                className="relative overflow-hidden rounded-xl bg-slate-950 h-[260px] sm:h-[320px] w-full cursor-pointer"
              >
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover object-top opacity-85 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-navy-950/85 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4">
                  <button className="px-5 py-3 bg-forest-600 hover:bg-forest-500 text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-lg transform translate-y-2 group-hover:translate-y-0 duration-300 pointer-events-none">
                    View Details
                  </button>
                </div>
              </div>
              
              <div className="pt-5 px-1 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-emerald-400 bg-forest-950 border border-forest-800/80 px-2.5 py-1 rounded">{p.tag}</span>
                  <span className="text-xs text-slate-500 font-bold uppercase">{p.category}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1 uppercase tracking-wide leading-tight line-clamp-2">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300 font-bold">{p.price}</p>
              </div>
            </div>
          ))}

          {/* Empty State Fallback if a category has no products */}
          {filteredProducts.length === 0 && (
             <div className="w-full py-20 text-center text-slate-500 font-bold uppercase tracking-widest">
               No products available in this category yet.
             </div>
          )}
        </div>
      </div>

      {/* SPECIFICATION OVERLAY MODAL */}
      {activeModalProduct && (
        <div 
          onClick={() => setActiveModalProduct(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all cursor-pointer"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 border border-slate-800 max-w-lg w-full rounded-3xl p-6 md:p-8 relative shadow-2xl cursor-default"
          >
            <button onClick={() => setActiveModalProduct(null)} className="absolute top-6 right-6 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition-colors">
              ✕
            </button>
            <div className="flex gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 bg-forest-950 border border-forest-800 px-2.5 py-1 rounded">
                {activeModalProduct.tag}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded">
                {activeModalProduct.category}
              </span>
            </div>
            
            <h3 className="text-2xl font-black text-white uppercase mt-4 leading-tight">{activeModalProduct.title}</h3>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">{activeModalProduct.desc}</p>
            
            <div className="mt-6 border-t border-slate-800 pt-5 space-y-3">
              <div className="flex justify-between text-sm"><span className="text-slate-500 font-medium">Estimated Pricing:</span><span className="text-white font-bold tracking-wide">{activeModalProduct.price}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500 font-medium">Color Options:</span><span className="text-slate-300 text-right w-1/2">{activeModalProduct.colors}</span></div>
              <div className="flex justify-between text-sm"><span className="text-slate-500 font-medium">Fabric Formulation:</span><span className="text-slate-300 font-medium text-right w-1/2">{activeModalProduct.material}</span></div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              
              {/* 1. WHATSAPP CTA: */}
              <button
                onClick={() => {
                  const phoneNumber = "919811415624";
                  const message = `Hey Fit Era! I'm highly interested in the *${activeModalProduct.title}*.\n\n*Category:* ${activeModalProduct.category}\n*Colors:* ${activeModalProduct.colors}\n\nCan we discuss sizing and a custom fit?`;
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-forest-600 hover:bg-forest-500 text-white font-bold rounded-xl uppercase tracking-wider text-xs transition-all shadow-lg shadow-forest-600/20 active:scale-95"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </button>

              {/* 2. EMAIL CTA: Transparent Border Style */}
              <button
                onClick={() => {
                  setActiveModalProduct(null);
                  onInquireClick(activeModalProduct.title, activeModalProduct.colors);
                }}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-transparent border border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white font-bold rounded-xl uppercase tracking-wider text-xs transition-all active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Inquire about Variant
              </button>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}