import "./globals.css";
import { Press_Start_2P, Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
});

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "MKH-GAMES",
  description: "Free games made by Hari.",
  icons: {
    icon: "/gameicons/MKH-LOGO.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pixel.variable} ${sans.variable}`}>
      <body className="scanlines flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
