"use client";

import { useEffect } from "react";
import { CONTACT_SUBMISSION_STORAGE_KEY } from "@/lib/contact";
import { GOOGLE_ADS_ENQUIRY_SEND_TO } from "@/lib/google-ads";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAdsEnquiryConversion() {
  useEffect(() => {
    let submittedAt = 0;

    try {
      submittedAt = Number(
        window.sessionStorage.getItem(CONTACT_SUBMISSION_STORAGE_KEY),
      );
      window.sessionStorage.removeItem(CONTACT_SUBMISSION_STORAGE_KEY);
    } catch {
      return;
    }

    // Only count a thank-you page reached immediately after a form submission.
    // Direct visits and refreshes must not create fake leads.
    if (!Number.isFinite(submittedAt) || Date.now() - submittedAt > 10 * 60 * 1000) {
      return;
    }

    const conversion = [
      "event",
      "conversion",
      { send_to: GOOGLE_ADS_ENQUIRY_SEND_TO },
    ];

    if (typeof window.gtag === "function") {
      window.gtag(...conversion);
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(conversion);
  }, []);

  return null;
}
