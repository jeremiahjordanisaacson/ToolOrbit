"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-BQ9CBQJRWP";

export default function GoogleAnalytics() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    const checkConsent = () =>
      localStorage.getItem("toolorbit_cookie_consent") === "accepted";

    setConsentGiven(checkConsent());

    const handleConsentChange = () => setConsentGiven(checkConsent());
    window.addEventListener("cookie-consent-change", handleConsentChange);
    return () =>
      window.removeEventListener("cookie-consent-change", handleConsentChange);
  }, []);

  if (!consentGiven) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
