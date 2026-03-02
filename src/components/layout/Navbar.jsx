import React, { useState } from "react";
import logo from "../../../public/vite.svg"; // placeholder logo path
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* logo placeholder - replace src when available */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </div>
          {/* desktop navigation links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 ">
              <a
                href="#"
                className="px-3 py-2 relative inline-block   md:after:content-[''] md:after:absolute md:after:left-1/2 md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-blue-600 md:after:rounded-full md:after:transition-all md:after:duration-700 md:after:ease-in-out md:after:-translate-x-1/2 md:hover:after:w-full hover:text-blue-600"
              >
                INICIO
              </a>
              <a
                href="#"
                className="px-3 py-2 relative inline-block  md:after:content-[''] md:after:absolute md:after:left-1/2 md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-blue-600 md:after:rounded-full md:after:transition-all md:after:duration-700 md:after:ease-in-out md:after:-translate-x-1/2 md:hover:after:w-full  hover:text-blue-600"
              >
                QUIÉNES SOMOS
              </a>
              <a
                href="#"
                className="px-3 py-2 relative inline-block   md:after:content-[''] md:after:absolute md:after:left-1/2 md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-blue-600 md:after:rounded-full md:after:transition-all md:after:duration-700 md:after:ease-in-out md:after:-translate-x-1/2 md:hover:after:w-full hover:text-blue-600"
              >
                STAFF
              </a>
              <a
                href="#"
                className="px-3 py-2 relative inline-block  md:after:content-[''] md:after:absolute md:after:left-1/2 md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-blue-600 md:after:rounded-full md:after:transition-all md:after:duration-700 md:after:ease-in-out md:after:-translate-x-1/2 md:hover:after:w-full hover:text-blue-600"
              >
                SERVICIOS
              </a>
              <a
                href="#"
                className="px-3 py-2 relative inline-block   md:after:content-[''] md:after:absolute md:after:left-1/2 md:after:-bottom-1 md:after:h-[2px] md:after:w-0 md:after:bg-blue-600 md:after:rounded-full md:after:transition-all md:after:duration-700 md:after:ease-in-out md:after:-translate-x-1/2 md:hover:after:w-full hover:text-blue-600 "
              >
                CONTACTO
              </a>
            </div>
          </div>
          {/* mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={open}
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu panel */}
      {open && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-base">
              INICIO
            </a>
            <a href="#" className="block px-3 py-2 text-base">
              QUIÉNES SOMOS
            </a>
            <a href="#" className="block px-3 py-2 text-base">
              STAFF
            </a>
            <a href="#" className="block px-3 py-2 text-base">
              SERVICIOS
            </a>
            <a href="#" className="block px-3 py-2 text-base">
              CONTACTO
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
