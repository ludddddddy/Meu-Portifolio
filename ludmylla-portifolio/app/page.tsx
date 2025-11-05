import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-fuchsia-600 text-white relative overflow-hidden">
      <Navbar />
      <Hero />
    </main>
  );
}
