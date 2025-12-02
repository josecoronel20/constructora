import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/SEO/StructuredData";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://servicioszonanorte.com"), // Cambiar por tu dominio real
  title: {
    default: "Constructora & Mantenimiento del Hogar – Zona Norte",
    template: "%s | Constructora & Mantenimiento del Hogar – Zona Norte",
  },
  description: "Servicios de mantenimiento y reparaciones para hogares en Zona Norte. Electricidad, plomería, gas, pintura, techos, impermeabilización y más. Profesionales verificados, trabajos garantizados y atención inmediata en Pilar, San Isidro, Tigre y todas las localidades.",
  keywords: [
    "servicios zona norte",
    "mantenimiento hogar zona norte",
    "reparaciones zona norte",
    "electricista zona norte",
    "plomero zona norte",
    "gasista zona norte",
    "pintor zona norte",
    "constructora zona norte",
    "servicios pilar",
    "servicios san isidro",
    "servicios tigre",
  ],
  authors: [{ name: "Constructora & Mantenimiento del Hogar – Zona Norte" }],
  creator: "Constructora & Mantenimiento del Hogar – Zona Norte",
  publisher: "Constructora & Mantenimiento del Hogar – Zona Norte",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://servicioszonanorte.com",
    siteName: "Constructora & Mantenimiento del Hogar – Zona Norte",
    title: "Constructora & Mantenimiento del Hogar – Zona Norte",
    description: "Servicios de mantenimiento y reparaciones para hogares en Zona Norte. Profesionales verificados, trabajos garantizados.",
    images: [
      {
        url: "/images/logo-C&M.png",
        width: 1200,
        height: 630,
        alt: "Constructora & Mantenimiento del Hogar – Zona Norte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Constructora & Mantenimiento del Hogar – Zona Norte",
    description: "Servicios de mantenimiento y reparaciones para hogares en Zona Norte.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://servicioszonanorte.com",
  },
  icons: {
    icon: [
      { url: "/images/logo-C&M.png", type: "image/png" },
      { url: "/images/logo-C&M.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo-C&M.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo-C&M.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/logo-C&M.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationData = {
    name: "Constructora & Mantenimiento del Hogar – Zona Norte",
    url: "https://servicioszonanorte.com",
    logo: "https://servicioszonanorte.com/logo.png",
    phone: "+5491123456789",
    areaServed: [
      "Pilar",
      "San Isidro",
      "Tigre",
      "Vicente López",
      "San Miguel",
      "Malvinas Argentinas",
      "José C. Paz",
      "General San Martín",
      "San Fernando",
      "Zárate",
      "Cardales",
    ],
    sameAs: [
      // Agregar redes sociales cuando las tengas
      // "https://www.facebook.com/...",
      // "https://www.instagram.com/...",
    ],
  };

  return (
    <html lang="es">
      <body className={`${inter.className} ${montserrat.variable}`}>
        <StructuredData type="Organization" data={organizationData} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

