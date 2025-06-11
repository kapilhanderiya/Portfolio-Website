import React from 'react'
import icon from '../assets/icon.png';
import icon2 from '../assets/icon2.png';

const Projects = () => {
  return (
    <div id='projects' className='items-center min-h-[100vh] py-24 px-8 md:px-16 text-blue-100 '>
      <h1 className='text-4xl font-semibold text-white'>Projects</h1>
      <p className='py-2 max-w-3xl text-blue-200 text-xl'>
        Projects I’ve built along the way—combining full stack skills with a passion for clean, modern web experiences.
      </p>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10'>
        {/* Project Card 1 */}
        <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-md hover:shadow-xl p-6 transition-transform hover:scale-[1.02] flex flex-col space-y-4 group'>
          <img src={icon} alt="" className='w-14 h-14 text-white group-hover:scale-110 transition-transform duration-300' />
          <h2 className='text-xl font-semibold text-white'>Connectify - Real Time End-to-End Encrypted Chat</h2>
          <p className='text-blue-200 text-sm'>
            A full-stack chat app with end-to-end encryption for private real-time messaging.
          </p>
          <div className='flex flex-wrap gap-2 pt-2'>
            {['React', 'TailwindCSS', 'NodeJs', 'MongoDB'].map((tech, i) => (
              <span key={i} className='text-sm px-3 py-1 bg-white/10 text-white rounded-full border border-white/10 backdrop-blur-sm'>
                {tech}
              </span>
            ))}
          </div>
          <a href='https://github.com/kapilhanderiya/Connectify---A-Real-Time-End-to-End-Encrypted-Chat-App' className='text-sm text-blue-300 hover:text-white transition'>See Project →</a>
        </div>

        {/* Project Card 2 */}
        <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-md hover:shadow-xl p-6 transition-transform hover:scale-[1.02] flex flex-col space-y-4 group'>
          <img src={icon2} alt="" className='w-14 h-14 text-white group-hover:scale-110 transition-transform duration-300' />
          <h2 className='text-xl font-semibold text-white'>E-Commerce Store - Online Shopping Platform</h2>
          <p className='text-blue-200 text-sm'>
            A full-stack shopping platform with cart, coupons, checkout, admin panel, and analytics.
          </p>
          <div className='flex flex-wrap gap-2 pt-2'>
            {['React', 'TailwindCSS', 'NodeJs', 'MongoDB', 'Stripe'].map((tech, i) => (
              <span key={i} className='text-sm px-3 py-1 bg-white/10 text-white rounded-full border border-white/10 backdrop-blur-sm'>
                {tech}
              </span>
            ))}
          </div>
          <a href='https://github.com/kapilhanderiya/E-commerce-Website' className='text-sm text-blue-300 hover:text-white transition'>See Project →</a>
        </div>
      </div>

      <p className='pt-12 max-w-3xl text-blue-200 text-xl'>
        Each project is a step in my journey to mastering web development—exploring technologies, solving real problems, and refining the craft.
      </p>
    </div>
  )
}

export default Projects;
