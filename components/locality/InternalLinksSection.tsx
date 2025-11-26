import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Localidad {
  nombre: string;
  slug: string;
}

interface InternalLinksSectionProps {
  title: string;
  localidadesCercanas: Localidad[];
  localidad: string;
}

export default function InternalLinksSection({
  title,
  localidadesCercanas,
  localidad,
}: InternalLinksSectionProps) {
  return (
    <section className="bg-[#F4F5F7] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2A43] mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-[#F2B441] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Enlaces a servicios */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-[#3F6E8F]">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0A2A43] to-[#3F6E8F] rounded-xl flex items-center justify-center mb-6">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-[#0A2A43] mb-4">
              Todos nuestros servicios
            </h3>
            <p className="text-[#636B75] mb-6 leading-relaxed">
              Conocé en detalle cada uno de nuestros servicios especializados.
            </p>
            <Link href="/servicios">
              <Button variant="outline" className="w-full">
                Ver todos los servicios →
              </Button>
            </Link>
          </div>

          {/* Enlaces a localidades cercanas */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-[#3F6E8F]">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0A2A43] to-[#3F6E8F] rounded-xl flex items-center justify-center mb-6">
              <span className="text-3xl">📍</span>
            </div>
            <h3 className="text-xl font-semibold text-[#0A2A43] mb-4">
              Localidades cercanas
            </h3>
            <p className="text-[#636B75] mb-6 leading-relaxed">
              También atendemos en localidades cercanas a {localidad}.
            </p>
            <div className="space-y-3">
              {localidadesCercanas.map((localidadItem, index) => (
                <Link
                  key={index}
                  href={`/donde-trabajamos/${localidadItem.slug}`}
                  className="block text-[#3F6E8F] hover:text-[#0A2A43] hover:underline text-sm font-medium transition-colors"
                >
                  Servicios en {localidadItem.nombre} →
                </Link>
              ))}
            </div>
          </div>

          {/* Enlace a contacto */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-[#3F6E8F]">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0A2A43] to-[#3F6E8F] rounded-xl flex items-center justify-center mb-6">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-xl font-semibold text-[#0A2A43] mb-4">
              Contacto
            </h3>
            <p className="text-[#636B75] mb-6 leading-relaxed">
              Contactanos para consultas, presupuestos o más información.
            </p>
            <Link href="/contacto">
              <Button variant="outline" className="w-full">
                Ir a contacto →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

