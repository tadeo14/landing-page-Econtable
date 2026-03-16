import React from "react";
import perfil from "/src/assets/perfil.jpg";
import StaffCard from "../components/StaffCard";

const staffData = [
  {
    name: "Daniel Bisonni",
    imageSrc: perfil,
    description: "Descripción del segundo miembro del staff. Cargo, experiencia y especialidades.",  },
  {
    name: "Nombre Apellido",
    imageSrc: perfil,
    description: "Descripción del segundo miembro del staff. Cargo, experiencia y especialidades.",
  },
  {
    name: "Nombre Apellido",
    imageSrc: perfil,
    description: "Descripción del tercer miembro del staff. Cargo, experiencia y especialidades.",
  },
  {
    name: "Nombre Apellido",
    imageSrc: perfil,
    description: "Descripción del cuarto miembro del staff. Cargo, experiencia y especialidades.",
  },
];

export default function Staff() {
  return (
    <section aria-label="Staff" className="py-16 min-h-screen bg-[#305CDE]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#0F172A] mb-3">Nuestro Staff</h2>
          <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-[#2563EB] mx-auto mb-6" />
          <p className="text-[#FFFFE3]/100 max-w-xl mx-auto text-lg">
            Conocé al equipo de profesionales que trabaja día a día para acompañar
            el crecimiento de tu empresa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-8 justify-items-center">
          {staffData.map((member) => (
            <StaffCard key={member.name} {...member} />
          ))}
        </div>

      </div>
    </section>
  );
}