"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      {/* Header Navigation with Light Background */}
      <header className="bg-white relative z-10 px-6 py-4 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center rounded-sm">
              <span className="text-white font-bold text-lg">FG</span>
            </div>
            <div className="text-black font-bold text-xl tracking-wider leading-tight">
              <div>FLASH</div>
              <div>GRAPHERS</div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-black hover:text-teal-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black hover:text-teal-400 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-black hover:text-teal-400 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-black hover:text-teal-400 transition-colors"
            >
              Our Services
            </a>
            <a
              href="#"
              className="text-black hover:text-teal-400 transition-colors"
            >
              Productive Gears
            </a>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>

      {/* Contact Section with Black Background */}
      <section className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Main Content */}
        <div className="relative z-10 px-6 py-12 lg:px-12">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                  Contact <span className="text-teal-400">Us</span>
                </h1>
                <p className="text-gray-300 text-lg">
                  Let&apos;s discuss on something cool together
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">Indore, Madhya Pradesh.</span>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-300">flashgraphers@gmail.com</span>
                </div>

                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-teal-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-300">+91 6267695515</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Follow <span className="text-teal-400">Us</span>
                </h3>
                <div className="flex space-x-4">
                  {/* YouTube */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:ml-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-transparent border border-gray-600 text-white placeholder:text-gray-400 px-4 rounded-md focus:outline-none focus:border-teal-400 transition-colors"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-transparent border border-gray-600 text-white placeholder:text-gray-400 px-4 rounded-md focus:outline-none focus:border-teal-400 transition-colors"
                  required
                />

                <input
                  type="text"
                  name="services"
                  placeholder="Enter Your Services"
                  value={formData.services}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-transparent border border-gray-600 text-white placeholder:text-gray-400 px-4 rounded-md focus:outline-none focus:border-teal-400 transition-colors"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Enter Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full min-h-32 bg-transparent border border-gray-600 text-white placeholder:text-gray-400 px-4 py-3 rounded-md resize-none focus:outline-none focus:border-teal-400 transition-colors"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-teal-500 text-white h-12 rounded-md transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Decorative image at bottom right */}
        <div className="absolute bottom-0 right-0 w-80 h-60 opacity-40">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4ce5324e35644de0ae6499bee7f458dc%2F697a02eaa6364c53acf6b9e65a14eb12?format=webp&width=800"
            alt="Decorative leaf element"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* Footer Section with Light Background */}
      <footer className="bg-gray-100 text-black py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-black flex items-center justify-center rounded">
              <span className="text-white font-bold text-sm">FG</span>
            </div>
            <div className="text-black font-bold text-lg tracking-wider">
              FLASH GRAPHERS
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Our Services
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Productive Gears
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Stay Connected */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="flex justify-center space-x-4">
              {/* YouTube */}
              <a
                href="#"
                className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © 2025 FlashGraphers, All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
