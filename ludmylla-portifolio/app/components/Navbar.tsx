"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex justify-center py-6 font-semibold text-lg tracking-wide">
      <nav className="flex space-x-8">
        <Link href="/" className={`hover:text-pink-300 transition ${pathname === "/" ? "text-pink-300" : "text-white"}`}>
          Home
        </Link>
        <Link href="/sobre" className={`hover:text-pink-300 transition ${pathname === "/sobre" ? "text-pink-300" : "text-white"}`}>
          Sobre
        </Link>
        <Link href="/experiencias/academica" className={`hover:text-pink-300 transition ${pathname === "/experiencias/academica" ? "text-pink-300" : "text-white"}`}>
          Experiência Acadêmica
        </Link>
        <Link href="/experiencias/profissional" className={`hover:text-pink-300 transition ${pathname === "/experiencias/profissional" ? "text-pink-300" : "text-white"}`}>
          Experiência Profissional
        </Link>
        <Link href="/projetos" className={`hover:text-pink-300 transition ${pathname === "/projetos" ? "text-pink-300" : "text-white"}`}>
          Projetos
        </Link>
      </nav>
    </header>
  );
}
