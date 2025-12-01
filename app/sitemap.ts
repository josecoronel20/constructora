import { MetadataRoute } from "next";

const baseUrl = "https://servicioszonanorte.com";

const servicios = [
  "electricidad",
  "plomeria",
  "gas",
  "albanileria",
  "pintura",
  "impermeabilizacion",
  "carpinteria",
  "herrería",
  "techos",
  "revestimientos-pisos",
  "aire-acondicionado",
];

const localidades = [
  "pilar",
  "san-isidro",
  "tigre",
  "vicente-lopez",
  "san-miguel",
  "malvinas-argentinas",
  "jose-c-paz",
  "general-san-martin",
  "san-fernando",
  "zarate",
  "cardales",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/servicios`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/donde-trabajamos`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const servicioPages = servicios.map((slug) => ({
    url: `${baseUrl}/servicios/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const localidadPages = localidades.map((slug) => ({
    url: `${baseUrl}/donde-trabajamos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicioPages, ...localidadPages];
}
