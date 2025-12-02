interface StructuredDataProps {
  type: "Organization" | "LocalBusiness" | "Service" | "BreadcrumbList";
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: data.name,
          url: data.url,
          logo: data.logo,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: data.phone,
            contactType: "customer service",
            areaServed: data.areaServed,
            availableLanguage: "Spanish",
          },
          sameAs: data.sameAs || [],
        };

      case "LocalBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: data.name,
          image: data.image,
          "@id": data.url,
          url: data.url,
          telephone: data.phone,
          address: {
            "@type": "PostalAddress",
            addressLocality: data.addressLocality,
            addressRegion: data.addressRegion,
            addressCountry: "AR",
          },
          ...(data.latitude && data.longitude && {
            geo: {
              "@type": "GeoCoordinates",
              latitude: data.latitude,
              longitude: data.longitude,
            },
          }),
          ...(data.openingHours && {
            openingHoursSpecification: data.openingHours,
          }),
          priceRange: data.priceRange || "$$",
          ...(data.aggregateRating && {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: data.aggregateRating.ratingValue,
              reviewCount: data.aggregateRating.reviewCount,
              bestRating: 5,
              worstRating: 1,
            },
          }),
          ...(data.hasMap && {
            hasMap: data.hasMap,
          }),
          areaServed: data.areaServed?.map((area: string) => ({
            "@type": "City",
            name: area,
          })),
          ...(data.serviceArea && {
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: data.serviceArea.latitude,
                longitude: data.serviceArea.longitude,
              },
              geoRadius: {
                "@type": "Distance",
                value: data.serviceArea.radius,
                unitCode: "KM",
              },
            },
          }),
        };

      case "Service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: data.serviceType,
          provider: {
            "@type": "LocalBusiness",
            name: data.providerName,
          },
          areaServed: {
            "@type": "City",
            name: data.areaServed,
          },
          description: data.description,
        };

      case "BreadcrumbList":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data.items.map((item: any, index: number) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };

      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getStructuredData()) }}
    />
  );
}

