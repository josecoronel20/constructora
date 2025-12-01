interface ProblemSolutionSectionProps {
  title: string;
  content: string;
  serviceName?: string;
}

export default function ProblemSolutionSection({
  title,
  content,
}: ProblemSolutionSectionProps) {
  return (
    <section className="bg-white py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mb-4 text-center tracking-tight">
          {title}
        </h2>
        <div className="prose prose-sm max-w-none">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
}

