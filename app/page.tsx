import Hero from "@/components/landing-sections/Hero";
import Services from "@/components/landing-sections/Services";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
