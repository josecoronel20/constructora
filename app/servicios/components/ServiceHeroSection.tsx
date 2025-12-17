import Link from "next/link";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";

interface ServiceHeroSectionProps {
  title: string;
  subtitle: string;
  ctas: Array<{
    type: string;
    label: string;
    href: string;
    priority: number;
  }>;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    focalPoint?: { x: number; y: number }; // Optional focal point
  };
  backgroundStyles: {
    overlay: string;
    tailwindClasses: string;
  };
}

export default function ServiceHeroSection({
  title,
  subtitle,
  ctas,
  image,
  backgroundStyles,
}: ServiceHeroSectionProps) {
  const whatsappCTA = ctas.find((cta) => cta.type === "whatsapp");
 

  // Work out objectPosition for focal point support if present
  let objectPosition = "center center";
  if (image && image.focalPoint) {
    objectPosition = `${image.focalPoint.x * 100}% ${image.focalPoint.y * 100}%`;
  }

  return (
    <section
      className={`${backgroundStyles.tailwindClasses} py-12 md:py-16 px-4 md:px-6 relative overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center`}
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-full object-cover"
            style={{
              objectPosition: objectPosition,
            }}
            priority
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: backgroundStyles.overlay,
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="flex flex-col items-center">
          <div className="text-center flex-1 w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl mb-6 text-primary-100 opacity-90 max-w-3xl mx-auto">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <WhatsAppButton
                phone={whatsappCTA ? whatsappCTA.href.replace("https://wa.me/", "") : undefined}
                size="lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
