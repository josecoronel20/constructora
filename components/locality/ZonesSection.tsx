interface ZonesSectionProps {
  title: string;
  description: string;
  zones: string[];
  localidad: string;
  footerText?: string;
}

export default function ZonesSection({
  title,
  description,
  zones,
  localidad,
  footerText,
}: ZonesSectionProps) {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2A43] mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-[#F2B441] mx-auto rounded-full mb-6"></div>
          <p className="text-center text-[#636B75] max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {zones.map((zona, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#F4F5F7] to-white p-5 rounded-xl border-2 border-[#636B75]/20 text-center hover:bg-gradient-to-br hover:from-[#3F6E8F] hover:to-[#0A2A43] hover:text-white hover:border-[#3F6E8F] transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-default"
            >
              <span className="font-semibold text-base md:text-lg">{zona}</span>
            </div>
          ))}
        </div>
        {footerText && (
          <p className="text-center text-[#636B75] text-sm md:text-base">
            {footerText}
          </p>
        )}
      </div>
    </section>
  );
}

