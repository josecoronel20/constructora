import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-[#0A2A43] mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A43] mb-6">
          Página no encontrada
        </h2>
        <p className="text-lg text-[#636B75] mb-8 max-w-xl mx-auto">
          La página que estás buscando no existe o ha sido movida. 
          Te ayudamos a encontrar lo que necesitás.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link href="/">
            <Button className="w-full bg-[#F2B441] text-[#0A2A43] hover:bg-[#F2B441]/90">
              Volver al inicio
            </Button>
          </Link>
          <Link href="/servicios">
            <Button variant="outline" className="w-full border-[#0A2A43] text-[#0A2A43] hover:bg-[#0A2A43] hover:text-white">
              Ver servicios
            </Button>
          </Link>
          <Link href="/donde-trabajamos">
            <Button variant="outline" className="w-full border-[#0A2A43] text-[#0A2A43] hover:bg-[#0A2A43] hover:text-white">
              Ver localidades
            </Button>
          </Link>
          <Link href="/contactanos">
            <Button variant="outline" className="w-full border-[#0A2A43] text-[#0A2A43] hover:bg-[#0A2A43] hover:text-white">
              Contáctanos
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-semibold text-[#0A2A43] mb-4">
            Páginas populares
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/servicios/electricidad" className="text-[#3F6E8F] hover:text-[#0A2A43] hover:underline">
              Electricidad
            </Link>
            <Link href="/servicios/plomeria" className="text-[#3F6E8F] hover:text-[#0A2A43] hover:underline">
              Plomería
            </Link>
            <Link href="/servicios/gas" className="text-[#3F6E8F] hover:text-[#0A2A43] hover:underline">
              Gas
            </Link>
            <Link href="/donde-trabajamos/pilar" className="text-[#3F6E8F] hover:text-[#0A2A43] hover:underline">
              Servicios en Pilar
            </Link>
            <Link href="/donde-trabajamos/san-isidro" className="text-[#3F6E8F] hover:text-[#0A2A43] hover:underline">
              Servicios en San Isidro
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

