import React from "react";
import { SiWhatsapp } from "react-icons/si";

export default function FloatingContact() {
  const phone = "549815633405"; 
  const href = `https://wa.me/${phone}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactanos por WhatsApp"
      className="flex items-center fixed bottom-3 right-3 z-50 gap-3 bg-[#173347] text-white px-3 py-1.5 rounded-full shadow-lg hover:scale-105 transform transition-all sm:bottom-4 sm:right-4 sm:px-4 sm:py-2"
    >
      <span className="flex items-center justify-center w-8 h-8 p-2 rounded-full sm:w-9 sm:h-9">
        <SiWhatsapp className="h-5 w-5 text-white" />
      </span>

      <span className="pr-1 font-medium text-sm">Contactanos</span>
    </a>
  );
}
