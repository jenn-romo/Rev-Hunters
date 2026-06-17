import React, { useEffect } from 'react';
import { Check, X, Mic, FileText, Calendar, TrendingUp } from 'lucide-react';

const FounderAuthority: React.FC = () => {
  useEffect(() => {
    // Load Vimeo script dynamically
    const vimeoScript = document.createElement('script');
    vimeoScript.src = "https://player.vimeo.com/api/player.js";
    vimeoScript.async = true;
    document.body.appendChild(vimeoScript);

    // Load Calendly script
    const calendlyScript = document.createElement('script');
    calendlyScript.src = "https://assets.calendly.com/assets/external/widget.js";
    calendlyScript.async = true;
    document.body.appendChild(calendlyScript);

    return () => {
      // Cleanup
      if (document.body.contains(vimeoScript)) {
        document.body.removeChild(vimeoScript);
      }
      if (document.body.contains(calendlyScript)) {
        document.body.removeChild(calendlyScript);
      }
    };
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full bg-primary text-secondary-gray font-body">
      
      {/* HERO */}
      <section className="relative py-24 md:py-32 px-4 max-w-6xl mx-auto w-full text-center">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-block border border-primary-navy/20 bg-primary-navy/5 text-primary-navy/80 px-6 py-2 rounded-full font-medium text-sm md:text-base mb-8 tracking-widest uppercase">
          Founder Authority Engine
        </div>
        <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-none text-primary-navy mb-8">
          GET NOTICED. <br/>
          <span className="text-accent-cyan">WIN MORE DEALS.</span>
        </h1>
        <p className="text-xl md:text-2xl text-secondary-gray max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
          We help founders show up online so customers, investors, and great hires come to them.
        </p>
        
        {/* Video Container */}
        <div className="w-full max-w-4xl mx-auto mb-12 shadow-2xl rounded-lg overflow-hidden border border-primary-navy/10 bg-secondary-light">
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe 
              src="https://player.vimeo.com/video/1169954297?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="founderauthority"
            ></iframe>
          </div>
        </div>

        {/* Calendly Widget */}
        <div id="booking-section" className="w-full max-w-4xl mx-auto mb-12">
          <div className="calendly-inline-widget" data-url="https://calendly.com/jenn-revenue-hunters/20min" style={{ minWidth: '320px', height: '1050px' }}></div>
        </div>

        <button 
          onClick={scrollToBooking}
          className="bg-white text-white hover:bg-accent-cyan hover:text-primary-navy font-heading font-bold text-lg md:text-xl py-6 px-12 rounded-none transition-all inline-block shadow-2xl"
        >
          DEPLOY THE ENGINE
        </button>
      </section>

      {/* THE PROBLEM: NO ONE KNOWS YOU */}
      <section className="py-24 bg-secondary-light border-y border-primary-navy/10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-navy mb-16 text-center">
            THE PROBLEM: NO ONE KNOWS YOU
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-secondary-gray leading-relaxed">
                You built something great. But if people can't find you online, your company misses out.
              </p>
              <p className="text-xl text-primary-navy font-bold leading-relaxed">
                While you're busy running the business, other founders are posting online - and getting the investors, customers, and talent you deserve.
              </p>
            </div>
            <div className="bg-primary-navy/5 p-8 border border-primary-navy/10 rounded-lg">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <X className="text-accent-cyan mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <span className="text-lg text-primary-navy">Investors don't know you exist</span>
                </li>
                <li className="flex items-start">
                  <X className="text-accent-cyan mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <span className="text-lg text-primary-navy">No one's reaching out to partner with you</span>
                </li>
                <li className="flex items-start">
                  <X className="text-accent-cyan mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <span className="text-lg text-primary-navy">Top talent picks founders they've heard of</span>
                </li>
                <li className="flex items-start">
                  <X className="text-accent-cyan mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <span className="text-lg text-primary-navy">Sales take longer because buyers don't trust you yet</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS: SIMPLE AS 1-2-3 */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent-cyan font-bold tracking-widest uppercase mb-4 block">HOW IT WORKS</span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-primary-navy">
            SIMPLE AS 1-2-3
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="group p-8 border border-primary-navy/10 bg-primary-navy/[0.02] hover:bg-primary-navy/[0.05] transition-all duration-300">
            <div className="w-16 h-16 bg-accent-cyan/10 flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
              <Mic className="text-accent-cyan h-8 w-8" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary-navy mb-4">1. RECORD</h3>
            <p className="text-secondary-gray text-lg leading-relaxed">
              Talk into your phone for 60 seconds. Share a thought, a lesson, anything on your mind. That's it.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group p-8 border border-primary-navy/10 bg-primary-navy/[0.02] hover:bg-primary-navy/[0.05] transition-all duration-300">
            <div className="w-16 h-16 bg-accent-cyan/10 flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
              <FileText className="text-accent-cyan h-8 w-8" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary-navy mb-4">2. WE WRITE IT</h3>
            <p className="text-secondary-gray text-lg leading-relaxed">
              We turn your voice memo into a polished LinkedIn post. It sounds like you - just cleaner.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group p-8 border border-primary-navy/10 bg-primary-navy/[0.02] hover:bg-primary-navy/[0.05] transition-all duration-300">
            <div className="w-16 h-16 bg-accent-cyan/10 flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
              <Calendar className="text-accent-cyan h-8 w-8" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary-navy mb-4">3. WE POST IT</h3>
            <p className="text-secondary-gray text-lg leading-relaxed">
              We handle the schedule. Your LinkedIn stays active every day while you run your business.
            </p>
          </div>
        </div>
      </section>

      {/* ELITE UPGRADE */}
      <section className="py-24 bg-white text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="inline-block bg-secondary-light text-primary-navy px-4 py-1 text-sm font-bold uppercase tracking-widest mb-6">
                ELITE UPGRADE
              </div>
              <h2 className="font-heading font-black text-4xl md:text-5xl mb-8">
                WE ALSO DO THE NETWORKING FOR YOU
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed font-medium">
                Posting gets you seen. Talking to people gets you deals.
              </p>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Our Elite plan adds a real person who comments, connects, and starts conversations with investors, partners, and buyers - on your behalf.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center font-bold text-lg">
                  <TrendingUp className="mr-4 h-6 w-6" />
                  We comment on posts from your target accounts
                </li>
                <li className="flex items-center font-bold text-lg">
                  <TrendingUp className="mr-4 h-6 w-6" />
                  We manage new connection requests
                </li>
                <li className="flex items-center font-bold text-lg">
                  <TrendingUp className="mr-4 h-6 w-6" />
                  We start real conversations that turn into DMs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="offer" className="py-24 max-w-5xl mx-auto px-4">
        <h2 className="text-center font-heading font-black text-4xl text-primary-navy mb-16">PLANS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* STANDARD */}
          <div className="bg-secondary-light border border-primary-navy/10 p-10 flex flex-col hover:border-primary-navy/30 transition-all">
            <h3 className="font-heading font-bold text-2xl text-primary-navy mb-2">FOUNDER AUTHORITY ENGINE</h3>
            <p className="text-secondary-gray text-sm mb-8 h-12">Get noticed.</p>
            <div className="mb-8 pb-8 border-b border-primary-navy/10">
              <span className="text-5xl font-heading font-bold text-primary-navy">$395</span>
              <span className="text-secondary-gray">/mo</span>
            </div>
            <ul className="space-y-5 mb-12 flex-grow">
              <li className="flex items-start text-lg text-secondary-gray"><Check className="h-5 w-5 text-primary-navy mr-3 mt-1"/> Send us 60-sec voice memos</li>
              <li className="flex items-start text-lg text-secondary-gray"><Check className="h-5 w-5 text-primary-navy mr-3 mt-1"/> 20 posts per month</li>
              <li className="flex items-start text-lg text-secondary-gray"><Check className="h-5 w-5 text-primary-navy mr-3 mt-1"/> Content calendar</li>
              <li className="flex items-start text-lg text-secondary-gray"><Check className="h-5 w-5 text-primary-navy mr-3 mt-1"/> Profile cleanup</li>
              <li className="flex items-start text-lg text-secondary-gray"><Check className="h-5 w-5 text-primary-navy mr-3 mt-1"/> Monthly results report</li>
            </ul>
            <button 
              onClick={scrollToBooking}
              className="w-full block text-center border border-primary-navy text-primary-navy font-heading font-bold py-5 hover:bg-primary-navy hover:text-white transition-all uppercase tracking-widest text-sm"
            >
              Start Engine
            </button>
          </div>

          {/* ELITE */}
          <div className="bg-primary-navy/5 border border-accent-cyan p-10 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-accent-cyan text-primary-navy text-xs font-bold px-3 py-1 uppercase tracking-widest">
              Recommended
            </div>
            <h3 className="font-heading font-bold text-2xl text-primary-navy mb-2">AUTHORITY ENGINE <span className="text-accent-cyan">ELITE</span></h3>
            <p className="text-secondary-gray text-sm mb-8 h-12">Win more deals.</p>
            <div className="mb-8 pb-8 border-b border-primary-navy/10">
              <span className="text-5xl font-heading font-bold text-primary-navy">$1,195</span>
              <span className="text-secondary-gray">/mo</span>
            </div>
            <ul className="space-y-5 mb-12 flex-grow">
              <li className="flex items-start text-lg text-primary-navy font-medium"><Check className="h-5 w-5 text-accent-cyan mr-3 mt-1"/> <strong>Everything above</strong></li>
              <li className="flex items-start text-lg text-primary-navy font-medium"><Check className="h-5 w-5 text-accent-cyan mr-3 mt-1"/> Daily engagement (Mon–Fri)</li>
              <li className="flex items-start text-lg text-primary-navy font-medium"><Check className="h-5 w-5 text-accent-cyan mr-3 mt-1"/> We manage your new connections</li>
              <li className="flex items-start text-lg text-primary-navy font-medium"><Check className="h-5 w-5 text-accent-cyan mr-3 mt-1"/> We interact with your target accounts</li>
              <li className="flex items-start text-lg text-primary-navy font-medium"><Check className="h-5 w-5 text-accent-cyan mr-3 mt-1"/> Priority Slack support</li>
            </ul>
            <button 
              onClick={scrollToBooking}
              className="w-full block text-center bg-accent-cyan text-primary-navy font-heading font-bold py-5 hover:bg-primary-navy hover:text-white transition-all uppercase tracking-widest text-sm"
            >
              Deploy Elite System
            </button>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 border-t border-primary-navy/10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-8 text-primary-navy">
            START SHOWING UP.
          </h2>
          <p className="text-xl text-secondary-gray mb-12 max-w-2xl mx-auto">
            Your competitors are already posting. Let's make sure you're louder.
          </p>
          <button 
            onClick={scrollToBooking}
            className="bg-white text-white hover:bg-accent-cyan hover:text-primary-navy font-heading font-bold text-xl py-6 px-16 rounded-none transition-all inline-block shadow-2xl"
          >
            BUILD AUTHORITY NOW
          </button>
        </div>
      </section>

    </div>
  );
};

export default FounderAuthority;