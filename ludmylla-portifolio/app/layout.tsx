import "./globals.css";
import Navbar from "./components/Navbar"; // 1. IMPORTANDO O NAVBAR

export const metadata = {
    // ... metadata ...
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      {/* <body> com o gradiente roxo e texto branco padrão */}
      <body className="bg-gradient-to-br from-[#4b0082] to-[#cc33ff] text-white min-h-screen flex flex-col">
        
        <Navbar /> {/* 2. NAVBAR VISÍVEL */}
        <main className="flex-grow">{children}</main>
        
        {/* Rodapé completo com o slogan */}
        <footer className="text-center py-6 text-sm text-white/70 mt-10">
          <p className="text-xl font-normal mb-4">
            criatividade é a melhor forma de improviso
          </p>
          <p className="text-sm opacity-80">
             © {new Date().getFullYear()} Ludmylla Dias · Design & Frontend · Inspired by Behance
          </p>
        </footer>
      </body>
    </html>
  );
}

