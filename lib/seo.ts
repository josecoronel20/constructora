import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string | string[];
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

const baseUrl = "https://servicioszonanorte.com"; // Cambiar por tu dominio real

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/og-image.jpg",
  type = "website",
  noindex = false,
}: SEOProps): Metadata {
  const fullTitle = title.includes("|") ? title : `${title} | Constructora & Mantenimiento del Hogar – Zona Norte`;
  const fullDescription = description;
  const url = canonical || baseUrl;
  const keywordsArray = Array.isArray(keywords) ? keywords : keywords ? [keywords] : undefined;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywordsArray,
    authors: [{ name: "Constructora & Mantenimiento del Hogar – Zona Norte" }],
    creator: "Constructora & Mantenimiento del Hogar – Zona Norte",
    publisher: "Constructora & Mantenimiento del Hogar – Zona Norte",
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: type,
      locale: "es_AR",
      url: url,
      title: fullTitle,
      description: fullDescription,
      siteName: "Constructora & Mantenimiento del Hogar – Zona Norte",
      images: [
        {
          url: `${baseUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [`${baseUrl}${ogImage}`],
    },
  };
}

