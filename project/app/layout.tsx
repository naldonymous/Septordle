import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Footer, Keyboard, Navbar, StyleButton} from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Septordle",
  description: "Created by Naldonymous",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        >
            <Navbar/>
            <main className="flex-1 p-8">
            {children}
            </main>
            <Footer/>
        </body>
    </html>
  );
}
