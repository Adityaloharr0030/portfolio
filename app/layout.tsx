import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import WebVitals from "@/components/WebVitals";
import { ThemeProvider } from "@/components/ThemeProvider";
import MagicCursor from "@/components/MagicCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <MagicCursor />
          <WebVitals />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
