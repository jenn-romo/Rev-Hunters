import React, { useEffect } from 'react';

const FBAdsLanding: React.FC = () => {
  useEffect(() => {
    // LeadConnector script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    // Set page title
    document.title = "Auto Body Shop Owners ONLY | Revenue Hunters";

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
      {/* Header section */}
      <header className="bg-primary-navy text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-accent-cyan font-heading font-black uppercase tracking-wider text-4xl md:text-5xl lg:text-6xl mb-6 drop-shadow-sm">
            Auto Body Shop Owners ONLY
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed max-w-3xl mx-auto mb-6 text-white/90">
            We get body shops 10 dent and hail customers in 3 weeks or your money back
          </h2>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16 flex flex-col items-center">
        {/* Video Embed */}
        <div className="w-full max-w-4xl bg-white p-2 md:p-4 rounded-xl shadow-xl mb-12">
          <div style={{ position: 'relative', paddingBottom: '55.90062111801242%', height: 0 }}>
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
        <button 
          onClick={scrollToBooking}
          className="bg-accent-cyan text-primary-navy hover:bg-white hover:text-primary-navy font-bold text-xl py-5 px-16 rounded-full transition-all shadow-lg transform hover:-translate-y-1 mb-24"
        >
          BOOK MY CALL
        </button>

        {/* Social Proof / Quotes */}
        <div className="w-full mb-24">
          <h2 className="text-center font-heading font-black text-4xl md:text-5xl mb-16">
            We Guarantee It Because We've Done It
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <img src="https://i.ibb.co/4wmFMPMc/IMG-1640.avif" alt="Customer results 1" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <img src="https://i.ibb.co/SDs9BM3w/IMG-1641.avif" alt="Customer results 2" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div id="booking" className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-4 md:p-8">
          <h3 className="text-center font-heading font-black text-3xl mb-8">Schedule Your Call</h3>
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/XR2E2KYgL9upoFPFLsR3" 
            allow="payment" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '800px' }} 
            scrolling="no" 
            id="XR2E2KYgL9upoFPFLsR3_1789147269645"
            title="Book your call"
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default FBAdsLanding;
