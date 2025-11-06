export default function ExperienciaAcademica() {
  return (
    <main className="py-12">
      <div className="container-max">
        <h1 className="text-3xl font-semibold">Experiência Acadêmica</h1>
        <div className="mt-6 space-y-4">
          <div className="card p-4">
            <h3 className="font-medium">Bacharelado em Design — Universidade XYZ</h3>
            <p className="text-sm opacity-90 mt-1">2020 — Presente. Projetos em UX, identidade visual e tipografia.</p>
          </div>
          <div className="card p-4">
            <h3 className="font-medium">Cursos Complementares</h3>
            <ul className="text-sm mt-2 list-disc pl-6">
              <li>Front-end Moderno (React)</li>
              <li>Ilustração Digital</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}