import "./globals.css";
import { Poppins } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Frontend Assessment",
  description: "Frontend Assessment GenieOps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${poppins.variable}
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
