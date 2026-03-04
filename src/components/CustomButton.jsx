import React from "react";

export default function CustomButton({ children, className = "", type = "button", ...props }) {
  const base = "btn btn-primary px-8 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition";
  return (
    <button type={type} className={`${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
