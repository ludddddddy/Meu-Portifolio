import Image from "next/image";

export default function Home() {
  return (
    <main className="py-16 flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl px-6">
        <Image
          src="/lud.png"
          alt="Ludmylla Dias"
          width={400}
          height={400}
          className="profile-img"
        />

        <h1 className="text-4xl md:text-6xl font-bold text-white mt-6 mb-2">
          Ludmylla Dias
        </h1>
        <p className="text-lg md:text-xl text-white opacity-90 mb-10">
          criatividade é a melhor forma de improviso
        </p>
      </div>
    </main>
  );
}




