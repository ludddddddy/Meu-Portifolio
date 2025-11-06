import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Ludmylla Dias — Portfólio",
  description: "Portfólio de Ludmylla Dias, Designer e Desenvolvedora Frontend",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gradient-to-br from-[#4b0082] to-[#cc33ff] text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="text-center py-6 text-sm text-white/70 border-t border-white/20 mt-10">
          © {new Date().getFullYear()} Ludmylla Dias — Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
