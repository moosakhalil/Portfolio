import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // This would typically use EmailJS or similar for actual sending
    // For demo purposes, we'll simulate sending
    setTimeout(() => {
      alert(`Thank you ${form.name}! Your message has been sent.`);
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full min-h-screen py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col xl:flex-row gap-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-blue-500 font-semibold text-lg">GET IN TOUCH</p>
          <h2 className="text-white font-bold text-4xl mt-2">Contact</h2>
          <p className="text-secondary text-lg mt-4 max-w-md">
            Feel free to reach out! Whether you have a question, a project idea,
            or just want to connect, I'd love to hear from you.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center">
                <FiMail className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-secondary hover:text-blue-500 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center">
                <FiPhone className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-white font-medium">Phone</h3>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="text-secondary hover:text-blue-500 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center">
                <FiGithub className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-white font-medium">GitHub</h3>
                <a 
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-secondary hover:text-blue-500 transition-colors"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center">
                <FiLinkedin className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-white font-medium">LinkedIn</h3>
                <a 
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-secondary hover:text-blue-500 transition-colors"
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
            className="bg-tertiary p-8 rounded-2xl mb-6"
          >
            <div className="mb-5">
              <label className="block text-white font-medium mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-primary py-4 px-6 w-full rounded-lg text-white outline-none border-none"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block text-white font-medium mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="johndoe@example.com"
                className="bg-primary py-4 px-6 w-full rounded-lg text-white outline-none border-none"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Your Message</label>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Let me know how I can help you..."
                className="bg-primary py-4 px-6 w-full rounded-lg text-white outline-none border-none resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition-colors w-full py-3 rounded-xl text-white font-bold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          
          <div className="h-[300px] xl:h-auto">
            <EarthCanvas />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 