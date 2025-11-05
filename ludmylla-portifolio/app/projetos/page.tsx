import Link from "next/link";

const projetos = [
  {
    title: "Branding · Projeto X",
    description: "Identidade visual e aplicações — logotipo, mockups e guidelines.",
    url: "https://www.behance.net/ludmylladias1"
  },
  {
    title: "Ilustração · Série Y",
    description: "Coleção de ilustrações digitais com paleta roxa e rosa.",
    url: "https://www.behance.net/ludmylladias1"
  },
  {
    title: "Social Media · Campanha Z",
    description: "Artes para redes sociais com foco em engajamento e storytelling.",
    url: "https://www.behance.net/ludmylladias1"
  }
];

export default function Projetos() {
  return (
    <main className="py-12">
      <div className="container-max">
        <h1 className="text-3xl font-semibold mb-6">Projetos Desenvolvidos</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {projetos.map((p, idx) => (
            <article key={idx} className="card p-6 hover:scale-[1.01] transition-transform">
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="mt-2 opacity-90 text-sm">{p.description}</p>
              <div className="mt-4">
                <a href={p.url} target="_blank" rel="noreferrer" className="text-sm underline">Ver no Behance →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
