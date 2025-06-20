import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/Animations/SplashCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZeroRound - AI-Powered Interview Mastery",
  description: "Transform interview anxiety into confidence with ZeroRound",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SplashCursor />
      <body className={inter.className}>{children}</body>
    </html>
  );
}