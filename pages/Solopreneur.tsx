import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneMissed, DollarSign, Clock, Zap, MessageSquare, Phone, Star } from 'lucide-react';

const Solopreneur: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-primary text-secondary-gray font-body">
      
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 px-4 max-w-5xl mx-auto w-full text-center">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[100px] -z-10"></div>
        <div className="inline-block border border-white/20 bg-white/5 text-white px-6 py-2 rounded font-bold text-xl md:text-2xl mb-8 tracking-widest uppercase">
          For Entrepreneurs and Small Businesses
        </div>
        <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl leading-tight text-white mb-8">
          EVERY MISSED CALL IS A <span className="text-accent-red">DONATION</span> TO YOUR COMPETITOR.
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-bold">
          You do great work. But when the phone isn’t answered, customers assume you don’t care. That’s how small misses turn into bad reviews.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          <a 
            href="tel:3212340612"
            className="bg-accent-red text-white hover:bg-white hover:text-accent-red font-heading font-bold text-2xl py-6 px-10 rounded-none transition-all inline-flex items-center justify-center gap-3 shadow-2xl skew-x-[-5deg]"
          >
            <span className="inline-flex items-center gap-3 skew-x-[5deg]">
              <Phone className="w-6 h-6" />
              TRY OUR Ai
            </span>
          </a>
          <Link 
            to="/contact"
            className="bg-primary-blue text-black hover:bg-white hover:text-black font-heading font-bold text-2xl py-6 px-10 rounded-none transition-all inline-block shadow-2xl skew-x-[-5deg]"
          >
            <span className="inline-block skew-x-[5deg]">BOOK A CALL</span>
          </Link>
        </div>
      </section>

      {/* THE PAIN */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-black text-3xl text-white mb-8">THE SILENT BUSINESS KILLER</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Your phone rings. You're on a job. You're with a client. You're eating dinner with your family.
                </p>
                <p className="text-lg leading-relaxed font-bold text-white">
                  You don't answer.
                </p>
                <p className="text-lg leading-relaxed">
                  You think, "I'll call them back in an hour." But in that hour, they called three other businesses. The third one answered. The third one got the money.
                </p>
                <p className="text-lg leading-relaxed text-accent-red font-bold">
                  You just lost revenue and you don't even know it.
                </p>
              </div>
            </div>
            <div className="bg-black border border-white/10 p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-6">SOUND FAMILIAR?</h3>
              <ul className="space-y-6">
                {[
                  "I miss calls because I'm busy with clients.",
                  "I can't answer the phone all day.",
                  "Customers get frustrated when no one answers.",
                  "I get bad reviews because people can't reach me.",
                  "My business runs my life.",
                  "I'm always 'on' and still feel behind."
                ].map((pain, i) => (
                  <li key={i} className="flex items-start text-secondary-gray text-xl">
                    <PhoneMissed className="text-accent-red mr-4 h-6 w-6 flex-shrink-0 mt-1" />
                    "{pain}"
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE CONSEQUENCES */}
      <section className="py-20 max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-heading font-black text-3xl text-white mb-16">WHAT IT'S COSTING YOU</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 border border-white/10 hover:border-accent-red/50 transition-colors group">
            <div className="flex justify-center mb-4 gap-1">
              <DollarSign className="h-8 w-8 text-accent-red" />
              <DollarSign className="h-8 w-8 text-accent-red" />
              <DollarSign className="h-8 w-8 text-accent-red" />
              <DollarSign className="h-8 w-8 text-accent-red" />
              <DollarSign className="h-8 w-8 text-white/20" />
            </div>
            <h3 className="font-bold text-white text-xl mb-2">LOST CASH</h3>
            <p className="text-lg text-secondary-gray">Every voicemail is a lost job. Customers don't leave messages anymore.</p>
          </div>
          <div className="p-6 border border-white/10 hover:border-accent-red/50 transition-colors group">
            <div className="flex justify-center mb-4 gap-1">
               <Zap className="h-8 w-8 text-accent-red fill-accent-red" />
               <Zap className="h-8 w-8 text-white/20" />
               <Zap className="h-8 w-8 text-white/20" />
               <Zap className="h-8 w-8 text-white/20" />
               <Zap className="h-8 w-8 text-white/20" />
            </div>
            <h3 className="font-bold text-white text-xl mb-2">BURNOUT</h3>
            <p className="text-lg text-secondary-gray">You can't relax because you're afraid to miss a lead. Your phone is a leash.</p>
          </div>
          <div className="p-6 border border-white/10 hover:border-accent-red/50 transition-colors group">
            <div className="flex justify-center mb-4 gap-1">
               <Star className="h-8 w-8 text-accent-red fill-accent-red" />
               <Star className="h-8 w-8 text-white/20" />
               <Star className="h-8 w-8 text-white/20" />
               <Star className="h-8 w-8 text-white/20" />
               <Star className="h-8 w-8 text-white/20" />
            </div>
            <h3 className="font-bold text-white text-xl mb-2">BAD REPUTATION</h3>
            <p className="text-lg text-secondary-gray">"Great work, but hard to get a hold of." That review kills your growth.</p>
          </div>
          <div className="p-6 border border-white/10 hover:border-accent-red/50 transition-colors group">
            <div className="flex justify-center mb-4 gap-1">
              <Clock className="h-8 w-8 text-accent-red" />
              <Clock className="h-8 w-8 text-accent-red" />
              <Clock className="h-8 w-8 text-accent-red" />
              <Clock className="h-8 w-8 text-accent-red" />
              <Clock className="h-8 w-8 text-white/20" />
            </div>
            <h3 className="font-bold text-white text-xl mb-2">WASTED TIME</h3>
            <p className="text-lg text-secondary-gray">Playing phone tag for 3 days just to schedule a $200 job.</p>
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section className="py-24 bg-gradient-to-b from-primary-blue/10 to-transparent">
        <div className="max-w-5xl mx-auto px-4 text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6">
            AUTOMATE THE BUSY WORK SO YOU CAN FOCUS ON THE HOT LEADS
          </h2>
          <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
            You don't need a receptionist. You don't need to work harder. You need a system that works while you work.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* OFFER 1 */}
          <div className="bg-primary-blue/5 border border-white/10 p-8 flex flex-col relative overflow-hidden group hover:border-primary-blue/50 transition-all">
            <div className="absolute top-0 right-0 bg-primary-blue/10 w-32 h-32 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="h-6 w-6 text-primary-blue" />
              <h3 className="font-heading font-black text-2xl text-white">INBOUND HUNTER</h3>
            </div>
            <p className="text-white font-bold text-lg mb-6">Your Always-On Front Desk.</p>
            
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex gap-4">
                <div className="min-w-[4px] bg-primary-blue rounded-full"></div>
                <p className="text-sm"><strong>No More Missed Calls - Automatic Answer:</strong> The second you miss a call, our system engages the customer.</p>
              </div>
              <div className="flex gap-4">
                <div className="min-w-[4px] bg-primary-blue rounded-full"></div>
                <p className="text-sm"><strong>Instant Response:</strong> No voicemail black holes. We text them instantly to capture the lead.</p>
              </div>
              <div className="flex gap-4">
                <div className="min-w-[4px] bg-primary-blue rounded-full"></div>
                <p className="text-sm"><strong>Protects Revenue:</strong> Stops them from calling the next guy on Google.</p>
              </div>
              <div className="flex gap-4">
                <div className="min-w-[4px] bg-primary-blue rounded-full"></div>
                <p className="text-sm"><strong>After-Hours Safety Net:</strong> Captures jobs while you sleep.</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-xs text-secondary-gray uppercase tracking-widest mb-1">Monthly</p>
                  <p className="text-3xl font-heading font-bold text-white">$1,199</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-secondary-gray uppercase tracking-widest mb-1">One-Time Setup</p>
                  <p className="text-xl font-heading font-bold text-white">$3,000</p>
                </div>
              </div>
              <Link to="/contact" className="block w-full text-center bg-white text-black font-heading font-bold py-4 hover:bg-primary-blue hover:text-white transition-all">
                BOOK A CALL
              </Link>
            </div>
          </div>

          {/* OFFER 2 */}
          <div className="bg-accent-red/5 border border-white/10 p-8 flex flex-col relative overflow-hidden group hover:border-accent-red/50 transition-all">
            <div className="absolute top-0 right-0 bg-accent-red/10 w-32 h-32 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="h-6 w-6 text-accent-red" />
              <h3 className="font-heading font-black text-2xl text-white">OUTBOUND HUNTER (SMS)</h3>
            </div>
            <p className="text-white font-bold text-lg mb-6">Unlock Hidden Revenue and Repeat Business.</p>
            
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex gap-4">
                <div className="min-w-[4px] bg-accent-red rounded-full"></div>
                <p className="text-sm"><strong>The Goldmine:</strong> You have hundreds of past customers sitting in your phone. We wake them up.</p>
              </div>
              <div className="flex gap-4">
                <div className="min-w-[4px] bg-accent-red rounded-full"></div>
                <p className="text-sm"><strong>Automatic Reactivation:</strong> Our system texts past clients to generate new jobs instantly.</p>
              </div>
              <div className="flex gap-4">
                <div className="min-w-[4px] bg-accent-red rounded-full"></div>
                <p className="text-sm"><strong>Zero Effort:</strong> No manual texting late at night. It runs on autopilot.</p>
              </div>
              <div className="flex gap-4">
                <div className="min-w-[4px] bg-accent-red rounded-full"></div>
                <p className="text-sm"><strong>Follow-Up Machine:</strong> Turns "let me think about it" into "when can you start?"</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-xs text-secondary-gray uppercase tracking-widest mb-1">Monthly</p>
                  <p className="text-3xl font-heading font-bold text-white">$1,199</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-secondary-gray uppercase tracking-widest mb-1">One-Time Setup</p>
                  <p className="text-xl font-heading font-bold text-white">$3,000</p>
                </div>
              </div>
              <Link to="/contact" className="block w-full text-center bg-accent-red text-white font-heading font-bold py-4 hover:bg-white hover:text-accent-red transition-all">
                BOOK A CALL
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* OBJECTIONS */}
      <section className="py-20 max-w-3xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl text-white mb-12 text-center">"BUT WILL IT WORK FOR ME?"</h2>
        <div className="space-y-8">
          <div>
            <h4 className="font-bold text-white text-xl mb-2">"I'm not tech savvy."</h4>
            <p className="text-secondary-gray">You don't have to be. We build it, install it, and turn it on. You just answer the jobs that come in.</p>
          </div>
          <div>
            <h4 className="font-bold text-white text-xl mb-2">"What if customers hate talking to AI?"</h4>
            <p className="text-secondary-gray">They hate voicemail more. They hate being ignored more. Our system is polite, fast, and helpful. They'll thank you for responding.</p>
          </div>
          <div>
            <h4 className="font-bold text-white text-xl mb-2">"I don't have time to manage another system."</h4>
            <p className="text-secondary-gray">This doesn't take time; it buys time. It removes the task of playing phone tag so you can focus on the work.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-secondary-gray text-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-4xl md:text-6xl mb-8 leading-tight">
            YOUR PHONE IS RINGING.<br /> PICK UP THE MONEY.
          </h2>
          <p className="text-xl text-primary/80 mb-12 font-medium">
            Fast setup. Cancel anytime. No contracts.
          </p>
          <Link 
            to="/contact"
            className="bg-accent-red text-white hover:bg-primary hover:text-white font-heading font-bold text-2xl py-6 px-16 rounded-none transition-all inline-block shadow-2xl"
          >
            BOOK A CALL
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Solopreneur;