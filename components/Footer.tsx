import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-heading font-black text-2xl tracking-tighter mb-4">
              REVENUE <span className="text-primary-blue">HUNTERS</span>
            </h2>
            <p className="text-secondary-gray text-sm max-w-xs leading-relaxed opacity-80">
              Automated AI systems for businesses that refuse to leave money on the table. Inbound, outbound, and everything in between.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-primary-blue">SITEMAP</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-primary-blue transition-colors">Home</Link></li>
              <li><Link to="/plumbers" className="text-sm hover:text-primary-blue transition-colors">Plumbers</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-primary-blue transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-primary-blue">CONTACT</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-80">hello@revenuehunters.io</li>
              <li className="text-sm opacity-80">Miami, FL</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
          <p>&copy; {new Date().getFullYear()} Revenue Hunters. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <span className="uppercase tracking-widest font-heading">Execution is Everything</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;