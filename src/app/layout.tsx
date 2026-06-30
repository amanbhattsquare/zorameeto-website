import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

/* Material Symbols is a shared icon font loaded once by the App Router layout. */
/* eslint-disable @next/next/no-page-custom-font */

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
  colorScheme: "light",
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
        className={`${urbanist.variable} bg-background text-text-main font-sans selection:bg-primary/10 antialiased`}
      >
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-xl bg-text-main px-5 py-3 text-sm font-bold text-white shadow-xl transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Navbar />
        <div id="main-content">{children}</div>
        <GoToTop />
        <Footer />
      </body>
    </html>
  );
}
