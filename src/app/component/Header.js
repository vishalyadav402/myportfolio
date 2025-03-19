"use client"
import React, { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 dark:bg-gray-900 fixed w-full z-50 border border-gray-800 shadow-xl">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a
              className="block text-teal-600 text-3xl font-bold dark:text-teal-300"
              href="#"
            >
              Vishal Yadav
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            {/* Desktop Menu */}
            <nav
              aria-label="Global"
              className={`hidden md:block`}
            >
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    href="#aboutsection"
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-gray-300 dark:hover:text-gray-300/75"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#servicessection"
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-gray-300 dark:hover:text-gray-300/75"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#clientsection"
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-gray-300 dark:hover:text-gray-300/75"
                  >
                    Clients
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonialsection"
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-gray-300 dark:hover:text-gray-300/75"
                  >
                    Testimonial
                  </a>
                </li>
                <li>
                  <a
                    href="#faqsection"
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-gray-300 dark:hover:text-gray-300/75"
                  >
                    Faqs
                  </a>
                </li>
              </ul>
            </nav>

            {/* Contact Buttons */}
            <div className="hidden sm:flex sm:gap-4">
              <a
                className="inline-block rounded bg-green-600 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-green-700"
                href="https://wa.link/48sbvw"
                target="_blank"
              >
                <WhatsAppIcon /> Whatsapp Us
              </a>
              <a
                className="inline-block rounded bg-blue-600 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-blue-700"
                href="tel:+919506280968"
                target="_blank"
              >
               <CallIcon/> Call Us
              </a>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="block md:hidden rounded bg-[#db2778] p-2 text-gray-300 transition hover:text-gray-300 dark:bg-gray-800 dark:text-gray-300 focus:bg-[#db2778] focus:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav
            className="md:hidden bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
            aria-label="Mobile Navigation"
          >
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#aboutsection"
                  style={{fontSize:'50px'}}
                  className="block text-gray-500 transition hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#servicessection"
                  className="block text-gray-500 transition hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#clientsection"
                  className="block text-gray-500 transition hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="#testimonialsection"
                  className="block text-gray-500 transition hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faqsection"
                  className="block text-gray-500 transition hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400"
                >
                  Faqs
                </a>
              </li>
              <li>
                <a
                  className="block rounded bg-green-600 md:w-full w-32 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-green-700"
                  href="https://wa.link/48sbvw"
                  target="_blank"
                >
                  Whatsapp Us
                </a>
              </li>
              <li>
                <a
                  className="block rounded bg-blue-600 md:w-full w-20 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-blue-700"
                  href="tel:+919506280968"
                  target="_blank"
                >
                  Call Us
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
