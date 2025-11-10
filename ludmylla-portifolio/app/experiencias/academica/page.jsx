import Link from "next/link";

const experienciasAcademicas = [
  {
    title: "Graduação em Tecnologia de Sistemas para internet- Universidade Católica de Pernambuco",
    description:
      "Formação focada no desenvolvimento de aplicações, UX/UI,  backend e desenvolvimento frontend.",
  },
  {
    title: "Técnico em Desenvolvimento de Sistemas",
    description:
      "Estudo sobre lógica de programação, desenvolvimento e arquitetura da informação.",
  },
  {
    title: "Projetos Autodidatas",
    description:
      "Desenvolvimento de produtos digitais com foco em sustentabilidade e impacto social positivo.",
  },
];


export default function ExperienciaAcademica() {
  return (
    <main className="py-12">
      <div className="container-max px-6 md:px-16">
        <h1 className="text-3xl font-semibold mb-6">Experiência Acadêmica</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {experienciasAcademicas.map((exp, idx) => (
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



