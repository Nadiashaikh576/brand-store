import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 bg-yellow-500 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">

        {/* Contact Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2A254B]">Get in Touch</h2>
          <p className="mt-2 text-lg text-gray-700">
          Every great project starts with a hello! Let&apos;s chat and explore how we can make your ideas come to life.
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {/* Name Input */}
            <div className="flex-1">
              <label htmlFor="name" className="block text-lg font-semibold text-[#2A254B]">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#2A254B] focus:outline-none"
                placeholder="Your full name"
              />
            </div>

            {/* Email Input */}
            <div className="flex-1">
              <label htmlFor="email" className="block text-lg font-semibold text-[#2A254B]">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#2A254B] focus:outline-none"
                placeholder="Your email address"
              />
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-lg font-semibold text-[#2A254B]">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#2A254B] focus:outline-none"
              placeholder="Write your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#2A254B] text-white text-lg font-semibold rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-[#2A254B] mb-4">ConnectSphere</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/nadia-shaikh-547990287/"
              target="_blank"
              className="p-4 bg-[#2A254B] text-white rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/nadiashaikh189?mibextid=ZbWKwL"
              target="_blank"
              className="p-4 bg-[#2A254B] text-white rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/nadiashaikh189?igsh=bTFsaXphNGI2cDk="
              target="_blank"
              className="p-4 bg-[#2A254B] text-white rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://github.com/Nadiashaikh576"
              target="_blank"
              className="p-4 bg-[#2A254B] text-white rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;