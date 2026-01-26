import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const LinkedinGrowth: React.FC = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('offer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full bg-primary text-secondary-gray font-body">
      
      {/* HERO */}
      <section className="relative py-24 md:py-32 px-4 max-w-5xl mx-auto w-full text-center">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-block border border-accent-red/50 bg-accent-red/10 text-accent-red px-6 py-3 rounded font-bold text-xl md:text-3xl mb-8 tracking-widest uppercase">
          For B2B Founders & Service Providers
        </div>
        <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl leading-tight text-white mb-8">
          HOW TO TURN <span className="text-primary-blue">60 MINUTES</span> OF TALKING INTO <span className="text-primary-blue">30 DAYS</span> OF LEADS.
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-bold">
          Without writing a single word. Without acting like an "influencer." Without wasting hours on LinkedIn.
        </p>
        <button 
          onClick={scrollToPricing}
          className="bg-accent-red text-white hover:bg-white hover:text-accent-red font-heading font-bold text-2xl py-6 px-12 rounded-none transition-all inline-block shadow-2xl skew-x-[-5deg]"
        >
          <span className="inline-block skew-x-[5deg]">I WANT THIS</span>
        </button>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-white mb-12 text-center uppercase">
            You Are The Best Kept Secret In Your Industry. <br/>
            <span className="text-accent-red">And It's Costing You A Fortune.</span>
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <p>
              You do incredible work. You deliver high-ticket services. You change your clients' lives.
            </p>
            <p>
              But when a prospect looks you up on LinkedIn? <strong className="text-white">Crickets.</strong>
            </p>
            <p>
              Maybe you haven't posted in three months. Maybe you share a random article once in a while. Or maybe you tried to hire a cheap VA who made you sound like a robot.
            </p>
            <p>
              You know you "should" be posting. You see your competitors—<em className="text-white">who aren't half as good as you</em>—getting all the attention, the speaking gigs, and the easy inbound leads.
            </p>
            <p>
              But you’re stuck because:
            </p>
            <ul className="space-y-4 ml-4 md:ml-8 mt-6">
              {[
                "You don’t have the time to sit and write for hours.",
                "You’re not tech savvy and hate the algorithm games.",
                "You feel tedious and overwhelmed every time you open the app.",
                "Cold outreach and 1:1 selling is exhausting you.",
                "You have no idea what to say that doesn't sound like bragging."
              ].map((pain, i) => (
                <li key={i} className="flex items-start text-white font-bold">
                  <X className="text-accent-red mr-4 h-6 w-6 flex-shrink-0" />
                  "{pain}"
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* THE FAILED SOLUTIONS */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="font-heading font-bold text-2xl text-white mb-4">SO YOU TRY TO FIX IT...</h3>
          <p className="text-secondary-gray">But you end up right back where you started.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-white/10 p-8 bg-black">
            <h4 className="font-bold text-white text-3xl mb-4">The "AI Tool" Trap</h4>
            <p className="text-xl text-secondary-gray">You bought a tool. It wrote 50 posts in seconds. They all sounded generic. You posted one, got zero likes, and felt embarrassed.</p>
          </div>
          <div className="border border-white/10 p-8 bg-black">
            <h4 className="font-bold text-white text-3xl mb-4">The "Motivation" Trap</h4>
            <p className="text-xl text-secondary-gray">You told yourself you'd wake up early to write. You did it for three days. Then a client crisis hit, and you haven't posted since.</p>
          </div>
          <div className="border border-white/10 p-8 bg-black">
            <h4 className="font-bold text-white text-3xl mb-4">The "Outsourcing" Trap</h4>
            <p className="text-xl text-secondary-gray">You hired an agency. They wrote content that didn't sound like you. Your network could smell the fake from a mile away.</p>
          </div>
          <div className="border border-white/10 p-8 bg-black">
            <h4 className="font-bold text-white text-3xl mb-4">The "Cold DM" Trap</h4>
            <p className="text-xl text-secondary-gray">Since inbound wasn't working, you went back to spamming inboxes. It's soul-sucking and barely works.</p>
          </div>
        </div>
      </section>

      {/* THE MECHANISM */}
      <section className="py-24 bg-gradient-to-b from-primary-blue/10 to-transparent">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-blue font-bold tracking-widest uppercase mb-4 block">The Solution</span>
            <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-6">
              YOUR VOICE. OUR ENGINE.
            </h2>
            <p className="text-xl text-secondary-gray max-w-3xl mx-auto">
              We built a system that extracts your expertise and turns it into authority—without you touching a keyboard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative p-8 border border-white/20 bg-black/60 rounded-lg">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary-blue text-black font-black p-3 rounded-full w-12 h-12 flex items-center justify-center text-xl">1</div>
              <h3 className="font-heading font-bold text-xl text-white mb-4 text-center mt-4">WE TALK</h3>
              <p className="text-center">
                Once a month, we hop on a Zoom call. We interview you. We ask the right questions to pull out your stories, your wins, and your expertise. Or, you send us 60-second voice notes whenever an idea strikes.
              </p>
            </div>

            <div className="relative p-8 border border-white/20 bg-black/60 rounded-lg">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary-blue text-black font-black p-3 rounded-full w-12 h-12 flex items-center justify-center text-xl">2</div>
              <h3 className="font-heading font-bold text-xl text-white mb-4 text-center mt-4">WE BUILD</h3>
              <p className="text-center">
                Our copywriters turn your spoken words into high-converting LinkedIn posts. We keep your tone, your slang, and your attitude. It reads exactly like you wrote it.
              </p>
            </div>

            <div className="relative p-8 border border-white/20 bg-black/60 rounded-lg">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary-blue text-black font-black p-3 rounded-full w-12 h-12 flex items-center justify-center text-xl">3</div>
              <h3 className="font-heading font-bold text-xl text-white mb-4 text-center mt-4">WE DEPLOY</h3>
              <p className="text-center">
                We schedule everything. Your profile stays active every single day. You become "Top of Mind" for everyone in your network without lifting a finger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE DESIRED END STATE (PROOF) */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-3xl text-white mb-8">THIS ISN'T THEORY. IT'S MATH.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-12">
            <div>
              <p className="text-lg text-secondary-gray mb-4">
                When you post consistently, weird things start happening.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-white"><Check className="text-primary-blue mr-3 h-5 w-5"/> Recruiters reach out with opportunities.</li>
                <li className="flex items-center text-white"><Check className="text-primary-blue mr-3 h-5 w-5"/> Old prospects circle back ("I see you everywhere").</li>
                <li className="flex items-center text-white"><Check className="text-primary-blue mr-3 h-5 w-5"/> Investors and partners take you seriously.</li>
                <li className="flex items-center text-white"><Check className="text-primary-blue mr-3 h-5 w-5"/> Leads come to YOU, already sold on your expertise.</li>
              </ul>
            </div>
            <div className="bg-white/5 p-6 border-l-4 border-primary-blue">
              <p className="italic text-lg text-secondary-gray mb-4">
                "I had no time to post. Using this system, I got inbound recruiter outreach within 2 weeks just from the increased visibility."
              </p>
              <p className="font-bold text-white">— Founder using the RH System</p>
            </div>
          </div>
          <p className="text-xl font-bold text-white">
            Imagine waking up to an inbox of people asking "Can we talk?" instead of you begging for 15 minutes of their time.
          </p>
        </div>
      </section>

      {/* THE OFFERS */}
      <section id="offer" className="py-24 max-w-6xl mx-auto px-4">
        <h2 className="text-center font-heading font-black text-5xl text-white mb-6">CHOOSE YOUR WEAPON</h2>
        <p className="text-center text-secondary-gray mb-16 text-xl">Cancel anytime. No contracts. Fast setup.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* OPTION 1: Minimum RH Linkedin Package */}
          <div className="bg-black border border-white/10 p-8 flex flex-col h-full hover:border-white/30 transition-all">
            <h3 className="font-heading font-bold text-2xl text-white mb-2">Minimum RH Linkedin Package</h3>
            <p className="text-secondary-gray text-sm mb-6 min-h-[40px]">For the founder who just needs the strategy.</p>
            <div className="mb-8">
              <span className="text-4xl font-heading font-bold text-white">$497</span>
              <span className="text-secondary-gray">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start text-xl text-secondary-gray"><Check className="h-6 w-6 text-primary-blue mr-3 mt-1"/> Access to RH 60 second voice to post system</li>
              <li className="flex items-start text-xl text-secondary-gray"><Check className="h-6 w-6 text-primary-blue mr-3 mt-1"/> Weekly Content Prompts</li>
              <li className="flex items-start text-xl text-secondary-gray"><Check className="h-6 w-6 text-primary-blue mr-3 mt-1"/> 20 voice note submissions/mo</li>
              <li className="flex items-start text-xl text-secondary-gray"><Check className="h-6 w-6 text-primary-blue mr-3 mt-1"/> 20 posts/month</li>
              <li className="flex items-start text-xl text-secondary-gray"><Check className="h-6 w-6 text-primary-blue mr-3 mt-1"/> Custom AI Copywriter</li>
            </ul>
            <Link to="/contact" className="w-full block text-center border border-white text-white font-heading font-bold py-4 hover:bg-white hover:text-black transition-all">
              I WANT THIS
            </Link>
          </div>

          {/* OPTION 2: DONE WITH YOU (HIGHLIGHT) */}
          <div className="bg-white/5 border-2 border-primary-blue p-8 flex flex-col h-full relative transform md:-translate-y-4 shadow-2xl shadow-primary-blue/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary-blue text-black font-bold px-4 py-1 text-xs tracking-widest uppercase">Most Popular</div>
            <h3 className="font-heading font-bold text-2xl text-white mb-2">DONE-WITH-YOU</h3>
            <p className="text-secondary-gray text-sm mb-6 min-h-[40px]">The "Voice-to-Cash" System. We do the heavy lifting.</p>
            <div className="mb-8">
              <span className="text-4xl font-heading font-bold text-white">$1,197</span>
              <span className="text-secondary-gray">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start text-xl text-white font-bold"><Check className="h-6 w-6 text-accent-red mr-3 mt-1"/> 30 scheduled executive posts per month</li>
              <li className="flex items-start text-xl text-white font-bold"><Check className="h-6 w-6 text-accent-red mr-3 mt-1"/> 1 content strategy call/month</li>
              <li className="flex items-start text-xl text-white font-bold"><Check className="h-6 w-6 text-accent-red mr-3 mt-1"/> Custom AI Copywriter</li>
              <li className="flex items-start text-xl text-white font-bold"><Check className="h-6 w-6 text-accent-red mr-3 mt-1"/> Unlimited on demand posting</li>
              <li className="flex items-start text-xl text-white font-bold"><Check className="h-6 w-6 text-accent-red mr-3 mt-1"/> Unlimited Voice Note Submissions</li>
              <li className="flex items-start text-xl text-white font-bold"><Check className="h-6 w-6 text-accent-red mr-3 mt-1"/> Image creation</li>
            </ul>
            <Link to="/contact" className="w-full block text-center bg-accent-red text-white font-heading font-bold py-4 hover:bg-white hover:text-accent-red transition-all">
              I WANT THIS
            </Link>
          </div>

          {/* OPTION 3: CONNECT + ENGAGE */}
          <div className="bg-black border border-white/10 p-8 flex flex-col h-full hover:border-white/30 transition-all">
            <h3 className="font-heading font-bold text-2xl text-white mb-2">CONNECT + ENGAGE</h3>
            <p className="text-secondary-gray text-sm mb-6 min-h-[40px]">Aggressive network expansion.</p>
            <div className="mb-8">
              <span className="text-4xl font-heading font-bold text-white">$1,397</span>
              <span className="text-secondary-gray">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start text-xl text-white font-bold"><Check className="h-6 w-6 text-primary-blue mr-3 mt-1"/> 100 Targeted Connections / Mo</li>
              <li className="flex items-start text-xl text-white font-bold"><Check className="h-6 w-6 text-primary-blue mr-3 mt-1"/> Daily Likes & Comments (M-F)</li>
              <li className="flex items-start text-xl text-secondary-gray"><Check className="h-6 w-6 text-primary-blue mr-3 mt-1"/> Amplifies Relationships</li>
            </ul>
            <Link to="/contact" className="w-full block text-center border border-white text-white font-heading font-bold py-4 hover:bg-white hover:text-black transition-all">
              I WANT THIS
            </Link>
          </div>

        </div>
      </section>

      {/* FAQ / OBJECTIONS */}
      <section className="py-20 max-w-3xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl text-white mb-12 text-center">STILL ON THE FENCE?</h2>
        <div className="space-y-8">
          <div>
            <h4 className="font-bold text-white text-xl mb-2">"This won't work for me / my industry is different."</h4>
            <p className="text-secondary-gray">If you sell to humans, it works. We customize the voice and strategy to you. It's not a template; it's your expertise, amplified.</p>
          </div>
          <div>
            <h4 className="font-bold text-white text-xl mb-2">"What if I don't get prospects?"</h4>
            <p className="text-secondary-gray">Visibility creates opportunity. If you stay invisible, you are guaranteed to get zero prospects from LinkedIn. This system guarantees you get seen.</p>
          </div>
          <div>
            <h4 className="font-bold text-white text-xl mb-2">"I don't have time."</h4>
            <p className="text-secondary-gray">That is exactly why you need this. You give us 1 hour a month. We give you back 20+ hours of writing, editing, and stressing.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-secondary-gray text-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-4xl md:text-6xl mb-8 leading-tight">
            STOP BEING INVISIBLE.
          </h2>
          <p className="text-xl text-primary/80 mb-12 font-medium">
            Your competitors are loud. You are better. It's time they found out.
          </p>
          <button 
            onClick={scrollToPricing}
            className="bg-accent-red text-white hover:bg-primary hover:text-white font-heading font-bold text-2xl py-6 px-16 rounded-none transition-all inline-block shadow-2xl"
          >
            I WANT THIS
          </button>
        </div>
      </section>

    </div>
  );
};

export default LinkedinGrowth;