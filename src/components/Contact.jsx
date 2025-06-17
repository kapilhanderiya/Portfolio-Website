import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("portfolio", "portfolio", form.current, "ekk-3pEeG1wPJ9S9i")
      .then(
        () => {
          toast.success("✅ Message sent successfully!", { theme: "dark" });
          setLoading(false);
          form.current.reset();
        },
        () => {
          toast.error("❌ Failed to send. Please try again later.", {
            theme: "dark",
          });
          setLoading(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="min-h-[100vh] py-24 px-8 md:px-16 text-textSecondary font-orbitron bg-background"
    >
      <h1 className="text-4xl font-bold text-accentPink drop-shadow-neonPink mb-4">
        Let’s Connect
      </h1>
      <p className="max-w-2xl text-accentCyan mb-12 drop-shadow-neonCyan">
        Whether you have a question, a project in mind, or just want to say
        hello—feel free to reach out.
      </p>

      <div className="grid md:grid-cols-2 gap-16">
        {/* FORM SECTION */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-5 max-w-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="bg-white/5 text-white placeholder:text-accentCyan p-3 rounded-md border border-borderDark backdrop-blur focus:outline-none focus:ring-2 ring-accentPink transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="bg-white/5 text-white placeholder:text-accentCyan p-3 rounded-md border border-borderDark backdrop-blur focus:outline-none focus:ring-2 ring-accentPink transition-all duration-300"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="bg-white/5 text-white placeholder:text-accentCyan p-3 rounded-md border border-borderDark backdrop-blur focus:outline-none focus:ring-2 ring-accentPink transition-all duration-300"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-accentPink text-white py-2 px-6 rounded-md transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 hover:drop-shadow-[0_0_8px_#FF007F] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* CONTACT INFO & SOCIAL */}
        <div className="flex flex-col justify-between space-y-10">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-accentPink drop-shadow-neonPink">
              Contact Information
            </p>
            <div className="flex items-start gap-3 text-accentCyan">
              <FaEnvelope className="mt-1" />
              <span>
                Email: <br />
                kapil.handeriya.23031@gmail.com
              </span>
            </div>
            <div className="flex items-start gap-3 text-accentCyan">
              <FaPhone className="mt-1" />
              <span>
                Phone: <br />
                +91 9257481128
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold text-accentPink drop-shadow-neonPink">
              Connect With Me
            </p>
            <div className="flex space-x-6 text-2xl text-accentCyan">
              <a
                href="https://github.com/kapilhanderiya"
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 hover:text-accentPink hover:scale-110 hover:drop-shadow-[0_0_6px_#FF007F]"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/kapilhanderiya/"
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 hover:text-accentPink hover:scale-110 hover:drop-shadow-[0_0_6px_#FF007F]"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/kapilhanderiya/"
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 hover:text-accentPink hover:scale-110 hover:drop-shadow-[0_0_6px_#FF007F]"
              >
                <FaInstagram />
              </a>
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
