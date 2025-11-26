import ServiceCard from "./ServiceCard";

interface Service {
  nombre: string;
  slug: string;
  icon: string;
  titulo: string;
  descripcion: string;
  serviciosPrincipales: string[];
}

interface ServicesSectionProps {
  title: string;
  services: Service[];
  localidad: string;
}

export default function ServicesSection({
  title,
  services,
  localidad,
}: ServicesSectionProps) {
  return (
    <section className="bg-gradient-to-tr from-[#F9FAFB] to-[#EAF1F8] py-14 px-2 sm:py-18 md:py-24 md:px-10 rounded-2xl shadow-inner border-t border-[#E1E6ED]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-[#202B3A] mb-2 tracking-tight">
            {title}
          </h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#F2B441] via-[#F8D07B] to-[#3F6E8F] mx-auto rounded-full mb-1"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-5 md:gap-7">
          {services.map((servicio, index) => (
            <ServiceCard
              key={index}
              icon={servicio.icon}
              title={servicio.titulo}
              description={servicio.descripcion}
              services={servicio.serviciosPrincipales}
              serviceName={servicio.nombre}
              serviceSlug={servicio.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
