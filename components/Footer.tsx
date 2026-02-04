import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-heading font-black text-2xl tracking-tighter mb-6 text-white">
              REVENUE <span className="text-primary-blue">HUNTERS</span>
            </h2>
            <p className="text-secondary-gray text-lg max-w-sm leading-relaxed opacity-80">
              Automated systems for businesses that refuse to leave money on the table. Inbound, outbound, and everything in between.
            </p>
          </div>
          
          <div>
            <h3 className="font-heading font-bold text-sm tracking-widest mb-6 text-primary-blue uppercase">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-base hover:text-primary-blue transition-colors opacity-70 hover:opacity-100">Home</Link></li>
              <li><Link to="/contact" className="text-base hover:text-primary-blue transition-colors opacity-70 hover:opacity-100">Book Demo</Link></li>
            </ul>
            
            <h3 className="font-heading font-bold text-sm tracking-widest mt-8 mb-6 text-primary-blue uppercase">Industries</h3>
            <ul className="space-y-3">
              <li><Link to="/plumbers" className="text-base hover:text-primary-blue transition-colors opacity-70 hover:opacity-100">Plumbing Businesses</Link></li>
              <li><Link to="/propertymanagement" className="text-base hover:text-primary-blue transition-colors opacity-70 hover:opacity-100">Property Management</Link></li>
              <li><Link to="/pm" className="text-base hover:text-primary-blue transition-colors opacity-70 hover:opacity-100">PM Automation Demo</Link></li>
              <li><Link to="/dentist" className="text-base hover:text-primary-blue transition-colors opacity-70 hover:opacity-100">Dentist Demo</Link></li>
              <li><Link to="/homecare" className="text-base hover:text-primary-blue transition-colors opacity-70 hover:opacity-100">Home Care Demo</Link></li>
              <li><Link to="/linkedin" className="text-base hover:text-primary-blue transition-colors opacity-70 hover:opacity-100">LinkedIn Growth</Link></li>
              <li><Link to="/solopreneur" className="text-base hover:text-primary-blue transition-colors opacity-70 hover:opacity-100">Small Business</Link></li>
              <li><Link to="/enterprise" className="text-base hover:text-primary-blue transition-colors opacity-70 hover:opacity-100">Enterprise Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm tracking-widest mb-6 text-primary-blue uppercase">Contact</h3>
            <ul className="space-y-4">
              <li className="text-base opacity-80">
                <span className="block text-xs font-bold text-white/40 uppercase mb-1">Email</span>
                sales@revenuehunters.com
              </li>
              <li className="text-base opacity-80">
                <span className="block text-xs font-bold text-white/40 uppercase mb-1">Location</span>
                Orlando, FL
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] opacity-40">
          <p>&copy; {new Date().getFullYear()} Revenue Hunters. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-8">
            <span className="uppercase tracking-widest font-heading">Execution is Everything</span>
            <span className="uppercase tracking-widest font-heading">Built for Scale</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;