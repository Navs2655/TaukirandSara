import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Amiri } from "next/font/google";
import "@/styles/globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Navigation from "@/components/layout/Navigation";
import InvitationGate from "@/components/layout/InvitationGate";
import GlobalStarField from "@/components/layout/GlobalStarField";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taukir & Sara | Nikah",
  description: "Join us in celebrating the Nikah of Taukir & Sara",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${amiri.variable}`}>
      <body className="font-body bg-background text-champagne antialiased">
        <SmoothScrollProvider>
          <GlobalStarField />
          <InvitationGate navigation={<Navigation />}>
            {children}
          </InvitationGate>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
