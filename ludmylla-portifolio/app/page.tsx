import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-24 py-20 text-white">
      {/* Texto principal */}
      <div className="max-w-xl text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Olá, sou <span className="text-pink-300">Ludmylla Dias</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Designer e Desenvolvedora Frontend apaixonada por experiências criativas.
        </h2>
        <p className="text-lg text-white/90 leading-relaxed">
          Transformo ideias em interfaces únicas e funcionais, unindo estética, propósito e tecnologia para criar soluções digitais com impacto positivo.
        </p>
        <a
          href="/projetos"
          className="inline-block mt-4 px-6 py-3 bg-white text-purple-700 font-bold rounded-full hover:bg-pink-300 hover:text-white transition-all"
        >
          Ver meus projetos
        </a>
      </div>

      {/* Foto circular */}
      <div className="flex justify-center md:justify-end mb-12 md:mb-0">
        <div className="w-[260px] h-[260px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden border-4 border-white/30 shadow-[0_0_40px_rgba(200,74,235,0.5)]">
          <Image
            src="/lud.png"
            alt="Ludmylla Dias"
            
            width={360}
            height={360}
            className="object-cover object-center w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}

