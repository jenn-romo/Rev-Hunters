import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Building2, Clock, MapPin, ShieldCheck, PlayCircle, AlertCircle, XCircle } from 'lucide-react';

const PropertyManagement: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 px-4 max-w-7xl mx-auto w-full text-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-cyan/10 rounded-full blur-[120px] -z-10"></div>
        <span className="inline-block py-1 px-4 bg-accent-cyan/20 text-accent-cyan font-heading font-bold text-sm tracking-widest rounded-full mb-6">
          PROPERTY MANAGEMENT SOLUTIONS
        </span>
        <h1 className="font-heading font-black text-4xl md:text-7xl leading-tight text-primary-navy mb-8">
          MISSED CALLS ARE COSTING YOU <br />
          <span className="text-accent-cyan">OWNERS & TENANTS</span>
        </h1>
        <p className="text-xl md:text-2xl text-secondary-gray max-w-3xl mx-auto mb-12 font-medium">
          Every time a call goes unanswered, trust drops. Fast answers build trust. Trust keeps contracts longer.
        </p>
        <Link 
          to="/contact" 
          className="bg-accent-cyan text-primary-navy hover:bg-primary-navy hover:text-white font-heading font-bold text-lg py-5 px-12 rounded-none transition-all inline-block skew-x-[-5deg]"
        >
          <span className="inline-block skew-x-[5deg]">HELP ME FIX THIS NOW</span>
        </Link>
      </section>

      {/* THE PAIN */}
      <section className="py-20 bg-secondary-light/50 border-y border-primary-navy/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            <div className="flex items-start gap-6 border-l-4 border-accent-cyan pl-8">
              <p className="text-xl md:text-2xl text-primary-navy italic leading-relaxed">
                "If a homeowner calls and sits on hold for 30 minutes, how do you think they feel? They’re paying you to solve problems - not to wait."
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-secondary-gray text-lg">
              <p>Customer response time matters. Fast answers = happy homeowners. Happy homeowners = longer contracts.</p>
              <p className="font-bold text-primary-navy">This System Answers Every Call - For Every Property - 24/7. It doesn't leave people on hold.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO DEMO SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-primary-navy mb-4 uppercase">Watch the 3-minute demo</h2>
          <p className="text-secondary-gray">See how we handle route emergencies and maintenance requests automatically.</p>
        </div>
        <div className="aspect-video w-full max-w-5xl mx-auto bg-primary-navy/5 border border-primary-navy/10 flex items-center justify-center relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20 transition-transform group-hover:scale-105"></div>
          <PlayCircle className="w-24 h-24 text-accent-cyan relative z-10 group-hover:scale-110 transition-transform" />
          <div className="absolute bottom-4 left-4 font-mono text-xs text-primary-navy/40">PREVIEW: SYSTEM_PM_AGENT_V2.MP4</div>
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/contact" 
            className="bg-accent-cyan text-white hover:bg-primary-navy hover:text-white font-heading font-bold text-lg py-5 px-12 rounded-none transition-all inline-block shadow-2xl"
          >
            HELP ME FIX THIS NOW
          </Link>
        </div>
      </section>

      {/* FEATURES - WHAT IT DOES */}
      <section className="py-24 bg-gradient-to-b from-primary-blue/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading font-black text-4xl text-primary-navy mb-16 text-center">WHAT IT DOES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Clock className="w-8 h-8 text-accent-cyan" />, text: "Answers calls instantly 24/7" },
              { icon: <Building2 className="w-8 h-8 text-accent-cyan" />, text: "Routes calls by property & location" },
              { icon: <AlertCircle className="w-8 h-8 text-accent-cyan" />, text: "Handles after-hours emergencies" },
              { icon: <ShieldCheck className="w-8 h-8 text-accent-cyan" />, text: "Logs maintenance requests" },
              { icon: <PlayCircle className="w-8 h-8 text-accent-cyan" />, text: "Sends call summaries to your team" },
              { icon: <MapPin className="w-8 h-8 text-accent-cyan" />, text: "Escalates urgent issues to humans" },
              { icon: <XCircle className="w-8 h-8 text-accent-cyan" />, text: "Reduces angry calls & repeat complaints" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 p-8 bg-secondary-light/40 border border-primary-navy/5 hover:border-accent-cyan/30 transition-all group">
                <div className="group-hover:scale-110 transition-transform">{item.icon}</div>
                <span className="text-xl font-bold text-primary-navy">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MULTI-LOCATION SECTION */}
      <section className="py-24 border-y border-primary-navy/10 bg-secondary-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-black text-4xl text-primary-navy mb-8">BUILT FOR MULTI-LOCATION PROPERTY MANAGERS</h2>
              <p className="text-lg text-secondary-gray mb-12">
                Each property has different rules. Different vendors. Different emergency plans. This system knows the difference.
              </p>
              <ul className="space-y-6">
                {[
                  "Knows which property the caller is calling about",
                  "Follows your office hours & after-hours rules",
                  "Sends vendors the right requests",
                  "Keeps owners informed",
                  "Keeps your staff sane"
                ].map((li, i) => (
                  <li key={i} className="flex items-center gap-4 text-primary-navy font-medium text-lg">
                    <Check className="text-accent-cyan h-6 w-6" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-navy/5 p-12 border border-accent-cyan/20 relative">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-accent-cyan opacity-50">LOCATION_ENGINE_V1.0</div>
              <h3 className="font-heading font-bold text-2xl text-primary-navy mb-6 uppercase tracking-wider">The Simple Math</h3>
              <p className="text-xl text-secondary-gray leading-relaxed mb-8">
                If just one missed call turns into an angry owner, a bad review, or a lost contract - this pays for itself fast.
              </p>
              <div className="text-4xl font-heading font-black text-primary-navy">ROI POSITIVE</div>
              <div className="text-sm text-accent-cyan mt-2 uppercase tracking-widest">OWNER READY</div>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl text-primary-navy mb-4">WHAT MAKES THIS DIFFERENT</h2>
          <p className="text-secondary-gray text-xl">Other companies give you software. We manage the system for you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 border border-primary-navy/10">
            <h4 className="font-heading font-bold text-lg text-primary-navy mb-4">NO SCRIPTS</h4>
            <p className="text-secondary-gray">We configure everything for you based on your SOPs.</p>
          </div>
          <div className="p-8 border border-primary-navy/10">
            <h4 className="font-heading font-bold text-lg text-primary-navy mb-4">NO TOOLS</h4>
            <p className="text-secondary-gray">Your staff doesn't need to learn a single new platform.</p>
          </div>
          <div className="p-8 border border-primary-navy/10">
            <h4 className="font-heading font-bold text-lg text-primary-navy mb-4">NO GUESSING</h4>
            <p className="text-secondary-gray">We monitor, build, and fix it. You just get the results.</p>
          </div>
        </div>
      </section>

      {/* SETUP & QUALIFICATION */}
      <section className="py-24 bg-primary-navy/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-heading font-bold text-3xl text-primary-navy mb-8">SIMPLE SETUP</h3>
            <ul className="space-y-4">
              {[
                "Works with your current phone system",
                "No long contracts",
                "Cancel anytime",
                "No new software for staff",
                "Ongoing support included"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-secondary-gray text-lg">
                  <Check className="text-accent-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="p-8 border-l-4 border-green-500 bg-green-500/5">
              <h4 className="font-heading font-bold text-xl text-primary-navy mb-4">WHO THIS IS FOR</h4>
              <ul className="text-secondary-gray space-y-2">
                <li>✔ Property management companies</li>
                <li>✔ Multiple locations or large portfolios</li>
                <li>✔ High call volume</li>
                <li>✔ After-hours emergencies</li>
                <li>✔ Teams stretched thin</li>
              </ul>
            </div>
            <div className="p-8 border-l-4 border-red-500 bg-red-500/5 opacity-60">
              <h4 className="font-heading font-bold text-xl text-primary-navy mb-4">WHO THIS IS NOT FOR</h4>
              <ul className="text-secondary-gray space-y-2">
                <li>✖ Very small portfolios</li>
                <li>✖ One-person operations</li>
                <li>✖ DIY phone systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 text-center bg-primary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-4xl md:text-6xl text-primary-navy mb-8">
            IF YOU’RE MISSING CALLS, <br />
            THIS IS WORTH A LOOK
          </h2>
          <p className="text-xl text-secondary-gray mb-12">
            We only take on a limited number of property management companies each month. Book your live demo to see if it’s a fit.
          </p>
          <Link 
            to="/contact" 
            className="bg-accent-cyan text-primary-navy hover:bg-primary-navy hover:text-white font-heading font-bold text-2xl py-6 px-16 rounded-none transition-all inline-block shadow-2xl skew-x-[-10deg]"
          >
            <span className="inline-block skew-x-[10deg]">HELP ME FIX THIS NOW</span>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PropertyManagement;