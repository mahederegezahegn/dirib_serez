import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image'
import Header from '../components/Header';
import Fotter from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="p-4 min-h-screen">
          {children}
        </main>

        {/* Footer */}
      <Fotter />

      </body>
    </html>
  );
}
