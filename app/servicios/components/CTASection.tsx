import Link from "next/link";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

interface CTASectionProps {
  title: string;
  description: string;
  contactUrl?: string;
  whatsappLabel?: string;
  contactLabel?: string;
}

export default function CTASection({
  title,
  description,
  contactUrl = "/contacto",
  whatsappLabel = "WhatsApp",
  contactLabel = "Formulario de contacto",
}: CTASectionProps) {
  return (
    <section className="bg-[#0A2A43] text-white py-10 md:py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
          {title}
        </h2>
        <p className="text-base md:text-lg mb-6 text-primary-100 opacity-90">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WhatsAppButton size="lg" className="text-lg px-8 py-6">
            {whatsappLabel}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

