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
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Servicios para el Hogar en Pilar – Electricidad, Plomería, Pintura y Más | Zona Norte",
  description: "Servicios de mantenimiento y reparaciones para hogares en Pilar. Electricidad, plomería, gas, pintura, albañilería, impermeabilización y más. Profesionales verificados, atención rápida y garantía escrita. Atendemos todos los barrios de Pilar.",
  keywords: "servicios pilar, reparaciones pilar, mantenimiento pilar, electricista pilar, plomero pilar, gasista pilar, pintor pilar, albañil pilar, servicios del hogar pilar, constructora pilar",
  canonical: "https://servicioszonanorte.com/donde-trabajamos/pilar",
});

export default function Pilar() {
  const servicios = [
    {
      nombre: "Electricidad",
      slug: "electricidad",
      icon: "⚡",
      titulo: "Electricista en Pilar",
      descripcion: "Servicios eléctricos completos para tu hogar en Pilar. Instalaciones, reparaciones urgentes, tableros eléctricos y más. Técnicos certificados con atención rápida en toda la ciudad.",
      serviciosPrincipales: [
        "Instalaciones eléctricas completas",
        "Renovación de cableado",
        "Tableros eléctricos y llaves térmicas",
        "Reparación de cortocircuitos",
        "Instalación de luminarias",
      ],
    },
    {
      nombre: "Plomería",
      slug: "plomeria",
      icon: "🔧",
      titulo: "Plomero en Pilar",
      descripcion: "Soluciones de plomería para hogares en Pilar. Reparación de pérdidas, instalación de cañerías, sanitarios, bombas presurizadoras y destapaciones. Atención rápida y garantizada.",
      serviciosPrincipales: [
        "Reparación de pérdidas",
        "Instalación de cañerías",
        "Cambio de sanitarios",
        "Instalación de bombas presurizadoras",
        "Destapaciones menores",
      ],
    },
    {
      nombre: "Gas",
      slug: "gas",
      icon: "🔥",
      titulo: "Gasista en Pilar",
      descripcion: "Gasista matriculado en Pilar. Instalación y reparación de artefactos a gas, cañerías, calefactores y reguladores. Trabajos certificados y seguros para tu hogar.",
      serviciosPrincipales: [
        "Instalación de artefactos a gas",
        "Reparación de cañerías",
        "Instalación de calefactores",
        "Reguladores y válvulas",
        "Certificaciones de instalación",
      ],
    },
    {
      nombre: "Albañilería",
      slug: "albanileria",
      icon: "🧱",
      titulo: "Albañil en Pilar",
      descripcion: "Trabajos de albañilería para tu hogar en Pilar. Construcción de paredes, durlock, revoques, reparación de filtraciones y refacciones de baños y cocinas.",
      serviciosPrincipales: [
        "Construcción de paredes",
        "Instalación de durlock",
        "Revoques y terminaciones",
        "Reparación de filtraciones",
        "Refacciones de baños y cocinas",
      ],
    },
    {
      nombre: "Pintura",
      slug: "pintura",
      icon: "🎨",
      titulo: "Pintor en Pilar",
      descripcion: "Servicios de pintura interior y exterior en Pilar. Preparación de superficies, pintura antihumedad y terminaciones profesionales. Transformá tu hogar con colores de calidad.",
      serviciosPrincipales: [
        "Pintura interior y exterior",
        "Preparación de superficies",
        "Pintura antihumedad",
        "Pintura de herrería",
        "Terminaciones profesionales",
      ],
    },
    {
      nombre: "Impermeabilización",
      slug: "impermeabilizacion",
      icon: "🛡️",
      titulo: "Impermeabilización en Pilar",
      descripcion: "Protección contra filtraciones en Pilar. Impermeabilización de losas, techos de chapa, terrazas, balcones y muros. Soluciones duraderas y garantizadas.",
      serviciosPrincipales: [
        "Impermeabilización de losas",
        "Techos de chapa",
        "Terrazas y balcones",
        "Membranas asfálticas",
        "Reparación de filtraciones",
      ],
    },
    {
      nombre: "Carpintería",
      slug: "carpinteria",
      icon: "🪵",
      titulo: "Carpintería en Pilar",
      descripcion: "Carpintería de madera para tu hogar en Pilar. Reparaciones, puertas, muebles sencillos, zócalos y decks. Trabajos personalizados y de calidad.",
      serviciosPrincipales: [
        "Reparación de muebles",
        "Instalación de puertas",
        "Zócalos y molduras",
        "Decks pequeños",
        "Trabajos personalizados",
      ],
    },
    {
      nombre: "Zinguería",
      slug: "zingueria",
      icon: "📐",
      titulo: "Zinguería en Pilar",
      descripcion: "Servicios de zinguería en Pilar. Canaletas, bajadas pluviales, cumbreras y soluciones contra filtraciones. Protección completa para tu techo.",
      serviciosPrincipales: [
        "Instalación de canaletas",
        "Bajadas pluviales",
        "Cumbreras",
        "Reparación de filtraciones",
        "Mantenimiento de techos",
      ],
    },
    {
      nombre: "Herrería",
      slug: "herrería",
      icon: "⚒️",
      titulo: "Herrería en Pilar",
      descripcion: "Herrería para el hogar en Pilar. Soldaduras, rejas, portones, estructuras livianas y refuerzos. Trabajos de calidad y durabilidad.",
      serviciosPrincipales: [
        "Soldaduras en el hogar",
        "Instalación de rejas",
        "Portones y canceles",
        "Estructuras livianas",
        "Refuerzos y reparaciones",
      ],
    },
    {
      nombre: "Techos",
      slug: "techos",
      icon: "🏠",
      titulo: "Techos en Pilar",
      descripcion: "Reparación y mantenimiento de techos en Pilar. Reparación de chapas, colocación de nuevas chapas, aislaciones y mantenimiento anual. Protección completa para tu hogar.",
      serviciosPrincipales: [
        "Reparación de techos de chapa",
        "Colocación de nuevas chapas",
        "Aislaciones térmicas",
        "Mantenimiento anual",
        "Impermeabilización de techos",
      ],
    },
    {
      nombre: "Revestimientos y Pisos",
      slug: "revestimientos-pisos",
      icon: "🔲",
      titulo: "Revestimientos y Pisos en Pilar",
      descripcion: "Instalación de revestimientos y pisos en Pilar. Cerámicos, porcelanatos, pisos flotantes, vinílicos y nivelaciones. Terminaciones profesionales para tu hogar.",
      serviciosPrincipales: [
        "Instalación de cerámicos",
        "Porcelanatos",
        "Pisos flotantes",
        "Pisos vinílicos",
        "Nivelaciones y preparación",
      ],
    },
    {
      nombre: "Aire Acondicionado",
      slug: "aire-acondicionado",
      icon: "❄️",
      titulo: "Aire Acondicionado en Pilar",
      descripcion: "Servicios de aire acondicionado en Pilar. Instalación, mantenimiento, limpieza profunda, recarga de gas y reubicación. Climatización profesional para tu hogar.",
      serviciosPrincipales: [
        "Instalación de equipos",
        "Mantenimiento preventivo",
        "Limpieza profunda",
        "Recarga de gas",
        "Reubicación de equipos",
      ],
    },
  ];

  const localidadesCercanas = [
    { nombre: "San Isidro", slug: "san-isidro" },
    { nombre: "Tigre", slug: "tigre" },
    { nombre: "Vicente López", slug: "vicente-lopez" },
    { nombre: "San Miguel", slug: "san-miguel" },
  ];

  const zonasPilar = [
    "Pilar Centro",
    "Pilar Norte",
    "Pilar Sur",
    "Manzanares",
    "Del Viso",
    "Villa Rosa",
    "Fátima",
    "Derqui",
  ];

  const beneficios = [
    {
      icon: "⚡",
      title: "Atención rápida",
      description: "Respuesta inmediata en toda la zona de Pilar. Coordinamos visitas el mismo día cuando es urgente.",
    },
    {
      icon: "📍",
      title: "Conocimiento de la zona",
      description: "Trabajamos en todos los barrios de Pilar. Conocemos la ciudad y sus particularidades.",
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

  const introParagraphs = [
    `Somos especialistas en <strong>servicios para el hogar en Pilar</strong>, 
    orientados exclusivamente a viviendas particulares. Atendemos todos los trabajos 
    de mantenimiento, refacción y mejora del hogar con profesionales verificados y 
    respuesta rápida en todos los barrios de Pilar.`,
    `Nuestra cercanía geográfica nos permite ofrecer <strong>atención rápida en Pilar</strong>, 
    con disponibilidad inmediata para reparaciones urgentes y trabajos programados. 
    Conocemos la zona y trabajamos en todos los barrios: Pilar Centro, Pilar Norte, 
    Pilar Sur, Manzanares, Del Viso, Villa Rosa, Fátima, Derqui y más.`,
    `Ofrecemos <strong>reparaciones en Pilar</strong>, <strong>servicios del hogar en Pilar</strong> y 
    <strong>mantenimiento en Pilar</strong> con garantía escrita en todos los trabajos. 
    Técnicos especializados por rubro, materiales de primera calidad y presupuestos 
    claros sin sorpresas.`,
  ];

  const localBusinessData = {
    name: "Servicios Zona Norte - Pilar",
    image: "https://servicioszonanorte.com/og-image.jpg",
    url: "https://servicioszonanorte.com/donde-trabajamos/pilar",
    phone: "+5491123456789",
    addressLocality: "Pilar",
    addressRegion: "Buenos Aires",
    latitude: -34.4734,
    longitude: -58.9117,
    openingHours: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "18:00",
      },
    ],
    areaServed: ["Pilar", "Pilar Centro", "Pilar Norte", "Pilar Sur", "Manzanares", "Del Viso", "Villa Rosa", "Fátima", "Derqui"],
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", url: "/" },
          { name: "Donde trabajamos", url: "/donde-trabajamos" },
          { name: "Pilar", url: "/donde-trabajamos/pilar" },
        ]}
      />
      <StructuredData type="LocalBusiness" data={localBusinessData} />
      <main className="flex min-h-screen flex-col">
        <HeroSection
        title="Servicios para el hogar en Pilar – Electricidad, plomería, pintura y más"
        description="Profesionales verificados, atención rápida y trabajos garantizados. Un solo equipo para resolver todos tus trabajos de mantenimiento y reparaciones en Pilar."
      />

      <LocalIntroSection
        title="Servicios del hogar en Pilar – Profesionales cerca de tu casa"
        paragraphs={introParagraphs}
      />

      <ServicesSection
        title="Todos nuestros servicios en Pilar"
        services={servicios}
        localidad="Pilar"
      />

      <BenefitsSection
        title="Por qué elegirnos en Pilar"
        benefits={beneficios}
        localidad="Pilar"
      />

      <ZonesSection
        title="Atendemos en todos los barrios de Pilar"
        description="Trabajamos en toda la ciudad de Pilar, incluyendo todos sus barrios y zonas. No importa dónde esté tu hogar, llegamos rápido y con la misma calidad de servicio."
        zones={zonasPilar}
        localidad="Pilar"
        footerText="Y en cualquier otro barrio o zona de Pilar. Consultá disponibilidad para tu zona específica."
      />

      <InternalLinksSection
        title="Más información y servicios"
        localidadesCercanas={localidadesCercanas}
        localidad="Pilar"
      />

      <CTASection
        title="¿Necesitás un profesional para tu hogar en Pilar?"
        description="Contactanos ahora y recibí tu presupuesto sin costo. Atención rápida en todos los barrios de Pilar."
        localidad="Pilar"
        footerText="También podés llamarnos o completar nuestro formulario de contacto."
      />
      </main>
    </>
  );
}
