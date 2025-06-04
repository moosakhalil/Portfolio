import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../constants";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_ttsv7pr',
        'template_64412nt',
        formRef.current,
        'cy5kHXWYuE0UdZwnb'
      );

      alert('Thank you! Your message has been sent successfully.');
      setForm({
        name: "",
        email: "",
        title: "",
        message: "",
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-16 px-4 sm:px-8 bg-gradient-to-br from-blue-50 via-blue-100 to-yellow-50 overflow-hidden scroll-mt-24">
      {/* Remove galaxy and purple effects */}
      {/* Glittering dots background (optional, can be removed for a cleaner look) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="absolute inset-0" style={{ minHeight: '100%' }}>
          {[...Array(60)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100 + '%'}
              cy={Math.random() * 100 + '%'}
              r={Math.random() * 1.5 + 0.5}
              fill="#a7c7f9"
              opacity={Math.random() * 0.5 + 0.3}
            />
          ))}
        </svg>
      </div>
      <div className="max-w-3xl mx-auto z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col xl:flex-row gap-8 sm:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-blue-500 font-semibold text-base sm:text-lg">GET IN TOUCH</p>
            <h2 className="text-gray-900 font-bold text-3xl sm:text-4xl mt-2">Contact</h2>
            <p className="text-gray-700 text-sm sm:text-lg mt-3 sm:mt-4 max-w-md">
            Feel free to reach out! Whether you have a question, a project idea,
            or just want to connect, I'd love to hear from you.
          </p>
          <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-200 to-yellow-100 flex items-center justify-center">
                  <FiMail className="text-blue-600 text-lg sm:text-xl" />
              </div>
              <div>
                  <h3 className="text-gray-900 font-medium text-sm sm:text-base">Email</h3>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                    className="text-blue-600 hover:text-yellow-500 transition-colors text-xs sm:text-sm"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-200 to-yellow-100 flex items-center justify-center">
                  <FiPhone className="text-blue-600 text-lg sm:text-xl" />
              </div>
              <div>
                  <h3 className="text-gray-900 font-medium text-sm sm:text-base">Phone</h3>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                    className="text-blue-600 hover:text-yellow-500 transition-colors text-xs sm:text-sm"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-200 to-yellow-100 flex items-center justify-center">
                  <FiGithub className="text-blue-600 text-lg sm:text-xl" />
              </div>
              <div>
                  <h3 className="text-gray-900 font-medium text-sm sm:text-base">GitHub</h3>
                <a 
                  href="https://github.com/moosakhalil"
                  target="_blank"
                  rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-yellow-500 transition-colors text-xs sm:text-sm"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-200 to-yellow-100 flex items-center justify-center">
                  <FiLinkedin className="text-blue-600 text-lg sm:text-xl" />
              </div>
              <div>
                  <h3 className="text-gray-900 font-medium text-sm sm:text-base">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/muhammad-moosa-khalil-9a3569306/"
                  target="_blank"
                  rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-yellow-500 transition-colors text-xs sm:text-sm"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
              className="bg-white/80 p-6 sm:p-8 rounded-2xl mb-4 sm:mb-6 border border-blue-100 shadow-lg"
          >
            <div className="mb-4 sm:mb-5">
                <label className="block text-gray-900 font-medium text-sm sm:text-base mb-1 sm:mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                  className="bg-blue-50 py-3 sm:py-4 px-4 sm:px-6 w-full rounded-lg text-gray-900 outline-none border border-blue-200 text-sm sm:text-base"
                required
              />
            </div>
            <div className="mb-4 sm:mb-5">
                <label className="block text-gray-900 font-medium text-sm sm:text-base mb-1 sm:mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johndoe@example.com"
                  className="bg-blue-50 py-3 sm:py-4 px-4 sm:px-6 w-full rounded-lg text-gray-900 outline-none border border-blue-200 text-sm sm:text-base"
                required
              />
            </div>
            <div className="mb-4 sm:mb-5">
                <label className="block text-gray-900 font-medium text-sm sm:text-base mb-1 sm:mb-2">Subject</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="What is this regarding?"
                  className="bg-blue-50 py-3 sm:py-4 px-4 sm:px-6 w-full rounded-lg text-gray-900 outline-none border border-blue-200 text-sm sm:text-base"
                required
              />
            </div>
            <div className="mb-5 sm:mb-6">
                <label className="block text-gray-900 font-medium text-sm sm:text-base mb-1 sm:mb-2">Your Message</label>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Let me know how I can help you..."
                  className="bg-blue-50 py-3 sm:py-4 px-4 sm:px-6 w-full rounded-lg text-gray-900 outline-none border border-blue-200 resize-none text-sm sm:text-base"
                required
              />
            </div>
            <button
              type="submit"
                className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white py-3 px-8 rounded-xl font-bold shadow-lg text-lg transition-all duration-300 w-full border-2 border-blue-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          <div className="h-[200px] xs:h-[250px] sm:h-[300px] xl:h-auto">
            <EarthCanvas />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 