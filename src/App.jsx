import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import Contact from './components/Contact';

function App() {
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [inquiryText, setInquiryText] = useState('');
  const contactFormRef = useRef(null);

  const handleInquiryRedirect = (productTitle, productColors) => {
    setActiveModalProduct(null);
    setInquiryText(`Hi Fit Era Team, I'm checking out the [ ${productTitle} ] and wanted to inquire about standard processing timelines and sizing variants for the color profile: ${productColors}. Let me know!`);
    
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
      // Small timeout to allow scrolling animation to catch up
      setTimeout(() => {
        const inputElement = document.getElementById('form-name');
        if (inputElement) inputElement.focus();
      }, 500);
    }
  };

  return (
    <div className="bg-navy-950 text-slate-100 font-sans antialiased selection:bg-forest-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collection 
          activeModalProduct={activeModalProduct}
          setActiveModalProduct={setActiveModalProduct}
          onInquireClick={handleInquiryRedirect}
        />
        <div ref={contactFormRef}>
          <Contact inquiryText={inquiryText} setInquiryText={setInquiryText} />
        </div>
      </main>
      <footer className="bg-navy-950 text-slate-600 py-8 text-center text-xs border-t border-slate-900">
        <p class="tracking-widest uppercase">&copy; {new Date().getFullYear()} Fit Era. Engineered for Sporty Comfort.</p>
      </footer>
    </div>
  );
}

export default App;