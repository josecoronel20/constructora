import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Herrería para el Hogar en Zona Norte – Profesionales Certificados | Rejas y Portones",
  description: "Herrería para el hogar en Zona Norte. Soluciones rápidas y garantizadas. Soldaduras, reparación de rejas y portones, estructuras livianas, rejas de seguridad y más. Atención en Pilar, San Isidro, Tigre y toda Zona Norte.",
  keywords: "herrería hogar zona norte, herrería pilar, herrería san isidro, reparacion rejas zona norte, portones zona norte, rejas seguridad zona norte",
};

export default function Herrería() {
  const serviciosIncluidos = [
    "Soldaduras en el hogar",
    "Reparación de rejas y portones",
    "Fabricación de estructuras livianas",
    "Refuerzo de marcos",
    "Colocación de rejas de seguridad",
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
      titulo: "Reparación de rejas y portones",
      descripcion: "Reparación profesional de rejas y portones de tu hogar. Soldaduras, ajustes, cambio de bisagras y refuerzos estructurales.",
      icon: "🔩",
    },
    {
      titulo: "Rejas de seguridad",
      descripcion: "Instalación de rejas de seguridad para ventanas y puertas. Estructuras livianas y resistentes para proteger tu hogar.",
      icon: "🛡️",
    },
    {
      titulo: "Soldaduras y reparaciones",
      descripcion: "Soldaduras profesionales para trabajos del hogar. Reparación de estructuras metálicas, refuerzos y uniones seguras.",
      icon: "⚒️",
    },
    {
      titulo: "Estructuras livianas y refuerzos",
      descripcion: "Fabricación de estructuras livianas para el hogar. Refuerzo de marcos, soportes y elementos metálicos decorativos.",
      icon: "🏗️",
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

  return (
    <main className="flex min-h-screen flex-col">
      {/* HERO */}
      <section className="bg-[#0A2A43] text-white py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Contenido */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Herrería para el Hogar en Zona Norte – Profesionales Certificados
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Soluciones rápidas y garantizadas en hogares, comercios e industrias.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F6E8F] mb-8 text-center">
            Problemas Comunes y Soluciones Profesionales
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#636B75] leading-relaxed mb-4">
              ¿Necesitás <strong className="text-[#0A2A43]">reparar rejas o portones</strong> de tu hogar? 
              ¿Querés <strong className="text-[#0A2A43]">instalar rejas de seguridad</strong> o 
              <strong className="text-[#0A2A43]"> hacer soldaduras</strong> para trabajos del hogar? 
              ¿Necesitás <strong className="text-[#0A2A43]">refuerzos en marcos</strong> o estructuras metálicas?
            </p>
            <p className="text-lg text-[#636B75] leading-relaxed mb-4">
              Como <strong className="text-[#0A2A43]">especialistas en herrería para el hogar en Zona Norte</strong>, resolvemos todos estos trabajos 
              con profesionalismo y calidad. Trabajamos con <strong className="text-[#0A2A43]">reparación de rejas y portones</strong>, 
              <strong className="text-[#0A2A43]"> soldaduras para el hogar</strong>, 
              <strong className="text-[#0A2A43]"> instalación de rejas de seguridad</strong> y 
              <strong className="text-[#0A2A43]"> fabricación de estructuras livianas</strong> para viviendas.
            </p>
            <p className="text-lg text-[#636B75] leading-relaxed">
              Nuestros <strong className="text-[#0A2A43]">profesionales certificados en herrería para el hogar en Zona Norte</strong> están especializados 
              en trabajos residenciales, no en obras grandes ni industriales. Desde la reparación de una reja hasta la instalación de rejas de seguridad, 
              ofrecemos soluciones profesionales, con materiales de primera calidad y garantía escrita en todos nuestros trabajos para el hogar.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS INCLUIDOS */}
      <section className="bg-[#F4F5F7] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F6E8F] mb-4 text-center">
            Servicios de Herrería para el Hogar que Ofrecemos
          </h2>
          <p className="text-center text-[#636B75] mb-12 max-w-3xl mx-auto text-lg">
            Como especialistas en herrería para el hogar en Zona Norte, cubrimos todas las necesidades de trabajos metálicos 
            residenciales, desde reparaciones hasta instalaciones de seguridad.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviciosIncluidos.map((servicio, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg border border-[#636B75] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#3F6E8F] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">✓</span>
                  </div>
                  <p className="text-[#0A2A43] font-medium">{servicio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F6E8F] mb-12 text-center">
            Por qué elegirnos para herrería en el hogar en Zona Norte
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F2B441] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0A2A43] text-xl font-bold">✓</span>
                </div>
                <p className="text-lg font-medium text-[#0A2A43]">{beneficio}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <p className="text-[#0A2A43] font-semibold mb-2">Especializados en trabajos del hogar</p>
            <p className="text-[#636B75]">
              Nos enfocamos exclusivamente en trabajos de herrería para viviendas particulares. 
              No realizamos obras grandes ni trabajos industriales, solo servicios para el hogar.
            </p>
          </div>
        </div>
      </section>

      {/* GALERÍA / EJEMPLOS DE TRABAJOS */}
      <section className="bg-[#F4F5F7] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F6E8F] mb-4 text-center">
            Tipos de Trabajos que Realizamos
          </h2>
          <p className="text-center text-[#636B75] mb-12 max-w-3xl mx-auto text-lg">
            Ejemplos de proyectos típicos que realizamos en herrería para el hogar en Zona Norte
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ejemplosTrabajos.map((trabajo, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg border border-[#636B75] hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#3F6E8F] rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-3xl">{trabajo.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0A2A43] mb-3">
                  {trabajo.titulo}
                </h3>
                <p className="text-[#636B75]">
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F6E8F] mb-12 text-center">
            Cómo Trabajamos
          </h2>
          <div className="grid md:grid-cols-4 gap-6 md:gap-4">
            {proceso.map((item, i) => (
              <div key={i} className="text-center relative">
                {i < 3 && (
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
            Herrería para el hogar en todas las localidades de Zona Norte
          </h2>
          <p className="text-center text-[#636B75] mb-12 max-w-3xl mx-auto text-lg">
            Atendemos servicios de herrería para el hogar en todas las localidades de Zona Norte. 
            Cada localidad tiene su propia landing con información específica.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {localidades.map((localidad, i) => {
              const slug = localidad.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={i}
                  href={`/donde-trabajamos/${slug}`}
                  className="bg-white p-5 rounded-lg border border-[#636B75] hover:shadow-lg hover:border-[#3F6E8F] transition-all text-center group"
                >
                  <div className="w-12 h-12 bg-[#0A2A43] rounded-full mx-auto mb-3 flex items-center justify-center group-hover:bg-[#3F6E8F] transition-colors">
                    <span className="text-white text-xl">⚒️</span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[#0A2A43] group-hover:text-[#3F6E8F] transition-colors">
                    Herrería en {localidad}
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
            ¿Necesitás herrería para tu hogar en Zona Norte?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Contactanos ahora y recibí tu presupuesto sin compromiso. Atención inmediata.
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
  );
}

