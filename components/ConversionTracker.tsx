"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface ConversionTrackerProps {
  conversionId: string;
}

export default function ConversionTracker({ conversionId }: ConversionTrackerProps) {
  useEffect(() => {
    // Wait for gtag to be available
    const checkGtag = () => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': conversionId,
          'value': 1.0,
          'currency': 'ARS',
          'transaction_id': ''
        });
      } else {
        // Retry after a short delay if gtag is not yet available
        setTimeout(checkGtag, 100);
      }
    };

    checkGtag();
  }, [conversionId]);

  return null;
}

