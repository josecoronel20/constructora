import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { generateMetadata as genMeta } from "@/lib/seo";
import WhatsAppButton from "@/components/WhatsAppButton";

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
      imagen: "/images/hero-electricista-tablero-pilar.png",
    },
    {
      nombre: "Plomería",
      slug: "plomeria",
      icon: "🔧",
      descripcion: "Pérdidas, cañerías, sanitarios, bombas presurizadoras, calefones y destapaciones menores.",
      imagen: "/images/servicio-plomeria-san-martin.png",
    },
    {
      nombre: "Gas",
      slug: "gas",
      icon: "🔥",
      descripcion: "Artefactos, cañerías, calefactores, reguladores y reparaciones internas.",
      nota: "(según matriculado)",
      imagen: "/images/servicio-gasista-san-miguel.png",
    },
    {
      nombre: "Albañilería",
      slug: "albanileria",
      icon: "🧱",
      descripcion: "Durlock, paredes, revoques, filtraciones, baños, cocinas y pequeñas estructuras.",
      imagen: "/images/servicio-albañileria-jose-c-paz.png",
    },
    {
      nombre: "Pintura",
      slug: "pintura",
      icon: "🎨",
      descripcion: "Interior, exterior, antihumedad, preparación de superficies y pintura de herrería.",
      imagen: "/images/servicio-pintura-escobar.png",
    },
    {
      nombre: "Impermeabilización",
      slug: "impermeabilizacion",
      icon: "🛡️",
      descripcion: "Losa, chapa, terrazas, balcones, muros y membranas.",
      imagen: "/images/servicio-impermeabilizacion-zarate.png",
    },
    {
      nombre: "Carpintería de madera",
      slug: "carpinteria",
      icon: "🪵",
      descripcion: "Reparaciones, puertas, muebles sencillos, zócalos y decks pequeños.",
      imagen: "/images/servicio-carpinteria-vicente-lopez.png",
    },
    {
      nombre: "Herrería",
      slug: "herrería",
      icon: "⚒️",
      descripcion: "Soldaduras, rejas, portones, estructuras livianas y refuerzos.",
      imagen: "/images/servicio-herreria-san-fernando.png",
    },
    {
      nombre: "Techos y Zinguería",
      slug: "techos",
      icon: "🏠",
      descripcion: "Reparación de chapa, canaletas, bajadas, aislaciones y mantenimiento anual.",
      imagen: "/images/servicio-zingueria-vicente-lopez.png",
    },
    {
      nombre: "Revestimientos y pisos",
      slug: "revestimientos-pisos",
      icon: "🔲",
      descripcion: "Cerámicos, porcelanatos, pisos flotantes, vinílicos y nivelaciones.",
      imagen: "/images/servicio-colocacion-piso-san-isidro.png",
    },
    {
      nombre: "Aire acondicionado",
      slug: "aire-acondicionado",
      icon: "❄️",
      descripcion: "Instalación, mantenimiento, limpieza profunda, recarga de gas y reubicación.",
      imagen: "/images/servicio-aire-acondicionado-tigre.png",
    },
    {
      nombre: "Limpieza post-obra",
      slug: "limpieza-post-obra",
      icon: "🧹",
      descripcion: "Limpieza fina, remoción de restos y terminaciones.",
      imagen: "/images/heros-bg/hero-mesa-herramientas.png", // Usando imagen genérica
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
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-white">
        {/* Background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/heros-bg/hero-mesa-herramientas.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        />
        
       
        
        {/* Overlay con gradiente claro para más profundidad y mejor contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10  to-white z-10" aria-hidden="true" />

        {/* Contenido */}
        <div className="relative z-20 w-full px-4 md:px-8 py-16 md:py-24 flex items-center justify-center">
          <div className="w-full max-w-6xl mx-auto text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0A2A43] drop-shadow-lg leading-tight">
              Servicios de Construcción, Mantenimiento y Reparaciones en Zona Norte
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-10 text-[#0A2A43] max-w-4xl mx-auto drop-shadow-sm leading-relaxed">
              Profesionales especializados, trabajos garantizados y atención inmediata en todas las localidades de Zona Norte. 
              Un solo equipo para resolver electricidad, plomería, gas, albañilería, pintura, impermeabilización, techos y más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              <WhatsAppButton />
              <Link href="/contacto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#0A2A43] text-[#0A2A43] hover:bg-[#0A2A43] hover:text-white font-semibold shadow-lg transition-all"
                >
                  Presupuesto
                </Button>
              </Link>
            </div>
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
                className="relative group overflow-hidden rounded-2xl border border-[#e0e3e7] hover:border-[#3F6E8F] hover:shadow-2xl transition-all duration-300 flex flex-col min-h-[320px]"
                style={{
                  boxShadow: "0 2px 12px 0 rgba(63,110,143,0.09)",
                }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url('${servicio.imagen}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                  }}
                  aria-hidden="true"
                />
                
                {/* Overlay oscuro para legibilidad */}
                <div className="absolute inset-0 bg-[#0A2A43]/20 group-hover:bg-[#0A2A43]/70 transition-colors duration-300 z-10" aria-hidden="true" />
                
                {/* Overlay con gradiente para mejor contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A43]/95 via-[#0A2A43]/80 to-[#0A2A43]/60 z-10" aria-hidden="true" />

                {/* Contenido */}
                <div className="relative z-20 p-6 flex flex-col items-center text-center h-full justify-between">
                  {/* Icono */}
                  <div className="w-16 h-16 bg-gradient-to-tr from-[#3F6E8F] to-[#6498bd] rounded-xl shadow-lg flex items-center justify-center mb-4 border-4 border-white/20 group-hover:from-[#F2B441] group-hover:to-[#F2B441]/80 group-hover:scale-110 transition-all duration-300">
                    <span className="text-4xl text-white drop-shadow-lg">{servicio.icon}</span>
                  </div>

                  {/* Título y descripción */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F2B441] transition-colors drop-shadow-lg">
                      {servicio.nombre}
                      {servicio.nota && (
                        <span className="block text-xs mt-1 text-gray-300 font-normal">{servicio.nota}</span>
                      )}
                    </h3>
                    <p className="text-gray-100 text-sm font-normal leading-relaxed drop-shadow-md">
                      {servicio.descripcion}
                    </p>
                  </div>

                  {/* Badge */}
                  <span className="mt-6 inline-block bg-[#F2B441]/90 text-[#0A2A43] text-xs font-bold px-4 py-2 rounded-full group-hover:bg-[#F2B441] group-hover:scale-105 transition-all duration-300 shadow-lg">
                    Ver más →
                  </span>
                </div>
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
            <WhatsAppButton />
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
