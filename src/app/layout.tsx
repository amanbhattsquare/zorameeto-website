import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "ZoraMeeto | Smart Dating for Serious Singles",
    template: "%s | ZoraMeeto"
  },
  description: "ZoraMeeto is a safe dating app for serious singles. Meet verified people, chat privately, and build real connections.",
  keywords: ["dating app", "verified dating", "serious dating", "private dating"],
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} bg-background text-text-main font-sans selection:bg-primary/10 antialiased`}
      >
        <Navbar />
        {children}
        <GoToTop />
        <Footer />
      </body>
    </html>
  );
}
