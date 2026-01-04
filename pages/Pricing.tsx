import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="flex flex-col w-full py-20 px-4">
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-heading font-black text-5xl md:text-6xl text-white mb-6">
          SIMPLE, ROI-FOCUSED <span className="text-primary-blue">PRICING</span>
        </h1>
        <p className="text-xl text-secondary-gray">
          Invest in systems, not headcount. Scale your revenue without scaling your payroll.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        
        {/* INBOUND */}
        <div className="border border-white/10 bg-black/40 p-8 flex flex-col hover:border-primary-blue/30 transition-colors">
          <h3 className="font-heading font-bold text-2xl text-white mb-2">INBOUND HANDLING</h3>
          <p className="text-secondary-gray text-sm mb-6">Never miss a call again.</p>
          <div className="mb-8">
            <span className="text-4xl font-heading font-bold text-white">$499</span>
            <span className="text-secondary-gray"> / month</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start text-sm text-secondary-gray">
              <Check className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
              24/7 AI Answering
            </li>
            <li className="flex items-start text-sm text-secondary-gray">
              <Check className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
              2,000 calls included
            </li>
            <li className="flex items-start text-sm text-secondary-gray">
              <Check className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
              $0.30 per additional call
            </li>
            <li className="flex items-start text-sm text-secondary-gray">
              <Check className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
              Appointment Scheduling
            </li>
            <li className="flex items-start text-sm text-secondary-gray">
              <Check className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
              Instant SMS Follow-up
            </li>
          </ul>
          <Link to="/contact" className="w-full block text-center border border-white text-white hover:bg-white hover:text-primary font-heading font-bold py-4 transition-all">
            GET STARTED
          </Link>
        </div>

        {/* BUNDLE - FEATURED */}
        <div className="relative border-2 border-primary-blue bg-primary-blue/5 p-8 flex flex-col transform md:-translate-y-4 shadow-2xl shadow-primary-blue/20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-blue text-primary font-bold px-4 py-1 text-sm tracking-widest uppercase">
            Best Value
          </div>
          <h3 className="font-heading font-bold text-2xl text-white mb-2">AI FRONT OFFICE</h3>
          <p className="text-secondary-gray text-sm mb-6">Complete domination package.</p>
          <div className="mb-8">
            <span className="text-4xl font-heading font-bold text-white">$1,997</span>
            <span className="text-secondary-gray"> / month</span>
            <div className="text-xs text-secondary-gray mt-1 opacity-70">Ranges to $2,997 based on volume</div>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start text-sm text-white font-bold">
              <Zap className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
              INCLUDES INBOUND & OUTBOUND
            </li>
            <li className="flex items-start text-sm text-secondary-gray">
              <Check className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
              Reduced Setup Fee
            </li>
            <li className="flex items-start text-sm text-secondary-gray">
              <Check className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
              Priority Optimization
            </li>
            <li className="flex items-start text-sm text-secondary-gray">
              <Check className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
              Highest ROI Package
            </li>
            <li className="flex items-start text-sm text-secondary-gray">
              <Check className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
              Dedicated Account Manager
            </li>
          </ul>
          <Link to="/contact" className="w-full block text-center bg-primary-blue text-primary hover:bg-white font-heading font-bold py-4 transition-all shadow-lg">
            GET THE BUNDLE
          </Link>
        </div>

        {/* OUTBOUND */}
        <div className="border border-white/10 bg-black/40 p-8 flex flex-col hover:border-primary-blue/30 transition-colors">
          <h3 className="font-heading font-bold text-2xl text-white mb-2">OUTBOUND CALLER</h3>
          <p className="text-secondary-gray text-sm mb-6">Aggressive lead reactivation.</p>
          <div className="mb-8">
            <span className="text-4xl font-heading font-bold text-white">$3,000</span>
            <span className="text-secondary-gray"> / month</span>
          </div>
          <div className="mb-4 text-xs bg-white/5 p-2 rounded text-secondary-gray">
            One-time Setup: $1,500 – $3,000
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            <li className="flex items-start text-sm text-secondary-gray">
              <Check className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
              Campaign Logic Design
            </li>
            <li className="flex items-start text-sm text-secondary-gray">
              <Check className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
              Script Customization
            </li>
            <li className="flex items-start text-sm text-secondary-gray">
              <Check className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
              CRM Workflows
            </li>
            <li className="flex items-start text-sm text-secondary-gray">
              <Check className="h-5 w-5 text-primary-blue mr-3 flex-shrink-0" />
              Testing & Optimization
            </li>
          </ul>
          <p className="text-xs text-secondary-gray italic mb-6 border-t border-white/10 pt-4">
            "Replaces SDR activity without commissions, ramp time, or turnover."
          </p>
          <Link to="/contact" className="w-full block text-center border border-white text-white hover:bg-white hover:text-primary font-heading font-bold py-4 transition-all">
            START HUNTING
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Pricing;