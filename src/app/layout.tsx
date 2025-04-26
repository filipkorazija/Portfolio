import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
// import BackgroundParticles from "@/components/BackgroundParticles";
// import Navbar from "@/components/Navbar";
import Snowfall from "@/components/Snowfall";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: "Filip Koražija",
  description: "A minimalistic portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body 
        className={`${firaCode.className} antialiased`}
      >
        <Snowfall />
        {children}
      </body>
    </html>
  );
}
