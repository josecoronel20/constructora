import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Donde Trabajamos – Servicios del Hogar en Zona Norte | Pilar, San Isidro, Tigre y Más",
  description: "Atendemos servicios de mantenimiento y reparaciones para hogares en toda Zona Norte: Pilar, San Isidro, Tigre, Vicente López, San Miguel, Malvinas Argentinas, José C. Paz, General San Martín, San Fernando, Zárate y Cardales. Profesionales verificados en tu zona.",
  keywords: "servicios zona norte, donde trabajamos zona norte, servicios pilar, servicios san isidro, servicios tigre, servicios vicente lopez, servicios san miguel, constructora zona norte",
  canonical: "https://servicioszonanorte.com/donde-trabajamos",
});

export default function DondeTrabajamos() {
  const localidades = [
    {
      nombre: "Pilar",
      slug: "pilar",
      descripcion: "Servicios completos para hogares en Pilar. Atendemos Pilar Centro, Pilar Norte, Pilar Sur, Manzanares, Del Viso, Villa Rosa, Fátima, Derqui y todos los barrios.",
      destacado: "Gran cobertura en todos los barrios",
    },
    {
      nombre: "San Isidro",
      slug: "san-isidro",
      descripcion: "Servicios de mantenimiento y reparaciones para hogares en San Isidro. Electricidad, plomería, gas, pintura y más. Atención rápida y profesionales verificados.",
      destacado: "Zona céntrica y residencial",
    },
    {
      nombre: "Tigre",
      slug: "tigre",
      descripcion: "Atendemos todos los servicios del hogar en Tigre. Desde reparaciones urgentes hasta refacciones completas. Conocimiento de la zona y respuesta inmediata.",
      destacado: "Zona norte costera",
    },
    {
      nombre: "Vicente López",
      slug: "vicente-lopez",
      descripcion: "Servicios profesionales para hogares en Vicente López. Técnicos especializados en cada rubro, trabajos garantizados y presupuestos claros.",
      destacado: "Zona residencial premium",
    },
    {
      nombre: "San Miguel",
      slug: "san-miguel",
      descripcion: "Mantenimiento y reparaciones para hogares en San Miguel. Atención rápida, materiales de calidad y garantía escrita en todos los trabajos.",
      destacado: "Cobertura completa",
    },
    {
      nombre: "Malvinas Argentinas",
      slug: "malvinas-argentinas",
      descripcion: "Servicios del hogar en Malvinas Argentinas. Electricidad, plomería, albañilería, pintura y todos los servicios de mantenimiento para tu vivienda.",
      destacado: "Atención en toda la localidad",
    },
    {
      nombre: "José C. Paz",
      slug: "jose-c-paz",
      descripcion: "Profesionales verificados para servicios en José C. Paz. Reparaciones urgentes, refacciones y trabajos de mantenimiento con garantía escrita.",
      destacado: "Servicio confiable y rápido",
    },
    {
      nombre: "General San Martín",
      slug: "general-san-martin",
      descripcion: "Servicios completos para hogares en General San Martín. Un solo equipo para resolver todos tus trabajos de mantenimiento y reparaciones.",
      destacado: "Equipo multidisciplinario",
    },
    {
      nombre: "San Fernando",
      slug: "san-fernando",
      descripcion: "Atendemos servicios de construcción y mantenimiento en San Fernando. Conocimiento de la zona, atención rápida y trabajos de calidad garantizada.",
      destacado: "Zona norte costera",
    },
    {
      nombre: "Zárate",
      slug: "zarate",
      descripcion: "Servicios del hogar en Zárate. Electricidad, plomería, gas, pintura, albañilería y más. Profesionales especializados y respuesta inmediata.",
      destacado: "Zona norte extendida",
    },
    {
      nombre: "Cardales",
      slug: "cardales",
      descripcion: "Servicios de mantenimiento y reparaciones para hogares en Cardales. Atención personalizada, trabajos garantizados y presupuestos transparentes.",
      destacado: "Atención personalizada",
    },
  ];

  const beneficios = [
    {
      titulo: "Cobertura completa",
      descripcion: "Atendemos en todas las localidades de Zona Norte con el mismo nivel de calidad y profesionalismo.",
      icon: "🗺️",
    },
    {
      titulo: "Conocimiento local",
      descripcion: "Conocemos cada zona, sus particularidades y necesidades específicas. Trabajamos en todos los barrios.",
      icon: "📍",
    },
    {
      titulo: "Atención rápida",
      descripcion: "Respuesta inmediata en toda Zona Norte. Coordinamos visitas el mismo día para reparaciones urgentes.",
      icon: "⚡",
    },
    {
      titulo: "Profesionales verificados",
      descripcion: "Técnicos certificados y especialistas en cada rubro. Trabajos de calidad con garantía escrita.",
      icon: "✅",
    },
    {
      titulo: "Precios transparentes",
      descripcion: "Presupuestos claros y sin sorpresas. Adaptados a cada localidad y tipo de trabajo.",
      icon: "💰",
    },
    {
      titulo: "Garantía en todos los trabajos",
      descripcion: "Todos nuestros servicios incluyen garantía escrita. Resolvemos cualquier inconveniente sin costo adicional.",
      icon: "📋",
    },
  ];

  const serviciosPrincipales = [
    { nombre: "Electricidad", slug: "electricidad", icon: "⚡" },
    { nombre: "Plomería", slug: "plomeria", icon: "🔧" },
    { nombre: "Gas", slug: "gas", icon: "🔥" },
    { nombre: "Albañilería", slug: "albanileria", icon: "🧱" },
    { nombre: "Pintura", slug: "pintura", icon: "🎨" },
    { nombre: "Impermeabilización", slug: "impermeabilizacion", icon: "🛡️" },
    { nombre: "Carpintería", slug: "carpinteria", icon: "🪵" },
    { nombre: "Zinguería", slug: "zingueria", icon: "📐" },
    { nombre: "Herrería", slug: "herrería", icon: "⚒️" },
    { nombre: "Techos", slug: "techos", icon: "🏠" },
    { nombre: "Revestimientos y Pisos", slug: "revestimientos-pisos", icon: "🔲" },
    { nombre: "Aire Acondicionado", slug: "aire-acondicionado", icon: "❄️" },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", url: "/" },
          { name: "Donde trabajamos", url: "/donde-trabajamos" },
        ]}
      />
      <main className="flex min-h-screen flex-col">
        {/* HERO */}
        <section className="bg-[#0A2A43] text-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Donde Trabajamos – Servicios del Hogar en Toda Zona Norte
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Atendemos servicios de mantenimiento y reparaciones para hogares en todas las localidades de Zona Norte. 
            Profesionales verificados, trabajos garantizados y atención rápida en tu zona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5491123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F2B441] text-[#0A2A43] hover:bg-[#F2B441]/90 text-lg px-8 py-6 font-semibold rounded-md text-center transition-colors"
            >
              📱 Contactar por WhatsApp
            </a>
            <Link href="/contacto">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0A2A43] text-lg px-8 py-6 font-semibold"
              >
                Solicitar Presupuesto
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A43] mb-6 text-center">
            Cobertura Completa en Zona Norte
          </h2>
          <div className="prose prose-lg max-w-none text-[#636B75] space-y-4">
            <p>
              Somos especialistas en <strong>servicios para el hogar en Zona Norte</strong>, 
              atendiendo exclusivamente viviendas particulares en todas las localidades de la región. 
              Nuestra cobertura incluye desde las zonas más céntricas hasta las áreas residenciales 
              más alejadas, siempre con el mismo compromiso de calidad y profesionalismo.
            </p>
            <p>
              Trabajamos en <strong>11 localidades de Zona Norte</strong>: Pilar, San Isidro, Tigre, 
              Vicente López, San Miguel, Malvinas Argentinas, José C. Paz, General San Martín, 
              San Fernando, Zárate y Cardales. En cada una de ellas, ofrecemos todos nuestros servicios: 
              electricidad, plomería, gas, albañilería, pintura, impermeabilización, carpintería, 
              zinguería, herrería, techos, revestimientos, aire acondicionado y más.
            </p>
            <p>
              Nuestro conocimiento de la zona nos permite ofrecer <strong>atención rápida</strong> en 
              todas las localidades, con disponibilidad inmediata para reparaciones urgentes y trabajos 
              programados. Conocemos cada barrio, sus particularidades y necesidades específicas.
            </p>
          </div>
        </div>
      </section>

      {/* LISTA COMPLETA DE LOCALIDADES */}
      <section className="bg-[#F4F5F7] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A43] mb-4 text-center">
            Localidades Donde Trabajamos
          </h2>
          <p className="text-center text-[#636B75] mb-12 max-w-3xl mx-auto text-lg">
            Cada localidad cuenta con su propia landing detallada con información específica de servicios, 
            barrios atendidos y beneficios locales. Hacé clic en cualquier localidad para conocer más.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localidades.map((localidad, index) => {
              const slug = localidad.nombre.toLowerCase().replace(/\s+/g, "-").replace(/[áéíóú]/g, (match) => {
                const map: { [key: string]: string } = { á: "a", é: "e", í: "i", ó: "o", ú: "u" };
                return map[match] || match;
              });
              return (
                <Link
                  key={index}
                  href={`/donde-trabajamos/${localidad.slug}`}
                  className="relative bg-white p-8 rounded-2xl border border-[#e0e3e7] hover:shadow-2xl hover:border-[#3F6E8F] transition-all group flex flex-col min-h-[280px]"
                  style={{
                    boxShadow: "0 2px 12px 0 rgba(63,110,143,0.09)",
                  }}
                >
                  <div className="absolute top-6 right-6">
                    <svg
                      className="w-6 h-6 text-[#3F6E8F] group-hover:text-[#0A2A43] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-tr from-[#3F6E8F] to-[#6498bd] rounded-xl shadow-md flex items-center justify-center mb-5 border-4 border-white group-hover:from-[#0A2A43] group-hover:to-[#2f5178] transition-colors">
                    <span className="text-4xl">📍</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#163954] mb-2 group-hover:text-[#3F6E8F] transition-colors">
                    {localidad.nombre}
                  </h3>
                  <p className="text-sm text-[#F2B441] font-medium mb-3">
                    {localidad.destacado}
                  </p>
                  <p className="text-gray-600 text-base mb-4 font-normal leading-relaxed flex-1">
                    {localidad.descripcion}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <span className="text-[#3F6E8F] font-medium text-sm group-hover:text-[#0A2A43] transition-colors">
                      Ver servicios en {localidad.nombre} →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A43] mb-12 text-center">
            Por Qué Elegirnos en Zona Norte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="bg-[#F4F5F7] p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-[#0A2A43] rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">{beneficio.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0A2A43] mb-3">
                  {beneficio.titulo}
                </h3>
                <p className="text-[#636B75] leading-relaxed">
                  {beneficio.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS DISPONIBLES */}
      <section className="bg-[#F4F5F7] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A43] mb-4 text-center">
            Todos Nuestros Servicios Disponibles en Cada Localidad
          </h2>
          <p className="text-center text-[#636B75] mb-12 max-w-3xl mx-auto text-lg">
            Ofrecemos todos nuestros servicios en cada una de las localidades donde trabajamos. 
            Cada servicio cuenta con profesionales especializados y su propia landing detallada.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {serviciosPrincipales.map((servicio, index) => (
              <Link
                key={index}
                href={`/servicios/${servicio.slug}`}
                className="bg-white p-6 rounded-lg border border-[#636B75] hover:shadow-lg hover:border-[#3F6E8F] transition-all text-center group"
              >
                <div className="w-12 h-12 bg-[#0A2A43] rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-[#3F6E8F] transition-colors">
                  <span className="text-white text-xl">{servicio.icon}</span>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#0A2A43] group-hover:text-[#3F6E8F] transition-colors">
                  {servicio.nombre}
                </h3>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/servicios">
              <Button className="bg-[#3F6E8F] text-white hover:bg-[#0A2A43]">
                Ver todos los servicios en detalle →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A43] mb-12 text-center">
            Cómo Trabajamos en Zona Norte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2B441] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#0A2A43]">
                1
              </div>
              <h3 className="text-lg font-semibold text-[#0A2A43] mb-2">
                Contacto
              </h3>
              <p className="text-[#636B75] text-sm">
                Nos contactás por WhatsApp o formulario desde cualquier localidad de Zona Norte.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2B441] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#0A2A43]">
                2
              </div>
              <h3 className="text-lg font-semibold text-[#0A2A43] mb-2">
                Diagnóstico
              </h3>
              <p className="text-[#636B75] text-sm">
                Coordinamos visita rápida según tu localidad. Evaluamos el problema o proyecto.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2B441] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#0A2A43]">
                3
              </div>
              <h3 className="text-lg font-semibold text-[#0A2A43] mb-2">
                Presupuesto
              </h3>
              <p className="text-[#636B75] text-sm">
                Presupuesto detallado, transparente y adaptado a tu localidad y tipo de trabajo.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2B441] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#0A2A43]">
                4
              </div>
              <h3 className="text-lg font-semibold text-[#0A2A43] mb-2">
                Ejecución
              </h3>
              <p className="text-[#636B75] text-sm">
                Técnicos especializados según servicio. Cumplimiento de plazos y herramientas adecuadas.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F2B441] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#0A2A43]">
                5
              </div>
              <h3 className="text-lg font-semibold text-[#0A2A43] mb-2">
                Garantía
              </h3>
              <p className="text-[#636B75] text-sm">
                Control final de calidad y garantía escrita. Soporte post-trabajo en toda Zona Norte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#0A2A43] text-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesitás un profesional en tu localidad?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Atendemos en todas las localidades de Zona Norte. Contactanos ahora y recibí tu presupuesto sin costo. 
            Respuesta rápida sin importar dónde esté tu hogar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5491123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F2B441] text-[#0A2A43] hover:bg-[#F2B441]/90 text-lg px-8 py-6 font-semibold rounded-md text-center transition-colors"
            >
              📱 Contactar por WhatsApp
            </a>
            <Link href="/contacto">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0A2A43] text-lg px-8 py-6 font-semibold"
              >
                Solicitar Presupuesto
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            También podés consultar la landing específica de tu localidad para más información detallada.
          </p>
        </div>
      </section>
      </main>
    </>
  );
}

