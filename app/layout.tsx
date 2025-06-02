import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // novo import
import "./globals.css";

export default function RootLayout({ children }) {
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