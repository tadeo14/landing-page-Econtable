import { useState, useEffect } from "react";

export default function Loader({ onDone }) {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1500);
    return () => clearTimeout(fadeTimer);
  }, []);

  return (
    <div
      onTransitionEnd={() => fading && onDone()} 
      className={`fixed inset-0 bg-white flex justify-center items-center z-[9999] transition-opacity duration-700 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <span className="font-serif text-6xl font-bold text-[#1a2a5e] animate-pulse">
        Lofeudo y Asociados
      </span>
    </div>
  );
}