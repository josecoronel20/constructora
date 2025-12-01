import type { Metadata } from "next";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import StructuredData from "@/components/SEO/StructuredData";
import { generateMetadata as genMeta } from "@/lib/seo";
import { getServiceData } from "@/lib/get-service-data";
import {
  ServiceHeroSection,
  ProblemSolutionSection,
  ServicesIncludedSection,
  BenefitsSection,
  ExamplesOfWorkSection,
  ProcessSection,
  LocalitiesSection,
  CTASection,
} from "../components";

export async function generateMetadata(): Promise<Metadata> {
  const serviceData = getServiceData("gas");
  if (!serviceData) {
    return genMeta({
      title: "Gasista en Zona Norte",
      description: "Servicios de gas en Zona Norte",
    });
  }

  return genMeta({
    title: serviceData.meta.title,
    description: serviceData.meta.description,
    keywords: serviceData.meta.keywords,
    canonical: serviceData.meta.canonical,
  });
}

export default function Gas() {
  const serviceData = getServiceData("gas");

  if (!serviceData) {
    return <div>Servicio no encontrado</div>;
  }

  const problemSolutionBlock = serviceData.contentBlocks.find(
    (block) => block.type === "problem-solution"
  );

  return (
    <>
      <Breadcrumbs items={serviceData.seo.breadcrumbs} />
      <StructuredData
        type="Service"
        data={serviceData.structuredData.service}
      />
      <main className="flex min-h-screen flex-col bg-background">
        <ServiceHeroSection
          title={serviceData.hero.title}
          subtitle={serviceData.hero.subtitle}
          ctas={serviceData.hero.ctas}
          image={serviceData.hero.image}
          backgroundStyles={serviceData.hero.backgroundStyles}
        />

        {problemSolutionBlock && (
          <ProblemSolutionSection
            title={problemSolutionBlock.title}
            content={problemSolutionBlock.content}
          />
        )}

        <ServicesIncludedSection
          title={serviceData.sections.servicesIncluded.title}
          description={serviceData.sections.servicesIncluded.description}
          services={serviceData.servicesIncluded}
        />

        <div className="px-4 md:px-6">
          <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 gap-4">
            <BenefitsSection
              title={serviceData.sections.benefits.title}
              benefits={serviceData.benefits}
              inGrid={true}
            />

            <ProcessSection
              title={serviceData.sections.process.title}
              process={serviceData.process}
              inGrid={true}
            />
          </div>
        </div>

        <div className="px-4 md:px-6">
          <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 gap-4">
            <ExamplesOfWorkSection
              title={serviceData.sections.examplesOfWork.title}
              description={serviceData.sections.examplesOfWork.description}
              examples={serviceData.examplesOfWork}
              inGrid={true}
            />

            <LocalitiesSection
              title={serviceData.sections.localities.title}
              description={serviceData.sections.localities.description}
              localidades={serviceData.localidades}
              serviceIcon={serviceData.serviceIcon}
              serviceName={serviceData.serviceName}
              inGrid={true}
            />
          </div>
        </div>

        <CTASection
          title={serviceData.sections.cta.title}
          description={serviceData.sections.cta.description}
          whatsappUrl={serviceData.contact.whatsapp}
          contactUrl={serviceData.contact.contactForm}
          whatsappLabel={serviceData.sections.cta.whatsappLabel}
          contactLabel={serviceData.sections.cta.contactLabel}
        />
      </main>
    </>
  );
}
