import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechSpecs from "@/components/TechSpecs";
import Configurator from "@/components/Configurator";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <TechSpecs />
      <Configurator />
    </main>
  );
}
