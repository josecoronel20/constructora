interface Review {
  name: string;
  text: string;
  rating: number;
  date: string;
}

interface ReviewSchemaProps {
  businessName: string;
  businessUrl: string;
  reviews: Review[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export default function ReviewSchema({
  businessName,
  businessUrl,
  reviews,
  aggregateRating,
}: ReviewSchemaProps) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    url: businessUrl,
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewBody: review.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      datePublished: review.date,
    })),
  };

  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

