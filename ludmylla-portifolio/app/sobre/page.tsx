export default function Sobre() {
  return (
    <main className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#2b0b5c] via-[#4b0d7a] to-[#c84aeb] text-white py-20">
      <div className="container-max space-y-12">
        <header>
          <h1 className="text-5xl font-extrabold tracking-tight mb-2">Sobre Mim</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Sou Ludmylla, estudante com foco em designer e criadora digital com foco em identidade visual, ilustração e design para web. 
            Tenho como propósito transformar ideias em experiências visuais marcantes.
          </p>
        </header>


        <section className="grid md:grid-cols-2 gap-8">
          <div className="card p-8">
            <h2 className="text-xl font-semibold mb-4 text-fuchsia-300">Mini Bio</h2>
            <p className="text-sm opacity-90 leading-relaxed">
              Criadora apaixonada por unir arte e tecnologia. Meu trabalho reflete autenticidade, cor e propósito —
              buscando sempre a harmonia entre forma e função.
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-xl font-semibold mb-4 text-fuchsia-300">Tecnologias</h2>
            <ul className="space-y-2 text-sm opacity-90">
              <li>⚡ Next.js (App Router)</li>
              <li>⚛️ React</li>
              <li>🎨 Tailwind CSS v4</li>
              <li>🔁 SWR (fetch client-side)</li>
              <li>🌐 Integrações com APIs públicas</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}