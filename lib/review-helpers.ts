import { getServiceData } from "./get-service-data";

/**
 * Obtiene testimonios/reviews de un servicio para ReviewSchema
 */
export function getReviewsFromService(serviceData: any) {
  if (!serviceData?.testimonials || serviceData.testimonials.length === 0) {
    return null;
  }

  const reviews = serviceData.testimonials.map((testimonial: any) => ({
    name: testimonial.name,
    text: testimonial.text,
    rating: testimonial.rating,
    date: testimonial.date,
  }));

  // Calcular rating promedio
  const averageRating = reviews.reduce((sum: number, r: any) => sum + r.rating, 0) / reviews.length;

  return {
    reviews,
    aggregateRating: {
      ratingValue: Math.round(averageRating * 10) / 10, // Redondear a 1 decimal
      reviewCount: reviews.length,
    },
  };
}

