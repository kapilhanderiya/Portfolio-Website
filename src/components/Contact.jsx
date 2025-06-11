import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'portfolio',
        'portfolio',
        form.current,
        'ekk-3pEeG1wPJ9S9i'
      )
      .then(() => {
          toast.success("✅ Message sent successfully!", { theme: "dark" });
          setLoading(false);
          form.current.reset();
        },
        () => {
          toast.error("❌ Failed to send. Please try again later.", { theme: "dark" });
          setLoading(false);
        }
      );
  };

  return (
    <div id='contact' className=' text-white min-h-[100vh] py-24 px-8 md:px-16'>
      <h1 className='text-4xl font-semibold mb-4'>Let’s Connect</h1>
      <p className="max-w-2xl text-blue-200 mb-12">
        Whether you have a question, a project in mind, or just want to say hello—feel free to reach out.
      </p>

      <div className='grid md:grid-cols-2 gap-16'>
        {/* FORM SECTION */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5 max-w-xl">
          <input type="text" name="name" placeholder="Your Name" required className="bg-white/5 text-white placeholder:text-blue-300 p-3 rounded-md border border-white/10 backdrop-blur focus:outline-none focus:ring-2 ring-blue-400" />
          <input type="email" name="email" placeholder="Your Email" required className="bg-white/5 text-white placeholder:text-blue-300 p-3 rounded-md border border-white/10 backdrop-blur focus:outline-none focus:ring-2 ring-blue-400" />
          <textarea name="message" rows="5" placeholder="Your Message" required className="bg-white/5 text-white placeholder:text-blue-300 p-3 rounded-md border border-white/10 backdrop-blur focus:outline-none focus:ring-2 ring-blue-400"></textarea>
          
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 px-6 rounded-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* CONTACT INFO & SOCIAL */}
        <div className="flex flex-col justify-between space-y-10">
          <div className="space-y-4">
            <p className="text-lg font-medium text-blue-300">Contact Information</p>
            <div className="flex items-start gap-3 text-blue-200">
              <FaEnvelope className="mt-1" />
              <span>
                Email: <br />
                kapil.handeriya.23031@gmail.com
              </span>
            </div>
            <div className="flex items-start gap-3 text-blue-200">
              <FaPhone className="mt-1" />
              <span>
                Phone: <br />
                +91 9257481128
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-medium text-blue-300">Connect With Me</p>
            <div className="flex space-x-6 text-2xl text-blue-400">
              <a href="https://github.com/kapilhanderiya" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/kapilhanderiya/" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaLinkedin /></a>
              {/* <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaXTwitter /></a> */}
              <a href="https://www.instagram.com/kapilhanderiya/" target="_blank" rel="noreferrer" className="hover:text-white transition"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Contact;
