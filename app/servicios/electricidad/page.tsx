import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import StructuredData from "@/components/SEO/StructuredData";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Electricista en Zona Norte – Profesionales Certificados | Instalaciones y Reparaciones",
  description: "Electricista en Zona Norte. Soluciones rápidas y garantizadas en hogares. Instalaciones eléctricas, reparaciones urgentes, tableros, cableado, luminarias LED y más. Atención en Pilar, San Isidro, Tigre y toda Zona Norte.",
  keywords: "electricista zona norte, electricista pilar, electricista san isidro, instalaciones electricas zona norte, reparaciones electricas",
  canonical: "https://servicioszonanorte.com/servicios/electricidad",
});

export default function Electricidad() {
  const serviciosIncluidos = [
    "Instalaciones eléctricas completas en viviendas",
    "Renovación de cableado",
    "Tableros eléctricos y llaves térmicas",
    "Puestas a tierra",
    "Instalación de luminarias interiores/exteriores",
    "Instalación de tomas y teclas",
    "Reparación de cortocircuitos y fallas",
    "Instalación de disyuntores y protecciones",
    "Instalación de artefactos eléctricos (ventiladores, termotanques eléctricos, extractores)",
    "Instalación de cámaras y sistemas de seguridad",
    "Instalación de porteros eléctricos / videoporteros",
    "Iluminación de parque y jardín",
  ];

  const beneficios = [
    "Técnicos especializados",
    "Diagnóstico en el día",
    "Trabajos garantizados",
    "Materiales certificados",
    "Cumplimiento de normas",
    "Presupuesto transparente",
  ];

  const ejemplosTrabajos = [
    {
      titulo: "Renovación completa de instalación",
      descripcion: "Actualización de cableado antiguo, nuevo tablero eléctrico y puesta a tierra. Solución definitiva para cortes y problemas de tensión.",
      icon: "🔌",
    },
    {
      titulo: "Instalación de luminarias LED",
      descripcion: "Iluminación moderna y eficiente para interiores y exteriores. Ahorro energético y mejor iluminación en toda la vivienda.",
      icon: "💡",
    },
    {
      titulo: "Reparación de cortocircuitos urgentes",
      descripcion: "Atención inmediata para cortes de luz, disyuntores que saltan y fallas eléctricas. Diagnóstico rápido y solución garantizada.",
      icon: "⚡",
    },
    {
      titulo: "Sistemas de seguridad y videoporteros",
      descripcion: "Instalación profesional de cámaras de seguridad, alarmas y videoporteros. Conexión y configuración completa.",
      icon: "📹",
    },
  ];

  const proceso = [
    {
      paso: "1",
      titulo: "Contacto",
      descripcion: "Llamanos o completá el formulario. Coordinamos visita en el día.",
      icon: "📞",
    },
    {
      paso: "2",
      titulo: "Relevamiento",
      descripcion: "Evaluación profesional del problema o proyecto. Diagnóstico preciso.",
      icon: "🔍",
    },
    {
      paso: "3",
      titulo: "Ejecución",
      descripcion: "Trabajo realizado por técnicos certificados con materiales de primera.",
      icon: "🔧",
    },
    {
      paso: "4",
      titulo: "Garantía",
      descripcion: "Control de calidad y garantía escrita en todos los trabajos.",
      icon: "✓",
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
    "Zárate",
    "Cardales",
  ];

  // Tailwind config: primary = primary-900/#0A2A43, primary-700, accent-yellow-400, accent-yellow-300, accent-blue-100, gray-600, gray-400
  // Replace hardcoded color codes with semantic Tailwind color classes where possible

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios" },
          { name: "Electricidad", url: "/servicios/electricidad" },
        ]}
      />
      <StructuredData
        type="Service"
        data={{
          serviceType: "Electricidad",
          providerName: "Servicios Zona Norte",
          areaServed: "Zona Norte",
          description: "Servicios eléctricos completos para hogares en Zona Norte. Instalaciones, reparaciones urgentes, tableros eléctricos y más.",
        }}
      />
      <main className="flex min-h-screen flex-col bg-background">
      {/* HERO */}
      <section className="bg-primary-900 text-white py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Contenido */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
                Electricista en Zona Norte – Profesionales Certificados
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100 opacity-90">
                Soluciones rápidas y garantizadas en hogares, comercios e industrias.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-accent-yellow-400 text-primary-900 hover:bg-accent-yellow-300 font-semibold shadow-sm transition-colors"
                >
                  WhatsApp
                </Button>
                <Link href="/contacto">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 font-semibold transition-colors"
                  >
                    Presupuesto
                  </Button>
                </Link>
              </div>
            </div>
            {/* Espacio para imagen futura */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-64 md:h-80 bg-white/10 rounded-lg border-2 border-white/20 flex items-center justify-center">
                <span className="text-white/50 text-sm">Imagen del servicio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA Y SOLUCIÓN SEO */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-8 text-center tracking-tight">
            Problemas Comunes y Soluciones Profesionales
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              ¿Tenés <strong className="text-primary-900">cortes de luz frecuentes</strong> o <strong className="text-primary-900">disyuntores que saltan constantemente</strong>? 
              ¿Tu <strong className="text-primary-900">cableado es antiguo</strong> y necesitás una renovación completa? 
              ¿Sufrís de <strong className="text-primary-900">cortocircuitos</strong> o problemas de tensión?
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Como <strong className="text-primary-900">electricista en Zona Norte</strong>, resolvemos todos estos problemas 
              y más. Trabajamos con <strong className="text-primary-900">tableros eléctricos modernos</strong>,
              <strong className="text-primary-900"> instalaciones completas</strong> que cumplen con todas las normas de seguridad, 
              y <strong className="text-primary-900">luminarias LED</strong> para mejorar la eficiencia energética de tu hogar.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestros <strong className="text-primary-900">electricistas certificados en Zona Norte</strong> están especializados 
              en instalaciones residenciales, reparaciones urgentes y mejoras eléctricas. Desde la renovación completa de una 
              instalación antigua hasta la instalación de sistemas de seguridad y videoporteros, ofrecemos soluciones profesionales 
              y garantizadas para tu hogar.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS INCLUIDOS */}
      <section className="bg-accent-blue-100 py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 text-center tracking-tight">
            Servicios de Electricidad que Ofrecemos
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Como electricista en Zona Norte, cubrimos todas las necesidades eléctricas de tu hogar, 
            desde instalaciones completas hasta reparaciones urgentes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviciosIncluidos.map((servicio, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-300 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary-700 rounded-lg flex items-center justify-center flex-shrink-0 shadow">
                    <span className="text-white text-lg font-bold">✓</span>
                  </div>
                  <p className="text-primary-900 font-medium">{servicio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 text-center tracking-tight">
            Por qué elegirnos como tu electricista en Zona Norte
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0 shadow">
                  <span className="text-primary-900 text-xl font-bold">✓</span>
                </div>
                <p className="text-lg font-medium text-primary-900">{beneficio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA / EJEMPLOS DE TRABAJOS */}
      <section className="bg-accent-blue-100 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 text-center tracking-tight">
            Tipos de Trabajos que Realizamos
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Ejemplos de proyectos típicos que realizamos como electricistas en Zona Norte
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ejemplosTrabajos.map((trabajo, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-300 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl text-white">{trabajo.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">
                  {trabajo.titulo}
                </h3>
                <p className="text-gray-600">
                  {trabajo.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO DE TRABAJO */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 text-center tracking-tight">
            Cómo Trabajamos
          </h2>
          <div className="grid md:grid-cols-4 gap-6 md:gap-4">
            {proceso.map((item, i) => (
              <div key={i} className="text-center relative">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-300 -z-10"></div>
                )}
                <div className="w-16 h-16 bg-primary-900 rounded-full mx-auto mb-3 flex items-center justify-center relative z-10 shadow">
                  <span className="text-white text-2xl">{item.icon}</span>
                </div>
                <div className="w-8 h-8 bg-accent-yellow-400 rounded-full mx-auto mb-3 flex items-center justify-center shadow">
                  <span className="text-primary-900 font-bold text-sm">{item.paso}</span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-primary-900 mb-2">
                  {item.titulo}
                </h3>
                <p className="text-sm text-gray-600">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIDADES */}
      <section className="bg-accent-blue-100 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 text-center tracking-tight">
            Electricista en todas las localidades de Zona Norte
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Atendemos como electricistas en todas las localidades de Zona Norte. 
            Cada localidad tiene su propia landing con información específica.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {localidades.map((localidad, i) => {
              const slug = localidad.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={i}
                  href={`/donde-trabajamos/${slug}`}
                  className="bg-white p-5 rounded-xl border border-gray-300 hover:shadow-lg hover:border-primary-700 transition-all text-center group"
                >
                  <div className="w-12 h-12 bg-primary-900 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-primary-700 transition-colors shadow">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-primary-900 group-hover:text-primary-700 transition-colors">
                    Electricista en {localidad}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
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
                className="border-primary-900 text-primary-900 hover:bg-primary-900/90 hover:text-white transition-colors font-semibold"
              >
                Ver todas las localidades →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-primary-900 text-white py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            ¿Necesitás un electricista en Zona Norte?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 opacity-90">
            Contactanos ahora y recibí tu presupuesto sin compromiso. Atención inmediata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent-yellow-400 text-primary-900 hover:bg-accent-yellow-300 font-semibold shadow-sm transition-colors"
            >
              WhatsApp
            </Button>
            <Link href="/contacto">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 font-semibold transition-colors"
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

