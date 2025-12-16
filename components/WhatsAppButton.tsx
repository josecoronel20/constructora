"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "outline" | "ghost";
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

// WhatsApp Icon Component
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function WhatsAppButton({
  phone = "5491124052012",
  message = "",
  size = "lg",
  variant = "default",
  className = "",
  children,
  showIcon = true,
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phone}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Report conversion to Google Ads when clicking WhatsApp button
    if (typeof window !== "undefined" && window.gtag) {
      // Generate unique transaction ID to avoid duplicate conversions
      const transactionId = `wpp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17809225020/8rM6CMrWpNIbELzqjKxC',
        'value': 1.0,
        'currency': 'ARS',
        'transaction_id': transactionId
      });
    }
    // Allow default navigation to proceed (open WhatsApp)
  };

  const defaultContent = (
    <>
      {showIcon && (
        <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
      )}
      <span className="font-semibold">{children || "WhatsApp"}</span>
    </>
  );

  // WhatsApp Green: #25D366 with gradient and modern styling
  const defaultClassName =
    variant === "default"
      ? "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:from-[#20BA5A] hover:to-[#0F7A6E] font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border-0 group"
      : "";

  if (variant === "ghost") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`inline-flex items-center gap-2 text-[#25D366] hover:text-[#128C7E] transition-colors duration-200 font-medium group ${className}`}
      >
        {showIcon && (
          <WhatsAppIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
        )}
        {children || "WhatsApp"}
      </a>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="inline-block"
      >
        <Button
          size={size}
          variant={variant}
          className={`border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 group ${className}`}
        >
          {defaultContent}
        </Button>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-block"
    >
      <Button
        size={size}
        variant={variant}
        className={`${defaultClassName} ${className}`}
      >
        {defaultContent}
      </Button>
    </a>
  );
}
