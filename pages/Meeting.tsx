import React, { useEffect } from 'react';

const Meeting: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col w-full py-20 px-4 min-h-[80vh]">
      <div className="max-w-4xl mx-auto w-full">
        <div className="w-full bg-white rounded-xl shadow-lg border border-primary-navy/5 overflow-hidden">
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/XR2E2KYgL9upoFPFLsR3" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '700px' }} 
            scrolling="no" 
            id="XR2E2KYgL9upoFPFLsR3_1783383195123"
            title="Schedule a strategy call"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
