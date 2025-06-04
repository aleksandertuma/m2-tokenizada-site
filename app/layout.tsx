import Navbar from "@/components/Outros/Navbar";
import Footer from "@/components/Outros/Footer"; // novo import
import "@/styles/globals.css";
import type { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
   <html lang="pt">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}