import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
        {/* Establish early connections to external origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for Unsplash (used in blog/service detail pages) */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        {/* Preload the self-hosted hero image — highest priority LCP resource */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-image.avif"
          type="image/avif"
        />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased bg-[#EBEBEB] text-[#69727D]`}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex flex-col selection:bg-[#BBA899] selection:text-white">
          <Header />
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
