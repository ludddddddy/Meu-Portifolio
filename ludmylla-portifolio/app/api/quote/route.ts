import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const res = await fetch("https://api.quotable.io/random");
    if (!res.ok) {
      // fallback minimal quote
      return Response.json({ content: "Criatividade é a inteligência se divertindo.", author: "Albert Einstein" });
    }
    const data = await res.json();
    // safety: ensure content exists
    const out = { content: data.content ?? "Criatividade em movimento.", author: data.author ?? "Autor desconhecido" };
    return Response.json(out);
  } catch (err) {
    return Response.json({ content: "Criatividade é a melhor forma de improviso.", author: "Fallback" });
  }
}
