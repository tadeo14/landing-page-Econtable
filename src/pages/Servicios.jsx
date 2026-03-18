import React, { useState } from "react";
import laptopImg from "../assets/laptop.jpg";

const SERVICES = [
  {
    id: 1,
    title: "Asesoría Fiscal",
    short: "Planificación y cumplimiento de impuestos para pymes y autónomos.",
    details:
      "Planificación y optimización fiscal dentro del marco legal. Preparación y presentación de declaraciones, informes claros con recomendaciones prácticas y asistencia en inspecciones. Ofrecemos revisiones periódicas y asesoramiento personalizado, con coordinación y entregables online.",
    help: [
      {
        title: "Planificación impositiva",
        desc: "Diseñamos estrategias para optimizar tu carga fiscal dentro del marco legal.",
      },
      {
        title: "Presentación de declaraciones",
        desc: "Preparación y envío de declaraciones periódicas ante organismos.",
      },
      {
        title: "Defensa ante inspecciones",
        desc: "Acompañamiento y respuestas formales en auditorías fiscales.",
      },
    ],
  },
  {
    id: 2,
    title: "Contabilidad y Cierre Mensual",
    short: "Contabilidad completa, conciliaciones y cierres mensuales.",
    details:
      "Contabilidad diaria, conciliaciones y cierres mensuales con estados financieros e indicadores clave. Incluye análisis de variaciones, automatización de procesos contables y reportes online para facilitar decisiones ágiles.",
    help: [
      {
        title: "Registro diario",
        desc: "Ingreso y categorización de facturas y comprobantes.",
      },
      {
        title: "Conciliaciones bancarias",
        desc: "Verificación y ajuste de movimientos frente a extractos.",
      },
      {
        title: "Estados financieros",
        desc: "Preparación de balances y reportes mensuales claros.",
      },
    ],
  },
  {
    id: 3,
    title: "Gestión de Nómina",
    short: "Liquidación de sueldos, contratos y trámites laborales.",
    details:
      "Cálculo y emisión de nóminas, gestión de altas/bajas y presentación de cargas sociales. Cubrimos cumplimiento normativo, gestión de beneficios y ofrecemos soporte para empleados, además de reportes detallados de costes laborales.",
    help: [
      {
        title: "Liquidación de sueldos",
        desc: "Cálculo y emisión de recibos cumpliendo con la normativa vigente.",
      },
      {
        title: "Cargas sociales",
        desc: "Cálculo y presentación de aportes y contribuciones.",
      },
      {
        title: "Gestión de contratos",
        desc: "Asesoramiento en contratos laborales y modificaciones.",
      },
    ],
  },
  {
    id: 4,
    title: "Consultoría Financiera ",
    short: "Análisis financiero, presupuestos y proyecciones de flujo de caja.",
    details:
      "Presupuestos, proyecciones de flujo de caja y análisis de rentabilidad para apoyar la planificación financiera. Incluye escenarios y recomendaciones accionables, con modelos y reportes prácticos para uso operativo y estratégico.",
    help: [
      {
        title: "Proyecciones",
        desc: "Flujo de caja y escenarios para la toma de decisiones.",
      },
      {
        title: "Análisis de rentabilidad",
        desc: "Evaluación de productos y líneas de negocio.",
      },
      {
        title: "Presupuestos",
        desc: "Elaboración y seguimiento de presupuestos empresariales.",
      },
    ],
  },
];

export default function Servicios() {
  const [selected, setSelected] = useState(null);
  function scrollToService(index) {
    const el = document.getElementById(`service-${index}`);
    if (el) {
      // Compensate for any fixed header or separators so the section aligns correctly
      const header =
        document.querySelector("nav") || document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 80; // default fallback
      const extra = 16; // small spacing
      const top =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight -
        extra;
      window.scrollTo({ top, behavior: "smooth" });
      setSelected(index);
    }
  }

  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="mt-5 mb-20 md:mb-6 text-5xl md:text-6xl font-bold text-center">
          Nuestros Servicios
        </h1>
        <div className="border-b" />

        {/* Barra superior con botones (columna en móvil, fila en pantallas grandes) */}
        <div className="w-full py-4 my-4">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-stretch items-center justify-between gap-4 px-4">
            {SERVICES.map((s, idx) => (
              <div
                key={s.id}
                className="flex-1 text-center flex flex-col justify-between py-4"
              >
                <div className="text-gray-700">
                  <h2 className="font-semibold mb-4 text-xl  md:text-base">{s.title}</h2>
                </div>
                <button
                  onClick={() => scrollToService(idx)}
                  className="text-base md:text-sm inline-block bg-slate-800 hover:bg-blue-700 text-white py-1.5 px-3 mx-auto w-auto sm:w-40"
                >
                  Más información
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Imagen a full ancho */}
      <div className="w-full">
        <img
          src={laptopImg}
          alt="Servicios"
          className="w-full h-56 md:h-80 object-cover"
        />
      </div>

      {/* Secciones detalladas por servicio (fondo que ocupa todo el ancho) */}
      <div>
        {SERVICES.map((s, idx) => {
          const isDark = idx % 2 === 0;
          return (
            <div
              key={s.id}
              className={`${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
            >
              <section id={`service-${idx}`} className="py-16">
                <div className="max-w-5xl mx-auto px-4">
                  <div className="mb-6 relative pt-6 md:pt-10">
                    <h2
                      className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {s.title}
                    </h2>
                  </div>

                  <div className="mb-8">
                    <p
                      className={`leading-relaxed ${isDark ? "text-gray-200" : "text-gray-700"}`}
                    >
                      {s.details}
                    </p>
                  </div>

                  <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
                    <div className="md:flex md:flex-col md:justify-center md:text-center">
                      <h3
                        className={`text-center font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                      >
                        ¿En qué podemos ayudarte?
                      </h3>
                    </div>

                    <div>
                      <ul
                        className={`list-disc list-inside space-y-3 ${isDark ? "text-gray-200" : "text-gray-800"}`}
                      >
                        {s.help &&
                          s.help.map((h, i) => (
                            <li key={i}>
                              <h4
                                className={`font-semibold inline ${isDark ? "text-white" : "text-gray-900"}`}
                              >
                                {h.title}:
                              </h4>{" "}
                              <span
                                className={`${isDark ? "text-sm text-gray-300" : "text-sm text-gray-700"}`}
                              >
                                {h.desc}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}
