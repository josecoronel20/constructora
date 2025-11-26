import Link from "next/link";
import StructuredData from "./StructuredData";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = "https://servicioszonanorte.com"; // Cambiar por tu dominio real

  const structuredData = {
    items: items.map((item) => ({
      name: item.name,
      url: `${baseUrl}${item.url}`,
    })),
  };

  return (
    <>
      <StructuredData type="BreadcrumbList" data={structuredData} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-[#636B75]">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-[#636B75]">/</span>
              )}
              {index === items.length - 1 ? (
                <span className="text-[#0A2A43] font-semibold" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-[#3F6E8F] transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

