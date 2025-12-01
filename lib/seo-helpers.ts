import { Metadata } from "next";
import { generateMetadata as genMeta } from "./seo";

// Helper para generar metadata de servicios
export function getServiceMetadata(
  serviceName: string,
  serviceSlug: string,
  description: string,
  keywords: string
): Metadata {
  return genMeta({
    title: `${serviceName} en Zona Norte – Profesionales Certificados`,
    description,
    keywords,
    canonical: `https://servicioszonanorte.com/servicios/${serviceSlug}`,
  });
}

// Helper para generar metadata de localidades
export function getLocalityMetadata(
  localityName: string,
  localitySlug: string,
  description: string,
  keywords: string
): Metadata {
  return genMeta({
    title: `Servicios para el Hogar en ${localityName} – Electricidad, Plomería, Pintura y Más | Zona Norte`,
    description,
    keywords,
    canonical: `https://servicioszonanorte.com/donde-trabajamos/${localitySlug}`,
  });
}

// Helper para generar breadcrumbs de servicios
export function getServiceBreadcrumbs(serviceName: string, serviceSlug: string) {
  return [
    { name: "Inicio", url: "/" },
    { name: "Servicios", url: "/servicios" },
    { name: serviceName, url: `/servicios/${serviceSlug}` },
  ];
}

// Helper para generar breadcrumbs de localidades
export function getLocalityBreadcrumbs(localityName: string, localitySlug: string) {
  return [
    { name: "Inicio", url: "/" },
    { name: "Donde trabajamos", url: "/donde-trabajamos" },
    { name: localityName, url: `/donde-trabajamos/${localitySlug}` },
  ];
}

// Helper para generar structured data de servicios
export function getServiceStructuredData(
  serviceType: string,
  description: string
) {
  return {
    serviceType,
    providerName: "Constructora & Mantenimiento del Hogar – Zona Norte",
    areaServed: "Zona Norte",
    description,
  };
}

// Helper para generar structured data de localidades
export function getLocalityStructuredData(
  localityName: string,
  localitySlug: string,
  latitude: number,
  longitude: number,
  zones: string[]
) {
  return {
    name: `Constructora & Mantenimiento del Hogar – Zona Norte - ${localityName}`,
    image: "https://servicioszonanorte.com/og-image.jpg",
    url: `https://servicioszonanorte.com/donde-trabajamos/${localitySlug}`,
    phone: "+5491123456789",
    addressLocality: localityName,
    addressRegion: "Buenos Aires",
    latitude,
    longitude,
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
    areaServed: zones,
  };
}

