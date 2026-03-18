import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
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
    const form = e.target;

    emailjs
      .sendForm(
        "service_b2pdb3t", // 👈 tu SERVICE_ID (el de la captura)
        "template_e2ey5hg", // 👈 pegá el tuyo
        form,
        "BDtEaJzGHui804FZE", // 👈 tu public key
      )
      .then(
        () => {
          setSubmitted(true);
          try {
            form.reset();
            setIsValid(false);
          } catch (err) {
            // ignore
          }
        },
        (error) => {
          console.error("Error:", error);
        },
      );
  };

  useEffect(() => {
    if (!submitted) return undefined;
    const t = setTimeout(() => setSubmitted(false), 4000);
    return () => clearTimeout(t);
  }, [submitted]);



  
 



  return (
    <div className="card bg-base-100 shadow-xl focus-within:ring-0 focus-within:outline-none">
      <div className="card-body p-8 md:p-10">
        {submitted && (
          <div className="alert shadow-md border border-green-200 bg-green-50 text-green-800">
            <div className="flex items-start gap-3">
              <span className="text-xl">✔</span>
              <div>
                <p className="font-semibold">Consulta enviada correctamente</p>
                <p className="text-sm opacity-80">
                  Hemos recibido tu mensaje. Nuestro equipo se pondrá en
                  contacto a la brevedad.
                </p>
              </div>
            </div>
          </div>
        )}

        <form  onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div className="form-control">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nombre
                </label>
                <UserIcon className="w-5 h-5 text-gray-400 absolute left-4 top-12 -translate-y-1/2 pointer-events-none z-10" />
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
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-4 top-12 -translate-y-1/2 pointer-events-none z-10" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
         
                  aria-describedby="email-error"
                  className="input input-bordered w-full pl-12 rounded-xl border-2 border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-0 focus:outline-none transition"
                />
            
              </div>
            </div>

            {/* Mensaje */}
            <div className="md:col-span-2 form-control">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensaje
                </label>
                <ChatBubbleLeftIcon className="w-6 h-6 text-gray-400 absolute left-4 top-14 pointer-events-none z-10" />
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Mensaje"
                  className="textarea textarea-bordered w-full pl-14 pt-4 rounded-xl h-40 border-2 border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-0 focus:outline-none transition"
                ></textarea>
              </div>
            </div>

            <div className="md:col-span-2 flex justify-end">
              <CustomButton
                type="submit"
           
                
              >
                Enviar mensaje
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
