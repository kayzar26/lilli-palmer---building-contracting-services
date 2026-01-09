import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroller from "@/components/SmoothScroller";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lilli Palmer | Building Contracting Services",
  description: "Lilli Palmer provides elite building contracting services including HVAC, electrical, plumbing, painting, and architectural construction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans antialiased bg-[#EBEBEB] text-[#69727D]`}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex flex-col selection:bg-[#BBA899] selection:text-white">
          <Header />
          <WhatsAppButton />
          <SmoothScroller>
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </SmoothScroller>
        </div>
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  );
}
