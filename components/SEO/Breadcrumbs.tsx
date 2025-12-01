import Link from "next/link";
import StructuredData from "./StructuredData";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

// Home Icon Component
const HomeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
      clipRule="evenodd"
    />
  </svg>
);

// Chevron Icon Component
const ChevronIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = "https://servicioszonanorte.com";

  const structuredData = {
    items: items.map((item) => ({
      name: item.name,
      url: `${baseUrl}${item.url}`,
    })),
  };

  return (
    <>
      <StructuredData type="BreadcrumbList" data={structuredData} />
      <div className="px-4 md:px-8 bg-white py-2">
        <div className="max-w-7xl mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="py-2 px-3 bg-[#F4F5F7]/50 rounded-lg border border-[#636B75]/10"
          >
            <ol className="flex flex-wrap items-center gap-1.5 text-xs md:text-sm">
              {items.map((item, index) => {
                const isHome = item.name === "Inicio" && item.url === "/";
                const isLast = index === items.length - 1;

                return (
                  <li key={index} className="flex items-center">
                    {index > 0 && (
                      <span className="mx-1.5 text-[#636B75]/60" aria-hidden="true">
                        <ChevronIcon className="w-3 h-3 md:w-4 md:h-4" />
                      </span>
                    )}
                    {isLast ? (
                      <span
                        className="text-[#0A2A43] font-semibold flex items-center gap-1"
                        aria-current="page"
                      >
                        {isHome && <HomeIcon className="w-3 h-3 md:w-4 md:h-4" />}
                        {item.name}
                      </span>
                    ) : (
                      <Link
                        href={item.url}
                        className="flex items-center gap-1 text-[#636B75] hover:text-[#3F6E8F] transition-colors duration-200 hover:underline underline-offset-2"
                      >
                        {isHome && <HomeIcon className="w-3 h-3 md:w-4 md:h-4" />}
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}

