'use client';

import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ReviewsSection } from "@/components/ReviewsSection";
import { VehiclesSection } from "@/components/VehiclesSection";
import { OneDayTripSection } from "@/components/OneDayTripSection";
import { GallerySection } from "@/components/GallerySection";
import { FinalCTASection } from "@/components/FinalCTASection";
import Script from "next/script";


export default function Home() {


  return (
    <div className="">
      <Script
        id="gtag-loader"
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17930048716"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17930048716');
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-17930048716/lIdoCMGervIbEMyp2-VC',
                  'value': 1.0,
                  'currency': 'THB',
                  'event_callback': callback
              });
              return false;
            }
            window.gtag_report_conversion = gtag_report_conversion;
          `,
        }}
      />
      <Navbar />
      <HeroSection />
      <VehiclesSection />
      <OneDayTripSection />
      <ReviewsSection />
      <GallerySection />
      <FinalCTASection />
    </div>
  );
}
