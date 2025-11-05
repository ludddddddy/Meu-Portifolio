"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "home", href: "/" },
    { name: "sobre", href: "/sobre" },
    { name: "academica", href: "/experiencia-academica" },
    { name: "profissional", href: "/experiencia-profissional" },
    { name: "projetos", href: "/projetos" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <nav className="container-max flex justify-center md:justify-start items-center gap-8 py-4">
        {links.map(({ name, href }) => (
          <Link
            key={href}
            href={href}
            className={`text-white font-semibold text-lg capitalize tracking-wide transition-all duration-300 relative
              ${
                pathname === href
                  ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white"
                  : "opacity-80 hover:opacity-100"
              }`}
          >
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
