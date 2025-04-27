import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Montserrat } from 'next/font/google'
import Footer from "@/components/Footer";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RM Ecopeças",
  description: "Peças automotivas de qualidade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`h-full ${montserrat.variable}`}>
      <body className={cn("relative h-full font-sans antialiased bg-green-100", inter.className)}>
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <header className="flex-shrink-0">
            <Navbar />
          </header>
          
          {/* Conteúdo principal - SEM limitação de largura aqui */}
          <main className="flex-grow pt-[52px]">
            {children}
          </main>
          
          {/* Footer */}
          <footer className="flex-shrink-0">
            <Footer />
            <div className="w-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 ">
                <div className="text-center">
                  <Link 
                    href="https://www.linkedin.com/in/manoel-victor-b6a45b333/" 
                    className="text-sm text-gray-500 hover:text-green-600 inline-block ml-11"
                  >
                    Dev Manoel Victor  
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}