import React from 'react';
import image from '../assets/pp.png';
import resume from '../assets/resume.pdf'

const About = () => {
  return (
    <div id='about' className='min-h-[100vh] py-24 px-8 md:px-16 text-blue-100 '>
      <h1 className='text-4xl font-semibold text-white'>About Me</h1>
      <p className='py-2 max-w-2xl text-blue-200'>
        Full-Stack Developer • MERN Stack • Passionate Learner
      </p>

      <div className='grid md:grid-cols-2 gap-10 mt-10 items-center'>
        {/* Text Content */}
        <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-md space-y-4'>
          <p>
            Hi! I’m a Full-Stack Developer and a student passionate about building digital experiences that are clean, fast, and user-friendly.
          </p>
          <p>
            I specialize in crafting responsive frontends and robust backend systems—confidently bridging the gap between design and development. With hands-on experience in the MERN stack, I build scalable web applications that prioritize both performance and usability.
          </p>
          <p>
            Whether it's adding micro-interactions to a UI or securing APIs with JWT, I love turning ideas into functional, real-world applications.
          </p>
          <p>
            I'm constantly learning and refining my craft—because to me, great code is equal parts logic and creativity.
          </p>
        </div>

        <div className='flex flex-col items-center space-y-6'>
          <img 
            src={image} 
            alt="Profile"
            className='w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-white/20 shadow-lg hover:scale-105 transition-transform duration-300'
          />

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
    </div>
  );
};

export default About;
