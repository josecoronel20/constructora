import Link from "next/link";
import { Button } from "@/components/ui/button";
import WhatsAppButton from "@/components/WhatsAppButton";

interface CTASectionProps {
  title: string;
  description: string;
  whatsappUrl?: string;
  contactUrl?: string;
  whatsappLabel?: string;
  contactLabel?: string;
}

export default function CTASection({
  title,
  description,
  whatsappUrl = "https://wa.me/5491124052012",
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
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <WhatsAppButton phone={whatsappUrl.replace("https://wa.me/", "")} size="lg">
            {whatsappLabel}
          </WhatsAppButton>
          <Link href={contactUrl}>
            <Button
              size="lg"
              variant="outline"
            >
              {contactLabel}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

