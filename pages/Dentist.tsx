import React, { useEffect } from 'react';
import { XCircle, CheckCircle, AlertTriangle, DollarSign, Clock, Users, ShieldAlert } from 'lucide-react';
import JotForm from '../components/JotForm';

const Dentist: React.FC = () => {
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

  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full bg-primary text-secondary-gray font-body">
      
      {/* HERO SECTION WITH VIDEO & FORM */}
      <section className="pt-20 pb-10 px-4 max-w-7xl mx-auto w-full text-center">
        <span className="text-primary-blue font-heading font-bold tracking-widest text-base mb-4 block uppercase">
          Private Practice Solutions
        </span>
        <h1 className="font-heading font-black text-5xl md:text-7xl text-white mb-6">
          NEVER MISS ANOTHER <span className="text-primary-blue">PATIENT CALL</span>. EVER.
        </h1>
        <p className="text-xl md:text-3xl text-secondary-gray max-w-4xl mx-auto mb-16 font-medium leading-relaxed">
          We ensure you capture every high-value case—after hours, during lunch, or when your front desk is overloaded.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
          
          {/* LEFT COL: VIDEO */}
          <div className="flex flex-col gap-8">
             {/* Video Container with Brand Frame */}
            <div className="relative w-full aspect-video bg-black border-4 border-primary-blue shadow-[0_0_50px_rgba(96,183,227,0.25)] rounded-xl overflow-hidden group">
              <iframe 
                src="https://player.vimeo.com/video/1164441003?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                className="absolute inset-0 w-full h-full"
                title="Dental Practice Receptionist" 
              ></iframe>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                <h3 className="text-white font-bold text-2xl mb-4">The Brutal Truth:</h3>
                <p className="mb-4 text-xl leading-relaxed">
                  It’s not your staff’s fault. They’re human. They don’t work 24 hours a day. They get overwhelmed. They get distracted.
                </p>
                <p className="text-accent-red font-bold text-xl leading-relaxed">
                  But every missed call isn’t just a missed call. It’s a lost $5,000… $10,000… sometimes $30,000 case calling the next practice down the street.
                </p>
            </div>
          </div>

          {/* RIGHT COL: FORM */}
          <div id="contact-form" className="w-full bg-white/5 p-1 md:p-6 rounded-lg border border-white/10 h-full min-h-[600px]">
            <JotForm />
          </div>
        </div>
      </section>

      {/* DISQUALIFICATION SECTION */}
      <section className="py-16 bg-black border-y border-white/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="border-l-8 border-accent-red bg-accent-red/5 p-10">
            <div className="flex items-center gap-4 mb-6">
              <ShieldAlert className="w-10 h-10 text-accent-red" />
              <h2 className="font-heading font-black text-3xl text-white uppercase">Who This Is NOT For (Pay Attention)</h2>
            </div>
            <p className="text-xl text-secondary-gray mb-6">Let me be clear upfront. This is not for:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-4 text-xl text-secondary-gray"><XCircle className="w-6 h-6 text-accent-red flex-shrink-0" /> Low-volume, insurance-only dental offices</li>
              <li className="flex items-center gap-4 text-xl text-secondary-gray"><XCircle className="w-6 h-6 text-accent-red flex-shrink-0" /> Practices that don’t care about growth</li>
              <li className="flex items-center gap-4 text-xl text-secondary-gray"><XCircle className="w-6 h-6 text-accent-red flex-shrink-0" /> Offices that are okay with missed opportunities</li>
              <li className="flex items-center gap-4 text-xl text-secondary-gray"><XCircle className="w-6 h-6 text-accent-red flex-shrink-0" /> Owners who believe voicemail is “good enough”</li>
            </ul>
            <p className="text-white font-bold text-2xl leading-relaxed">
              If you’re running a high-end practice where just one saved patient per month more than pays for this system… You’re exactly who this was built for.
            </p>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-12 text-center">THE REAL PROBLEM NO ONE WANTS TO ADMIT</h2>
        <div className="space-y-8 text-xl text-secondary-gray leading-relaxed">
          <p>
            Most dental practices believe they have a marketing problem. <strong className="text-white text-2xl">They don’t.</strong> They have a call capture problem.
          </p>
          <p>
            You’re already paying for SEO, Google Ads, Referrals, and Reputation management. You’ve already done the hard part — getting people to call.
          </p>
          <p>
            And then what happens? They hit voicemail. They call after hours. They hang up. <strong className="text-white text-2xl">They call someone else.</strong>
          </p>
          <p>
            And what’s worse… Even during business hours, calls slip through the cracks because:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <li className="bg-white/5 p-6 rounded border border-white/10 text-white text-lg font-bold">Staff is checking out patients</li>
            <li className="bg-white/5 p-6 rounded border border-white/10 text-white text-lg font-bold">Insurance questions take forever</li>
            <li className="bg-white/5 p-6 rounded border border-white/10 text-white text-lg font-bold">Follow-ups get forgotten</li>
            <li className="bg-white/5 p-6 rounded border border-white/10 text-white text-lg font-bold">Leads need to be “babysat”</li>
          </ul>
          <p className="text-3xl font-heading font-black text-white text-center mt-12">
            So now you’re not just losing calls. You’re leaking revenue.
          </p>
        </div>
      </section>

      {/* THE SHIFT */}
      <section className="py-24 bg-primary-blue/5 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading font-black text-4xl text-white mb-8">WHY VOICEMAIL IS COSTING YOU PATIENTS</h2>
            <p className="text-xl text-secondary-gray mb-8 leading-relaxed">
              Let’s be honest. Patients do not want to leave voicemails anymore. They don’t trust callbacks. They don’t want friction. They want answers now.
            </p>
            <p className="text-xl text-secondary-gray mb-8 leading-relaxed">
              And many of them don’t even want to talk to a human. They just want:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-4 text-white text-xl"><CheckCircle className="w-6 h-6 text-primary-blue" /> To know if you’re open</li>
              <li className="flex items-center gap-4 text-white text-xl"><CheckCircle className="w-6 h-6 text-primary-blue" /> To see if you offer what they need</li>
              <li className="flex items-center gap-4 text-white text-xl"><CheckCircle className="w-6 h-6 text-primary-blue" /> To book the next step</li>
            </ul>
            <p className="font-bold text-white text-2xl">
              If they don’t get that immediately… They move on.
            </p>
          </div>
          <div className="bg-black border-2 border-primary-blue/30 p-10 rounded-xl relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-blue/10 rounded-full blur-3xl"></div>
            <h3 className="font-heading font-black text-3xl text-white mb-8">OUR SOLUTION</h3>
            <p className="text-secondary-gray text-xl mb-8">
              What we install is a 24/7 inbound call capture system custom-built for your practice.
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-white text-lg font-medium">
                <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                <span>Answers every single call, day or night</span>
              </li>
              <li className="flex items-start gap-4 text-white text-lg font-medium">
                <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                <span>Handles multiple calls at once</span>
              </li>
              <li className="flex items-start gap-4 text-white text-lg font-medium">
                <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                <span>Sounds extremely human (most callers don’t realize)</span>
              </li>
              <li className="flex items-start gap-4 text-white text-lg font-medium">
                <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                <span>Books appointments, qualifies callers, routes emergencies</span>
              </li>
              <li className="flex items-start gap-4 text-white text-lg font-medium">
                <CheckCircle className="w-6 h-6 text-primary-blue flex-shrink-0 mt-1" />
                <span>Follows your exact practice flow</span>
              </li>
            </ul>
            <div className="mt-10 pt-8 border-t border-white/10 text-center">
                <p className="text-base uppercase tracking-widest text-primary-blue font-bold">No sick days. No burnout. No distractions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <h2 className="font-heading font-black text-4xl text-white mb-16 text-center">WHY THIS IS BETTER THAN HIRING</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white/5 p-10 border border-white/10 rounded-lg">
            <div className="flex items-center gap-4 mb-8">
              <Users className="w-10 h-10 text-accent-red" />
              <h3 className="font-bold text-2xl text-white">ANOTHER EMPLOYEE</h3>
            </div>
            <ul className="space-y-5 text-secondary-gray text-xl">
              <li className="flex items-center gap-4"><DollarSign className="w-5 h-5 text-accent-red"/> High Salary & Payroll Tax</li>
              <li className="flex items-center gap-4"><DollarSign className="w-5 h-5 text-accent-red"/> Training Costs</li>
              <li className="flex items-center gap-4"><Clock className="w-5 h-5 text-accent-red"/> Can't work 24/7</li>
              <li className="flex items-center gap-4"><AlertTriangle className="w-5 h-5 text-accent-red"/> Still misses calls when busy</li>
              <li className="flex items-center gap-4"><Users className="w-5 h-5 text-accent-red"/> Requires management</li>
            </ul>
          </div>
          <div className="bg-black p-10 border-2 border-primary-blue rounded-lg shadow-[0_0_30px_rgba(96,183,227,0.15)]">
            <div className="flex items-center gap-4 mb-8">
              <CheckCircle className="w-10 h-10 text-primary-blue" />
              <h3 className="font-bold text-2xl text-white">REVENUE HUNTERS SYSTEM</h3>
            </div>
            <ul className="space-y-5 text-white text-xl">
              <li className="flex items-center gap-4"><CheckCircle className="w-5 h-5 text-primary-blue"/> Fraction of the cost</li>
              <li className="flex items-center gap-4"><CheckCircle className="w-5 h-5 text-primary-blue"/> Zero training needed</li>
              <li className="flex items-center gap-4"><CheckCircle className="w-5 h-5 text-primary-blue"/> Works 24/7/365</li>
              <li className="flex items-center gap-4"><CheckCircle className="w-5 h-5 text-primary-blue"/> Never misses a beat</li>
              <li className="flex items-center gap-4"><CheckCircle className="w-5 h-5 text-primary-blue"/> Self-managing infrastructure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OBJECTIONS & NICHE */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-20">
            <h3 className="font-heading font-bold text-3xl text-white mb-6">“BUT WILL THIS SOUND ROBOTIC?”</h3>
            <p className="text-xl text-secondary-gray mb-6 leading-relaxed">
              This is the first objection everyone has. And it’s fair. That’s why we spent so much time on this.
            </p>
            <p className="text-xl text-secondary-gray mb-6 leading-relaxed">
              The system is <strong className="text-white">conversational, natural, and trained on real patient interactions.</strong> Most callers don’t realize what they’re speaking to.
            </p>
            <p className="text-xl text-secondary-gray leading-relaxed">
              And frankly? They don’t care — as long as they’re helped immediately.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-3xl text-white mb-6">WHY THIS MATTERS MORE FOR HIGH-END PRACTICES</h3>
            <p className="text-xl text-secondary-gray mb-8 leading-relaxed">
              If you’re doing private-pay dentistry, your margins are different. You don’t need hundreds of new patients. You need the right patients, at the right time, captured consistently.
            </p>
            <p className="text-2xl font-bold text-white p-8 border-l-8 border-primary-blue bg-primary-blue/10">
              One missed veneer case can be five figures. One saved call can pay for this system many times over.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-4 max-w-5xl mx-auto text-center">
        <h2 className="font-heading font-black text-4xl text-white mb-16">HOW IT WORKS (SIMPLE & FAST)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div className="p-8 border border-white/10 relative bg-white/[0.02]">
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary-blue text-black font-black flex items-center justify-center rounded-full text-2xl border-4 border-black">1</div>
            <h4 className="font-bold text-white text-2xl mb-4">MAP YOUR FLOW</h4>
            <p className="text-secondary-gray text-lg">We analyze how your office handles calls, what questions matter, and how to route patients.</p>
          </div>
          <div className="p-8 border border-white/10 relative bg-white/[0.02]">
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary-blue text-black font-black flex items-center justify-center rounded-full text-2xl border-4 border-black">2</div>
            <h4 className="font-bold text-white text-2xl mb-4">INSTALL</h4>
            <p className="text-secondary-gray text-lg">We install the system in under a week. No dashboards to monitor. No extra work.</p>
          </div>
          <div className="p-8 border border-white/10 relative bg-white/[0.02]">
            <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary-blue text-black font-black flex items-center justify-center rounded-full text-2xl border-4 border-black">3</div>
            <h4 className="font-bold text-white text-2xl mb-4">GO LIVE</h4>
            <p className="text-secondary-gray text-lg">It starts capturing calls immediately. You stop leaking revenue instantly.</p>
          </div>
        </div>
      </section>

      {/* PROOF & FINAL CTA */}
      <section className="py-32 bg-black border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-10">PROOF</h2>
          <p className="text-2xl text-secondary-gray mb-10 max-w-3xl mx-auto">
            Every practice owner we speak to already knows the problem. They’ve felt the missed calls, the staff burnout, and the lost follow-ups.
          </p>
          <p className="text-2xl text-white font-bold mb-16">
            Just like online booking replaced paper schedules… 24/7 call capture replaces voicemail.
          </p>
          
          <div className="bg-white/5 border border-white/10 p-10 rounded-xl mb-20 text-left">
            <h3 className="font-heading font-bold text-3xl text-white mb-8 text-center">FINAL THOUGHTS</h3>
            <div className="space-y-8">
                <div>
                    <p className="text-white font-bold text-xl mb-2">“My staff already handles calls.”</p>
                    <p className="text-secondary-gray text-lg">They do — until they can’t. This fills the gaps without replacing them.</p>
                </div>
                <div>
                    <p className="text-white font-bold text-xl mb-2">“I don’t want more complexity.”</p>
                    <p className="text-secondary-gray text-lg">Good. You won’t get it. This requires zero ongoing effort.</p>
                </div>
                <div>
                    <p className="text-white font-bold text-xl mb-2">“Is this worth the monthly cost?”</p>
                    <p className="text-secondary-gray text-lg">If saving one high-value case per month matters to your practice, yes.</p>
                </div>
            </div>
          </div>

          <h3 className="font-heading font-black text-4xl text-white mb-8">THE ASK</h3>
          <p className="text-xl text-secondary-gray mb-12 max-w-2xl mx-auto">
            We’re limiting how many installs we do each month to ensure quality. If you want to see exactly how this would work inside your practice, book a demo.
          </p>
          
          <button 
             onClick={scrollToForm}
             className="bg-accent-red text-white hover:bg-white hover:text-accent-red font-heading font-bold text-2xl py-8 px-16 rounded-none transition-all inline-block shadow-2xl skew-x-[-5deg]"
          >
            <span className="inline-block skew-x-[5deg]">BOOK THE DEMO</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default Dentist;