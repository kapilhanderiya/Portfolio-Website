import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About Me', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    // Trigger slide-in after a short delay
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <nav
      className={'fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-sm text-white animate-fade-slide-nav-in'}
    >
      <div className='w-full flex justify-between items-center px-6 py-4'>
        {/* Brand */}
        <a className='text-3xl font-semibold tracking-wide' href='#home'>
          Kapil Handeriya
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-8 text-2xl font-medium'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='hover:text-blue-300 transition-colors duration-200'
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center bg-[#0f172a]/90 px-6 py-4 space-y-4 border-t border-white/20'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-white text-lg hover:text-blue-400 transition'
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
