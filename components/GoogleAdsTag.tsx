import Script from "next/script";
import {
  GOOGLE_ADS_ID,
  GOOGLE_ADS_PHONE_SEND_TO,
  PHONE_CONVERSION_NUMBER,
} from "@/lib/google-ads";

export function GoogleAdsTag() {
  return (
    <>
      <Script id="google-ads-bootstrap" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
          gtag('config', '${GOOGLE_ADS_PHONE_SEND_TO}', {
            'phone_conversion_number': '${PHONE_CONVERSION_NUMBER}'
          });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
