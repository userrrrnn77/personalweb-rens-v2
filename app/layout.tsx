import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/main/StarBg";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal WEB - Rens",
  description: "This is my portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
