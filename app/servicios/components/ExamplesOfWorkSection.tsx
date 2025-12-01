import Image from "next/image";

interface Example {
  id: string;
  titulo: string;
  descripcion: string;
  icon: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface ExamplesOfWorkSectionProps {
  title: string;
  description?: string;
  examples: Example[];
  inGrid?: boolean;
}

export default function ExamplesOfWorkSection({
  title,
  description,
  examples,
  inGrid = false,
}: ExamplesOfWorkSectionProps) {
  const content = (
    <div className={inGrid ? "h-full" : "max-w-6xl mx-auto"}>
      <h2 className="text-xl md:text-2xl font-bold text-primary-700 mb-2 text-center tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-center text-gray-600 mb-4 max-w-3xl mx-auto text-xs md:text-sm">
          {description}
        </p>
      )}
      <div className={inGrid ? "grid gap-3" : "grid md:grid-cols-2 gap-4"}>
        {examples.map((trabajo) => (
          <div
            key={trabajo.id}
            className="bg-white p-3 rounded-lg border border-gray-300 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-2.5 mb-2">
              <div className="w-8 h-8 bg-primary-700 rounded-md flex items-center justify-center flex-shrink-0">
                <span className="text-lg text-white">{trabajo.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-primary-900 mb-1">
                  {trabajo.titulo}
                </h3>
                <p className="text-xs text-gray-600 leading-snug">{trabajo.descripcion}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );

  if (inGrid) {
    return (
      <div className="bg-accent-blue-100 p-4 md:p-6 rounded-lg border border-gray-200 h-full flex flex-col">
        {content}
      </div>
    );
  }

  return (
    <section className="bg-accent-blue-100 py-8 px-4 md:px-6">
      {content}
    </section>
  );
}

