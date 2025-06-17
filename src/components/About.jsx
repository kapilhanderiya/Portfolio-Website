import React from 'react';
import image from '../assets/pp.png';
import resume from '../assets/resume.pdf';

const About = () => {
  return (
    <div
      id="about"
      className="min-h-[100vh] py-24 px-8 md:px-16 bg-background text-textSecondary font-orbitron"
    >
      <h1 className="text-4xl font-bold text-accentPink drop-shadow-neonPink">
        About Me
      </h1>

      <p className="py-2 max-w-2xl text-accentCyan drop-shadow-neonCyan">
        Full-Stack Developer • MERN Stack • Passionate Learner
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">
        {/* Text Content */}
        <div className="bg-white/5 backdrop-blur-sm border border-borderDark rounded-2xl p-6 shadow-md space-y-4">
          <p>
            Hi! I’m a Full-Stack Developer and a student passionate about
            building digital experiences that are clean, fast, and user-friendly.
          </p>
          <p>
            I specialize in crafting responsive frontends and robust backend systems—
            confidently bridging the gap between design and development. With hands-on
            experience in the MERN stack, I build scalable web applications that prioritize
            both performance and usability.
          </p>
          <p>
            Whether it's adding micro-interactions to a UI or securing APIs with JWT,
            I love turning ideas into functional, real-world applications.
          </p>
          <p>
            I'm constantly learning and refining my craft—because to me, great
            code is equal parts logic and creativity.
          </p>
        </div>

        {/* Profile Image + Animated Neon Border + Tilt */}
        <div className="flex flex-col items-center space-y-6 group perspective-[800px]">
          <div className="relative w-72 h-72 transition-transform duration-500 group-hover:rotate-y-6 group-hover:rotate-x-3">
            <div className="absolute inset-0 rounded-full animate-spin-slow opacity-40 blur-[10px] bg-[conic-gradient(from_0deg,#FF007F,#00FFF7,#FFE600,#FF007F)]"></div>
            <img
              src={image}
              alt="Profile"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-borderDark shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Buttons with Hover Effects */}
          <div className="flex space-x-4">
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
    </div>
  );
};

export default About;
