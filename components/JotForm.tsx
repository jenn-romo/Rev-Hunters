import React, { useEffect } from 'react';

const JotForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.jotformEmbedHandler) {
        // @ts-ignore
        window.jotformEmbedHandler("iframe[id='JotFormIFrame-260544129245051']", "https://form.jotform.com/");
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <iframe
      id="JotFormIFrame-260544129245051"
      title="Contact Information & Consent Form"
      onLoad={() => window.scrollTo(0, 0)}
      allowFullScreen={true}
      allow="geolocation; microphone; camera; fullscreen; payment"
      src="https://form.jotform.com/260544129245051"
      frameBorder="0"
      style={{
        minWidth: '100%',
        maxWidth: '100%',
        height: '539px',
        border: 'none',
      }}
      scrolling="no"
    />
  );
};

export default JotForm;
