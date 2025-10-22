import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import { ArrowUp } from "lucide-react";

const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: "Comrades of Rohingya Youth",
  description: "Comrades of Rohingya Youth is Rohingya youths led Not for profit organization.",
  icons: {
    icon: "/logo.jpeg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    className={inter.className}
    >
      <body>
        <Navbar />

        {children}

          <a href="#" className="bottom-3 right-3 fixed bg-red-600 p-3 text-white rounded-full">
            <ArrowUp />
          </a>
        <Footer />
      </body>
    </html>
  );
}
