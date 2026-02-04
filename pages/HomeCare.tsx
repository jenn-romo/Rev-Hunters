import React, { useEffect } from 'react';

const HomeCare: React.FC = () => {
  useEffect(() => {
    // Load Typeform script dynamically
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col w-full bg-primary text-secondary-gray font-body">
      <section className="py-20 px-4 max-w-5xl mx-auto w-full text-center">
        <span className="text-primary-blue font-heading font-bold tracking-widest text-sm mb-4 block uppercase">
          Demo & Inquiry
        </span>
        <h1 className="font-heading font-black text-4xl md:text-6xl text-white mb-8">
          HOME CARE <span className="text-primary-blue">AUTOMATION</span>
        </h1>
        <p className="text-xl text-secondary-gray max-w-3xl mx-auto mb-12">
          Would you like to stop losing high-value home care clients simply because no one answered the phone?
        </p>

        {/* Video Container - 16:9 Aspect Ratio */}
        <div className="relative w-full aspect-video bg-black border border-white/10 shadow-2xl mb-16 rounded-lg overflow-hidden group">
          {/* PLACEHOLDER VIDEO - PLEASE UPDATE THE SRC BELOW WITH YOUR VIDEO ID */}
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE" 
            title="Revenue Hunters Demo" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-lg"></div>
        </div>

        {/* Typeform Container */}
        <div className="w-full max-w-3xl mx-auto bg-white/5 p-1 md:p-8 rounded-lg border border-white/10">
            <h2 className="font-heading font-bold text-2xl text-white mb-8 pt-4">INTERESTED? LET'S TALK.</h2>
            <div data-tf-live="01KGN5K3WY3XJM2F4XEK623ZZ2" className="w-full h-[600px]"></div>
        </div>
      </section>
    </div>
  );
};

export default HomeCare;