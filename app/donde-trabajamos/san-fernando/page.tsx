import type { Metadata } from "next";
import HeroSection from "@/components/locality/HeroSection";
import LocalIntroSection from "@/components/locality/LocalIntroSection";
import ServicesSection from "@/components/locality/ServicesSection";
import BenefitsSection from "@/components/locality/BenefitsSection";
import ZonesSection from "@/components/locality/ZonesSection";
import InternalLinksSection from "@/components/locality/InternalLinksSection";
import CTASection from "@/components/locality/CTASection";

export const metadata: Metadata = {
  title: "Servicios para el Hogar en San Fernando – Electricidad, Plomería, Pintura y Más | Zona Norte",
  description: "Servicios de mantenimiento y reparaciones para hogares en San Fernando. Electricidad, plomería, gas, pintura, albañilería, impermeabilización y más. Profesionales verificados, atención rápida y garantía escrita. Atendemos todos los barrios de San Fernando.",
  keywords: "servicios san fernando, reparaciones san fernando, mantenimiento san fernando, electricista san fernando, plomero san fernando, gasista san fernando, pintor san fernando, albañil san fernando, servicios del hogar san fernando, constructora san fernando",
};

export default function SanFernando() {
  const servicios = [
    {
      nombre: "Electricidad",
      slug: "electricidad",
      icon: "⚡",
      titulo: "Electricista en San Fernando",
      descripcion: "Servicios eléctricos completos para tu hogar en San Fernando. Instalaciones, reparaciones urgentes, tableros eléctricos y más. Técnicos certificados con atención rápida en toda la ciudad.",
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
      titulo: "Plomero en San Fernando",
      descripcion: "Soluciones de plomería para hogares en San Fernando. Reparación de pérdidas, instalación de cañerías, sanitarios, bombas presurizadoras y destapaciones. Atención rápida y garantizada.",
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
      titulo: "Gasista en San Fernando",
      descripcion: "Gasista matriculado en San Fernando. Instalación y reparación de artefactos a gas, cañerías, calefactores y reguladores. Trabajos certificados y seguros para tu hogar.",
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
      titulo: "Albañil en San Fernando",
      descripcion: "Trabajos de albañilería para tu hogar en San Fernando. Construcción de paredes, durlock, revoques, reparación de filtraciones y refacciones de baños y cocinas.",
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
      titulo: "Pintor en San Fernando",
      descripcion: "Servicios de pintura interior y exterior en San Fernando. Preparación de superficies, pintura antihumedad y terminaciones profesionales. Transformá tu hogar con colores de calidad.",
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
      titulo: "Impermeabilización en San Fernando",
      descripcion: "Protección contra filtraciones en San Fernando. Impermeabilización de losas, techos de chapa, terrazas, balcones y muros. Soluciones duraderas y garantizadas.",
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
      titulo: "Carpintería en San Fernando",
      descripcion: "Carpintería de madera para tu hogar en San Fernando. Reparaciones, puertas, muebles sencillos, zócalos y decks. Trabajos personalizados y de calidad.",
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
      titulo: "Zinguería en San Fernando",
      descripcion: "Servicios de zinguería en San Fernando. Canaletas, bajadas pluviales, cumbreras y soluciones contra filtraciones. Protección completa para tu techo.",
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
      titulo: "Herrería en San Fernando",
      descripcion: "Herrería para el hogar en San Fernando. Soldaduras, rejas, portones, estructuras livianas y refuerzos. Trabajos de calidad y durabilidad.",
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
      titulo: "Techos en San Fernando",
      descripcion: "Reparación y mantenimiento de techos en San Fernando. Reparación de chapas, colocación de nuevas chapas, aislaciones y mantenimiento anual. Protección completa para tu hogar.",
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
      titulo: "Revestimientos y Pisos en San Fernando",
      descripcion: "Instalación de revestimientos y pisos en San Fernando. Cerámicos, porcelanatos, pisos flotantes, vinílicos y nivelaciones. Terminaciones profesionales para tu hogar.",
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
      titulo: "Aire Acondicionado en San Fernando",
      descripcion: "Servicios de aire acondicionado en San Fernando. Instalación, mantenimiento, limpieza profunda, recarga de gas y reubicación. Climatización profesional para tu hogar.",
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
    { nombre: "Tigre", slug: "tigre" },
    { nombre: "San Isidro", slug: "san-isidro" },
    { nombre: "Vicente López", slug: "vicente-lopez" },
    { nombre: "Pilar", slug: "pilar" },
  ];

  const zonasSanFernando = [
    "San Fernando Centro",
    "San Fernando Norte",
    "San Fernando Sur",
    "Victoria",
    "Virreyes",
    "Carupá",
    "Boulogne Sur Mer",
    "Río Luján",
  ];

  const beneficios = [
    {
      icon: "⚡",
      title: "Atención rápida",
      description: "Respuesta inmediata en toda la zona de San Fernando. Coordinamos visitas el mismo día cuando es urgente.",
    },
    {
      icon: "📍",
      title: "Conocimiento de la zona",
      description: "Trabajamos en todos los barrios de San Fernando. Conocemos la ciudad y sus particularidades costeras.",
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
    `Somos especialistas en <strong>servicios para el hogar en San Fernando</strong>, 
    orientados exclusivamente a viviendas particulares. Atendemos todos los trabajos 
    de mantenimiento, refacción y mejora del hogar con profesionales verificados y 
    respuesta rápida en todos los barrios de San Fernando.`,
    `Nuestra cercanía geográfica nos permite ofrecer <strong>atención rápida en San Fernando</strong>, 
    con disponibilidad inmediata para reparaciones urgentes y trabajos programados. 
    Conocemos la zona y trabajamos en todos los barrios: San Fernando Centro, San Fernando Norte, 
    San Fernando Sur, Victoria, Virreyes, Carupá, Boulogne Sur Mer, Río Luján y más.`,
    `Ofrecemos <strong>reparaciones en San Fernando</strong>, <strong>servicios del hogar en San Fernando</strong> y 
    <strong>mantenimiento en San Fernando</strong> con garantía escrita en todos los trabajos. 
    Técnicos especializados por rubro, materiales de primera calidad y presupuestos 
    claros sin sorpresas.`,
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection
        title="Servicios para el hogar en San Fernando – Electricidad, plomería, pintura y más"
        description="Profesionales verificados, atención rápida y trabajos garantizados. Un solo equipo para resolver todos tus trabajos de mantenimiento y reparaciones en San Fernando."
      />

      <LocalIntroSection
        title="Servicios del hogar en San Fernando – Profesionales cerca de tu casa"
        paragraphs={introParagraphs}
      />

      <ServicesSection
        title="Todos nuestros servicios en San Fernando"
        services={servicios}
        localidad="San Fernando"
      />

      <BenefitsSection
        title="Por qué elegirnos en San Fernando"
        benefits={beneficios}
        localidad="San Fernando"
      />

      <ZonesSection
        title="Atendemos en todos los barrios de San Fernando"
        description="Trabajamos en toda la ciudad de San Fernando, incluyendo todos sus barrios y zonas. No importa dónde esté tu hogar, llegamos rápido y con la misma calidad de servicio."
        zones={zonasSanFernando}
        localidad="San Fernando"
        footerText="Y en cualquier otro barrio o zona de San Fernando. Consultá disponibilidad para tu zona específica."
      />

      <InternalLinksSection
        title="Más información y servicios"
        localidadesCercanas={localidadesCercanas}
        localidad="San Fernando"
      />

      <CTASection
        title="¿Necesitás un profesional para tu hogar en San Fernando?"
        description="Contactanos ahora y recibí tu presupuesto sin costo. Atención rápida en todos los barrios de San Fernando."
        localidad="San Fernando"
        footerText="También podés llamarnos o completar nuestro formulario de contacto."
      />
    </main>
  );
}

