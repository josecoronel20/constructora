interface LocalIntroSectionProps {
  title: string;
  paragraphs: string[];
}

export default function LocalIntroSection({
  title,
  paragraphs,
}: LocalIntroSectionProps) {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2A43] mb-8 text-center">
          {title}
        </h2>
        <div className="prose prose-lg max-w-none text-[#636B75] space-y-6 leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg md:text-xl"
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

