import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Servicios de Construcción, Mantenimiento y Reparaciones en Zona Norte | Profesionales",
  description: "Servicios completos de construcción, mantenimiento y reparaciones en Zona Norte. Electricidad, plomería, gas, albañilería, pintura, impermeabilización, techos y más. Profesionales verificados, trabajos garantizados y atención inmediata.",
  keywords: "servicios zona norte, mantenimiento hogar zona norte, reparaciones zona norte, construcción zona norte",
  canonical: "https://servicioszonanorte.com/servicios",
});

export default function Servicios() {
  const servicios = [
    {
      nombre: "Electricidad",
      slug: "electricidad",
      icon: "⚡",
      descripcion: "Instalaciones completas, tableros, luminarias, seguridad eléctrica y reparaciones urgentes.",
    },
    {
      nombre: "Plomería",
      slug: "plomeria",
      icon: "🔧",
      descripcion: "Pérdidas, cañerías, sanitarios, bombas presurizadoras, calefones y destapaciones menores.",
    },
    {
      nombre: "Gas",
      slug: "gas",
      icon: "🔥",
      descripcion: "Artefactos, cañerías, calefactores, reguladores y reparaciones internas.",
      nota: "(según matriculado)",
    },
    {
      nombre: "Albañilería",
      slug: "albanileria",
      icon: "🧱",
      descripcion: "Durlock, paredes, revoques, filtraciones, baños, cocinas y pequeñas estructuras.",
    },
    {
      nombre: "Pintura",
      slug: "pintura",
      icon: "🎨",
      descripcion: "Interior, exterior, antihumedad, preparación de superficies y pintura de herrería.",
    },
    {
      nombre: "Impermeabilización",
      slug: "impermeabilizacion",
      icon: "🛡️",
      descripcion: "Losa, chapa, terrazas, balcones, muros y membranas.",
    },
    {
      nombre: "Carpintería de madera",
      slug: "carpinteria",
      icon: "🪵",
      descripcion: "Reparaciones, puertas, muebles sencillos, zócalos y decks pequeños.",
    },
    {
      nombre: "Zinguería",
      slug: "zingueria",
      icon: "📐",
      descripcion: "Canaletas, bajadas, cumbreras y soluciones contra filtraciones.",
    },
    {
      nombre: "Herrería",
      slug: "herrería",
      icon: "⚒️",
      descripcion: "Soldaduras, rejas, portones, estructuras livianas y refuerzos.",
    },
    {
      nombre: "Techos",
      slug: "techos",
      icon: "🏠",
      descripcion: "Reparación de chapa, colocación de nuevas chapas, aislaciones y mantenimiento anual.",
    },
    {
      nombre: "Revestimientos y pisos",
      slug: "revestimientos-pisos",
      icon: "🔲",
      descripcion: "Cerámicos, porcelanatos, pisos flotantes, vinílicos y nivelaciones.",
    },
    {
      nombre: "Aire acondicionado",
      slug: "aire-acondicionado",
      icon: "❄️",
      descripcion: "Instalación, mantenimiento, limpieza profunda, recarga de gas y reubicación.",
    },
    {
      nombre: "Limpieza post-obra",
      slug: "limpieza-post-obra",
      icon: "🧹",
      descripcion: "Limpieza fina, remoción de restos y terminaciones.",
    },
  ];

  const beneficios = [
    "Técnicos certificados y especialistas en cada rubro",
    "Materiales de primera calidad",
    "Presupuestos claros y sin sorpresas",
    "Trabajo garantizado",
    "Atención rápida en toda Zona Norte",
    "Equipos separados por servicio para máxima eficiencia",
  ];

  const proceso = [
    {
      paso: "1",
      titulo: "Diagnóstico rápido",
      descripcion: "Coordinación inmediata y evaluación del problema o proyecto.",
      icon: "📞",
    },
    {
      paso: "2",
      titulo: "Presupuesto detallado",
      descripcion: "Transparente, claro y adaptado al trabajo real.",
      icon: "📋",
    },
    {
      paso: "3",
      titulo: "Ejecución profesional",
      descripcion: "Técnicos según especialidad, cumplimiento de plazos y herramientas adecuadas.",
      icon: "🔧",
    },
    {
      paso: "4",
      titulo: "Entrega garantizada",
      descripcion: "Control final de calidad y comprobación de funcionamiento.",
      icon: "✓",
    },
    {
      paso: "5",
      titulo: "Soporte post-trabajo",
      descripcion: "Asistencia ante cualquier duda o ajuste necesario.",
      icon: "💬",
    },
  ];

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
    "Zárate / Cardales",
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios" },
        ]}
      />
      <main className="flex min-h-screen flex-col">
      {/* HERO */}
      <section className="bg-[#0A2A43] text-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Servicios de Construcción, Mantenimiento y Reparaciones en Zona Norte
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
            Profesionales especializados, trabajos garantizados y atención inmediata en todas las localidades de Zona Norte. 
            Un solo equipo para resolver electricidad, plomería, gas, albañilería, pintura, impermeabilización, techos y más.
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

      {/* LISTA COMPLETA DE SERVICIOS */}
      <section className="bg-[#F4F5F7] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F6E8F] mb-4 text-center">
            Lista Completa de Servicios
          </h2>
          <p className="text-center text-[#636B75] mb-12 max-w-3xl mx-auto text-lg">
            Cada servicio cuenta con profesionales especializados y su propia landing detallada. 
            Hacé clic en cualquier servicio para conocer más.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {servicios.map((servicio, i) => (
              <Link
                key={i}
                href={`/servicios/${servicio.slug}`}
                className="relative bg-white p-8 rounded-2xl border border-[#e0e3e7] hover:shadow-2xl hover:border-[#3F6E8F] transition-all group flex flex-col items-center text-center min-h-[320px]"
                style={{
                  boxShadow: "0 2px 12px 0 rgba(63,110,143,0.09)",
                }}
              >
                <div className="absolute top-6 right-6">
                  {/* Optional badge or future icons */}
                </div>
                <div className="w-16 h-16 bg-gradient-to-tr from-[#3F6E8F] to-[#6498bd] rounded-xl shadow-md flex items-center justify-center mb-5 border-4 border-white group-hover:from-[#0A2A43] group-hover:to-[#2f5178] transition-colors">
                  <span className="text-4xl text-white drop-shadow">{servicio.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#163954] mb-3 group-hover:text-[#3F6E8F] transition-colors">
                  {servicio.nombre}
                  {servicio.nota && (
                    <span className="block text-xs mt-1 text-[#6c8fab] font-normal">{servicio.nota}</span>
                  )}
                </h3>
                <p className="text-gray-600 text-base mb-0 font-normal leading-relaxed flex-1">
                  {servicio.descripcion}
                </p>
                <span className="mt-6 inline-block bg-[#F2B441]/10 text-[#B68D16] text-xs font-medium px-4 py-1 rounded-full group-hover:bg-[#F2B441]/20 transition">
                  Ver más
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      

      {/* POR QUÉ ELEGIRNOS */}
      <section className="bg-[#0A2A43] text-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Por qué elegirnos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F2B441] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0A2A43] text-xl font-bold">✓</span>
                </div>
                <p className="text-lg font-medium">{beneficio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F6E8F] mb-12 text-center">
            Cómo trabajamos
          </h2>
          <div className="grid md:grid-cols-5 gap-6 md:gap-4">
            {proceso.map((item, i) => (
              <div key={i} className="text-center relative">
                {i < 4 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-[#636B75] -z-10"></div>
                )}
                <div className="w-16 h-16 bg-[#0A2A43] rounded-full mx-auto mb-3 flex items-center justify-center relative z-10">
                  <span className="text-white text-2xl">{item.icon}</span>
                </div>
                <div className="w-8 h-8 bg-[#F2B441] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-[#0A2A43] font-bold text-sm">{item.paso}</span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-[#0A2A43] mb-2">
                  {item.titulo}
                </h3>
                <p className="text-sm text-[#636B75]">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIDADES */}
      <section className="bg-[#F4F5F7] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F6E8F] mb-4 text-center">
            Localidades donde trabajamos
          </h2>
          <p className="text-center text-[#636B75] mb-12 max-w-3xl mx-auto text-lg">
            Atendemos en todas las localidades de Zona Norte. Cada localidad tiene su propia landing 
            con todos los servicios disponibles y keywords específicas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {localidades.map((localidad, i) => {
              const slug = localidad.toLowerCase().replace(/\s*\/\s*/g, "-").replace(/\s+/g, "-");
              return (
                <Link
                  key={i}
                  href={`/donde-trabajamos/${slug}`}
                  className="bg-white p-5 rounded-lg border border-[#636B75] hover:shadow-lg hover:border-[#3F6E8F] transition-all text-center group"
                >
                  <div className="w-12 h-12 bg-[#0A2A43] rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-[#3F6E8F] transition-colors">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[#0A2A43] group-hover:text-[#3F6E8F] transition-colors">
                    {localidad}
                  </h3>
                  <p className="text-xs text-[#636B75] mt-1">
                    Ver servicios →
                  </p>
                </Link>
              );
            })}
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
      <section className="bg-[#0A2A43] text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Solicitá tu presupuesto sin costo
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Atención inmediata en todas las localidades de Zona Norte.
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
