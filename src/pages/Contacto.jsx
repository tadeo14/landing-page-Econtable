import React, { useState, useEffect, useRef } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  UserIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";
import CustomButton from "../components/CustomButton";

export default function Contacto() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowMap(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative">
      <section className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda: título, texto y contactos */}
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-5xl md:text-7xl  font-bold mb-6 text-white">
                Contacto
              </h1>

              <p className="max-w-xl text-lg text-gray-200 leading-relaxed mb-8">
                Atendemos en el edificio <strong>Altos del Sol</strong>, Av.
                Falsa 1234, Piso 5, Local 12 — Barrio Villa Aurora, Ciudad de
                Solitaria, Provincia de Fantasía.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+543815554242"
                  aria-label="Llamar"
                  className="group block rounded-md px-2 py-2 hover:bg-gray-800/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <PhoneIcon className="h-6 w-6 text-gray-200 flex-shrink-0 group-hover:text-white" />
                    <div>
                      <div className="font-semibold">Teléfono</div>
                      <div className="text-gray-300">+54 381 555 4242</div>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:contacto@lofeudo-ejemplo.com"
                  aria-label="Enviar email"
                  className="group block rounded-md px-2 py-2 hover:bg-gray-800/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <EnvelopeIcon className="h-6 w-6 text-gray-200 flex-shrink-0 group-hover:text-white" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-300">
                        contacto@lofeudo-ejemplo.com
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Maciel+130+Yerba+Buena+Tucum%C3%A1n"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver mapa"
                  className="group block rounded-md px-2 py-2 hover:bg-gray-800/40 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <MapPinIcon className="h-6 w-6 text-gray-200 flex-shrink-0 group-hover:text-white" />
                    <div>
                      <div className="font-semibold">Dirección</div>
                      <div className="text-gray-300">
                        Maciel 130, Of. 9 — Yerba Buena, Tucumán
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Columna derecha: mapa (embed) */}
            <div>
              <div
                ref={mapRef}
                className="self-start w-full overflow-hidden shadow-xl h-96 flex items-center justify-center relative"
              >
                {!showMap && (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-gray-400">
                      El mapa se cargará al desplazarte
                    </div>
                  </div>
                )}

                {showMap && !mapLoaded && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gray-800/60">
                    <span className="loading loading-lg text-white" />
                    <span className="mt-2 text-sm text-gray-200">
                      Cargando mapa…
                    </span>
                  </div>
                )}

                {showMap && (
                  <iframe
                    title="mapa-ubicacion"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14244.824694484489!2d-65.27400651137697!3d-26.801563075660585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d9aa1b1bf15%3A0x7170a8943bc01fb!2sLas%20Ca%C3%B1as%20Eventos!5e0!3m2!1ses-419!2sar!4v1772549588924!5m2!1ses-419!2sar"
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={() => setMapLoaded(true)}
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección inferior con formulario (fondo ancho completo) */}
      <section className="w-full bg-base-200 text-base-content">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Le responderemos a la brevedad
            </h2>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-blue-500 my-3 mx-auto md:mx-0" />

            <p className="mt-3 text-base-content/70">
              ¿Tenés alguna consulta? Estamos para ayudarte.
            </p>
          </div>

          {/* Card */}
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
                        className="input input-bordered w-full pl-12 rounded-xl focus:input-primary transition"
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
                        className="input input-bordered w-full pl-12 rounded-xl focus:input-primary transition"
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
                        className="textarea textarea-bordered w-full pl-14 pt-4 rounded-xl h-40 focus:textarea-primary transition"
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
        </div>
      </section>
    </div>
  );
}
