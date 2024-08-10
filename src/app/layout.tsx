import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Rodape } from "@/components/Rodape"
import { Header } from "@/components/Header";


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
      <body className={inter.className}>{children}
     <Header/>
     <Rodape />
      </body>
    </html>
  );
}
