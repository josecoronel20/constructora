interface ProcessStep {
  paso: number;
  titulo: string;
  descripcion: string;
  icon: string;
}

interface ProcessSectionProps {
  title: string;
  process: ProcessStep[];
  inGrid?: boolean;
}

export default function ProcessSection({
  title,
  process,
  inGrid = false,
}: ProcessSectionProps) {
  const content = (
    <div className={inGrid ? "h-full" : "max-w-6xl mx-auto"}>
      <h2 className="text-xl md:text-2xl font-bold text-primary-700 mb-4 text-center tracking-tight">
        {title}
      </h2>
      <div className={inGrid ? "grid grid-cols-2 gap-3" : "grid md:grid-cols-2 lg:grid-cols-4 gap-4"}>
        {process.map((item, i) => (
          <div key={i} className="text-center relative">
            {!inGrid && i < process.length - 1 && i % 2 === 0 && (
              <div className="hidden md:block lg:hidden absolute top-6 left-[calc(50%+1.5rem)] w-[calc(100%-3rem)] h-0.5 bg-gray-300 -z-10"></div>
            )}
            {!inGrid && i < process.length - 1 && (
              <div className="hidden lg:block absolute top-6 left-[calc(50%+1.5rem)] w-[calc(100%-3rem)] h-0.5 bg-gray-300 -z-10"></div>
            )}
            <div className="relative inline-block">
              <div className="w-10 h-10 bg-primary-900 rounded-full mx-auto mb-2 flex items-center justify-center relative z-10 shadow-sm">
                <span className="text-white text-base">{item.icon}</span>
              </div>
              <div className="w-5 h-5 bg-accent-yellow-400 rounded-full mx-auto mb-2 flex items-center justify-center shadow-sm absolute -bottom-0.5 -right-0.5 border-2 border-white">
                <span className="text-primary-900 font-bold text-[10px]">{item.paso}</span>
              </div>
            </div>
            <h3 className="text-xs font-semibold text-primary-900 mb-1">
              {item.titulo}
            </h3>
            <p className="text-[11px] text-gray-600 leading-snug">{item.descripcion}</p>
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

