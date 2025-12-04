"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  // Lista de subservicios con sus rutas
  const servicios = [
    { label: "Todos los servicios", href: "/servicios" },
    { label: "Electricidad", href: "/servicios/electricidad" },
    { label: "Plomería", href: "/servicios/plomeria" },
    { label: "Gas", href: "/servicios/gas" },
    { label: "Albañilería", href: "/servicios/albanileria" },
    { label: "Pintura", href: "/servicios/pintura" },
    { label: "Impermeabilización", href: "/servicios/impermeabilizacion" },
    { label: "Carpintería", href: "/servicios/carpinteria" },
    { label: "Herrería", href: "/servicios/herreria" },
    { label: "Techos y Zinguería", href: "/servicios/techos" },
    {
      label: "Revestimientos y pisos",
      href: "/servicios/revestimientos-pisos",
    },
    { label: "Aire Acondicionado", href: "/servicios/aire-acondicionado" },
  ];

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Donde trabajamos", href: "/donde-trabajamos" },
    { label: "Contáctanos", href: "/contactanos" },
  ];

  // Estados para manejar menús
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar menú al hacer click fuera (solo en cliente)
  useEffect(() => {
    if (typeof window === "undefined" || !serviciosOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServiciosOpen(false);
      }
    };

    // Delay para evitar problemas de hidratación
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [serviciosOpen]);

  return (
    <header className="bg-[#0A2A43] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="hover:opacity-90 transition-opacity flex gap-1 items-center justify-center"
          >
            <Image
              src="/images/logo-C&M.png"
              alt="Constructora Zona Norte"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <div className="flex flex-col w-full max-w-40 leading-tight">
              <span className="text-white text-sm font-bold w-full leading-tight">
                Constructora
              </span>
              <span className="text-[#F2B441] text-base font-bold mx-auto leading-tight">
                Zona Norte
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              if (item.label !== "Servicios") {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm md:text-base font-medium hover:text-[#F2B441] transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F2B441] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                );
              }

              return (
                <div key={item.href} ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setServiciosOpen(!serviciosOpen)}
                    className="text-sm md:text-base font-medium hover:text-[#F2B441] transition-colors relative group flex items-center gap-1"
                    aria-label="Toggle servicios menu"
                    aria-expanded={serviciosOpen}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F2B441] group-hover:w-full transition-all duration-300"></span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        serviciosOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 9l-7 7-7-7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {serviciosOpen && (
                    <div className="absolute top-full left-0 mt-1 min-w-[240px] bg-white text-[#0A2A43] shadow-xl rounded-md z-50 border border-gray-100 overflow-hidden">
                      {servicios.map((serv) => (
                        <Link
                          key={serv.href}
                          href={serv.href}
                          className="block px-4 py-2.5 text-sm hover:bg-[#F2B441] hover:text-[#0A2A43] transition-colors whitespace-nowrap border-b border-gray-50 last:border-b-0"
                          onClick={() => setServiciosOpen(false)}
                        >
                          {serv.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Menú"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-white/10 mt-2 pt-4">
            {navItems.map((item) => {
              if (item.label !== "Servicios") {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-3 text-base font-medium hover:text-[#F2B441] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.href} className="block">
                  <div className="flex items-center justify-between py-3">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileServiciosOpen(!mobileServiciosOpen)
                      }
                      className="text-base font-medium hover:text-[#F2B441] transition-colors flex items-center gap-2"
                      aria-label="Toggle servicios"
                    >
                      {item.label}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          mobileServiciosOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M19 9l-7 7-7-7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Submenú móvil */}
                  {mobileServiciosOpen && (
                    <div className="pl-4 pb-2">
                      {servicios.map((serv) => (
                        <Link
                          key={serv.href}
                          href={serv.href}
                          className="block py-2 text-sm hover:text-[#F2B441] transition-colors"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileServiciosOpen(false);
                          }}
                        >
                          {serv.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
