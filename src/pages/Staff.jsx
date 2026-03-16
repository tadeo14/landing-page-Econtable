import React from "react";
import perfil from "/src/assets/perfil.jpg";
import StaffCard from "../components/StaffCard";

// ── Datos ──────────────────────────────────────────────────────────────
const staffData = [
  {
    name: "Daniel Bisonni",
    imageSrc: perfil,
    description: "Contador Público egresado de la Universidad Nacional de Rosario. Perito Contador ante los Tribunales Federales del Poder Judicial de la Nación y los Tribunales Provinciales del Poder Judicial de la Provincia de Santa Fe. Más de 10 años de experiencia asesorando empresas. Especialista en impuestos, costos y mercados de capitales.",
  },
  {
    name: "Daniel Bisonni",
    imageSrc: perfil,
    description: "Contador Público egresado de la Universidad Nacional de Rosario. Perito Contador ante los Tribunales Federales del Poder Judicial de la Nación y los Tribunales Provinciales del Poder Judicial de la Provincia de Santa Fe. Más de 10 años de experiencia asesorando empresas. Especialista en impuestos, costos y mercados de capitales.",
  },
  {
    name: "Daniel Bisonni",
    imageSrc: perfil,
    description: "Contador Público egresado de la Universidad Nacional de Rosario. Perito Contador ante los Tribunales Federales del Poder Judicial de la Nación y los Tribunales Provinciales del Poder Judicial de la Provincia de Santa Fe. Más de 10 años de experiencia asesorando empresas. Especialista en impuestos, costos y mercados de capitales.",
  },
  {
    name: "Daniel Bisonni",
    imageSrc: perfil,
    description: "Contador Público egresado de la Universidad Nacional de Rosario. Perito Contador ante los Tribunales Federales del Poder Judicial de la Nación y los Tribunales Provinciales del Poder Judicial de la Provincia de Santa Fe. Más de 10 años de experiencia asesorando empresas. Especialista en impuestos, costos y mercados de capitales.",
  }  
];



// ── Componente principal ───────────────────────────────────────────────
export default function Staff() {
  return (
    <section aria-label="Staff" className="py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3">Nuestro Staff</h2>
          <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-blue-500 mx-auto mb-6" />
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Conocé al equipo de profesionales que trabaja día a día para acompañar
            el crecimiento de tu empresa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center max-w-2xl mx-auto">
          {staffData.map((member) => (
            <StaffCard key={member.name} {...member} />
          ))}
        </div>
        
        

      </div>
    </section>
  );
}