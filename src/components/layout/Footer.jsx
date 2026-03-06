import { NavLink } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-center bg-base-200 text-base-content">
      <div className="footer sm:footer-horizontal p-10">
        <aside>
          <span className="font-serif text-4xl font-bold text-[#1a2a5e]">CG</span>
          <p>
            Lofeudo y Asociados
            <br />
            Tu estudio contable de confianza.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Dirección</h6>
          <a href="#" className="relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full">
            Inventado 1234
          </a>
        </nav>

        <nav>
          <h6 className="footer-title">Teléfono</h6>
          <a href="tel:#" className="relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full">
            +54 11 1234-5678
          </a>
        </nav>

        <nav>
          <h6 className="footer-title">Email</h6>
          <a href="mailto:#" className="relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full">
            contacto@lofeudo.com
          </a>
        </nav>
      </div>

      <div className="border-t border-base-300 w-full py-3 text-center text-sm">
        <p>© {year} Lofeudo y Asociados. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}