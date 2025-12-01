interface BenefitsSectionProps {
  title: string;
  benefits: string[];
  inGrid?: boolean;
}

export default function BenefitsSection({
  title,
  benefits,
  inGrid = false,
}: BenefitsSectionProps) {
  const content = (
    <div className={inGrid ? "h-full" : "max-w-6xl mx-auto"}>
      <h2 className="text-xl md:text-2xl font-bold text-primary-700 mb-4 text-center tracking-tight">
        {title}
      </h2>
      <div className="grid gap-3">
        {benefits.map((beneficio, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <div className="w-6 h-6 bg-accent-yellow-400 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-primary-900 text-xs font-bold">✓</span>
            </div>
            <p className="text-sm font-medium text-primary-900 leading-snug">{beneficio}</p>
          </div>
        ))}
      </div>
    </div>
  );

  if (inGrid) {
    return (
      <div className="bg-white p-4 md:p-6 rounded-lg border border-gray-200 h-full flex flex-col">
        {content}
      </div>
    );
  }

  return (
    <section className="bg-white py-8 px-4 md:px-6">
      {content}
    </section>
  );
}

