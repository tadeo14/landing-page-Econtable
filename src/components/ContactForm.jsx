import React, { useState } from "react";
import CustomButton from "./CustomButton";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-8 md:p-10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div className="form-control">
              <label htmlFor="name" className="sr-only">
                Nombre
              </label>
              <div className="relative">
                <UserIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Nombre"
                  className="input input-bordered w-full pl-12 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-0 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-control">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="input input-bordered w-full pl-12 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-0 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div className="md:col-span-2 form-control">
              <label htmlFor="message" className="sr-only">
                Mensaje
              </label>
              <div className="relative">
                <ChatBubbleLeftIcon className="w-6 h-6 text-gray-400 absolute left-4 top-4 pointer-events-none z-10" />
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Escribe tu mensaje"
                  className="textarea textarea-bordered w-full pl-14 pt-4 rounded-xl h-40 border-2 border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-0 focus:outline-none transition"
                ></textarea>
              </div>
            </div>

            {/* Footer */}
            <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-sm text-base-content/60">
                También podés escribirnos a{" "}
                <a
                  href="mailto:contacto@lofeudo-ejemplo.com"
                  className="link link-primary font-medium"
                >
                  contacto@lofeudo-ejemplo.com
                </a>
              </div>
              <CustomButton type="submit">Enviar mensaje</CustomButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
