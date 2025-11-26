"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    celular: "",
    localidad: "",
    servicio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const localidades = [
    "Pilar",
    "San Isidro",
    "Tigre",
    "Vicente López",
    "San Miguel",
    "Malvinas Argentinas",
    "José C. Paz",
    "General San Martín",
    "San Fernando",
    "Zárate",
    "Cardales",
  ];

  const servicios = [
    "Electricidad",
    "Plomería",
    "Gas",
    "Albañilería",
    "Pintura",
    "Impermeabilización",
    "Carpintería",
    "Zinguería",
    "Herrería",
    "Techos",
    "Revestimientos y Pisos",
    "Aire Acondicionado",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xpzgqkvn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          nombre: "",
          celular: "",
          localidad: "",
          servicio: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", url: "/" },
          { name: "Contacto", url: "/contacto" },
        ]}
      />
      <main className="flex min-h-screen flex-col">
        {/* HERO */}
      <section className="bg-[#0A2A43] text-white py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F2B441] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3F6E8F] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Contactanos – Servicios del Hogar en Zona Norte
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Estamos listos para ayudarte. Contactanos por WhatsApp, teléfono o completá el formulario 
            y te responderemos a la brevedad.
          </p>
        </div>
      </section>

      {/* CONTACTO RÁPIDO */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">WhatsApp</h2>
                  <p className="text-white/90">Respuesta inmediata</p>
                </div>
              </div>
              <p className="mb-6 text-white/90">
                Escribinos por WhatsApp y recibí una respuesta al instante. 
                Ideal para consultas urgentes y presupuestos rápidos.
              </p>
              <a
                href="https://wa.me/5491123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-[#25D366] hover:bg-white/90 text-lg font-semibold py-3 px-6 rounded-md text-center transition-colors"
              >
                Abrir WhatsApp
              </a>
            </div>

            {/* Teléfono */}
            <div className="bg-gradient-to-br from-[#0A2A43] to-[#3F6E8F] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl">📞</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Teléfono</h2>
                  <p className="text-white/90">Llamanos directamente</p>
                </div>
              </div>
              <p className="mb-6 text-white/90">
                Llamanos durante nuestros horarios de atención. 
                Estamos disponibles para responder todas tus consultas.
              </p>
              <a
                href="tel:+5491123456789"
                className="block w-full border-2 border-white text-white hover:bg-white hover:text-[#0A2A43] text-lg font-semibold py-3 px-6 rounded-md text-center transition-colors"
              >
                Llamar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="bg-[#F4F5F7] py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2A43] mb-4">
              Enviános tu consulta
            </h2>
            <div className="w-24 h-1 bg-[#F2B441] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#636B75] max-w-2xl mx-auto">
              Completá el formulario y nos pondremos en contacto contigo a la brevedad. 
              Todos los campos son obligatorios.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
            <div className="space-y-6">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-[#0A2A43] mb-2"
                >
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3F6E8F] focus:outline-none transition-colors text-[#0A2A43]"
                  placeholder="Ingresá tu nombre completo"
                />
              </div>

              {/* Celular */}
              <div>
                <label
                  htmlFor="celular"
                  className="block text-sm font-semibold text-[#0A2A43] mb-2"
                >
                  Celular *
                </label>
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3F6E8F] focus:outline-none transition-colors text-[#0A2A43]"
                  placeholder="11 1234-5678"
                />
              </div>

              {/* Localidad */}
              <div>
                <label
                  htmlFor="localidad"
                  className="block text-sm font-semibold text-[#0A2A43] mb-2"
                >
                  Localidad *
                </label>
                <select
                  id="localidad"
                  name="localidad"
                  value={formData.localidad}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3F6E8F] focus:outline-none transition-colors text-[#0A2A43] bg-white"
                >
                  <option value="">Seleccioná tu localidad</option>
                  {localidades.map((localidad) => (
                    <option key={localidad} value={localidad}>
                      {localidad}
                    </option>
                  ))}
                </select>
              </div>

              {/* Servicio */}
              <div>
                <label
                  htmlFor="servicio"
                  className="block text-sm font-semibold text-[#0A2A43] mb-2"
                >
                  Servicio de interés *
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#3F6E8F] focus:outline-none transition-colors text-[#0A2A43] bg-white"
                >
                  <option value="">Seleccioná el servicio</option>
                  {servicios.map((servicio) => (
                    <option key={servicio} value={servicio}>
                      {servicio}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensaje de estado */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border-2 border-green-500 text-green-700 p-4 rounded-lg">
                  ¡Gracias por contactarnos! Te responderemos a la brevedad.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border-2 border-red-500 text-red-700 p-4 rounded-lg">
                  Hubo un error al enviar el formulario. Por favor, intentá nuevamente o contactanos por WhatsApp.
                </div>
              )}

              {/* Botón enviar */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F2B441] text-[#0A2A43] hover:bg-[#F2B441]/90 text-lg font-semibold py-6 disabled:opacity-50"
              >
                {isSubmitting ? "Enviando..." : "Enviar consulta"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* HORARIOS */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2A43] mb-4">
              Horarios de atención
            </h2>
            <div className="w-24 h-1 bg-[#F2B441] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-[#F4F5F7] p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-[#0A2A43] mb-4 flex items-center gap-3">
                <span className="text-2xl">🕐</span>
                Lunes a Viernes
              </h3>
              <p className="text-lg text-[#636B75]">8:00 hs - 20:00 hs</p>
            </div>
            <div className="bg-[#F4F5F7] p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold text-[#0A2A43] mb-4 flex items-center gap-3">
                <span className="text-2xl">🕐</span>
                Sábados
              </h3>
              <p className="text-lg text-[#636B75]">9:00 hs - 18:00 hs</p>
            </div>
            <div className="bg-[#F4F5F7] p-8 rounded-xl border border-gray-200 md:col-span-2">
              <h3 className="text-xl font-semibold text-[#0A2A43] mb-4 flex items-center gap-3">
                <span className="text-2xl">📞</span>
                Emergencias
              </h3>
              <p className="text-lg text-[#636B75]">
                Atendemos emergencias las 24 horas. Contactanos por WhatsApp para urgencias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZONAS DE ATENCIÓN */}
      <section className="bg-[#F4F5F7] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2A43] mb-4">
              Zonas de atención
            </h2>
            <div className="w-24 h-1 bg-[#F2B441] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-[#636B75] max-w-2xl mx-auto">
              Atendemos en todas las localidades de Zona Norte. Cada localidad tiene su propia landing 
              con información detallada de servicios y barrios.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {localidades.map((localidad) => {
              const slug = localidad.toLowerCase().replace(/\s+/g, "-").replace(/[áéíóú]/g, (match) => {
                const map: { [key: string]: string } = { á: "a", é: "e", í: "i", ó: "o", ú: "u" };
                return map[match] || match;
              });
              return (
                <Link
                  key={localidad}
                  href={`/donde-trabajamos/${slug}`}
                  className="bg-white p-5 rounded-xl border-2 border-gray-200 hover:border-[#3F6E8F] hover:shadow-lg transition-all text-center group"
                >
                  <div className="w-12 h-12 bg-[#0A2A43] rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-[#3F6E8F] transition-colors">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <h3 className="text-base font-semibold text-[#0A2A43] group-hover:text-[#3F6E8F] transition-colors">
                    {localidad}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#0A2A43] text-white py-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F2B441] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3F6E8F] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed">
            Contactanos ahora y recibí tu presupuesto sin costo. 
            Respuesta rápida en todas las localidades de Zona Norte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5491123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F2B441] text-[#0A2A43] hover:bg-[#F2B441]/90 text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 rounded-md"
            >
              📱 Contactar por WhatsApp
            </a>
            <a
              href="tel:+5491123456789"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#0A2A43] text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 rounded-md"
            >
              📞 Llamar ahora
            </a>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}

