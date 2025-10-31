"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    fetch("/api/quote")
      .then(res => res.json())
      .then(data => setQuote(data.content));
  }, []);

  return (
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vinda ao Portfólio de Ludmylla Dias</h1>
      <p className="text-lg mb-6 text-gray-300">
        Designer digital apaixonada por criatividade e inovação.
      </p>
      <blockquote className="italic text-gray-400 border-l-4 border-blue-400 pl-4">
        {quote || "Carregando frase inspiradora..."}
      </blockquote>
    </main>
  );
}
