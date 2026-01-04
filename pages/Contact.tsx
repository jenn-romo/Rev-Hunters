import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! This is a demo site, so no data was sent.");
  };

  return (
    <div className="flex flex-col w-full py-20 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-center font-heading font-black text-5xl text-white mb-4">BOOK A DEMO</h1>
        <p className="text-center text-secondary-gray mb-16 text-lg">
          See the system in action. Find out how much revenue you're missing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* FORM */}
          <div className="bg-white/5 p-8 border border-white/10">
            <h2 className="font-heading font-bold text-2xl text-white mb-6">SEND A MESSAGE</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-secondary-gray mb-2 uppercase tracking-wide">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/20 p-4 text-white focus:border-primary-blue focus:outline-none transition-colors"
                  placeholder="Your Name"
                  required 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-secondary-gray mb-2 uppercase tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black border border-white/20 p-4 text-white focus:border-primary-blue focus:outline-none transition-colors"
                  placeholder="john@company.com"
                  required 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-bold text-secondary-gray mb-2 uppercase tracking-wide">Company</label>
                    <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/20 p-4 text-white focus:border-primary-blue focus:outline-none transition-colors"
                    placeholder="Company Ltd" 
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold text-secondary-gray mb-2 uppercase tracking-wide">Phone</label>
                    <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/20 p-4 text-white focus:border-primary-blue focus:outline-none transition-colors"
                    placeholder="(555) 123-4567" 
                    />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-secondary-gray mb-2 uppercase tracking-wide">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black border border-white/20 p-4 text-white focus:border-primary-blue focus:outline-none transition-colors"
                  placeholder="Tell us about your current setup..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-primary-blue hover:bg-white hover:text-primary text-primary font-heading font-black py-4 uppercase tracking-widest transition-all">
                Submit Request
              </button>
            </form>
          </div>

          {/* CALENDLY PLACEHOLDER */}
          <div className="flex flex-col justify-center items-center bg-primary-blue/5 border border-primary-blue/20 p-8 text-center min-h-[400px]">
            <Calendar className="h-16 w-16 text-primary-blue mb-6" />
            <h3 className="font-heading font-bold text-2xl text-white mb-4">SKIP THE BACK & FORTH</h3>
            <p className="text-secondary-gray mb-8 max-w-xs">
              Ready to talk now? Select a time directly on our calendar to speak with an automation expert.
            </p>
            <button 
              onClick={() => alert('Calendly would open here')}
              className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-primary font-heading font-bold py-4 px-8 uppercase tracking-widest transition-all"
            >
              Select a Time
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;