import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gasista en Zona Norte – Profesionales Matriculados | Instalaciones y Reparaciones",
  description: "Gasista en Zona Norte. Soluciones rápidas y garantizadas en hogares. Instalación de artefactos a gas, reparación de pérdidas, extensión de cañerías, calefactores y más. Atención en Pilar, San Isidro, Tigre y toda Zona Norte.",
  keywords: "gasista zona norte, gasista pilar, gasista san isidro, instalaciones gas zona norte, reparaciones gas, gasista matriculado zona norte",
};

export default function Gas() {
  const serviciosIncluidos = [
    "Instalación de artefactos a gas",
    "Reparación de pérdidas internas",
    "Extensión de cañerías",
    "Conversión y cambio de reguladores",
    "Cambio de llaves y válvulas",
    "Instalación de calefactores",
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
      titulo: "Instalación de artefactos a gas",
      descripcion: "Instalación profesional y segura de cocinas, calefones, calefactores y otros artefactos a gas. Cumplimiento total de normas de seguridad.",
      icon: "🔥",
    },
    {
      titulo: "Reparación de pérdidas de gas",
      descripcion: "Detección y reparación inmediata de pérdidas internas. Diagnóstico con equipos especializados y solución garantizada para tu seguridad.",
      icon: "⚠️",
    },
    {
      titulo: "Extensión y renovación de cañerías",
      descripcion: "Extensión de instalaciones de gas para nuevos ambientes. Renovación completa de cañerías antiguas con materiales certificados.",
      icon: "🔧",
    },
    {
      titulo: "Instalación de calefactores",
      descripcion: "Instalación profesional de calefactores a gas para calefacción. Conexión segura, reguladores y ventilación adecuada.",
      icon: "🌡️",
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
                Gasista en Zona Norte – Profesionales Matriculados
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-200">
                Soluciones rápidas y garantizadas en hogares, comercios e industrias.
              </p>
              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4 mb-6">
                <p className="text-sm md:text-base text-yellow-100">
                  <strong>Importante:</strong> Servicios según matriculación disponible. 
                  Todos nuestros gasistas están certificados y cumplen con las normativas vigentes.
                </p>
              </div>
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
              ¿Necesitás <strong className="text-[#0A2A43]">instalar un artefacto a gas</strong> o 
              <strong className="text-[#0A2A43]"> reparar una pérdida de gas</strong>? 
              ¿Tu <strong className="text-[#0A2A43]">calefactor no funciona correctamente</strong> o 
              necesitás <strong className="text-[#0A2A43]">extender la instalación de gas</strong> para un nuevo ambiente?
            </p>
            <p className="text-lg text-[#636B75] leading-relaxed mb-4">
              Como <strong className="text-[#0A2A43]">gasista en Zona Norte</strong>, resolvemos todos estos problemas 
              con total seguridad y cumplimiento de normas. Trabajamos con <strong className="text-[#0A2A43]">instalación de artefactos a gas</strong>, 
              <strong className="text-[#0A2A43]"> reparación de pérdidas internas</strong>, 
              <strong className="text-[#0A2A43]"> extensión de cañerías</strong> y 
              <strong className="text-[#0A2A43]"> cambio de reguladores y válvulas</strong>.
            </p>
            <p className="text-lg text-[#636B75] leading-relaxed">
              Nuestros <strong className="text-[#0A2A43]">gasistas matriculados en Zona Norte</strong> están especializados 
              en instalaciones seguras, reparaciones urgentes y mantenimiento preventivo. Desde la instalación de una cocina 
              nueva hasta la reparación de una pérdida de gas, ofrecemos soluciones profesionales, certificadas y garantizadas 
              para mantener tu hogar seguro y funcionando correctamente.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS INCLUIDOS */}
      <section className="bg-[#F4F5F7] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3F6E8F] mb-4 text-center">
            Servicios de Gas que Ofrecemos
          </h2>
          <p className="text-center text-[#636B75] mb-4 max-w-3xl mx-auto text-lg">
            Como gasista en Zona Norte, cubrimos todas las necesidades de gas de tu hogar, 
            desde instalaciones completas hasta reparaciones urgentes.
          </p>
          <p className="text-center text-[#636B75] mb-12 max-w-3xl mx-auto text-sm italic">
            * Servicios según matriculación disponible
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
            Por qué elegirnos como tu gasista en Zona Norte
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
          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <p className="text-[#0A2A43] font-semibold mb-2">Seguridad ante todo</p>
            <p className="text-[#636B75]">
              Todos nuestros trabajos de gas cumplen estrictamente con las normativas de seguridad vigentes. 
              Utilizamos materiales certificados y realizamos pruebas de hermeticidad en todas las instalaciones.
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
            Ejemplos de proyectos típicos que realizamos como gasistas en Zona Norte
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
            Gasista en todas las localidades de Zona Norte
          </h2>
          <p className="text-center text-[#636B75] mb-12 max-w-3xl mx-auto text-lg">
            Atendemos como gasistas en todas las localidades de Zona Norte. 
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
                    <span className="text-white text-xl">🔥</span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[#0A2A43] group-hover:text-[#3F6E8F] transition-colors">
                    Gasista en {localidad}
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
            ¿Necesitás un gasista en Zona Norte?
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

