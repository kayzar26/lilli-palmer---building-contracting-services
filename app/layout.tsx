import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import "./globals.css";
import Header from "@/components/Header";
import GTMPageView from "@/components/GTMPageView";

// Dynamic imports for non-critical components to reduce initial JS payload
const Footer = dynamic(() => import("@/components/Footer"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));
const CallButton = dynamic(() => import("@/components/CallButton"));

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Lilli Palmer | Renovation & Building Contracting Dubai",
  description: "Lilli Palmer provides premium building contracting services including MEP, HVAC, electrical, plumbing, painting, and construction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'GTM-TKZF3FBM');
            `,
          }}
        />
        {/* Establish early connections to external origins — preconnect removed for self-hosted next/font */}
        {/* Preload the self-hosted hero image — highest priority LCP resource */}
        {/* <link
          rel="preload"
          as="image"
          href="/images/hero-image.avif"
          type="image/avif"
        /> */}
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased bg-[#EBEBEB] text-[#69727D]`}
        suppressHydrationWarning
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TKZF3FBM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div className="min-h-screen flex flex-col selection:bg-[#BBA899] selection:text-white">
          <Suspense fallback={null}>
            <GTMPageView />
          </Suspense>
          <Header />
          <CallButton />
          <WhatsAppButton />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  );
}
