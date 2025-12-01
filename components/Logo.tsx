import Link from "next/link";

interface LogoProps {
  size?: "small" | "medium" | "large";
  showLink?: boolean;
  className?: string;
}

export default function Logo({ size = "medium", showLink = true, className = "" }: LogoProps) {
  // Ajustamos los tamaños para que "C&M" sea más grande y el slogan quepa justo debajo manteniendo el mismo ancho:
  const sizeClasses = {
    small: {
      main: "text-3xl md:text-4xl", // más grande que antes (era text-2xl)
      slogan: "text-[10px] md:text-xs",
      spacing: "mb-0.5",
      width: "w-[76px] md:w-[90px]", // ancho fijo para el logo y slogan alineados
    },
    medium: {
      main: "text-5xl md:text-6xl lg:text-7xl", // más grande que antes (era text-3xl md:text-4xl ...)
      slogan: "text-xs md:text-base",
      spacing: "mb-1",
      width: "w-[130px] md:w-[164px] lg:w-[196px]",
    },
    large: {
      main: "text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem]", // mucho más grande
      slogan: "text-base md:text-lg lg:text-xl xl:text-2xl",
      spacing: "mb-2",
      width: "w-[230px] md:w-[300px] lg:w-[360px] xl:w-[432px]",
    },
  };

  const currentSize = sizeClasses[size];

  const logoContent = (
    <div
      className={`flex flex-col items-center md:items-start ${currentSize.width} ${className}`}
      style={{ minWidth: 0 }}
    >
      {/* C&M destacado */}
      <div
        className={`font-sans font-black ${currentSize.main} leading-none text-center w-full flex items-center justify-center`}
        style={{ letterSpacing: "0.01em" }}
      >
        <span className="text-white">C</span>
        <span
          className="text-[#F2B441] align-[0.08em]"
          style={{
            fontSize: "0.7em",
            verticalAlign: "middle",
            display: "inline-block",
          }}
        >
          &
        </span>
        <span className="text-white">M</span>
      </div>
      {/* Eslogan */}
      <div
        className={`${currentSize.slogan} ${currentSize.spacing} text-white/90 font-medium tracking-wide text-center w-full md:text-left`}
        style={{ whiteSpace: "normal" }}
      >
        Constructora y Mantenimiento
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link href="/" className="hover:opacity-90 transition-opacity">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
