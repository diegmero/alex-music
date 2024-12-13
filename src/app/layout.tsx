import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Garzon Music",
  description: "Desarrollado por Diego Romero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Alex Garzon's Music. Todos los derechos reservados.
          </p>
          <p className="text-xs mt-1 text-gray-400">
            Desarrollado por: Diego Alejandro Romero
          </p>
        </footer>
      </body>
    </html>
  );
}