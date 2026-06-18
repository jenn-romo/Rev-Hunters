import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks: { name: string; path: string; external?: boolean }[] = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClass = (path: string) =>
    `font-heading text-xs lg:text-sm font-bold tracking-wider hover:text-accent-cyan transition-colors ${
      isActive(path) ? 'text-accent-cyan' : 'text-white'
    }`;

  return (
    <nav className="fixed w-full z-50 bg-primary-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="font-heading font-black text-xl lg:text-2xl tracking-tighter text-white">
              REVENUE <span className="text-accent-cyan">HUNTERS</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-4 lg:ml-10 flex items-baseline space-x-6 lg:space-x-10">
              {navLinks.map((link) => (
                link.external ? (
                  <a key={link.name} href={link.path} target="_blank" rel="noopener noreferrer" className={linkClass(link.path)}>
                    {link.name.toUpperCase()}
                  </a>
                ) : (
                  <Link key={link.name} to={link.path} className={linkClass(link.path)}>
                    {link.name.toUpperCase()}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-accent-cyan hover:bg-white hover:text-primary-navy text-primary-navy font-heading font-bold py-3 px-6 rounded-none skew-x-[-10deg] inline-block transition-all hover:scale-105"
            >
              <span className="inline-block skew-x-[10deg]">GET MORE REVENUE</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent-cyan focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary-navy border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 rounded-md text-base font-heading font-bold ${
                    isActive(link.path) ? 'text-accent-cyan' : 'text-white'
                  }`}
                >
                  {link.name.toUpperCase()}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 rounded-md text-base font-heading font-bold ${
                    isActive(link.path) ? 'text-accent-cyan' : 'text-white'
                  }`}
                >
                  {link.name.toUpperCase()}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-accent-cyan hover:bg-white hover:text-primary-navy text-primary-navy font-heading font-bold py-4 mt-4 transition-colors"
            >
              GET MORE REVENUE
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;