import { Button } from "@/components/ui/button";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

interface HeroSectionProps {
  title: string;
  description: string;
  whatsappUrl?: string;
  contactUrl?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  description,
  whatsappUrl = "https://wa.me/5491123456789",
  contactUrl = "/contacto",
  backgroundImage,
}: HeroSectionProps) {
  const hasBackgroundImage = !!backgroundImage;

  return (
    <section
      className={`${
        hasBackgroundImage ? "bg-white" : "bg-[#0A2A43]"
      } text-white py-20 md:py-32 px-4 md:px-8 relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center justify-center`}
    >
      {/* Background Image (si se proporciona) */}
      {hasBackgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        />
      )}

      {/* Overlay para imagen de fondo (solo si hay imagen) */}
      {hasBackgroundImage && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white z-10" aria-hidden="true" />
        </>
      )}

      {/* Background decoration (solo si NO hay imagen) */}
      {!hasBackgroundImage && (
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F2B441] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3F6E8F] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      )}

      {/* Contenido */}
      <div className="max-w-6xl mx-auto text-center relative z-20">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${
            hasBackgroundImage
              ? "text-[#0A2A43] drop-shadow-lg"
              : "text-white"
          }`}
        >
          {title}
        </h1>
        <p
          className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed ${
            hasBackgroundImage
              ? "text-[#0A2A43] drop-shadow-sm"
              : "text-gray-200"
          }`}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <WhatsAppButton
            phone={whatsappUrl.replace("https://wa.me/", "")}
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Contactar por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}