// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Rodape } from "@/components/Rodape";
import { Header } from "@/components/Header";
import Cart from '@/components/Carrinho/Cart';
import { CartProvider } from '@/app/context/CartContext';
import Marketing from "@/components/Marketing";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elleganza",
  description: "Portifolio Elleganza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
      <Marketing />
        <CartProvider>
          {children}
         
          <Header />
          <Rodape />
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
