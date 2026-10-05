import React, { useEffect } from 'react';

const FBAdsLanding: React.FC = () => {
  useEffect(() => {
    // LeadConnector script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    // Set page title and meta preview tags
    document.title = "Auto Body Shop Owners ONLY | We Guarantee Results | Revenue Hunters";

    const setMeta = (property: string, content: string, isName = false) => {
      const attr = isName ? 'name' : 'property';
      let el = document.querySelector(`meta[${attr}="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const title = "Auto Body Shop Owners ONLY | We Guarantee Results";
    const desc = "We get body shops 10 dent and hail customers in 3 weeks or your money back. Performance-based revenue growth for collision & PDR shops.";
    const imgUrl = window.location.origin + "/og-image.jpg";

    setMeta('description', desc, true);
    setMeta('og:title', title);
    setMeta('og:description', desc);
    setMeta('og:image', imgUrl);
    setMeta('og:url', window.location.href);
    setMeta('twitter:title', title, true);
    setMeta('twitter:description', desc, true);
    setMeta('twitter:image', imgUrl, true);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-secondary-light font-sans text-primary-navy">
      {/* Header section (Blue Area - formatted to fit cleanly above the fold) */}
      <header className="bg-primary-navy text-white min-h-[100dvh] flex flex-col justify-center items-center py-4 px-4 text-center">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center my-auto">
          <h1 className="text-accent-cyan font-heading font-black uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 drop-shadow-md leading-tight">
            Auto Body Shop Owners ONLY
          </h1>
          <div className="text-yellow-400 font-heading font-black uppercase tracking-wider text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2.5 drop-shadow-lg leading-tight">
            We Guarantee Results
          </div>
          <p className="text-accent-cyan font-extrabold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-5 tracking-wide flex items-center justify-center gap-2">
            Watch how we do it 👇
          </p>

          {/* Video Embed in the Blue Area - sized to guarantee above the fold visibility */}
          <div className="w-full max-w-lg md:max-w-xl lg:max-w-2xl mx-auto bg-white/10 p-1.5 sm:p-2 rounded-xl shadow-2xl backdrop-blur-sm border border-white/10 mb-4">
            <div className="rounded-lg overflow-hidden shadow-inner" style={{ position: 'relative', paddingBottom: '55.90062111801242%', height: 0 }}>
              <iframe 
                src="https://www.loom.com/embed/f25241b249484c11934a6fa18ff16692" 
                frameBorder="0" 
                allowFullScreen 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Presentation Video"
              ></iframe>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <button 
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center bg-accent-cyan text-primary-navy hover:bg-white hover:text-primary-navy font-black text-base sm:text-lg md:text-xl py-3 px-8 sm:py-3.5 sm:px-12 rounded-full transition-all shadow-xl transform hover:-translate-y-0.5 cursor-pointer tracking-wide uppercase"
            >
              BOOK MY DISCOVERY CALL
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16 flex flex-col items-center">
        {/* Customer References and Testimonials Section */}
        <div className="w-full mb-20">
          <h2 className="text-center font-heading font-black text-3xl md:text-4xl lg:text-5xl mb-12 text-primary-navy">
            Customer References and testimonials
          </h2>

          {/* Results Images at the top */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img 
                src="https://i.ibb.co/4wmFMPMc/IMG-1640.avif" 
                alt="Customer results 1" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img 
                src="https://i.ibb.co/SDs9BM3w/IMG-1641.avif" 
                alt="Customer results 2" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img 
                src="https://i.ibb.co/JFKQ8bQD/3.png" 
                alt="Customer results 3 - Messages" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img 
                src="https://i.ibb.co/sdX1mCM2/Screenshot-2026-10-05-at-12-50-21-PM.jpg" 
                alt="Customer results 4 - Pipeline Screenshot" 
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>

          {/* Second Video Embed under results images */}
          <div className="w-full max-w-4xl mx-auto bg-white p-2 md:p-4 rounded-2xl shadow-xl border border-primary-navy/5 mb-10">
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                src="https://www.loom.com/embed/1f9a36c0bd78407eb8df20ee47e5436f" 
                frameBorder="0" 
                allowFullScreen 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Customer Results Case Study"
              ></iframe>
            </div>
          </div>

          {/* Discovery Call Button between Results & Booking */}
          <div className="text-center mt-8">
            <button 
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center bg-accent-cyan text-primary-navy hover:bg-primary-navy hover:text-white font-black text-xl py-5 px-16 rounded-full transition-all shadow-xl transform hover:-translate-y-1 cursor-pointer tracking-wide uppercase"
            >
              BOOK MY DISCOVERY CALL
            </button>
          </div>
        </div>

        {/* Booking Section */}
        <div id="booking" className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-4 md:p-8 mb-20 scroll-mt-8 border border-primary-navy/5">
          <h3 className="text-center font-heading font-black text-3xl mb-8 text-primary-navy">Schedule Your Call</h3>
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/8EulUiJxPkcw5btfj1sq" 
            allow="payment" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '800px' }} 
            scrolling="no" 
            id="8EulUiJxPkcw5btfj1sq_1791220057682"
            title="Book your call"
          ></iframe>
        </div>

        {/* Discovery Call Button between Booking & More Testimonials */}
        <div className="text-center mb-20">
          <button 
            onClick={scrollToBooking}
            className="inline-flex items-center justify-center bg-accent-cyan text-primary-navy hover:bg-primary-navy hover:text-white font-black text-xl py-5 px-16 rounded-full transition-all shadow-xl transform hover:-translate-y-1 cursor-pointer tracking-wide uppercase"
          >
            BOOK MY DISCOVERY CALL
          </button>
        </div>

        {/* More Testimonials Section (Quotes below booking) */}
        <div className="w-full mb-16">
          <h2 className="text-center font-heading font-black text-3xl md:text-4xl mb-12 text-primary-navy">
            More testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-primary-navy/5 flex flex-col justify-between">
              <p className="text-lg italic mb-6">"I'm impressed. A lot of other companies, you pay them and you still get some leads — but the communication falls off. I'm impressed with what I've seen so far, and I'm excited about our partnership."</p>
              <div className="font-bold text-accent-cyan">— Customer from TX</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-primary-navy/5 flex flex-col justify-between">
              <p className="text-lg italic mb-6">"The way you guys are different is I view you guys as a partner. Everybody else comes to me wanting 10 grand up front. A lot of us have been burned on stuff like that before... We're writing $25,000 estimates on some of these newer cars."</p>
              <div className="font-bold text-accent-cyan">— Customer from OK</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-primary-navy/5 flex flex-col justify-between">
              <p className="text-lg italic mb-6">"I love the weekly check-in... I've got the lead notification going ding, ding, ding — and I just jump right on and reach out."</p>
              <div className="font-bold text-accent-cyan">— Customer from MO</div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-primary-navy/5 flex flex-col justify-between">
              <p className="text-lg italic mb-6">"You guys are already in the software, and that makes our job way easier for us...You bring them in, and we close the deal. Basically."</p>
              <div className="font-bold text-accent-cyan">— Customer from TX</div>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={scrollToBooking}
              className="inline-flex items-center justify-center bg-accent-cyan text-primary-navy hover:bg-primary-navy hover:text-white font-black text-xl py-5 px-16 rounded-full transition-all shadow-xl transform hover:-translate-y-1 cursor-pointer tracking-wide uppercase"
            >
              BOOK MY DISCOVERY CALL
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FBAdsLanding;
