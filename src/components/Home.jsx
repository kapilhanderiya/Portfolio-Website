import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import resume from '../assets/resume.pdf';

const roles = [
  "MERN STACK ENGINEER",
  "UI/UX ENTHUSIAST"
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText(roles[index].substring(0, charIndex + 1));
      if (charIndex < roles[index].length) {
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setIndex((index + 1) % roles.length);
        }, 1500);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <div
      id="home"
      className="flex flex-col justify-between min-h-screen text-white px-6 md:px-20 pt-48 animate-fade-slide-in"
    >
      <div className="flex-grow flex justify-center">
        <div className="flex flex-col space-y-6 max-w-3xl text-left">
          <p className="text-xl md:text-2xl text-blue-300">Hey there, I'm</p>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">KAPIL HANDERIYA</h1>

          <h2 className="text-lg md:text-2xl text-blue-200 h-8 font-mono flex flex-row space-x-2">
            <span>FULL-STACK DEVELOPER</span>
            <span>|</span>
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-sm md:text-lg text-blue-300 max-w-xl">
            Full-Stack Developer crafting seamless, high-performance Web experiences from Frontend to Backend.
          </p>

          {/* Action buttons */}
          <div className='flex space-x-4'>
            <a 
              href={resume} 
              download 
              className='px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-md transition'
            >
              Resume
            </a>
            <a 
              href='#contact' 
              className='px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition text-sm font-medium shadow-md'
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="flex flex-col items-center space-y-2 mb-4">
        <a href='#projects'><MdKeyboardDoubleArrowDown className="text-3xl text-blue-400 animate-bounce"/></a>
      </div>
    </div>
  );
};

export default Home;
