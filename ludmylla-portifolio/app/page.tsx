import Image from "next/image";

export default function Home() {
  return (
    // Este `section` garante a ordem correta, o texto branco e o espaçamento
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-24 py-20 text-white min-h-[90vh]">
      
      {/* 💬 Texto principal: GRANDE e Branco */}
      <div className="max-w-xl text-center md:text-left space-y-4 md:space-y-6">
        
        {/* Título Principal: "Ludmylla Dias" (GRANDE) */}
        <h1 className="text-6xl md:text-8xl font-extrabold leading-none">
          Ludmylla Dias
        </h1>
        
        {/* Slogan/Subtítulo */}
        <p className="text-2xl md:text-3xl font-normal text-white/90 tracking-wider">
          Criando o digital com arte
        </p>
      </div>

      {/* 📸 Foto circular: REDONDA (rounded-full) */}
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


