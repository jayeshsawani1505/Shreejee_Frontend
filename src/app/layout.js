import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/storeProvider";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shreejee Remedies | Ayurvedic Herbal Products",
  description: "Standardized Ayurvedic Herbal Products Formulated Naturally By Ayurvedic Doctors & Pharmacists.",
  keywords: "Ayurvedic Products , Ayurvedic Products in ahmedabad , Ayurvedic Products for skin care ,Ayurvedic Products for indigestion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>

        <StoreProvider>
        
          <Navbar />
          {children}
          <Footer/>
        </StoreProvider>
      </body>
    </html>
  );
}
