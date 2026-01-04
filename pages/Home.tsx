import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, TrendingUp, ShieldCheck } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* IDENTITY SECTION */}
      <section className="relative py-24 md:py-32 px-4 max-w-7xl mx-auto w-full text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-blue/10 rounded-full blur-[100px] -z-10"></div>
        <h1 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tighter text-white mb-8">
          NEVER MISS A <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-white">REVENUE CALL</span> AGAIN.
        </h1>
        <p className="text-lg md:text-2xl text-secondary-gray/80 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
          Revenue Hunters installs AI inbound and outbound calling systems that answer, qualify, and book appointments—without hiring more staff.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="bg-primary-blue hover:bg-secondary-blue text-primary font-heading font-bold text-lg py-4 px-10 rounded-none transform hover:-translate-y-1 transition-all">
            BOOK A DEMO
          </Link>
          <Link to="/pricing" className="border border-white/20 hover:border-primary-blue text-white hover:text-primary-blue font-heading font-bold text-lg py-4 px-10 rounded-none transition-all">
            SEE PRICING
          </Link>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section className="py-20 bg-black/40 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-accent-red mb-8">
            THE BLEEDING STOPPED?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <p className="text-xl md:text-2xl font-bold text-white mb-4">
                Missed calls. <span className="text-gray-500">Slow response times.</span>
              </p>
              <p className="text-secondary-gray leading-relaxed text-lg">
                Your marketing works. Your phone rings. But if you don't answer in seconds, that lead is gone. They don't leave a voicemail—they call the next competitor on Google.
              </p>
            </div>
            <div className="flex flex-col justify-center border-l-2 border-accent-red/30 pl-8">
              <p className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight">
                "LEADS LEAK. YOUR BEST PROSPECTS CALL THE NEXT COMPANY."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAILED ATTEMPTS */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">WHY THE OLD WAY FAILS</h2>
          <p className="text-secondary-gray">You've tried to fix this before. It's still broken.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "VOICEMAIL", desc: "Where leads go to die. No one leaves them anymore." },
            { title: "RECEPTIONISTS", desc: "They get overwhelmed, take breaks, and go home at 5 PM." },
            { title: "SDRs", desc: "Expensive. Require management. High turnover rates." },
            { title: "OVERSEAS VAs", desc: "Language barriers. Connection issues. Lack of context." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 p-8 border border-white/10 hover:border-primary-blue/50 transition-colors">
              <X className="text-accent-red mb-4 h-8 w-8" />
              <h3 className="font-heading font-bold text-xl text-white mb-2">{item.title}</h3>
              <p className="text-sm text-secondary-gray">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW MECHANISM */}
      <section className="py-24 bg-gradient-to-b from-primary-blue/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary-blue font-heading font-bold tracking-widest text-sm mb-2 block">INTRODUCING</span>
              <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-8">
                THE REVENUE HUNTER SYSTEM
              </h2>
              <p className="text-lg text-secondary-gray mb-8 leading-relaxed">
                We install a complete AI infrastructure that operates with military precision. It doesn't sleep, doesn't take breaks, and follows the script perfectly every time.
              </p>
              <ul className="space-y-4">
                {[
                  "24/7 Intelligent Answering",
                  "Instant Missed-Call Recovery",
                  "Outbound Appointment Booking",
                  "Automated Call Summaries"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center text-white font-bold text-lg">
                    <Check className="text-primary-blue mr-4 h-6 w-6" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary-blue blur-[100px] opacity-20"></div>
              <div className="relative bg-black border border-white/10 p-8 rounded-lg shadow-2xl">
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-auto text-xs font-mono text-gray-500">SYSTEM_ACTIVE</span>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex gap-4 text-green-400">
                    <span>[10:42:01]</span>
                    <span>Incoming Call Detected...</span>
                  </div>
                  <div className="flex gap-4 text-primary-blue">
                    <span>[10:42:02]</span>
                    <span>AI Agent Assigned. Answering.</span>
                  </div>
                  <div className="flex gap-4 text-white">
                    <span>[10:42:45]</span>
                    <span>Lead Qualified: High Intent.</span>
                  </div>
                  <div className="flex gap-4 text-white">
                    <span>[10:43:10]</span>
                    <span>Appointment Booked: Thursday 2 PM.</span>
                  </div>
                  <div className="flex gap-4 text-gray-500">
                    <span>[10:43:12]</span>
                    <span>CRM Updated. Owner Notified.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-20 border-y border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2">0s</div>
              <p className="text-sm font-bold text-secondary-gray uppercase tracking-widest">Hold Time</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2">100%</div>
              <p className="text-sm font-bold text-secondary-gray uppercase tracking-widest">Recovery Rate</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2">24/7</div>
              <p className="text-sm font-bold text-secondary-gray uppercase tracking-widest">Availability</p>
            </div>
            <div className="p-4">
              <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2">ROI</div>
              <p className="text-sm font-bold text-secondary-gray uppercase tracking-widest">Owner Ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-center font-heading font-black text-4xl text-white mb-16">EXECUTION PLAN</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Audit", desc: "We analyze your current call flow and missed opportunities." },
            { step: "02", title: "Build Logic", desc: "We script the AI to handle objections and qualify leads." },
            { step: "03", title: "Connect", desc: "We integrate with your existing phone lines and CRM." },
            { step: "04", title: "Test", desc: "Rigorous stress testing to ensure seamless conversation." },
            { step: "05", title: "Go Live", desc: "The system takes over. You stop missing calls instantly." },
            { step: "06", title: "Optimize", desc: "Weekly review of call logs to refine performance." }
          ].map((item, i) => (
            <div key={i} className="relative p-8 border border-white/10 group hover:bg-white/5 transition-all">
              <div className="text-6xl font-heading font-black text-white/5 absolute top-4 right-4 group-hover:text-primary-blue/10 transition-colors">
                {item.step}
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4 relative z-10">{item.title}</h3>
              <p className="text-secondary-gray relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 bg-primary-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h3 className="font-heading font-bold text-3xl text-primary mb-8">
              "We used to miss 20% of our calls on weekends. Now every single one is answered and booked."
            </h3>
            <p className="font-bold text-primary/80">— Plumbing Owner, Florida</p>
          </div>
          <div className="h-px bg-black/10 w-full my-8"></div>
          <div>
            <h3 className="font-heading font-bold text-3xl text-primary mb-8">
              "The outbound AI reactivated 400 dead leads in two days. It paid for itself in week one."
            </h3>
            <p className="font-bold text-primary/80">— Home Services Operator, Texas</p>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center">
        <ShieldCheck className="mx-auto h-20 w-20 text-white mb-8" />
        <h2 className="font-heading font-black text-4xl text-white mb-6">THE GUARANTEE</h2>
        <p className="text-2xl md:text-3xl font-medium text-secondary-gray leading-relaxed border-2 border-white/20 p-8 md:p-12 bg-white/5">
          "If we don't improve booked opportunities in the first 30 days, we continue optimizing at no charge."
        </p>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-20 text-center">
        <h2 className="font-heading font-bold text-3xl text-white mb-8">READY TO DEPLOY?</h2>
        <p className="text-secondary-gray mb-12 max-w-2xl mx-auto">
          Transparent pricing. No hidden fees. Systems that scale with you.
        </p>
        <Link to="/pricing" className="inline-flex items-center font-heading font-bold text-primary-blue hover:text-white transition-colors text-xl group">
          VIEW FULL PRICING <TrendingUp className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

      {/* CTA */}
      <section className="py-32 bg-secondary-gray text-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-5xl md:text-6xl mb-8 leading-tight">
            STOP LOSING MONEY.<br />START HUNTING REVENUE.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Link to="/contact" className="bg-primary hover:bg-black text-white font-heading font-bold text-xl py-5 px-12 rounded-none shadow-2xl hover:shadow-xl transition-all">
              BOOK A DEMO
            </Link>
            <Link to="/pricing" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-heading font-bold text-xl py-5 px-12 rounded-none transition-all">
              SEE PRICING
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;