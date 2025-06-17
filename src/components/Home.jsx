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
    }, 80);
    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <div
      id="home"
      className="flex flex-col justify-between min-h-screen bg-background text-[#F8F8F8] px-6 md:px-20 pt-48 font-orbitron animate-fade-slide-in"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FF007F33] via-transparent to-[#00FFF733] animate-pulse pointer-events-none" />

      <div className="relative z-10 flex-grow flex justify-center">
        <div className="flex flex-col space-y-6 max-w-3xl text-left">
          <p className="text-xl md:text-2xl text-[#FF007F] drop-shadow-[0_0_4px_#FF007F]">
            Hey there, I'm
          </p>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#F8F8F8] glitch-text" data-text="KAPIL HANDERIYA">
            KAPIL HANDERIYA
          </h1>


          <h2 className="text-lg md:text-2xl text-[#A9ADC1] h-8 font-mono flex flex-row space-x-2">
            <span className="drop-shadow-[0_0_4px_#00FFF7]">FULL-STACK DEVELOPER</span>
            <span>|</span>
            <span className="text-[#00FFF7] drop-shadow-[0_0_4px_#00FFF7]">{displayText}</span>
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-sm md:text-lg text-[#A9ADC1] max-w-xl">
            Full-Stack Developer crafting seamless, high-performance Web experiences from Frontend to Backend.
          </p>

          <div className='flex space-x-4'>
            <a
              href={resume}
              download
              className="px-6 py-2 rounded-full bg-[#FF007F] text-white text-sm font-medium shadow-md transition-all duration-300 ease-in-out hover:bg-[#e60073] hover:scale-105 hover:drop-shadow-[0_0_8px_#FF007F]"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-[#ffffff12] border border-[#2D2D44] text-[#F8F8F8] text-sm font-medium shadow-md transition-all duration-300 ease-in-out hover:bg-[#ffffff22] hover:scale-105 hover:drop-shadow-[0_0_8px_#00FFF7]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2 mb-4 relative z-10">
        <a href='#projects'>
          <MdKeyboardDoubleArrowDown className="text-3xl text-[#FFE600] animate-bounce drop-shadow-[0_0_4px_#FFE600]" />
        </a>
      </div>
    </div>
  );
};

export default Home;
