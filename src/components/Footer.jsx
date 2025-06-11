import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=' text-white py-10 px-6'>
      <div className='flex flex-col items-center text-center space-y-3'>
        <h2 className='text-lg font-semibold tracking-wide'>KAPIL HANDERIYA</h2>
        <p className='text-sm text-blue-200'>Building the future of the Web — One project at a time.</p>
        <p className='text-xs text-blue-300 pt-3'>© 2025 Kapil Handeriya. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
