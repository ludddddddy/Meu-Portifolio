"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2b0b5c] via-[#4b0d7a] to-[#c84aeb] text-white">
      <section className="container-max flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        
        {/* Texto à esquerda */}
        <div className="flex-1 text-left space-y-6">
          <h1 className="text-[4rem] md:text-[6rem] font-extrabold leading-none tracking-tight drop-shadow-md">
            <span className="block text-white">Ludmylla</span>
            <span className="block text-fuchsia-300">Dias</span>
          </h1>

          <p className="text-2xl md:text-3xl font-medium text-white/90">
            Criando o digital com arte
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/projetos"
              className="px-8 py-3 bg-white text-purple-800 font-semibold rounded-full shadow-md hover:bg-fuchsia-200 transition"
            >
              Ver Projetos
            </a>
            <a
              href="https://www.behance.net/ludmylladias1"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 border border-white rounded-full text-white hover:bg-white/10 transition"
            >
              Behance
            </a>
          </div>

          <p className="italic text-lg text-white/80 mt-10">
            Criatividade é a melhor forma de improviso
          </p>
        </div>

        {/* Foto à direita */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-[0_0_60px_-10px_rgba(255,255,255,0.4)]">
            <Image
              src="/minha-foto.png"
              alt="Foto de Ludmylla Dias"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </section>
    </main>
  );
}
