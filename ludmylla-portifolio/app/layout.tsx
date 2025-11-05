import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Ludmylla Dias — Portfólio",
  description: "Designer & Criadora — Portfólio inspirado no Behance"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="py-6">
          <div className="container-max flex items-center justify-between">
            <Link href="/" className="text-white text-2xl font-display">Ludmylla Dias</Link>
            <nav className="hidden md:flex gap-6 text-sm">
              <Link href="/sobre" className="hover:underline">Sobre</Link>
              <Link href="/experiencia-academica" className="hover:underline">Acadêmica</Link>
              <Link href="/experiencia-profissional" className="hover:underline">Profissional</Link>
              <Link href="/projetos" className="hover:underline">Projetos</Link>
            </nav>
          </div>
        </header>

        <div>{children}</div>

        <footer className="mt-16 py-8">
          <div className="container-max flex items-center justify-between text-sm opacity-80">
            <div>© {new Date().getFullYear()} Ludmylla Dias</div>
            <div>Design & Frontend • Inspired by Behance</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
