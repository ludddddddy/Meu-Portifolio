export default function Projetos() {
  const projetos = [
    {
      titulo: "Identidade Visual – Projeto X",
      descricao: "Criação de marca e identidade visual.",
      link: "https://www.behance.net/ludmylladias1"
    },
    {
      titulo: "Ilustração Digital – Série Y",
      descricao: "Série de ilustrações digitais com estilo minimalista.",
      link: "https://www.behance.net/ludmylladias1"
    }
  ];

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">Projetos Desenvolvidos</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projetos.map((p, i) => (
          <div key={i} className="border border-gray-700 p-4 rounded-lg hover:bg-gray-800 transition">
            <h2 className="text-xl font-semibold">{p.titulo}</h2>
            <p className="text-gray-400 mt-2">{p.descricao}</p>
            <a href={p.link} target="_blank" className="text-blue-400 mt-3 inline-block underline">
              Ver no Behance →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
