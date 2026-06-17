import React, { useEffect } from 'react';
import JotForm from '../components/JotForm';

const PM: React.FC = () => {
  useEffect(() => {
    // Load Vimeo script dynamically
    const vimeoScript = document.createElement('script');
    vimeoScript.src = "https://player.vimeo.com/api/player.js";
    vimeoScript.async = true;
    document.body.appendChild(vimeoScript);

    return () => {
      // Cleanup
      if (document.body.contains(vimeoScript)) {
        document.body.removeChild(vimeoScript);
      }
    };
  }, []);

  return (
    <div className="flex flex-col w-full bg-primary text-secondary-gray font-body">
      <section className="py-20 px-4 max-w-5xl mx-auto w-full text-center">
        <span className="text-accent-cyan font-heading font-bold tracking-widest text-sm mb-4 block uppercase">
          Demo & Inquiry
        </span>
        <h1 className="font-heading font-black text-4xl md:text-6xl text-primary-navy mb-8">
          PROPERTY MANAGEMENT <span className="text-accent-cyan">AUTOMATION</span>
        </h1>
        <p className="text-xl text-secondary-gray max-w-3xl mx-auto mb-12">
          Would you like to capture more of your highest-value calls, leasing inquiries, maintenance issues, and emergencies, even when your office is closed?
        </p>

        {/* Video Container */}
        <div className="w-full max-w-4xl mx-auto mb-16 shadow-2xl rounded-lg overflow-hidden border border-primary-navy/10 bg-secondary-light">
          <div style={{ padding: '75% 0 0 0', position: 'relative' }}>
            <iframe 
              src="https://player.vimeo.com/video/1165448997?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="prop"
            ></iframe>
          </div>
        </div>

        {/* JotForm Container */}
        <div className="w-full max-w-3xl mx-auto bg-primary-navy/5 p-1 md:p-8 rounded-lg border border-primary-navy/10">
            <h2 className="font-heading font-bold text-2xl text-primary-navy mb-8 pt-4">INTERESTED? LET'S TALK.</h2>
            <JotForm />
        </div>
      </section>
    </div>
  );
};

export default PM;