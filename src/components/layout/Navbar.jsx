import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../public/vite.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

const baseClasses =
  "px-3 py-2 relative inline-block transition-colors duration-300 md:after:content-[''] md:after:absolute md:after:left-1/2 md:after:-bottom-1 md:after:h-[2px] md:after:rounded-full md:after:transition-all md:after:duration-700 md:after:ease-in-out md:after:-translate-x-1/2";
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" end>
              <img src={logo} alt="Logo" className="h-8 w-auto" />
            </NavLink>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${baseClasses} ${
                    isActive
                      ? "text-blue-700 font-semibold md:after:w-0"
                      : "md:after:w-0 md:after:bg-blue-700 hover:text-slate-900 md:hover:after:w-full"
                  }`
                }
              >
                INICIO
              </NavLink>

              <NavLink
                to="/quienes-somos"
                className={({ isActive }) =>
                  `${baseClasses} ${
                    isActive
                      ? "text-blue-700 font-semibold md:after:w-0"
                      : "md:after:w-0 md:after:bg-blue-700 hover:text-slate-900 md:hover:after:w-full"
                  }`
                }
              >
                QUIÉNES SOMOS
              </NavLink>

              <NavLink
                to="/staff"
                className={({ isActive }) =>
                  `${baseClasses} ${
                    isActive
                      ? "text-blue-700 font-semibold md:after:w-0"
                      : "md:after:w-0 md:after:bg-blue-700 hover:text-slate-900 md:hover:after:w-full"
                  }`
                }
              >
                STAFF
              </NavLink>

              <NavLink
                to="/servicios"
                className={({ isActive }) =>
                  `${baseClasses} ${
                    isActive
                      ? "text-blue-700 font-semibold md:after:w-0"
                      : "md:after:w-0 md:after:bg-blue-700 hover:text-slate-900 md:hover:after:w-full"
                  }`
                }
              >
                SERVICIOS
              </NavLink>

              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  `${baseClasses} ${
                    isActive
                      ? "text-blue-600 md:after:w-0"
                      : "md:after:w-0 md:after:bg-blue-700 hover:text-slate-900 md:hover:after:w-full"
                  }`
                }
              >
                CONTACTO
              </NavLink>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              INICIO
            </NavLink>

            <NavLink
              to="/quienes-somos"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              QUIÉNES SOMOS
            </NavLink>

            <NavLink
              to="/staff"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              STAFF
            </NavLink>

            <NavLink
              to="/servicios"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              SERVICIOS
            </NavLink>

            <NavLink
              to="/contacto"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base ${
                  isActive ? "text-blue-600 font-semibold" : ""
                }`
              }
            >
              CONTACTO
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
