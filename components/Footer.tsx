import Link from "next/link";

export default function Footer() {
  const servicios = [
    "Electricidad",
    "Plomería",
    "Gas",
    "Albañilería",
    "Pintura",
    "Impermeabilización",
    "Carpintería",
    "Zinguería",
    "Herrería",
    "Techos, revestimientos y pisos",
    "Aire acondicionado",
    "Limpieza post-obra",
  ];

  const localidades = [
    "Pilar",
    "San Isidro",
    "Tigre",
    "Vicente López",
    "San Miguel",
    "Malvinas Argentinas",
    "José C. Paz",
    "General San Martín",
    "San Fernando",
    "Zárate",
    "Cardales",
  ];

  return (
    <footer className="bg-[#0A2A43] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Servicios */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#3F6E8F]">Servicios</h3>
            <ul className="space-y-2">
              {servicios.map((servicio, index) => (
                <li key={index}>
                  <Link
                    href={`/servicios/${servicio.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-gray-300 hover:text-[#F2B441] transition-colors"
                  >
                    {servicio}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Localidades */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#3F6E8F]">
              Donde trabajamos
            </h3>
            <ul className="space-y-2">
              {localidades.map((localidad, index) => (
                <li key={index}>
                  <Link
                    href={`/donde-trabajamos/${localidad.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-gray-300 hover:text-[#F2B441] transition-colors"
                  >
                    {localidad}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto y Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#3F6E8F]">Contacto</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-gray-300 hover:text-[#F2B441] transition-colors block"
                >
                  Formulario de contacto
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/5491123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-[#F2B441] transition-colors inline-flex items-center gap-2"
                >
                  <span>📱</span> WhatsApp
                </a>
              </li>
            </ul>
            <div className="pt-4 border-t border-[#3F6E8F]">
              <p className="text-xs text-gray-400">
                © 2024 Servicios Zona Norte. Todos los
                derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

