interface Step {
  paso: number;
  titulo: string;
  descripcion: string;
  icon?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: Step[];
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
}

export default function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
}: HowToSchemaProps) {
  if (!steps || steps.length === 0) {
    return null;
  }

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: name,
    description: description,
    step: steps.map((step) => ({
      "@type": "HowToStep",
      position: step.paso,
      name: step.titulo,
      text: step.descripcion,
    })),
  };

  if (totalTime) {
    schema.totalTime = totalTime;
  }

  if (estimatedCost) {
    schema.estimatedCost = {
      "@type": "MonetaryAmount",
      currency: estimatedCost.currency,
      value: estimatedCost.value,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

