"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center min-h-screen pt-24 container-max">
      {/* Texto principal */}
      <div className="text-left max-w-xl">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="block">Ludmylla</span>
          <span className="block text-white">Dias</span>
        </h1>

        <p className="mt-4 text-xl md:text-2xl font-medium opacity-90">
          Criando o digital com arte
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/projetos"
            className="px-6 py-3 bg-white text-purple-800 font-semibold rounded-full shadow-md hover:bg-fuchsia-200 transition"
          >
            Ver Projetos
          </a>
          <a
            href="https://www.behance.net/ludmylladias1"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-white rounded-full hover:bg-white/10 transition"
          >
            Behance
          </a>
        </div>

        <p className="mt-12 text-lg opacity-90 italic">
          criatividade é a melhor forma de improviso
        </p>

        <footer className="mt-8 text-sm opacity-80">
          © 2025 <strong>Ludmylla Dias</strong> • Design & Frontend • Inspired by Behance
        </footer>
      </div>

      {/* Imagem à direita */}
      <div className="mt-10 md:mt-0">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
          <Image
            src="/minha-foto.png/workspaces/Meu-Portifolio/ludmylla-portifolio/public/Gemini_Generated_Image_b35z9fb35z9fb35z.png" // substitua pelo nome correto do arquivo em /public
            alt="Foto de Ludmylla Dias"
            width={320}
            height={320}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

