"use client";

import { useEffect } from "react";
import { GOOGLE_ADS_ENQUIRY_SEND_TO } from "@/lib/google-ads";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAdsEnquiryConversion() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    const gtag =
      window.gtag ||
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      };

    gtag("event", "conversion", {
      send_to: GOOGLE_ADS_ENQUIRY_SEND_TO,
    });
  }, []);

  return null;
}
