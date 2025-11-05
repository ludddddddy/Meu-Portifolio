export default function Sobre() {
  return (
    <main className="py-12">
      <div className="container-max">
        <h1 className="text-3xl font-semibold">Sobre</h1>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h2 className="font-medium">Mini Bio</h2>
            <p className="mt-2 text-sm opacity-90">
              Olá — eu sou a Ludmylla, designer e criadora digital com foco em identidade visual, ilustração e design para web.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="font-medium">Tecnologias</h2>
            <ul className="mt-2 list-disc pl-6 text-sm">
              <li>Next.js (App Router)</li>
              <li>React</li>
              <li>Tailwind CSS (v4)</li>
              <li>SWR (fetch client-side opcional)</li>
              <li>APIs públicas (Quotable, GitHub, Behance links)</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

