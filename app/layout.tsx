import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import WebVitals from "@/components/WebVitals";
import MagicCursor from "@/components/MagicCursor";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata = {
  metadataBase: new URL("https://portfolio.adityalohar.com"),
  title: "Aditya Lohar | Full-Stack Developer",
  description:
    "Aditya Sunil Lohar – B.Tech Computer Engineering Student & Full-Stack Web Developer from Jalgaon, Maharashtra. Specialising in React, Next.js, Node.js and MongoDB.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        {/* Google Fonts for Orbitron and Share Tech Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&family=IBM+Plex+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={ibmPlexMono.variable} suppressHydrationWarning>
        <MagicCursor />
        <WebVitals />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
