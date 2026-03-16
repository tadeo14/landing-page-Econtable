import React from "react";
import Partners from "../components/Partners";

const teamMembers = [
  { name: "Ana García", role: "Socia fundadora · CPN", img: "https://placehold.co/300x300?text=AG" },
  { name: "Carlos López", role: "Socio · Especialista impositivo", img: "https://placehold.co/300x300?text=CL" },
  { name: "Valeria Ruiz", role: "Contadora · Auditoría", img: "https://placehold.co/300x300?text=VR" },
];

export default function QuienesSomos() {
  return (
    <>
      {/* ── Historia / Trayectoria ── */}
      <section aria-label="Historia" className="py-16 bg-gray-900 text-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

            {/* Texto */}
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-3">Nuestra historia</h2>
              <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-blue-500 mb-6 mx-auto md:mx-0" />

              <p className="text-gray-300 mb-6 max-w-2xl">
                Fundado en 2005, nuestro estudio nació con la convicción de que las
                PyMEs merecen el mismo nivel de asesoramiento contable que las grandes
                empresas. A lo largo de casi dos décadas acompañamos el crecimiento de
                cientos de empresas y profesionales en la región.
              </p>

              <ul className="space-y-6 text-gray-300">
                <li>
                  <h3 className="text-lg font-medium">2005 — Los inicios</h3>
                  <p className="text-sm leading-relaxed">
                    Abrimos nuestras puertas con un equipo de tres profesionales y el
                    foco puesto en la atención personalizada y el cumplimiento normativo.
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-medium">2012 — Expansión</h3>
                  <p className="text-sm leading-relaxed">
                    Incorporamos nuevas especialidades: auditoría, planificación
                    impositiva y asesoría societaria, ampliando nuestra propuesta de valor.
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-medium">2020 — Transformación digital</h3>
                  <p className="text-sm leading-relaxed">
                    Migramos todos los procesos a plataformas digitales, lo que nos
                    permitió brindar un servicio más ágil y transparente sin importar
                    la ubicación del cliente.
                  </p>
                </li>
              </ul>
            </div>

            {/* Imágenes */}
            <div className="md:col-span-1 flex flex-col gap-4 md:mt-5 mt-0 md:self-start self-center">
              {[
                { alt: "Oficina fundacional", text: "2005" },
                { alt: "Equipo en expansión", text: "2012" },
                { alt: "Trabajo digital", text: "2020" },
              ].map(({ alt, text }) => (
                <div key={text} className="card card-compact w-full bg-base-100 shadow-sm">
                  <figure>
                    <img
                      src={`https://placehold.co/400x112?text=${text}`}
                      alt={alt}
                      className="w-full h-28 object-cover"
                    />
                  </figure>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
        <Partners/>

      {/* ── Equipo / Fundadores ── 
      <section aria-label="Equipo" className="py-16 bg-gray-800 text-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-3">Nuestro equipo</h2>
          <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-blue-500 mb-6 mx-auto" />
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Somos un grupo de profesionales comprometidos con la excelencia técnica y
            el trato cercano. Cada miembro del equipo aporta experiencia especializada
            para cubrir todas las necesidades de tu empresa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map(({ name, role, img }) => (
              <div key={name} className="card bg-gray-900 shadow-sm">
                <figure className="pt-6">
                  <img
                    src={img}
                    alt={name}
                    className="rounded-full w-28 h-28 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center pb-6 pt-3">
                  <h3 className="card-title text-base text-gray-100">{name}</h3>
                  <p className="text-sm text-gray-400">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}
    </>
  );
}
