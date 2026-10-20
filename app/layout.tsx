import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/Navbar";
import MobileActionBar from "@/components/site/MobileActionBar";
import Toasts from "@/components/site/Toasts";
import Footer from "@/components/m/M5352";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.igtpw.com"),
  title: {
    default: "I Got The Power Washer | Pressure Washing in Cincinnati, OH",
    template: "%s | I Got The Power Washer",
  },
  description:
    "Professional residential and commercial pressure washing in Cincinnati, Ohio: house, roof, concrete, gutters, windows and more. Call (513) 570-0355 for a free estimate.",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00C6F9",
};

// Hide the homepage intro before hydration for visitors who already saw it this session.
const introScript = `try{if(sessionStorage.getItem("igtpw-intro-seen")==="1")document.documentElement.classList.add("intro-seen")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <Toasts />
      </body>
    </html>
  );
}
