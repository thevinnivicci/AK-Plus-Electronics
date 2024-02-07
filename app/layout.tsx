import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import CartProvider from "./components/Providers";
import Navbar from "./components/Navbar";
import ShoppingCartModal from "./components/ShoppingCartModal";
import Footer from "./components/Footer";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AK Plus Electronics",
  description:
    "Explore a world of cutting-edge electronics and home appliances at AK Plus Electronics, your premier destination on Rohta Road, Meerut. Discover top-quality gadgets, smart home solutions, and essential appliances to enhance your lifestyle. Visit us for the latest in technology and unbeatable deals. Your trusted source for innovation in Meerut.",
  keywords: [
    "ak plus electronic",
    "a k plus electronic",
    "Electronics Meerut",
    "Home Appliances Meerut",
    "Cutting-edge Gadgets",
    "Smart Home Solutions",
    "Technology Store Rohta Road",
    "Innovation in Meerut",
    "Electronics Deals",
    "Premier Electronics Destination",
    "AK Plus Electronics Meerut",
    "Top-quality Appliances",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCartModal />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
