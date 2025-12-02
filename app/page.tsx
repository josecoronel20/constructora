import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import StructuredData from "@/components/SEO/StructuredData";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Constructora & Mantenimiento del Hogar – Zona Norte",
  description: "Servicios de mantenimiento y reparaciones para hogares en Zona Norte. Electricidad, plomería, gas, pintura, techos, impermeabilización y más. Profesionales verificados, trabajos garantizados y atención inmediata en Pilar, San Isidro, Tigre y todas las localidades.",
  keywords: "servicios zona norte, mantenimiento hogar zona norte, reparaciones zona norte, electricista zona norte, plomero zona norte, constructora zona norte",
  alternates: {
    canonical: "https://servicioszonanorte.com",
  },
};

export default function Home() {
  const localBusinessData = {
    name: "Constructora & Mantenimiento del Hogar – Zona Norte",
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
        <section className="relative px-4 md:px-8 overflow-hidden flex items-center justify-center min-h-screen h-screen">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-electricista-tablero-pilar.png"
              alt="Profesional trabajando en instalación eléctrica en Zona Norte"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            {/* Overlay oscuro para legibilidad */}
            <div className="absolute inset-0 bg-[#0A2A43]/24"></div>
            {/* Overlay con gradiente para más profundidad */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A43]/95 via-[#0A2A43]/80 to-[#0A2A43]/70"></div>
          </div>
          
          {/* Contenido */}
          <div className="relative z-10 max-w-6xl mx-auto w-full flex items-center justify-center h-full py-10">
            <div className="text-center md:text-left max-w-2xl w-full">
              {/* Logo grande */}
              <div className=" mx-auto w-full flex justify-center md:justify-start">
                <Image
                  src="/images/logo-C&M.png"
                  alt="Constructora & Mantenimiento del Hogar – Zona Norte"
                  width={300}
                  height={100}
                  className="h-24 md:h-32 lg:h-40 w-auto drop-shadow-2xl"
                  priority
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white drop-shadow-lg">
                Soluciones completas para tu hogar
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-white/95 drop-shadow-md">
                Mantenimiento, reparaciones y refacciones con profesionales verificados
              </p>
              <p className="text-lg mb-8 text-white/90 drop-shadow-sm">
                Atención rápida – Garantía escrita – Presupuesto inmediato
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ ELEGIRNOS */}
        <section className="bg-gradient-to-r from-[#0A2A43] via-[#17395a] to-[#0A2A43] text-white py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto rounded-3xl shadow-2xl bg-[#0A2A43]/90 backdrop-blur-sm py-14 px-3 md:px-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center tracking-tight drop-shadow-lg">
              Por qué elegirnos
            </h2>
            <p className="text-lg md:text-xl text-center mb-12 text-gray-200 max-w-xl mx-auto">
              Un solo equipo para resolver todos tus trabajos con excelencia y confianza
            </p>
            <div className="grid  md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
              {[
                { title: "Mano de obra profesional", icon: "👷" },
                { title: "Garantía en todos los trabajos", icon: "✅" },
                { title: "Atención rápida", icon: "⚡" },
                { title: "Precios claros", icon: "💰" },
                { title: "Especialistas en hogares", icon: "🏠" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center text-center bg-white/5 rounded-xl p-5 shadow-lg hover:scale-105 hover:bg-white/10 transition-all min-h-[180px]"
                >
                  <div className="w-16 h-16 bg-[#43749a] shadow-md rounded-full flex items-center justify-center mb-5 border-4 border-white/30">
                    <span className="text-[#0A2A43] text-3xl font-extrabold drop-shadow">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white drop-shadow-lg">
                    {item.title}
                  </h3>
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
                {
                  nombre: "Electricidad",
                  href: "/servicios/electricidad",
                  bg: "/images/hero-electricista-tablero-pilar.png"
                },
                {
                  nombre: "Plomería",
                  href: "/servicios/plomeria",
                  bg: "/images/servicio-plomeria-san-martin.png"
                },
                {
                  nombre: "Gas",
                  href: "/servicios/gas",
                  bg: "/images/servicio-gasista-san-miguel.png"
                },
                {
                  nombre: "Albañilería",
                  href: "/servicios/albanileria",
                  bg: "/images/servicio-albañileria-jose-c-paz.png"
                },
                {
                  nombre: "Pintura",
                  href: "/servicios/pintura",
                  bg: "/images/servicio-pintura-escobar.png"
                },
                {
                  nombre: "Impermeabilización",
                  href: "/servicios/impermeabilizacion",
                  bg: "/images/servicio-impermeabilizacion-zarate.png"
                },
                {
                  nombre: "Carpintería",
                  href: "/servicios/carpinteria",
                  bg: "/images/servicio-carpinteria-vicente-lopez.png"
                },
                {
                  nombre: "Herrería",
                  href: "/servicios/herrería",
                  bg: "/images/servicio-herreria-san-fernando.png"
                },
                {
                  nombre: "Revestimientos y Pisos",
                  href: "/servicios/revestimientos-pisos",
                  bg: "/images/servicio-colocacion-piso-san-isidro.png"
                },
                {
                  nombre: "Aire Acondicionado",
                  href: "/servicios/aire-acondicionado",
                  bg: "/images/servicio-aire-acondicionado-tigre.png"
                },
              ].map((servicio, i) => (
                <Link
                  key={i}
                  href={servicio.href}
                  className="group"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="
                      relative 
                      bg-white 
                      p-0 
                      rounded-2xl 
                      border 
                      border-[#3F6E8F] 
                      hover:shadow-2xl 
                      hover:scale-105 
                      transition-all 
                      text-center 
                      min-h-[190px] 
                      flex 
                      flex-col 
                      items-center 
                      overflow-hidden 
                      duration-300
                      focus-within:ring-2 focus-within:ring-[#F2B441]
                    "
                    style={{ 
                      backgroundImage: `linear-gradient(rgba(10,42,67,0.48),rgba(10,42,67,0.56)), url(${servicio.bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Overlay refactor: subtle gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A43]/50 via-[#0A2A43]/30 to-transparent group-hover:from-[#0A2A43]/60 group-hover:via-[#0A2A43]/40 transition-all duration-300" />
                    <div className="relative flex flex-col items-center justify-center flex-1 px-7 py-10 md:px-8 md:py-12">
                      <h3 className="text-base md:text-lg font-bold text-white drop-shadow-lg shadow-black/30 tracking-tight mb-1 bg-[#0A2A43]/70 rounded px-3 py-2 group-hover:bg-[#0A2A43]/50 transition-all duration-200">
                        {servicio.nombre}
                      </h3>
                    </div>
                    {/* Sutil línea decorativa abajo */}
                    <div className="h-1 w-full bg-[#F2B441] opacity-70 group-hover:opacity-90 transition-opacity rounded-b-2xl" />
                  </div>
                </Link>
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
              {[
                { nombre: "Pilar", slug: "pilar" },
                { nombre: "San Isidro", slug: "san-isidro" },
                { nombre: "Tigre", slug: "tigre" },
                { nombre: "Vicente López", slug: "vicente-lopez" },
                { nombre: "San Miguel", slug: "san-miguel" },
                { nombre: "Malvinas Argentinas", slug: "malvinas-argentinas" },
                { nombre: "José C. Paz", slug: "jose-c-paz" },
                { nombre: "General San Martín", slug: "general-san-martin" },
                { nombre: "San Fernando", slug: "san-fernando" },
                { nombre: "Zárate", slug: "zarate" },
                { nombre: "Cardales", slug: "cardales" },
              ].map((localidad, i) => (
                <Link
                  key={i}
                  href={`/donde-trabajamos/${localidad.slug}`}
                  className="group"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="bg-white p-5 md:p-6 rounded-xl border-2 border-[#3F6E8F]/30 text-center hover:shadow-xl hover:scale-105 hover:border-[#F2B441] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#F2B441]">
                    <div className="mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0A2A43] to-[#3F6E8F] rounded-lg mx-auto flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                        <span className="text-white text-xl">📍</span>
                      </div>
                    </div>
                    <p className="text-[#0A2A43] font-semibold text-sm md:text-base group-hover:text-[#3F6E8F] transition-colors">
                      {localidad.nombre}
                    </p>
                    <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[#F2B441] text-xs font-medium">Ver servicios →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/donde-trabajamos">
                <Button 
                  variant="outline" 
                  className="border-2 border-[#0A2A43] text-[#0A2A43] hover:bg-[#0A2A43] hover:text-white font-semibold shadow-md hover:shadow-lg transition-all"
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
              <WhatsAppButton />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
