"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch("/api/quote");
        // check status and content-type
        const contentType = res.headers.get("content-type") || "";
        if (!res.ok) {
          // fallback
          throw new Error(`Server responded ${res.status}`);
        }
        if (!contentType.includes("application/json")) {
          // fallback object
          const txt = await res.text();
          // try safe parse
          try { 
            const json = JSON.parse(txt);
            if (mounted) setQuote(json.content ?? null);
          } catch {
            if (mounted) setQuote(null);
          }
          return;
        }
        const data = await res.json();
        if (mounted) setQuote(data?.content ?? null);
      } catch (err) {
        console.error("Quote fetch error:", err);
        if (mounted) setQuote(null);
      }
    }
    load();
    return () => { mounted = false; };
  }, []);

  return (
    <main className="min-h-[70vh] flex items-center">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: visual / empty/ decorative */}
        <div className="hidden md:block" />

        {/* Right: text */}
        <div className="text-right md:text-left">
          <h1 className="text-6xl md:text-8xl font-display font-semibold leading-tight tracking-tight">
            Ludmylla <span className="block">Dias</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl opacity-90">Criando o digital com arte</p>

          <div className="mt-6 flex items-center gap-4 justify-end md:justify-start">
            <a href="/projetos" className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition">
              Ver Projetos
            </a>
            <a href="https://www.behance.net/ludmylladias1" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition">
              Behance
            </a>
          </div>

          <div className="mt-8 text-sm opacity-80">
            <div className="italic">{quote ?? "— Inspirando criatividade..."}</div>
          </div>
        </div>
      </div>
    </main>
  );
}

