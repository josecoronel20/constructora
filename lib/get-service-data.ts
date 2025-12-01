import fs from 'fs';
import path from 'path';

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    lastUpdated: string;
  };
  paths: {
    serviceUrl: string;
    locationsBase: string;
    contactUrl: string;
    bookingUrl: string;
  };
  serviceIcon: string;
  serviceName: string;
  sections: {
    servicesIncluded: {
      title: string;
      description: string;
    };
    benefits: {
      title: string;
    };
    examplesOfWork: {
      title: string;
      description: string;
    };
    process: {
      title: string;
    };
    localities: {
      title: string;
      description: string;
    };
    cta: {
      title: string;
      description: string;
      whatsappLabel: string;
      contactLabel: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    ctas: Array<{
      type: string;
      label: string;
      href: string;
      priority: number;
    }>;
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
      focalPoint: { x: number; y: number };
      recommendedAIPrompt: string;
    };
    backgroundStyles: {
      overlay: string;
      tailwindClasses: string;
    };
  };
  servicesIncluded: string[];
  benefits: string[];
  examplesOfWork: Array<{
    id: string;
    titulo: string;
    descripcion: string;
    icon: string;
    image?: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  }>;
  process: Array<{
    paso: number;
    titulo: string;
    descripcion: string;
    icon: string;
  }>;
  localidades: Array<{
    name: string;
    slug: string;
    url: string;
  }>;
  gallery?: Array<{
    src: string;
    alt: string;
    caption: string;
    order: number;
  }>;
  faqs?: Array<{
    q: string;
    a: string;
  }>;
  testimonials?: Array<{
    name: string;
    text: string;
    rating: number;
    date: string;
  }>;
  pricing?: {
    callout: string;
    emergencyFlatFee: number | null;
    estimateSample: Array<{
      task: string;
      priceFrom: number;
    }>;
    currency: string;
    showPricesOnSite: boolean;
  };
  warrantyAndCertifications?: {
    warrantyMonths: number;
    certifications: Array<{
      name: string;
      id?: string;
      reference?: string;
    }>;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email: string;
    contactForm: string;
    officeHours: string;
    responseTime: string;
  };
  seo: {
    openGraph: {
      title: string;
      description: string;
      image: string;
    };
    twitterCard: {
      title: string;
      image: string;
    };
    breadcrumbs: Array<{
      name: string;
      url: string;
    }>;
  };
  structuredData: {
    service: any;
    faq?: any[];
  };
  contentBlocks: any[];
  tags: string[];
  relatedServices: string[];
  admin: {
    published: boolean;
    region: string;
    priority: number;
    contentOwner: string;
  };
}

let cachedData: ServiceData[] | null = null;

function getDataServices(): ServiceData[] {
  if (cachedData) {
    return cachedData;
  }

  const filePath = path.join(process.cwd(), 'lib', 'data-services.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  cachedData = JSON.parse(fileContents) as ServiceData[];
  return cachedData;
}

export function getServiceData(slug: string): ServiceData | null {
  const dataServices = getDataServices();
  const service = dataServices.find((s) => s.slug === slug);
  return service || null;
}

export function getAllServices(): ServiceData[] {
  return getDataServices();
}

