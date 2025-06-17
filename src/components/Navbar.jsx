import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About Me', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className='fixed top-0 w-full z-50 bg-background/60 backdrop-blur-md border-b border-borderDark text-accentCyan shadow-md'>
      <div className='w-full flex justify-between items-center px-6 py-4'>
        {/* Brand */}
        <a
          className='text-3xl font-bold tracking-wide text-accentPink drop-shadow-neonPink hover:drop-shadow-[0_0_12px_#FF007F] transition-all duration-300'
          href='#home'
        >
          Kapil Handeriya
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-8 text-lg font-medium font-orbitron'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='relative group transition-all duration-200 text-accentCyan hover:text-accentPink'
            >
              {link.name}
              <span className="block h-0.5 w-0 bg-accentPink transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className='md:hidden text-accentCyan'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='hover:text-accentPink transition duration-200'
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center bg-[#0f172a]/90 px-6 py-4 space-y-4 border-t border-borderDark font-orbitron'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-accentCyan text-lg hover:text-accentPink hover:drop-shadow-neonPink transition duration-200'
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
