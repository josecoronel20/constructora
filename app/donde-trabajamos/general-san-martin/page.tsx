import type { Metadata } from "next";
import HeroSection from "@/components/locality/HeroSection";
import LocalIntroSection from "@/components/locality/LocalIntroSection";
import ServicesSection from "@/components/locality/ServicesSection";
import BenefitsSection from "@/components/locality/BenefitsSection";
import ZonesSection from "@/components/locality/ZonesSection";
import InternalLinksSection from "@/components/locality/InternalLinksSection";
import CTASection from "@/components/locality/CTASection";

export const metadata: Metadata = {
  title: "Servicios para el Hogar en General San Martín – Electricidad, Plomería, Pintura y Más | Zona Norte",
  description: "Servicios de mantenimiento y reparaciones para hogares en General San Martín. Electricidad, plomería, gas, pintura, albañilería, impermeabilización y más. Profesionales verificados, atención rápida y garantía escrita. Atendemos todos los barrios de General San Martín.",
  keywords: "servicios general san martin, reparaciones general san martin, mantenimiento general san martin, electricista general san martin, plomero general san martin, gasista general san martin, pintor general san martin, albañil general san martin, servicios del hogar general san martin, constructora general san martin",
};

export default function GeneralSanMartin() {
  const servicios = [
    {
      nombre: "Electricidad",
      slug: "electricidad",
      icon: "⚡",
      titulo: "Electricista en General San Martín",
      descripcion: "Servicios eléctricos completos para tu hogar en General San Martín. Instalaciones, reparaciones urgentes, tableros eléctricos y más. Técnicos certificados con atención rápida en toda la ciudad.",
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
      titulo: "Plomero en General San Martín",
      descripcion: "Soluciones de plomería para hogares en General San Martín. Reparación de pérdidas, instalación de cañerías, sanitarios, bombas presurizadoras y destapaciones. Atención rápida y garantizada.",
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
      titulo: "Gasista en General San Martín",
      descripcion: "Gasista matriculado en General San Martín. Instalación y reparación de artefactos a gas, cañerías, calefactores y reguladores. Trabajos certificados y seguros para tu hogar.",
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
      titulo: "Albañil en General San Martín",
      descripcion: "Trabajos de albañilería para tu hogar en General San Martín. Construcción de paredes, durlock, revoques, reparación de filtraciones y refacciones de baños y cocinas.",
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
      titulo: "Pintor en General San Martín",
      descripcion: "Servicios de pintura interior y exterior en General San Martín. Preparación de superficies, pintura antihumedad y terminaciones profesionales. Transformá tu hogar con colores de calidad.",
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
      titulo: "Impermeabilización en General San Martín",
      descripcion: "Protección contra filtraciones en General San Martín. Impermeabilización de losas, techos de chapa, terrazas, balcones y muros. Soluciones duraderas y garantizadas.",
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
      titulo: "Carpintería en General San Martín",
      descripcion: "Carpintería de madera para tu hogar en General San Martín. Reparaciones, puertas, muebles sencillos, zócalos y decks. Trabajos personalizados y de calidad.",
      serviciosPrincipales: [
        "Reparación de muebles",
        "Instalación de puertas",
        "Zócalos y molduras",
        "Decks pequeños",
        "Trabajos personalizados",
      ],
    },
    {
      nombre: "Herrería",
      slug: "herrería",
      icon: "⚒️",
      titulo: "Herrería en General San Martín",
      descripcion: "Herrería para el hogar en General San Martín. Soldaduras, rejas, portones, estructuras livianas y refuerzos. Trabajos de calidad y durabilidad.",
      serviciosPrincipales: [
        "Soldaduras en el hogar",
        "Instalación de rejas",
        "Portones y canceles",
        "Estructuras livianas",
        "Refuerzos y reparaciones",
      ],
    },
    {
      nombre: "Techos y Zinguería",
      slug: "techos",
      icon: "🏠",
      titulo: "Techos y Zinguería en General San Martín",
      descripcion: "Reparación de techos y zinguería en General San Martín. Reparación de chapas, colocación de nuevas chapas, canaletas, bajadas, babeta, cumbreras, aislaciones y mantenimiento anual. Protección completa para tu hogar.",
      serviciosPrincipales: [
        "Reparación de techos de chapa",
        "Colocación de nuevas chapas",
        "Instalación de canaletas y bajadas",
        "Babeta y cumbreras",
        "Aislaciones térmicas",
        "Mantenimiento anual",
      ],
    },
    {
      nombre: "Revestimientos y Pisos",
      slug: "revestimientos-pisos",
      icon: "🔲",
      titulo: "Revestimientos y Pisos en General San Martín",
      descripcion: "Instalación de revestimientos y pisos en General San Martín. Cerámicos, porcelanatos, pisos flotantes, vinílicos y nivelaciones. Terminaciones profesionales para tu hogar.",
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
      titulo: "Aire Acondicionado en General San Martín",
      descripcion: "Servicios de aire acondicionado en General San Martín. Instalación, mantenimiento, limpieza profunda, recarga de gas y reubicación. Climatización profesional para tu hogar.",
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
    { nombre: "San Miguel", slug: "san-miguel" },
    { nombre: "Malvinas Argentinas", slug: "malvinas-argentinas" },
    { nombre: "José C. Paz", slug: "jose-c-paz" },
    { nombre: "Vicente López", slug: "vicente-lopez" },
  ];

  const zonasGeneralSanMartin = [
    "San Martín Centro",
    "Villa Ballester",
    "Villa Maipú",
    "Villa Libertador San Martín",
    "Billinghurst",
    "Chilavert",
    "Villa Concepción",
    "Villa Sarmiento",
  ];

  const beneficios = [
    {
      icon: "⚡",
      title: "Atención rápida",
      description: "Respuesta inmediata en toda la zona de General San Martín. Coordinamos visitas el mismo día cuando es urgente.",
    },
    {
      icon: "📍",
      title: "Conocimiento de la zona",
      description: "Trabajamos en todos los barrios de General San Martín. Conocemos la ciudad y sus particularidades.",
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
    `Somos especialistas en <strong>servicios para el hogar en General San Martín</strong>, 
    orientados exclusivamente a viviendas particulares. Atendemos todos los trabajos 
    de mantenimiento, refacción y mejora del hogar con profesionales verificados y 
    respuesta rápida en todos los barrios de General San Martín.`,
    `Nuestra cercanía geográfica nos permite ofrecer <strong>atención rápida en General San Martín</strong>, 
    con disponibilidad inmediata para reparaciones urgentes y trabajos programados. 
    Conocemos la zona y trabajamos en todos los barrios: San Martín Centro, Villa Ballester, 
    Villa Maipú, Villa Libertador San Martín, Billinghurst, Chilavert, Villa Concepción, 
    Villa Sarmiento y más.`,
    `Ofrecemos <strong>reparaciones en General San Martín</strong>, <strong>servicios del hogar en General San Martín</strong> y 
    <strong>mantenimiento en General San Martín</strong> con garantía escrita en todos los trabajos. 
    Técnicos especializados por rubro, materiales de primera calidad y presupuestos 
    claros sin sorpresas.`,
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection
        title="Servicios para el hogar en General San Martín – Electricidad, plomería, pintura y más"
        description="Profesionales verificados, atención rápida y trabajos garantizados. Un solo equipo para resolver todos tus trabajos de mantenimiento y reparaciones en General San Martín."
      />

      <LocalIntroSection
        title="Servicios del hogar en General San Martín – Profesionales cerca de tu casa"
        paragraphs={introParagraphs}
      />

      <ServicesSection
        title="Todos nuestros servicios en General San Martín"
        services={servicios}
        localidad="General San Martín"
      />

      <BenefitsSection
        title="Por qué elegirnos en General San Martín"
        benefits={beneficios}
        localidad="General San Martín"
      />

      <ZonesSection
        title="Atendemos en todos los barrios de General San Martín"
        description="Trabajamos en toda la ciudad de General San Martín, incluyendo todos sus barrios y zonas. No importa dónde esté tu hogar, llegamos rápido y con la misma calidad de servicio."
        zones={zonasGeneralSanMartin}
        localidad="General San Martín"
        footerText="Y en cualquier otro barrio o zona de General San Martín. Consultá disponibilidad para tu zona específica."
      />

      <InternalLinksSection
        title="Más información y servicios"
        localidadesCercanas={localidadesCercanas}
        localidad="General San Martín"
      />

      <CTASection
        title="¿Necesitás un profesional para tu hogar en General San Martín?"
        description="Contactanos ahora y recibí tu presupuesto sin costo. Atención rápida en todos los barrios de General San Martín."
        localidad="General San Martín"
        footerText="También podés llamarnos o completar nuestro formulario de contacto."
      />
    </main>
  );
}

