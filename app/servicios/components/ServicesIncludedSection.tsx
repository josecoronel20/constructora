interface ServicesIncludedSectionProps {
  title: string;
  description?: string;
  services: string[];
}

export default function ServicesIncludedSection({
  title,
  description,
  services,
}: ServicesIncludedSectionProps) {
  return (
    <section className="bg-accent-blue-100 py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mb-2 text-center tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto text-sm md:text-base">
            {description}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((servicio, i) => (
            <div
              key={i}
              className="bg-white p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow flex items-start gap-2.5"
            >
              <div className="w-5 h-5 bg-primary-700 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <p className="text-primary-900 text-sm leading-snug">{servicio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
