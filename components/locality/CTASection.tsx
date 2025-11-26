import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  localidad: string;
  whatsappUrl?: string;
  contactUrl?: string;
  footerText?: string;
}

export default function CTASection({
  title,
  description,
  localidad,
  whatsappUrl = "https://wa.me/5491123456789",
  contactUrl = "/contacto",
  footerText,
}: CTASectionProps) {
  return (
    <section className="bg-[#0A2A43] text-white py-20 md:py-28 px-4 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#F2B441] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3F6E8F] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            
            className="bg-[#F2B441] text-[#0A2A43] hover:bg-[#F2B441]/90 text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              📱 Contactar por WhatsApp
            </a>
          </Button>
          <Button
            
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#0A2A43] text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <Link href={contactUrl}>Solicitar Presupuesto</Link>
          </Button>
        </div>
        {footerText && (
          <p className="mt-8 text-sm md:text-base text-gray-400">
            {footerText}
          </p>
        )}
      </div>
    </section>
  );
}

