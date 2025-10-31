export default function Sobre() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
      <p className="text-lg leading-relaxed">
        Olá! Sou <b>Ludmylla Dias</b>, designer criativa apaixonada por identidade visual e design digital.
        Este portfólio foi desenvolvido em React e Next.js, utilizando Tailwind CSS e integração com APIs públicas.
      </p>

      <h2 className="text-2xl mt-6 font-semibold">Tecnologias Utilizadas</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>Next.js 13 com App Router</li>
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>APIs Públicas (Quotable & GitHub)</li>
      </ul>
    </main>
  );
}
