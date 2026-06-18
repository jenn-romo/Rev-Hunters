import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col w-full py-20 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-center font-heading font-black text-5xl text-primary-navy mb-4">SCHEDULE A STRATEGY CALL</h1>
        <p className="text-center text-secondary-gray mb-16 text-lg">
          See the system in action. Find out how much revenue you're missing.
        </p>

        <div className="flex justify-center">
          
          {/* CONTACT INFO */}
          <div className="bg-primary-navy/5 p-8 border border-primary-navy/10 flex flex-col justify-center w-full max-w-lg text-center">
            <h2 className="font-heading font-bold text-2xl text-primary-navy mb-4">GET IN TOUCH</h2>
            <p className="text-secondary-gray mb-8">
              Prefer to reach out directly? Send us an email.
            </p>
            
            <div className="flex justify-center">
              <a href="mailto:alexus@revenuehunters.com" className="flex items-center group text-left">
                <div className="h-12 w-12 bg-accent-cyan/10 flex items-center justify-center mr-4 group-hover:bg-accent-cyan/20 transition-colors">
                  <Mail className="h-6 w-6 text-accent-cyan" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-secondary-gray uppercase tracking-widest mb-1">Email Us</span>
                  <span className="text-xl font-heading font-bold text-primary-navy group-hover:text-accent-cyan transition-colors">alexus@revenuehunters.com</span>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;