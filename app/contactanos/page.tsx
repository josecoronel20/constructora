import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ConversionTracker from "@/components/ConversionTracker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctanos – Servicios del Hogar en Zona Norte",
  description: "Contactanos por WhatsApp para solicitar nuestros servicios de mantenimiento y reparaciones en Zona Norte. Respuesta rápida y presupuesto inmediato.",
  keywords: "contacto zona norte, whatsapp servicios zona norte, contacto constructora zona norte",
  alternates: {
    canonical: "https://servicioszonanorte.com/contactanos",
  },
};

export default function Contactanos() {
  return (
    <>
      {/* Conversion tracking on page load */}
      <ConversionTracker conversionId="AW-17809225020/8rM6CMrWpNIbELzqjKxC" />
      <Breadcrumbs
        items={[
          { name: "Inicio", url: "/" },
          { name: "Contáctanos", url: "/contactanos" },
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
              Contáctanos – Servicios del Hogar en Zona Norte
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Escribinos por WhatsApp y recibí una respuesta rápida. Estamos disponibles para ayudarte en todas las localidades de Zona Norte.
            </p>
          </div>
        </section>

        {/* BOTONES DE CONTACTO */}
        <section className="bg-white py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WhatsApp Principal */}
              <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">📱</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">WhatsApp</h2>
                <p className="text-white/90 mb-6">
                  Escribinos por WhatsApp y recibí una respuesta rápida. Ideal para urgencias y consultas.
                </p>
                <WhatsAppButton 
                  className="w-full bg-white text-[#0A2A43] hover:bg-white/90 text-lg font-semibold py-3 px-6"
                  showIcon={false}
                >
                  Contactar por WhatsApp
                </WhatsAppButton>
              </div>

              {/* Otro Número WhatsApp */}
              <div className="bg-gradient-to-br from-[#0A2A43] to-[#3F6E8F] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">💬</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">Otro Número</h2>
                <p className="text-white/90 mb-6">
                  También podés contactarnos por este número de WhatsApp alternativo.
                </p>
                <WhatsAppButton 
                  phone="5491123787750"
                  className="w-full bg-white text-[#0A2A43] hover:bg-white/90 text-lg font-semibold py-3 px-6"
                  showIcon={false}
                >
                  Contactar por WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

