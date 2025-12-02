import type { Metadata } from "next";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import StructuredData from "@/components/SEO/StructuredData";
import FAQSchema from "@/components/SEO/FAQSchema";
import HowToSchema from "@/components/SEO/HowToSchema";
import ReviewSchema from "@/components/SEO/ReviewSchema";
import { generateServiceMetadata, getFAQsFromService, getReviewsDataForSchema } from "@/lib/seo-helpers";
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
  return generateServiceMetadata("pintura");
}

export default function Pintura() {
  const serviceData = getServiceData("pintura");

  if (!serviceData) {
    return <div>Servicio no encontrado</div>;
  }

  const problemSolutionBlock = serviceData.contentBlocks.find(
    (block) => block.type === "problem-solution"
  );

  const faqs = getFAQsFromService(serviceData);
  const reviewsData = getReviewsDataForSchema(serviceData);

  return (
    <>
      <Breadcrumbs items={serviceData.seo.breadcrumbs} />
      <StructuredData
        type="Service"
        data={serviceData.structuredData.service}
      />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      {serviceData.process && serviceData.process.length > 0 && (
        <HowToSchema
          name={`Cómo trabajamos: ${serviceData.serviceName} en Zona Norte`}
          description={serviceData.hero.subtitle}
          steps={serviceData.process}
        />
      )}
      {reviewsData && (
        <ReviewSchema
          businessName={reviewsData.businessName}
          businessUrl={reviewsData.businessUrl}
          reviews={reviewsData.reviews}
          aggregateRating={reviewsData.aggregateRating}
        />
      )}
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
