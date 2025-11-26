import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  services: string[];
  serviceName: string;
  serviceSlug: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  services,
  serviceName,
  serviceSlug,
}: ServiceCardProps) {
  return (
    <div className="relative bg-white rounded-2xl p-4 md:p-6 shadow border border-[#E7EAF0] transition-all group hover:shadow-lg hover:border-[#22577A] flex gap-4 md:gap-6 items-start">
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F2B441] via-[#F8D07B] to-[#3F6E8F] rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity" />
      {/* Icon */}
      <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#0A2A43] to-[#3F6E8F] rounded-xl flex items-center justify-center shadow border-2 border-white group-hover:scale-105 transition-transform duration-200 shrink-0 mt-2">
        <span className="text-3xl md:text-4xl select-none">{icon}</span>
      </div>
      {/* Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold text-[#0A2A43] mb-1 group-hover:text-[#22577A] transition-colors tracking-tight">
          {title}
        </h3>
        <p className="text-[#3A4456] text-base md:text-lg leading-snug mb-2">
          {description}
        </p>
        <ul className="list-none space-y-2 text-[#49546A] mb-3">
          {services.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm md:text-base">
              <span className="mt-0.5 flex-shrink-0 rounded-full bg-[#F2B441] text-white w-5 h-5 flex items-center justify-center font-bold shadow-sm text-base">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-2">
          <Button
            className="bg-gradient-to-r from-[#F2B441] to-[#3F6E8F] text-white font-semibold px-4 py-2 rounded-md shadow hover:from-[#3F6E8F] hover:to-[#0A2A43] hover:shadow-lg text-sm md:text-base transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F2B441]"
            
          >
            <Link href={`/servicios/${serviceSlug}`}>
              <span className="flex items-center gap-1">
                <span>Ver más sobre {serviceName.toLowerCase()}</span>
                <span className="text-base font-bold">→</span>
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
