import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50">
        <Hero />
      </main>
    </>
  );
}