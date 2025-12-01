import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Locality {
  name: string;
  slug: string;
  url: string;
}

interface LocalitiesSectionProps {
  title: string;
  description?: string;
  localidades: Locality[];
  serviceIcon?: string;
  serviceName: string;
  inGrid?: boolean;
}

export default function LocalitiesSection({
  title,
  description,
  localidades,
  serviceIcon = "⚡",
  serviceName,
  inGrid = false,
}: LocalitiesSectionProps) {
  const content = (
    <div className={inGrid ? "h-full flex flex-col" : "max-w-6xl mx-auto"}>
      <h2 className="text-xl md:text-2xl font-bold text-primary-700 mb-2 text-center tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-center text-gray-600 mb-4 max-w-3xl mx-auto text-xs md:text-sm">
          {description}
        </p>
      )}
      <div className={`grid ${inGrid ? "grid-cols-2 gap-2" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"} mb-4 flex-1`}>
        {localidades.map((localidad) => (
          <Link
            key={localidad.slug}
            href={localidad.url}
            className="bg-white p-2.5 rounded-lg border border-gray-300 hover:shadow-md hover:border-primary-700 transition-all text-center group"
          >
            <div className="w-7 h-7 bg-primary-900 rounded-full mx-auto mb-1.5 flex items-center justify-center group-hover:bg-primary-700 transition-colors shadow-sm">
              <span className="text-white text-xs">{serviceIcon}</span>
            </div>
            <h3 className="text-[10px] md:text-xs font-semibold text-primary-900 group-hover:text-primary-700 transition-colors leading-tight">
              {serviceName} en {localidad.name}
            </h3>
            <p className="text-[9px] text-gray-600 mt-0.5">Ver →</p>
          </Link>
        ))}
      </div>
      {!inGrid && (
        <div className="text-center">
          <Link href="/donde-trabajamos">
            <Button
              variant="outline"
              size="sm"
              className="border-primary-900 text-primary-900 hover:bg-primary-900/90 hover:text-white transition-colors font-semibold text-sm"
            >
              Ver todas las localidades →
            </Button>
          </Link>
        </div>
      )}
    </div>
  );

  if (inGrid) {
    return (
      <div className="bg-accent-blue-100 p-4 md:p-6 rounded-lg border border-gray-200 h-full flex flex-col">
        {content}
      </div>
    );
  }

  return (
    <section className="bg-accent-blue-100 py-8 px-4 md:px-6">
      {content}
    </section>
  );
}

