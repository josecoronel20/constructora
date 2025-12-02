import { getServiceData } from "./get-service-data";
import type { Metadata } from "next";
import { generateMetadata as genMeta } from "./seo";

/**
 * Genera metadata mejorada para páginas de servicios con Open Graph específico
 */
export async function generateServiceMetadata(slug: string): Promise<Metadata> {
  const serviceData = getServiceData(slug);
  if (!serviceData) {
    return genMeta({
      title: `Servicio en Zona Norte`,
      description: "Servicios de mantenimiento y reparaciones para hogares en Zona Norte",
    });
  }

  // Usar imagen específica del servicio si está disponible
  const ogImage = serviceData.seo?.openGraph?.image || serviceData.hero?.image?.src || "/og-image.jpg";

  return genMeta({
    title: serviceData.meta.title,
    description: serviceData.meta.description,
    keywords: serviceData.meta.keywords,
    canonical: serviceData.meta.canonical,
    ogImage: ogImage,
  });
}

/**
 * Convierte FAQs del formato structuredData al formato del componente FAQSchema
 */
export function getFAQsFromService(serviceData: any) {
  if (!serviceData?.structuredData?.faq) {
    return [];
  }
  
  return serviceData.structuredData.faq.map((faq: any) => ({
    q: faq.name,
    a: faq.acceptedAnswer.text,
  }));
}

/**
 * Obtiene datos de reviews para ReviewSchema
 */
export function getReviewsDataForSchema(serviceData: any) {
  if (!serviceData?.testimonials || serviceData.testimonials.length === 0) {
    return null;
  }

  const reviews = serviceData.testimonials.map((testimonial: any) => ({
    name: testimonial.name,
    text: testimonial.text,
    rating: testimonial.rating,
    date: testimonial.date,
  }));

  const averageRating = reviews.reduce((sum: number, r: any) => sum + r.rating, 0) / reviews.length;

  return {
    reviews,
    aggregateRating: {
      ratingValue: Math.round(averageRating * 10) / 10,
      reviewCount: reviews.length,
    },
    businessName: serviceData.structuredData?.service?.provider?.name || "Constructora & Mantenimiento del Hogar – Zona Norte",
    businessUrl: serviceData.meta?.canonical || "https://servicioszonanorte.com",
  };
}
