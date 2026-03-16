import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import perfil from "/src/assets/perfil.jpg";

// ── Datos ──────────────────────────────────────────────────────────────
const orgData = {
  name: "María Fernández",
  role: "Socia Directora",
  img: "/src/assets/perfil.jpg",
  children: [
    {
      area: "Auditoría",
      members: [
        { name: "Lucas Torres",   role: "Jefe de Auditoría",  img: "/src/assets/perfil.jpg" },
        { name: "Sofía Méndez",   role: "Auditora Senior",    img: "/src/assets/perfil.jpg" },
        { name: "Diego Paredes",  role: "Auditor Junior",     img: "/src/assets/perfil.jpg" },
      ],
    },
    {
      area: "Administración",
      members: [
        { name: "Carla Ríos",     role: "Jefa Administrativa", img: "/src/assets/perfil.jpg" },
        { name: "Martín Sosa",    role: "Analista Contable",   img: "/src/assets/perfil.jpg" },
      ],
    },
    {
      area: "Asesoría Legal",
      members: [
        { name: "Valeria Castro", role: "Asesora Legal",       img: "/src/assets/perfil.jpg" },
        { name: "Nicolás Vera",   role: "Asistente Legal",     img: "/src/assets/perfil.jpg" },
      ],
    },
  ],
};

// ── Cards ──────────────────────────────────────────────────────────────
function DirectorCard({ name, role, img }) {
  return (
    <div className="inline-flex flex-col items-center bg-blue-700 text-white rounded-xl px-5 py-4 shadow-lg min-w-[160px]">
      <img src={img} alt={name} className="w-16 h-16 rounded-full object-cover border-2 border-white mb-2" />
      <span className="font-semibold text-sm">{name}</span>
      <span className="text-xs text-blue-200 mt-0.5">{role}</span>
    </div>
  );
}

function AreaCard({ area }) {
  return (
    <div className="inline-flex items-center justify-center bg-gray-700 text-gray-100 rounded-lg px-4 py-2 shadow min-w-[140px]">
      <span className="font-medium text-sm">{area}</span>
    </div>
  );
}

function MemberCard({ name, role, img }) {
  return (
    <div className="inline-flex flex-col items-center bg-gray-900 text-gray-100 rounded-xl px-4 py-3 shadow min-w-[130px]">
      <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover border border-gray-600 mb-2" />
      <span className="font-medium text-xs text-center">{name}</span>
      <span className="text-xs text-gray-400 mt-0.5 text-center">{role}</span>
    </div>
  );
}

// ── Componente principal ───────────────────────────────────────────────
export default function Staff() {
  return (
    <section aria-label="Staff" className="py-16 bg-gray-900 text-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">

        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3">Nuestro Staff</h2>
          <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-blue-500 mx-auto mb-6" />
          <p className="text-gray-300 max-w-xl mx-auto text-sm">
            Conocé al equipo de profesionales que trabaja día a día para acompañar
            el crecimiento de tu empresa.
          </p>
        </div>

        {/* Organigrama */}
        <div className="overflow-x-auto pb-4">
          <Tree
            lineWidth="2px"
            lineColor="#3b82f6"
            lineBorderRadius="6px"
            label={
              <div className="flex justify-center">
                <DirectorCard
                  name={orgData.name}
                  role={orgData.role}
                  img={orgData.img}
                />
              </div>
            }
          >
            {orgData.children.map((dept) => (
              <TreeNode
                key={dept.area}
                label={
                  <div className="flex justify-center">
                    <AreaCard area={dept.area} />
                  </div>
                }
              >
                {dept.members.map((member) => (
                  <TreeNode
                    key={member.name}
                    label={
                      <div className="flex justify-center">
                        <MemberCard
                          name={member.name}
                          role={member.role}
                          img={member.img}
                        />
                      </div>
                    }
                  />
                ))}
              </TreeNode>
            ))}
          </Tree>
        </div>

      </div>
    </section>
  );
}