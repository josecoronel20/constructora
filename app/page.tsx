import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import StructuredData from "@/components/SEO/StructuredData";

export const metadata: Metadata = {
  title: "Servicios del Hogar en Zona Norte – Electricidad, Plomería, Pintura y Más",
  description: "Servicios de mantenimiento y reparaciones para hogares en Zona Norte. Electricidad, plomería, gas, pintura, techos, impermeabilización y más. Profesionales verificados, trabajos garantizados y atención inmediata en Pilar, San Isidro, Tigre y todas las localidades.",
  keywords: "servicios zona norte, mantenimiento hogar zona norte, reparaciones zona norte, electricista zona norte, plomero zona norte, constructora zona norte",
  alternates: {
    canonical: "https://servicioszonanorte.com",
  },
};

export default function Home() {
  const localBusinessData = {
    name: "Servicios Zona Norte",
    image: "https://servicioszonanorte.com/og-image.jpg",
    url: "https://servicioszonanorte.com",
    phone: "+5491123456789",
    addressLocality: "Zona Norte",
    addressRegion: "Buenos Aires",
    latitude: -34.6037,
    longitude: -58.3816,
    openingHours: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: [
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
    ],
  };

  return (
    <>
      <StructuredData type="LocalBusiness" data={localBusinessData} />
      <main className="flex min-h-screen flex-col">
        {/* HERO */}
        <section className="bg-[#0A2A43] text-white py-20 md:py-28 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Soluciones completas para tu hogar
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200">
              Mantenimiento, reparaciones y refacciones con profesionales verificados
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Atención rápida – Garantía escrita – Presupuesto inmediato
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#F2B441] text-[#0A2A43] hover:bg-[#F2B441]/90 font-semibold"
              >
                WhatsApp
              </Button>
              <Link href="/contacto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Presupuesto
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* POR QUÉ ELEGIRNOS */}
        <section className="bg-[#0A2A43] text-white py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Por qué elegirnos
            </h2>
            <p className="text-xl text-center mb-12 text-gray-200">
              Un solo equipo para resolver todos tus trabajos
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Mano de obra profesional", icon: "👷" },
                { title: "Garantía en todos los trabajos", icon: "✓" },
                { title: "Atención rápida", icon: "⚡" },
                { title: "Precios claros", icon: "💰" },
                { title: "Especialistas en hogares", icon: "🏠" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-[#F2B441] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-[#0A2A43] text-2xl font-bold">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICIOS PRINCIPALES - RESUMEN */}
        <section className="bg-[#F4F5F7] py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F6E8F] mb-4 text-center">
              Nuestros Servicios
            </h2>
            <p className="text-center text-[#636B75] mb-12 max-w-2xl mx-auto">
              Cubrimos todas las necesidades de mantenimiento y reparación para tu hogar
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
              {[
                "Electricidad",
                "Plomería",
                "Gas",
                "Albañilería",
                "Pintura",
                "Impermeabilización",
                "Carpintería",
                "Zinguería",
                "Herrería",
                "Techos y pisos",
              ].map((servicio, i) => (
                <div
                  key={i}
                  className="bg-white p-4 md:p-6 rounded-lg border border-[#636B75] hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-12 h-12 bg-[#3F6E8F] rounded-lg mb-3 mx-auto flex items-center justify-center">
                    <span className="text-white text-xl">🔧</span>
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-[#0A2A43]">
                    {servicio}
                  </h3>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/servicios">
                <Button 
                  variant="outline" 
                  className="border-[#0A2A43] text-[#0A2A43] hover:bg-[#0A2A43] hover:text-white"
                >
                  Ver todos los servicios →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CÓMO TRABAJAMOS */}
        <section className="bg-white py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F6E8F] mb-12 text-center">
              Cómo trabajamos
            </h2>
            <div className="grid md:grid-cols-4 gap-8 md:gap-6">
              {[
                {
                  step: "1",
                  title: "Contacto",
                  description: "WhatsApp o formulario",
                  icon: "📱",
                },
                {
                  step: "2",
                  title: "Presupuesto",
                  description: "Diagnóstico y cotización",
                  icon: "📋",
                },
                {
                  step: "3",
                  title: "Trabajo",
                  description: "En tu domicilio",
                  icon: "🏠",
                },
                {
                  step: "4",
                  title: "Garantía",
                  description: "Entrega y seguimiento",
                  icon: "✓",
                },
              ].map((item, i) => (
                <div key={i} className="text-center relative">
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-[#636B75] -z-10"></div>
                  )}
                  <div className="w-16 h-16 bg-[#0A2A43] rounded-full mx-auto mb-3 flex items-center justify-center relative z-10">
                    <span className="text-white text-2xl">{item.icon}</span>
                  </div>
                  <div className="w-8 h-8 bg-[#F2B441] rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-[#0A2A43] font-bold text-sm">{item.step}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[#0A2A43] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#636B75]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ZONAS DE ATENCIÓN - SIMPLE */}
        <section className="bg-[#F4F5F7] py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3F6E8F] mb-6 text-center">
              Zonas de Atención
            </h2>
            <p className="text-center text-[#636B75] mb-8 max-w-2xl mx-auto">
              Atendemos en múltiples localidades de la región con servicio rápido y profesional
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {[
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
              ].map((zona, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg border border-[#636B75] text-center hover:shadow-md transition-shadow"
                >
                  <p className="text-[#0A2A43] font-medium">{zona}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/donde-trabajamos">
                <Button 
                  variant="outline" 
                  className="border-[#0A2A43] text-[#0A2A43] hover:bg-[#0A2A43] hover:text-white"
                >
                  Ver todas las localidades →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-[#0A2A43] text-white py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Necesitás un profesional para tu hogar?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Contactanos ahora y recibí tu presupuesto sin compromiso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#F2B441] text-[#0A2A43] hover:bg-[#F2B441]/90 font-semibold"
              >
                WhatsApp
              </Button>
              <Link href="/contacto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  Formulario de contacto
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
