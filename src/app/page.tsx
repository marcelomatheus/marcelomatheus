import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StackCarousel } from "@/components/sections/StackCarousel";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { ClientProjects } from "@/components/sections/ClientProjects";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { Articles } from "@/components/sections/Articles";
import { ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="text-white">
      <Navbar />
      <Hero />
      <StackCarousel />
      <Projects />
      <ClientProjects />
      <VideoShowcase />
      <Articles />
      <About />
      <Skills />
      <ContactSection />
      <Footer />
    </main>
  );
}
