import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import CustomButton from "./CustomButton";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data, e) => {
    emailjs
      .sendForm(
        "service_b2pdb3t",
        "template_e2ey5hg",
        e.target,
        "BDtEaJzGHui804FZE",
      )
      .then(() => {
        setSubmitted(true);
        reset(); 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    if (!submitted) return;
    const t = setTimeout(() => setSubmitted(false), 4000);
    return () => clearTimeout(t);
  }, [submitted]);


  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-8 md:p-10">
        {submitted && (
          <div className="my-2 alert shadow-md border border-green-200 bg-green-50 text-green-800">
            <p className="font-semibold"> Consulta enviada correctamente</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div className="form-control">
              <label className="block text-sm font-medium mb-2">Nombre</label>

              <div className="relative">
                <UserIcon className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-blue-500" />

                <input
                  type="text"
                  placeholder="Nombre"
                  className="input input-bordered w-full rounded-xl border-2 border-slate-300 pl-12 text-slate-800 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  // 🔥 VALIDACIONES
                  {...register("name", {
                    required: "El nombre es obligatorio",
                    minLength: {
                      value: 2,
                      message: "Debe tener al menos 2 caracteres",
                    },
                  })}
                />
              </div>

              {/* ❗ ERROR */}
              {errors.name && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="block text-sm font-medium mb-2">Email</label>

              <div className="relative">
                <EnvelopeIcon className="pointer-events-none absolute left-4 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-blue-500" />

                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full rounded-xl border-2 border-slate-300 pl-12 text-slate-800 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  {...register("email", {
                    required: "El email es obligatorio",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email inválido",
                    },
                  })}
                />
              </div>

              {errors.email && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div className="md:col-span-2 form-control">
              <label className="block text-sm font-medium mb-2">Mensaje</label>

              <div className="relative">
                <ChatBubbleLeftIcon className="pointer-events-none absolute left-4 top-4 z-10 h-6 w-6 text-blue-500" />

                <textarea
                  placeholder="Mensaje"
                  className="textarea textarea-bordered h-40 w-full rounded-xl border-2 border-slate-300 pl-14 pt-4 text-slate-800 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  {...register("message", {
                    required: "El mensaje es obligatorio",
                    minLength: {
                      value: 10,
                      message: "Debe tener al menos 10 caracteres",
                    },
                  })}
                />
              </div>

              {errors.message && (
                <p className="text-red-600 text-sm mt-2">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Botón */}
            <div className="md:col-span-2 flex justify-end">
              <CustomButton
                type="submit"
                disabled={!isValid}
                className={!isValid ? "opacity-50 cursor-not-allowed" : ""}
              >
                Enviar mensaje
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
