import { Navbar } from "@/components/sections/Navbar";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="text-white">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <ContactSection />
      <Footer />
    </main>
  );
}
