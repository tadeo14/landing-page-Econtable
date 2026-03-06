import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Inicio from "../pages/Inicio";
import Servicios from "../pages/Servicios";
import Contacto from "../pages/Contacto";
import QuienesSomos from "../pages/QuienesSomos";
import Staff from "../pages/Staff";
import FloatingContact from "../components/layout/FloatingContact";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
<FloatingContact />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

       <Footer />
    </BrowserRouter>
  );
}
