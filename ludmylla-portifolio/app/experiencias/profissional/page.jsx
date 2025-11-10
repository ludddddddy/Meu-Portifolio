import Link from "next/link";

const experienciasProfissionais = [
  {
    title: "Auxiliar Administrativo",
    description:
      "Contribuição nas tarefas administrativas da empresa.",
  },
  
];

export default function ExperienciaProfissional() {
  return (
    <main className="py-12">
      <div className="container-max px-6 md:px-16">
        <h1 className="text-3xl font-semibold mb-6">Experiência Profissional</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {experienciasProfissionais.map((exp, idx) => (
            <article
              key={idx}
              className="card p-6 hover:scale-[1.01] transition-transform"
            >
              <h3 className="text-xl font-medium">{exp.title}</h3>
              <p className="mt-2 opacity-90 text-sm">{exp.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projetos"
            className="text-sm underline opacity-80 hover:opacity-100 transition"
          >
            Ver meus projetos →
          </Link>
        </div>
      </div>
    </main>
  );
}


