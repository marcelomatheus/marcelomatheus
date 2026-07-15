import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ParticlesBackground } from "@/components/motion/ParticlesBackground";
import "./globals.css";
import type { RootLayoutProps } from "@/interfaces/layout";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "Marcelo Matheus | Software Engineer",
  description:
    "Learn about my work and career in software development.",
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${bebas.variable} text-foreground antialiased`}>
        <ParticlesBackground />
        <div className="relative z-10 flex min-h-screen flex-col">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}
