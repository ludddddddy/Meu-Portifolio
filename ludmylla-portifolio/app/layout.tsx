import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Ludmylla Dias — Portfólio",
  description: "Designer e Criadora — Portfólio inspirado no Behance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen text-white font-sans bg-[radial-gradient(circle_at_center,_#A020F0,_#4B0082)] relative overflow-hidden">
        {/* TEXTURA DE RUÍDO SUTIL */}
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay" />

        {/* NAVBAR */}
        <header className="fixed top-0 left-0 w-full py-6 backdrop-blur-md bg-white/5 z-50">
          <nav className="flex justify-center gap-10 text-sm font-medium tracking-wide uppercase">
            <Link
              href="/"
              className="text-white underline underline-offset-8 decoration-2 decoration-white"
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className="text-white hover:underline underline-offset-8 decoration-white/50"
            >
              Sobre
            </Link>
            <Link
              href="/experiencias/academica"
              className="text-white hover:underline underline-offset-8 decoration-white/50"
            >
              Acadêmica
            </Link>
            <Link
              href="/experiencias/profissional"
              className="text-white hover:underline underline-offset-8 decoration-white/50"
            >
              Profissional
            </Link>
            <Link
              href="/projetos"
              className="text-white hover:underline underline-offset-8 decoration-white/50"
            >
              Projetos
            </Link>
          </nav>
        </header>

        <main className="pt-32 pb-24 flex flex-col items-center justify-center text-center relative z-10">
          {children}
        </main>

        {/* RODAPÉ */}
        <footer className="absolute bottom-6 left-0 w-full text-center text-sm opacity-70">
          <p>© 2025 Ludmylla Dias</p>
          <p className="opacity-60">Design & Frontend • Inspired by Behance</p>
        </footer>
      </body>
    </html>
  );
}


