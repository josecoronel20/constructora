interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title: string;
  benefits: Benefit[];
  localidad: string;
}

export default function BenefitsSection({
  title,
  benefits,
  localidad,
}: BenefitsSectionProps) {
  return (
    <section className="bg-[#0A2A43] text-white py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2B441] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3F6E8F] rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-[#F2B441] mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-br from-[#163353]/80 to-[#335273]/80 rounded-3xl p-10 border-2 border-[#F2B441]/30 shadow-md transition-all duration-300 hover:scale-[1.045] hover:shadow-2xl hover:border-[#F2B441]/60 hover:bg-gradient-to-b hover:from-[#314a6e]/90 hover:to-[#163353]/90"
            >
              {/* Accent circle behind icon */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-0">
                <div className="w-24 h-24 bg-gradient-to-br from-[#F2B441] via-[#F8D07B] to-[#3F6E8F] rounded-full blur-lg opacity-40"></div>
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F2B441] via-[#FFDFAF] to-[#3F6E8F] rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white/20 group-hover:border-[#F2B441] transition-all duration-300">
                  <span className="text-5xl drop-shadow-md text-[#0A2A43] group-hover:scale-110 group-hover:text-[#22577A] transition-all duration-300">
                    {benefit.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold mb-2 text-center text-[#F2B441] group-hover:text-[#F8D07B] transition-colors duration-300 tracking-tight drop-shadow">
                  {benefit.title}
                </h3>
                <div className="mx-auto w-12 h-1 bg-gradient-to-r from-[#F2B441]/80 via-white/50 to-[#3F6E8F]/70 rounded-full mb-3"></div>
                <p className="text-[#DFE7EF] text-base md:text-lg text-center leading-relaxed drop-shadow-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
