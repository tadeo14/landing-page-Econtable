import React from "react";
import Carousel from "../components/Carousel";
import laptopImg from "../assets/laptop.jpg";
import calculoImg from "../assets/calculo.jpg";
import decisionesImg from "../assets/decisiones.jpg";

const slides = [
  {
    phrase: "Gestiona tus finanzas con confianza",
    subtitle: "Somos tu socio contable de confianza",
    image: laptopImg,
  },
  {
    phrase: "Transparencia y precisión en cada número",
    subtitle: "Expertos en contabilidad y asesoría fiscal",
    image: calculoImg,
  },
  {
    phrase: "Crece tu negocio sin preocupaciones",
    subtitle: "Tu éxito financiero es nuestro compromiso",
    image: decisionesImg,
  },
];

export default function Inicio() {
  // slides defined above

  return (
    <>
      {/* Invisible main heading for SEO */}
      <h1 className="sr-only">
        Estudio Lofeudo y Asociados - Estudio Contable
      </h1>
      <Carousel slides={slides} />
      <section aria-label="Bienvenida" className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            Bienvenido a Estudio Lofeudo y Asociados
          </h2>
          <p className="text-lg text-gray-600">
            Tu estudio contable de confianza donde transformamos números en
            tranquilidad. Con años de experiencia en asesoría fiscal,
            contabilidad y gestión financiera, trabajamos de la mano contigo
            para impulsar el crecimiento de tu negocio.
          </p>
        </div>
      </section>
      {/* Misión y valores — estilo minimalista para estudio contable */}
      <section aria-label="Misión" className="py-16 bg-gray-900 text-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-3">Misión y valores</h2>
              <div className="w-20 h-0.5 bg-indigo-400 mb-6"  />

              <p className="text-gray-300 mb-6 max-w-2xl">
                Somos un estudio contable dedicado a brindar claridad financiera
                y acompañamiento estratégico. Nuestro trabajo se centra en
                entregar información precisa, procesos eficientes y
                asesoramiento práctico, para que las decisiones de tu empresa
                estén siempre bien fundamentadas.
              </p>

              <ul className="space-y-6 text-gray-300">
                <li>
                  <h3 className="text-lg font-medium">
                    Asesoría personalizada
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Planes adaptados a cada realidad empresarial, con foco en
                    resultado y cumplimiento normativo.
                  </p>
                </li>

                <li>
                  <h3 className="text-lg font-medium">
                    Tecnología y precisión
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Procesos digitales y reportes claros que permiten un control
                    real de la gestión financiera.
                  </p>
                </li>

                <li>
                  <h3 className="text-lg font-medium">
                    Compromiso y transparencia
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Comunicación abierta y asesoramiento continuo para construir
                    relaciones de confianza a largo plazo.
                  </p>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1 flex flex-col gap-4 md:mt-0 mt-5 md:self-start self-center">
              <img
                src={laptopImg}
                alt="Asesoría"
                className="w-full h-28 object-cover rounded-sm border border-gray-700"
              />
              <img
                src={calculoImg}
                alt="Tecnología"
                className="w-full h-28 object-cover rounded-sm border border-gray-700"
              />
              <img
                src={decisionesImg}
                alt="Confianza"
                className="w-full h-28 object-cover rounded-sm border border-gray-700"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
