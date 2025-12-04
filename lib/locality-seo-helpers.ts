import { getLocalityData } from "./get-locality-data";
import type { Metadata } from "next";
import { generateMetadata as genMeta } from "./seo";

/**
 * Genera metadata mejorada para páginas de localidades con Open Graph específico
 */
export function generateLocalityMetadata(slug: string): Metadata {
  const localityData = getLocalityData(slug);
  if (!localityData) {
    return genMeta({
      title: `Servicios en Zona Norte`,
      description: "Servicios de mantenimiento y reparaciones para hogares en Zona Norte",
    });
  }

  const title = `Servicios para el Hogar en ${localityData.nombre} – Electricidad, Plomería, Pintura y Más | Zona Norte`;
  const description = `Servicios de mantenimiento y reparaciones para hogares en ${localityData.nombre}. Electricidad, plomería, gas, pintura, albañilería, impermeabilización y más. Profesionales verificados, atención rápida y garantía escrita. Atendemos todos los barrios de ${localityData.nombre}.`;
  const keywords = `servicios ${localityData.nombre.toLowerCase()}, reparaciones ${localityData.nombre.toLowerCase()}, mantenimiento ${localityData.nombre.toLowerCase()}, electricista ${localityData.nombre.toLowerCase()}, plomero ${localityData.nombre.toLowerCase()}, gasista ${localityData.nombre.toLowerCase()}, pintor ${localityData.nombre.toLowerCase()}, albañil ${localityData.nombre.toLowerCase()}, servicios del hogar ${localityData.nombre.toLowerCase()}, constructora ${localityData.nombre.toLowerCase()}`;

  return genMeta({
    title,
    description,
    keywords,
    canonical: `https://servicioszonanorte.com/donde-trabajamos/${localityData.slug}`,
    ogImage: "/images/servicio-plomeria-san-martin.png", // Puedes personalizar por localidad
  });
}

/**
 * Genera datos de LocalBusiness mejorados para páginas de localidades
 */
export function generateLocalBusinessData(slug: string) {
  const localityData = getLocalityData(slug);
  if (!localityData) {
    return null;
  }

  return {
    name: `Constructora Zona Norte - ${localityData.nombre}`,
    image: "https://servicioszonanorte.com/og-image.jpg",
    url: `https://servicioszonanorte.com/donde-trabajamos/${localityData.slug}`,
    phone: "+5491124052012",
    addressLocality: localityData.nombre,
    addressRegion: "Buenos Aires",
    latitude: localityData.coordenadas.latitud,
    longitude: localityData.coordenadas.longitud,
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
    areaServed: [localityData.nombre, ...localityData.zonas],
    hasMap: `https://www.google.com/maps/search/?api=1&query=${localityData.coordenadas.latitud},${localityData.coordenadas.longitud}`,
    serviceArea: {
      latitude: localityData.coordenadas.latitud,
      longitude: localityData.coordenadas.longitud,
      radius: 50, // Radio de 50km alrededor de la localidad
    },
  };
}

