import "./globals.css";
import WebVitals from "@/components/WebVitals";

export const metadata = {
  title: "Aditya Lohar | Full-Stack Developer",
  description:
    "Aditya Sunil Lohar – B.Tech Computer Engineering Student & Full-Stack Web Developer from Jalgaon, Maharashtra. Specialising in React, Next.js, Node.js and MongoDB.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        {/* EmailJS */}
        <script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          defer
        ></script>
      </head>
      <body>
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
