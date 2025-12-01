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
              className="relative bg-gradient-to-br from-[#F4F5F7] to-white p-7 rounded-2xl border-2 border-[#636B75]/20 text-center shadow-md hover:bg-gradient-to-br hover:from-[#3F6E8F] hover:to-[#0A2A43] hover:text-white hover:border-[#3F6E8F] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center group"
            >
              {/* Icon or Location Placeholder */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F2B441]/20 mb-4 group-hover:bg-white/20 transition-colors duration-300">
                <svg
                  className="w-7 h-7 text-[#F2B441] group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 6.06 12.16 6.33 12.44a1.003 1.003 0 0 0 1.34 0C12.94 21.16 19 14.25 19 9c0-3.87-3.13-7-7-7zm0 11.2A4.2 4.2 0 1 1 16.2 9 4.2 4.2 0 0 1 12 13.2z"
                  />
                </svg>
              </div>
              {/* Location Name */}
              <span className="font-bold text-lg md:text-xl mb-2 block">{zona}</span>
              {/* Divider */}
              <div className="w-10 h-1 bg-[#F2B441] rounded-full mb-3 mx-auto group-hover:bg-white transition-colors duration-300" />
              {/* Supplemental example text, feel free to replace or adjust */}
              <span className="text-[#636B75] group-hover:text-white text-sm md:text-base">
                Atendemos emergencias y trabajos programados en {zona}.
              </span>
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

