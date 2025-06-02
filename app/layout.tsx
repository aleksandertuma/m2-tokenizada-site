import "./globals.css";
import Navbar from "@/components/Navbar"; // ajuste o caminho se necessário

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}