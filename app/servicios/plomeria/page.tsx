import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plomero en Zona Norte – Profesionales Certificados | Reparaciones y Instalaciones",
  description: "Plomero en Zona Norte. Soluciones rápidas y garantizadas en hogares. Reparación de pérdidas, instalación de aguas, cambio de cañerías, bombas presurizadoras, destapaciones y más. Atención en Pilar, San Isidro, Tigre y toda Zona Norte.",
  keywords: "plomero zona norte, plomero pilar, plomero san isidro, reparaciones plomeria zona norte, instalaciones sanitarias zona norte",
};

export default function Plomeria() {
  const serviciosIncluidos = [
    "Reparación de pérdidas",
    "Instalación de aguas fría/caliente",
    "Cambio de cañerías",
    "Instalación de bombas presurizadoras",
    "Destapaciones menores internas",
    "Instalación de sanitarios",
    "Instalación de griferías",
    "Colocación de desagües pluviales",
    "Reparación de cisternas y mochilas",
    "Instalación de termotanques y calefones (sin gasista matriculado si no corresponde)",
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
      titulo: "Reparación de pérdidas urgentes",
      descripcion: "Solución inmediata para goteras, cañerías rotas y pérdidas de agua. Diagnóstico rápido y reparación garantizada para evitar daños mayores.",
      icon: "🔧",
    },
    {
      titulo: "Instalación completa de aguas",
      descripcion: "Instalación profesional de cañerías de agua fría y caliente. Renovación completa del sistema de agua de tu hogar con materiales de primera calidad.",
      icon: "🚿",
    },
    {
      titulo: "Bombas presurizadoras y presión de agua",
      descripcion: "Instalación y reparación de bombas presurizadoras para mejorar la presión de agua. Solución definitiva para problemas de baja presión.",
      icon: "💧",
    },
    {
      titulo: "Destapaciones y mantenimiento",
      descripcion: "Destapación de cañerías, desagües y cloacas. Limpieza profunda y mantenimiento preventivo para evitar futuros problemas.",
      icon: "🚰",
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
                Plomero en Zona Norte – Profesionales Certificados
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
              ¿Tenés <strong className="text-[#0A2A43]">pérdidas de agua</strong> o <strong className="text-[#0A2A43]">cañerías rotas</strong>? 
              ¿Sufrís de <strong className="text-[#0A2A43]">baja presión de agua</strong> o necesitás <strong className="text-[#0A2A43]">destapar cañerías</strong>? 
              ¿Tu <strong className="text-[#0A2A43]">sistema de aguas es antiguo</strong> y necesitás una renovación completa?
            </p>
            <p className="text-lg text-[#636B75] leading-relaxed mb-4">
              Como <strong className="text-[#0A2A43]">plomero en Zona Norte</strong>, resolvemos todos estos problemas 
              y más. Trabajamos con <strong className="text-[#0A2A43]">instalaciones de aguas fría y caliente</strong>, 
              <strong className="text-[#0A2A43]"> bombas presurizadoras</strong> para mejorar la presión, 
              <strong className="text-[#0A2A43]"> cambio de cañerías</strong> completas y 
              <strong className="text-[#0A2A43]"> instalación de sanitarios y griferías</strong> modernas.
            </p>
            <p className="text-lg text-[#636B75] leading-relaxed">
              Nuestros <strong className="text-[#0A2A43]">plomeros certificados en Zona Norte</strong> están especializados 
              en reparaciones urgentes, instalaciones completas y mantenimiento preventivo. Desde la reparación de una 
              pérdida simple hasta la instalación completa del sistema de aguas de tu hogar, ofrecemos soluciones 
              profesionales y garantizadas para mantener tu casa en perfectas condiciones.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS INCLUIDOS */}
      <section className="bg-[#F4F5F7] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F6E8F] mb-4 text-center">
            Servicios de Plomería que Ofrecemos
          </h2>
          <p className="text-center text-[#636B75] mb-12 max-w-3xl mx-auto text-lg">
            Como plomero en Zona Norte, cubrimos todas las necesidades de plomería de tu hogar, 
            desde reparaciones urgentes hasta instalaciones completas.
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
            Por qué elegirnos como tu plomero en Zona Norte
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
        </div>
      </section>

      {/* GALERÍA / EJEMPLOS DE TRABAJOS */}
      <section className="bg-[#F4F5F7] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F6E8F] mb-4 text-center">
            Tipos de Trabajos que Realizamos
          </h2>
          <p className="text-center text-[#636B75] mb-12 max-w-3xl mx-auto text-lg">
            Ejemplos de proyectos típicos que realizamos como plomeros en Zona Norte
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
            Plomero en todas las localidades de Zona Norte
          </h2>
          <p className="text-center text-[#636B75] mb-12 max-w-3xl mx-auto text-lg">
            Atendemos como plomeros en todas las localidades de Zona Norte. 
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
                    <span className="text-white text-xl">🔧</span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[#0A2A43] group-hover:text-[#3F6E8F] transition-colors">
                    Plomero en {localidad}
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
            ¿Necesitás un plomero en Zona Norte?
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

