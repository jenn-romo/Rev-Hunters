import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Network, ShieldCheck, Workflow, BarChart3, Users, CheckSquare, Phone } from 'lucide-react';

const Enterprise: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-primary text-secondary-gray font-body">
      
      {/* HERO SECTION */}
      <section className="relative py-24 md:py-32 px-4 max-w-6xl mx-auto w-full text-center">
        <div className="absolute top-20 right-0 left-0 mx-auto w-[600px] h-[400px] bg-primary-blue/5 rounded-full blur-[120px] -z-10"></div>
        <div className="inline-block border border-white/20 bg-white/5 text-white px-4 py-1 rounded font-bold text-sm mb-8 tracking-widest uppercase">
          For B2B Enterprise Organizations
        </div>
        <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl leading-tight text-white mb-8">
          YOUR OPERATIONS ARE <br/><span className="text-accent-red">LEAKING REVENUE</span>.
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-medium">
          When your business gets busy, doing things by hand stops working. <br/>
          You need a simple system that answers calls right and follows up every time.
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

      {/* OPERATIONAL PAIN */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-black text-3xl text-white mb-8">SCALE EXPOSES WEAKNESS</h2>
              <p className="text-lg leading-relaxed mb-6">
                When you were small, you could rely on heroics. Now, relying on individuals to "just work harder" is an operational risk.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="text-accent-red mr-4 h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Inbound Leakage</strong>
                    <span className="text-secondary-gray">Calls are missed, mishandled, or routed to the wrong department.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Network className="text-accent-red mr-4 h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Inconsistent Execution</strong>
                    <span className="text-secondary-gray">No standardized handling across locations or teams.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <BarChart3 className="text-accent-red mr-4 h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Blind Spots</strong>
                    <span className="text-secondary-gray">No visibility into what happens when calls aren't answered.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="text-accent-red mr-4 h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white block">Headcount Dependency</strong>
                    <span className="text-secondary-gray">Growth is constrained by human availability.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-black border border-white/10 p-10">
              <h3 className="font-heading font-bold text-xl text-white mb-6 uppercase tracking-wider">The Failure of "More People"</h3>
              <p className="text-secondary-gray mb-6">
                You've tried hiring more agents. You've tried outsourcing. You've tried basic IVRs.
              </p>
              <p className="text-secondary-gray mb-8">
                The result is always the same: <strong>More overhead. Same friction.</strong>
              </p>
              <div className="p-4 border-l-4 border-accent-red bg-accent-red/5">
                <p className="text-white italic">
                  "Manual follow-up creates delays. Delays kill deals. Inconsistent routing destroys customer experience."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE MECHANISM */}
      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-heading font-black text-4xl text-white mb-16">ENTERPRISE ORCHESTRATION</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-8 border border-white/10 bg-black/40 hover:border-primary-blue/50 transition-colors">
            <Workflow className="h-10 w-10 text-primary-blue mb-6" />
            <h3 className="font-heading font-bold text-xl text-white mb-4">Intelligent Routing</h3>
            <p className="text-secondary-gray">
              We don't just answer calls. We route them based on rules, availability, intent, and context. Every lead lands exactly where it belongs.
            </p>
          </div>
          <div className="p-8 border border-white/10 bg-black/40 hover:border-primary-blue/50 transition-colors">
            <CheckSquare className="h-10 w-10 text-primary-blue mb-6" />
            <h3 className="font-heading font-bold text-xl text-white mb-4">Automated Scale</h3>
            <p className="text-secondary-gray">
              Handle 10 calls or 10,000. The system doesn't get overwhelmed, take breaks, or call in sick.
            </p>
          </div>
          <div className="p-8 border border-white/10 bg-black/40 hover:border-primary-blue/50 transition-colors">
            <Building2 className="h-10 w-10 text-primary-blue mb-6" />
            <h3 className="font-heading font-bold text-xl text-white mb-4">Total Visibility</h3>
            <p className="text-secondary-gray">
              Every interaction is logged, transcribed, and analyzed. You gain complete control over your customer experience quality.
            </p>
          </div>
        </div>
      </section>

      {/* THE OFFERS */}
      <section className="py-24 bg-gradient-to-b from-primary-blue/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center font-heading font-black text-4xl text-white mb-16">ENTERPRISE SOLUTIONS</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* OFFER 1: INBOUND */}
            <div className="bg-black border border-white/10 p-10 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary-blue"></div>
              <h3 className="font-heading font-black text-3xl text-white mb-2">INBOUND HUNTER</h3>
              <p className="text-primary-blue font-bold tracking-widest text-sm mb-6 uppercase">Enterprise Edition</p>
              
              <div className="space-y-6 mb-10 flex-grow">
                <p className="text-secondary-gray">
                  Revenue protection at scale. Intelligent call handling without hiring.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-white"><span className="text-primary-blue mr-2">●</span> Answers calls automatically</li>
                  <li className="flex items-start text-white"><span className="text-primary-blue mr-2">●</span> Complex routing logic & workflows</li>
                  <li className="flex items-start text-white"><span className="text-primary-blue mr-2">●</span> Overflow & after-hours handling</li>
                  <li className="flex items-start text-white"><span className="text-primary-blue mr-2">●</span> CRM & Data Capture Integration</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-8">
                <div className="mb-6">
                  <p className="text-3xl font-heading font-bold text-white">$2,797<span className="text-lg text-secondary-gray font-normal"> / month</span></p>
                  <p className="text-xs text-secondary-gray mt-1">Single location base. Custom quotes for multi-location.</p>
                </div>
                <Link to="/contact" className="block w-full text-center bg-white text-black font-heading font-bold py-4 hover:bg-primary-blue hover:text-white transition-all">
                  BOOK A CALL
                </Link>
              </div>
            </div>

            {/* OFFER 2: OUTBOUND */}
            <div className="bg-black border border-white/10 p-10 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-accent-red"></div>
              <h3 className="font-heading font-black text-3xl text-white mb-2">OUTBOUND HUNTER</h3>
              <p className="text-accent-red font-bold tracking-widest text-sm mb-6 uppercase">Enterprise Edition</p>
              
              <div className="space-y-6 mb-10 flex-grow">
                <p className="text-secondary-gray">
                  Sales enablement at scale. Consistent outreach without burnout.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-white"><span className="text-accent-red mr-2">●</span> Executes outbound campaigns at scale</li>
                  <li className="flex items-start text-white"><span className="text-accent-red mr-2">●</span> Consistent messaging & follow-up</li>
                  <li className="flex items-start text-white"><span className="text-accent-red mr-2">●</span> Supports SDR & Sales Teams</li>
                  <li className="flex items-start text-white"><span className="text-accent-red mr-2">●</span> Converts sales intelligence into action</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-8">
                <div className="mb-6">
                  <p className="text-3xl font-heading font-bold text-white">$3,299<span className="text-lg text-secondary-gray font-normal"> / month</span></p>
                  <p className="text-xs text-secondary-gray mt-1">Client-provided intelligence. Custom campaigns available.</p>
                </div>
                <Link to="/contact" className="block w-full text-center bg-accent-red text-white font-heading font-bold py-4 hover:bg-white hover:text-accent-red transition-all">
                  BOOK A CALL
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OBJECTIONS */}
      <section className="py-20 max-w-4xl mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl text-white mb-12 text-center">OPERATIONAL REALITY CHECK</h2>
        <div className="space-y-8">
          <div className="p-6 border-l-2 border-white/20">
            <h4 className="font-bold text-white text-xl mb-2">"Our workflows are too complex."</h4>
            <p className="text-secondary-gray">Complexity is why you need this. We build custom logic to match your exact operational requirements. Standard IVRs fail here; our system thrives.</p>
          </div>
          <div className="p-6 border-l-2 border-white/20">
            <h4 className="font-bold text-white text-xl mb-2">"We already have systems in place."</h4>
            <p className="text-secondary-gray">We don't replace your CRM or your team. We complement them. We act as the orchestration layer that ensures your existing systems actually capture the data they need.</p>
          </div>
          <div className="p-6 border-l-2 border-white/20">
            <h4 className="font-bold text-white text-xl mb-2">"This won't work in an enterprise environment."</h4>
            <p className="text-secondary-gray">This is built for scale. It is designed specifically to handle the volume and consistency that enterprise environments demand, without the friction of managing more humans.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-secondary-gray text-primary text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-4xl md:text-6xl mb-8 leading-tight">
            STOP THE BLEEDING.<br /> SCALE THE REVENUE.
          </h2>
          <p className="text-xl text-primary/80 mb-12 font-medium">
            Dedicated setup. Enterprise support. Custom scoping.
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

export default Enterprise;