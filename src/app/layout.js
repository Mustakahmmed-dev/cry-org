import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";

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

        <Footer />
      </body>
    </html>
  );
}
