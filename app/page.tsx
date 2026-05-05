import Header from "@/components/Header";
import BydHero from "@/components/BydHero";
import BydNews from "@/components/BydNews";
import BydCommunity from "@/components/BydCommunity";
import BydFooter from "@/components/BydFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <BydHero />
      <BydNews />
      <BydCommunity />
      <BydFooter />
    </main>
  );
}
