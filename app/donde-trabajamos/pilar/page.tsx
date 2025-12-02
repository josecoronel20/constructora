import type { Metadata } from "next";
import HeroSection from "@/components/locality/HeroSection";
import LocalIntroSection from "@/components/locality/LocalIntroSection";
import ServicesSection from "@/components/locality/ServicesSection";
import BenefitsSection from "@/components/locality/BenefitsSection";
import ZonesSection from "@/components/locality/ZonesSection";
import InternalLinksSection from "@/components/locality/InternalLinksSection";
import CTASection from "@/components/locality/CTASection";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import StructuredData from "@/components/SEO/StructuredData";
import { generateLocalityMetadata, generateLocalBusinessData } from "@/lib/locality-seo-helpers";
import { getLocalityData, getServicesForLocality } from "@/lib/get-locality-data";

export const metadata: Metadata = generateLocalityMetadata("pilar");

export default function Pilar() {
  const localityData = getLocalityData("pilar");
  const localBusinessData = generateLocalBusinessData("pilar");
  
  if (!localityData || !localBusinessData) {
    return <div>Localidad no encontrada</div>;
  }

  const servicios = getServicesForLocality(localityData.nombre);
  
  const localidadesCercanas = [
    { nombre: "San Isidro", slug: "san-isidro" },
    { nombre: "Tigre", slug: "tigre" },
    { nombre: "Vicente López", slug: "vicente-lopez" },
    { nombre: "San Miguel", slug: "san-miguel" },
  ];

  const beneficios = [
    {
      icon: "⚡",
      title: "Atención rápida",
      description: `Respuesta inmediata en toda la zona de ${localityData.nombre}. Coordinamos visitas el mismo día cuando es urgente.`,
    },
    {
      icon: "📍",
      title: "Conocimiento de la zona",
      description: `Trabajamos en todos los barrios de ${localityData.nombre}. Conocemos la ciudad y sus particularidades.`,
    },
    {
      icon: "✅",
      title: "Profesionales verificados",
      description: "Técnicos certificados y especialistas en cada rubro. Trabajos de calidad garantizada.",
    },
    {
      icon: "📋",
      title: "Garantía escrita",
      description: "Todos nuestros trabajos incluyen garantía escrita. Resolvemos cualquier inconveniente sin costo adicional.",
    },
  ];

  const zonasLista = localityData.zonas.slice(0, 8).join(", ");
  const introParagraphs = [
    `Somos especialistas en <strong>servicios para el hogar en ${localityData.nombre}</strong>, 
    orientados exclusivamente a viviendas particulares. Atendemos todos los trabajos 
    de mantenimiento, refacción y mejora del hogar con profesionales verificados y 
    respuesta rápida en todos los barrios de ${localityData.nombre}.`,
    `Nuestra cercanía geográfica nos permite ofrecer <strong>atención rápida en ${localityData.nombre}</strong>, 
    con disponibilidad inmediata para reparaciones urgentes y trabajos programados. 
    Conocemos la zona y trabajamos en todos los barrios: ${zonasLista} y más.`,
    `Ofrecemos <strong>reparaciones en ${localityData.nombre}</strong>, <strong>servicios del hogar en ${localityData.nombre}</strong> y 
    <strong>mantenimiento en ${localityData.nombre}</strong> con garantía escrita en todos los trabajos. 
    Técnicos especializados por rubro, materiales de primera calidad y presupuestos 
    claros sin sorpresas.`,
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", url: "/" },
          { name: "Donde trabajamos", url: "/donde-trabajamos" },
          { name: localityData.nombre, url: `/donde-trabajamos/${localityData.slug}` },
        ]}
      />
      <StructuredData type="LocalBusiness" data={localBusinessData} />
      <main className="flex min-h-screen flex-col">
        <HeroSection
        title={`Servicios para el hogar en ${localityData.nombre} – Electricidad, plomería, pintura y más`}
        description={`Profesionales verificados, atención rápida y trabajos garantizados. Un solo equipo para resolver todos tus trabajos de mantenimiento y reparaciones en ${localityData.nombre}.`}
      />

      <LocalIntroSection
        title={`Servicios del hogar en ${localityData.nombre} – Profesionales cerca de tu casa`}
        paragraphs={introParagraphs}
      />

      <ServicesSection
        title={`Todos nuestros servicios en ${localityData.nombre}`}
        services={servicios}
        localidad={localityData.nombre}
      />

      <BenefitsSection
        title={`Por qué elegirnos en ${localityData.nombre}`}
        benefits={beneficios}
        localidad={localityData.nombre}
      />

      <ZonesSection
        title={`Atendemos en todos los barrios de ${localityData.nombre}`}
        description={`Trabajamos en toda la ciudad de ${localityData.nombre}, incluyendo todos sus barrios y zonas. No importa dónde esté tu hogar, llegamos rápido y con la misma calidad de servicio.`}
        zones={localityData.zonas}
        localidad={localityData.nombre}
        footerText={`Y en cualquier otro barrio o zona de ${localityData.nombre}. Consultá disponibilidad para tu zona específica.`}
      />

      <InternalLinksSection
        title="Más información y servicios"
        localidadesCercanas={localidadesCercanas}
        localidad={localityData.nombre}
      />

      <CTASection
        title={`¿Necesitás un profesional para tu hogar en ${localityData.nombre}?`}
        description={`Contactanos ahora y recibí tu presupuesto sin costo. Atención rápida en todos los barrios de ${localityData.nombre}.`}
        localidad={localityData.nombre}
        footerText="También podés llamarnos o completar nuestro formulario de contacto."
      />
      </main>
    </>
  );
}
