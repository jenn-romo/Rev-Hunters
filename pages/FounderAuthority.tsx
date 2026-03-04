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
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-block border border-white/20 bg-white/5 text-white/80 px-6 py-2 rounded-full font-medium text-sm md:text-base mb-8 tracking-widest uppercase">
          Founder Authority Engine
        </div>
        <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-none text-white mb-8">
          GET NOTICED. <br/>
          <span className="text-primary-blue">WIN MORE DEALS.</span>
        </h1>
        <p className="text-xl md:text-2xl text-secondary-gray max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
          We help founders show up online so customers, investors, and great hires come to them.
        </p>
        
        {/* Video Container */}
        <div className="w-full max-w-4xl mx-auto mb-12 shadow-2xl rounded-lg overflow-hidden border border-white/10 bg-black">
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
          className="bg-white text-black hover:bg-primary-blue hover:text-white font-heading font-bold text-lg md:text-xl py-6 px-12 rounded-none transition-all inline-block shadow-2xl"
        >
          DEPLOY THE ENGINE
        </button>
      </section>

      {/* THE PROBLEM: NO ONE KNOWS YOU */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-16 text-center">
            THE PROBLEM: NO ONE KNOWS YOU
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-secondary-gray leading-relaxed">
                You built something great. But if people can't find you online, your company misses out.
              </p>
              <p className="text-xl text-white font-bold leading-relaxed">
                While you're busy running the business, other founders are posting online — and getting the investors, customers, and talent you deserve.
              </p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10 rounded-lg">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <X className="text-accent-red mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <span className="text-lg text-white">Investors don't know you exist</span>
                </li>
                <li className="flex items-start">
                  <X className="text-accent-red mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <span className="text-lg text-white">No one's reaching out to partner with you</span>
                </li>
                <li className="flex items-start">
                  <X className="text-accent-red mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <span className="text-lg text-white">Top talent picks founders they've heard of</span>
                </li>
                <li className="flex items-start">
                  <X className="text-accent-red mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                  <span className="text-lg text-white">Sales take longer because buyers don't trust you yet</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS: SIMPLE AS 1-2-3 */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary-blue font-bold tracking-widest uppercase mb-4 block">HOW IT WORKS</span>
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white">
            SIMPLE AS 1-2-3
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="group p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
            <div className="w-16 h-16 bg-primary-blue/10 flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
              <Mic className="text-primary-blue h-8 w-8" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-4">1. RECORD</h3>
            <p className="text-secondary-gray text-lg leading-relaxed">
              Talk into your phone for 60 seconds. Share a thought, a lesson, anything on your mind. That's it.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
            <div className="w-16 h-16 bg-primary-blue/10 flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
              <FileText className="text-primary-blue h-8 w-8" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-4">2. WE WRITE IT</h3>
            <p className="text-secondary-gray text-lg leading-relaxed">
              We turn your voice memo into a polished LinkedIn post. It sounds like you — just cleaner.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
            <div className="w-16 h-16 bg-primary-blue/10 flex items-center justify-center rounded-full mb-8 group-hover:scale-110 transition-transform">
              <Calendar className="text-primary-blue h-8 w-8" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-4">3. WE POST IT</h3>
            <p className="text-secondary-gray text-lg leading-relaxed">
              We handle the schedule. Your LinkedIn stays active every day while you run your business.
            </p>
          </div>
        </div>
      </section>

      {/* ELITE UPGRADE */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="inline-block bg-black text-white px-4 py-1 text-sm font-bold uppercase tracking-widest mb-6">
                ELITE UPGRADE
              </div>
              <h2 className="font-heading font-black text-4xl md:text-5xl mb-8">
                WE ALSO DO THE NETWORKING FOR YOU
              </h2>
              <p className="text-xl text-black/70 mb-8 leading-relaxed font-medium">
                Posting gets you seen. Talking to people gets you deals.
              </p>
              <p className="text-lg text-black/70 mb-8 leading-relaxed">
                Our Elite plan adds a real person who comments, connects, and starts conversations with investors, partners, and buyers — on your behalf.
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
            <div className="flex-1 bg-gray-100 p-12 rounded-2xl border border-gray-200 shadow-xl">
               <div className="space-y-6">
                 <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                   <div className="flex items-center gap-4 mb-4">
                     <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                     <div>
                       <div className="h-3 w-24 bg-gray-200 rounded mb-1"></div>
                       <div className="h-2 w-16 bg-gray-100 rounded"></div>
                     </div>
                   </div>
                   <div className="h-2 w-full bg-gray-100 rounded mb-2"></div>
                   <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                 </div>
                 <div className="bg-white p-6 rounded shadow-sm border border-gray-100 ml-8 border-l-4 border-black">
                   <p className="font-bold text-sm mb-2">Your Profile (Managed by Us)</p>
                   <p className="text-sm text-gray-600">"Great insight. This aligns perfectly with what we're seeing in the mid-market..."</p>
                 </div>
                 <div className="bg-blue-50 p-6 rounded shadow-sm border border-blue-100">
                   <p className="font-bold text-sm text-blue-900 mb-2">Example Inbound DM</p>
                   <p className="text-sm text-blue-800">"Hey, saw your comment on [Industry Leader]'s post. Would love to connect…"</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="offer" className="py-24 max-w-5xl mx-auto px-4">
        <h2 className="text-center font-heading font-black text-4xl text-white mb-16">PLANS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* STANDARD */}
          <div className="bg-black border border-white/10 p-10 flex flex-col hover:border-white/30 transition-all">
            <h3 className="font-heading font-bold text-2xl text-white mb-2">FOUNDER AUTHORITY ENGINE</h3>
            <p className="text-secondary-gray text-sm mb-8 h-12">Get noticed.</p>
            <div className="mb-8 pb-8 border-b border-white/10">
              <span className="text-5xl font-heading font-bold text-white">$395</span>
              <span className="text-secondary-gray">/mo</span>
            </div>
            <ul className="space-y-5 mb-12 flex-grow">
              <li className="flex items-start text-lg text-secondary-gray"><Check className="h-5 w-5 text-white mr-3 mt-1"/> Send us 60-sec voice memos</li>
              <li className="flex items-start text-lg text-secondary-gray"><Check className="h-5 w-5 text-white mr-3 mt-1"/> 20 posts per month</li>
              <li className="flex items-start text-lg text-secondary-gray"><Check className="h-5 w-5 text-white mr-3 mt-1"/> Content calendar</li>
              <li className="flex items-start text-lg text-secondary-gray"><Check className="h-5 w-5 text-white mr-3 mt-1"/> Profile cleanup</li>
              <li className="flex items-start text-lg text-secondary-gray"><Check className="h-5 w-5 text-white mr-3 mt-1"/> Monthly results report</li>
            </ul>
            <button 
              onClick={scrollToBooking}
              className="w-full block text-center border border-white text-white font-heading font-bold py-5 hover:bg-white hover:text-black transition-all uppercase tracking-widest text-sm"
            >
              Start Engine
            </button>
          </div>

          {/* ELITE */}
          <div className="bg-white/5 border border-primary-blue p-10 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-primary-blue text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
              Recommended
            </div>
            <h3 className="font-heading font-bold text-2xl text-white mb-2">AUTHORITY ENGINE <span className="text-primary-blue">ELITE</span></h3>
            <p className="text-secondary-gray text-sm mb-8 h-12">Win more deals.</p>
            <div className="mb-8 pb-8 border-b border-white/10">
              <span className="text-5xl font-heading font-bold text-white">$1,195</span>
              <span className="text-secondary-gray">/mo</span>
            </div>
            <ul className="space-y-5 mb-12 flex-grow">
              <li className="flex items-start text-lg text-white font-medium"><Check className="h-5 w-5 text-primary-blue mr-3 mt-1"/> <strong>Everything above</strong></li>
              <li className="flex items-start text-lg text-white font-medium"><Check className="h-5 w-5 text-primary-blue mr-3 mt-1"/> Daily engagement (Mon–Fri)</li>
              <li className="flex items-start text-lg text-white font-medium"><Check className="h-5 w-5 text-primary-blue mr-3 mt-1"/> We manage your new connections</li>
              <li className="flex items-start text-lg text-white font-medium"><Check className="h-5 w-5 text-primary-blue mr-3 mt-1"/> We interact with your target accounts</li>
              <li className="flex items-start text-lg text-white font-medium"><Check className="h-5 w-5 text-primary-blue mr-3 mt-1"/> Priority Slack support</li>
            </ul>
            <button 
              onClick={scrollToBooking}
              className="w-full block text-center bg-primary-blue text-white font-heading font-bold py-5 hover:bg-white hover:text-primary-blue transition-all uppercase tracking-widest text-sm"
            >
              Deploy Elite System
            </button>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-4xl md:text-5xl mb-8 text-white">
            START SHOWING UP.
          </h2>
          <p className="text-xl text-secondary-gray mb-12 max-w-2xl mx-auto">
            Your competitors are already posting. Let's make sure you're louder.
          </p>
          <button 
            onClick={scrollToBooking}
            className="bg-white text-black hover:bg-primary-blue hover:text-white font-heading font-bold text-xl py-6 px-16 rounded-none transition-all inline-block shadow-2xl"
          >
            BUILD AUTHORITY NOW
          </button>
        </div>
      </section>

    </div>
  );
};

export default FounderAuthority;