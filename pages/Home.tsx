import React from 'react';
import { Link } from 'react-router-dom';
import { Check, MapPin, TrendingUp, Video, Target, DollarSign, Clock, Brain, Handshake } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-white text-primary-navy font-body">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-4 w-full text-center bg-white border-b border-primary-navy/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-cyan/10 rounded-full blur-[100px] -z-10"></div>
          <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-8xl leading-tight tracking-tighter text-primary-navy mb-8">
            YOU COAT FLOORS. <br/>
            <span className="text-accent-cyan">WE FILL YOUR CALENDAR.</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-navy/80 max-w-4xl mx-auto mb-12 font-medium leading-relaxed">
            Peace of mind. A real partner. Revenue you can count on.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-accent-cyan text-primary-navy hover:bg-primary-navy hover:text-white font-heading font-bold text-xl py-6 px-12 transition-all inline-block shadow-2xl uppercase tracking-wider rounded-full hover:scale-105"
            >
              Claim Your Territory
            </Link>
            <p className="text-sm md:text-base text-primary-navy/70 font-bold uppercase tracking-widest flex flex-wrap items-center justify-center gap-2">
              <span>Performance-based</span> <span className="text-accent-cyan font-black">&middot;</span> <span>Exclusive territory available</span>
            </p>
          </div>
        </div>
      </section>

      {/* 3 PILLARS */}
      <section className="py-24 bg-secondary-light border-y border-primary-navy/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl md:text-5xl text-primary-navy mb-4">
              THREE THINGS WE GIVE EVERY PARTNER.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-xl shadow-sm border border-primary-navy/5 text-center transition-all hover:shadow-md hover:-translate-y-1">
              <Brain className="w-12 h-12 mx-auto text-accent-cyan mb-6" />
              <h3 className="font-heading font-bold text-2xl text-primary-navy mb-4">Peace of Mind</h3>
              <p className="text-secondary-gray text-lg leading-relaxed">
                Stop lying awake wondering where next month's work is coming from. We handle that.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-sm border border-primary-navy/5 text-center transition-all hover:shadow-md hover:-translate-y-1">
              <Handshake className="w-12 h-12 mx-auto text-accent-cyan mb-6" />
              <h3 className="font-heading font-bold text-2xl text-primary-navy mb-4">Real Partnership</h3>
              <p className="text-secondary-gray text-lg leading-relaxed">
                We only get paid when you get paid. Our fee is on new jobs we create. Never your existing customers.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-sm border border-primary-navy/5 text-center transition-all hover:shadow-md hover:-translate-y-1">
              <TrendingUp className="w-12 h-12 mx-auto text-accent-cyan mb-6" />
              <h3 className="font-heading font-bold text-2xl text-primary-navy mb-4">Predictable Revenue</h3>
              <p className="text-secondary-gray text-lg leading-relaxed">
                A steady, trackable flow of booked estimates - so you can hire, add a truck, and actually plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 bg-secondary-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-black text-4xl md:text-5xl text-primary-navy mb-8 leading-tight">
                YOU'RE RUNNING A GREAT BUSINESS. <br/>
                <span className="text-accent-cyan">THE MARKETING SIDE IS KILLING YOU.</span>
              </h2>
              <p className="text-xl text-secondary-gray leading-relaxed mb-6 font-medium">
                You're the estimator, the salesperson, and the technician - all in one day. When the work slows down, there's no one to pick up the phone and fix it. That's the trap.
              </p>
            </div>
            <div className="bg-white p-10 border border-primary-navy/5 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-[40px]"></div>
              <ul className="space-y-8 relative z-10">
                <li className="flex items-start group">
                  <div className="w-12 h-12 bg-secondary-light rounded flex items-center justify-center mr-6 border border-primary-navy/10 flex-shrink-0 group-hover:bg-accent-cyan/10 transition-colors">
                    <TrendingUp className="text-primary-navy h-6 w-6" />
                  </div>
                  <div>
                    <strong className="text-primary-navy text-xl block mb-1">Feast or Famine</strong>
                    <span className="text-secondary-gray text-lg">One great month, then three quiet weeks. You can't plan. You can't hire. You can't breathe.</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="w-12 h-12 bg-secondary-light rounded flex items-center justify-center mr-6 border border-primary-navy/10 flex-shrink-0 group-hover:bg-accent-cyan/10 transition-colors">
                    <DollarSign className="text-primary-navy h-6 w-6" />
                  </div>
                  <div>
                    <strong className="text-primary-navy text-xl block mb-1">Wasted Ad Spend</strong>
                    <span className="text-secondary-gray text-lg">Money spent on ads that bring in tire-kickers, not buyers. Nothing to show at the end of the week.</span>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="w-12 h-12 bg-secondary-light rounded flex items-center justify-center mr-6 border border-primary-navy/10 flex-shrink-0 group-hover:bg-accent-cyan/10 transition-colors">
                    <Clock className="text-primary-navy h-6 w-6" />
                  </div>
                  <div>
                    <strong className="text-primary-navy text-xl block mb-1">Your Time Burned</strong>
                    <span className="text-secondary-gray text-lg">Chasing leads that never book. Quoting jobs that go cold. Hours you'll never get back.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROMISE */}
      <section className="py-24 bg-primary-navy relative">
        <div className="absolute inset-0 bg-accent-cyan/5"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-8">
            WHAT IF NEXT MONTH WAS ALREADY HANDLED?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-6 font-medium">
            Imagine opening your schedule and seeing it filled - weeks out. Imagine knowing your numbers before the month starts. Imagine saying yes to a second truck because the work is already lined up.
          </p>
          <p className="text-2xl md:text-3xl text-accent-cyan font-black leading-relaxed mt-10">
            That's not luck. That's what Revenue Hunters builds for you.
          </p>
        </div>
      </section>

      {/* PROOF */}
      <section className="py-24 bg-secondary-light border-y border-primary-navy/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl md:text-6xl text-primary-navy max-w-4xl mx-auto mb-6 leading-tight">
              WE DON'T JUST PROMISE VIEWS. <br className="hidden md:block" />WE DELIVER BOOKED ESTIMATES.
            </h2>
            <p className="text-xl text-secondary-gray max-w-3xl mx-auto font-medium">
              Real 60-day results we drove for a home-services business:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white border border-primary-navy/10 rounded-2xl p-6 lg:p-8 text-center hover:border-accent-cyan transition-colors shadow-sm">
              <div className="text-5xl lg:text-4xl xl:text-5xl font-heading font-black text-primary-navy mb-4 whitespace-nowrap tracking-tight">660K+</div>
              <p className="text-sm text-secondary-gray mt-2">Views across Instagram, Facebook & TikTok in 60 days</p>
            </div>
            <div className="bg-white border border-primary-navy/10 rounded-2xl p-6 lg:p-8 text-center hover:border-accent-cyan transition-colors shadow-sm">
              <div className="text-5xl lg:text-4xl xl:text-5xl font-heading font-black text-primary-navy mb-4 whitespace-nowrap tracking-tight">290K+</div>
              <p className="text-sm text-secondary-gray mt-2">Accounts reached in their local target areas</p>
            </div>
            <div className="bg-white border border-primary-navy/10 rounded-2xl p-6 lg:p-8 text-center hover:border-accent-cyan transition-colors shadow-sm">
              <div className="text-5xl lg:text-4xl xl:text-5xl font-heading font-black text-primary-navy mb-4 whitespace-nowrap tracking-tight">277</div>
              <p className="text-sm text-secondary-gray mt-2">Potential leads generated for the business</p>
            </div>
            <div className="bg-white border border-primary-navy/10 rounded-2xl p-6 lg:p-8 text-center hover:border-accent-cyan transition-colors shadow-sm">
              <div className="text-5xl lg:text-4xl xl:text-5xl font-heading font-black text-primary-navy mb-4 whitespace-nowrap tracking-tight">$100K+</div>
              <p className="text-sm text-secondary-gray mt-2">In estimates given out in just 45 days</p>
            </div>
          </div>
          
          
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-secondary-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="font-heading font-black text-4xl md:text-5xl text-primary-navy">
              THREE STEPS. ZERO GUESSING.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-10 border border-primary-navy/10 bg-white rounded-2xl hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 text-7xl font-heading font-black text-secondary-light group-hover:text-accent-cyan/10 transition-colors">01</div>
              <Video className="text-accent-cyan h-12 w-12 mb-8 relative z-10" />
              <h3 className="font-heading font-bold text-2xl text-primary-navy mb-4 relative z-10">We create the content & run the ads</h3>
              <p className="text-secondary-gray text-lg leading-relaxed relative z-10">
                We produce videos that get real homeowners stopping the scroll. We take what's working and turn it into a paid Meta ad in your local area.
              </p>
            </div>
            <div className="p-10 border border-primary-navy/10 bg-white rounded-2xl hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 text-7xl font-heading font-black text-secondary-light group-hover:text-accent-cyan/10 transition-colors">02</div>
              <Target className="text-accent-cyan h-12 w-12 mb-8 relative z-10" />
              <h3 className="font-heading font-bold text-2xl text-primary-navy mb-4 relative z-10">We answer every lead immediately</h3>
              <p className="text-secondary-gray text-lg leading-relaxed relative z-10">
                Every call, every text, every form fill - our team is on it right away. We qualify the lead, send them an AI image of their own garage with their chosen coating color, and book them for an estimate.
              </p>
            </div>
            <div className="p-10 border border-primary-navy/10 bg-white rounded-2xl hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 text-7xl font-heading font-black text-secondary-light group-hover:text-accent-cyan/10 transition-colors">03</div>
              <TrendingUp className="text-accent-cyan h-12 w-12 mb-8 relative z-10" />
              <h3 className="font-heading font-bold text-2xl text-primary-navy mb-4 relative z-10">You show up to ready buyers</h3>
              <p className="text-secondary-gray text-lg leading-relaxed relative z-10">
                No cold leads. No tire-kickers. You arrive to homeowners who have already seen your work, paid a deposit, and are ready to move forward. You grow your crew and your fleet around real, booked demand.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-accent-cyan/10 border border-accent-cyan/20 p-8 rounded-2xl max-w-4xl mx-auto flex items-start gap-6">
            <div className="text-accent-cyan text-3xl">💡</div>
            <p className="text-primary-navy text-lg font-medium leading-relaxed">
              We run a cost plus model where you only pay for the ads and we charge a small management fee.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-24 bg-primary-navy border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
              EVERYTHING YOU NEED.
            </h2>
            <p className="text-2xl text-accent-cyan font-bold">Nothing you have to manage.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              "Immediate phone, text, and email follow-up on the leads we drive",
              "AI-generated garage visualization sent to each lead during the call",
              "Monthly reporting and a growth review call",
              "A capacity and hiring plan so growth never outruns your team",
              "Options to lock in exclusive rights to your city or region"
            ].map((item, index) => (
              <div key={index} className="flex items-center p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                <Check className="h-6 w-6 text-accent-cyan mr-4 flex-shrink-0" />
                <span className="text-lg text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY A PARTNER */}
      <section className="py-24 bg-secondary-light">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-primary-navy mb-8 leading-tight">
            WE ONLY GET PAID LIKE PARTNERS WHEN WE PERFORM LIKE PARTNERS.
          </h2>
          <p className="text-2xl text-secondary-gray leading-relaxed mb-8 max-w-4xl mx-auto">
            Our commission applies only to the new booked work we generate and track through our deals dashboard - never your existing customers.
          </p>
          <p className="text-3xl text-primary-navy font-black pb-6">
            Revenue Hunters does not win unless you win. That is not a slogan. It is how we get paid.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-primary-navy/10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-primary-navy mb-16 text-center">
            QUESTIONS WE GET FROM OWNERS.
          </h2>
          
          <div className="space-y-10">
            <div>
              <h4 className="font-heading font-bold text-2xl text-primary-navy mb-3">Do you take a cut of my current customers?</h4>
              <p className="text-secondary-gray text-lg leading-relaxed">Never. Our cut is only on new booked estimates we generate and can prove through our tracking dashboard.</p>
            </div>
            <div className="h-px bg-primary-navy/10"></div>
            <div>
              <h4 className="font-heading font-bold text-2xl text-primary-navy mb-3">What does this cost me?</h4>
              <p className="text-secondary-gray text-lg leading-relaxed">We run a cost plus model where you only pay for the ads and we charge a small management fee, plus a commission on the new work we book for you.</p>
            </div>
            <div className="h-px bg-primary-navy/10"></div>
            <div>
              <h4 className="font-heading font-bold text-2xl text-primary-navy mb-3">What if I cannot keep up with the work?</h4>
              <p className="text-secondary-gray text-lg leading-relaxed">That is the whole point. We plan your capacity alongside your revenue so you are always ready for the next truck.</p>
            </div>
            <div className="h-px bg-primary-navy/10"></div>
            <div>
              <h4 className="font-heading font-bold text-2xl text-primary-navy mb-3">Am I locked in?</h4>
              <p className="text-secondary-gray text-lg leading-relaxed">We start with a 90-day ramp and then re-evaluate a longer partnership afterwards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-primary-navy text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 left-0 mx-auto w-[600px] h-[400px] bg-accent-cyan/10 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 z-10 relative">
          <MapPin className="h-16 w-16 mx-auto text-accent-cyan mb-8" />
          <h2 className="font-heading font-black text-5xl md:text-7xl mb-8 leading-tight">
            YOUR TERRITORY IS OPEN. <br/><span className="text-accent-cyan">FOR NOW.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 font-medium max-w-3xl mx-auto leading-relaxed">
            Revenue Hunters partners with only one coating company per service area. If yours is still available, let's talk before someone else takes it.
          </p>
          <Link 
            to="/contact"
            className="bg-accent-cyan text-primary-navy hover:bg-white hover:text-primary-navy font-heading font-bold text-2xl py-6 px-16 transition-all inline-block shadow-2xl uppercase tracking-widest rounded-full hover:scale-105"
          >
            Book Your 30-Minute Growth Call
          </Link>
          <p className="mt-8 text-white/60 font-medium tracking-wide text-lg">
            No pressure. No jargon. Just a straight conversation about what growth looks like for your business.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
