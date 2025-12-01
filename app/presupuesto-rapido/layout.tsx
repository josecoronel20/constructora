import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Contacto – Servicios del Hogar en Zona Norte | WhatsApp y Formulario",
  description: "Contactanos para servicios de mantenimiento y reparaciones en Zona Norte. Formulario de contacto, WhatsApp, teléfono y horarios de atención. Atendemos en Pilar, San Isidro, Tigre y todas las localidades de Zona Norte.",
  keywords: "contacto servicios zona norte, whatsapp servicios hogar, formulario contacto zona norte, servicios pilar contacto, servicios san isidro contacto",
  canonical: "https://servicioszonanorte.com/contacto",
});

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

