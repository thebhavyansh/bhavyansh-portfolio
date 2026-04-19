import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <div className="space-y-40 pb-20">
        <Experience />
        <Projects />
        <Skills />
      </div>
      
      {/* Visual Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-brand/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-brand/10 blur-[150px] rounded-full" />
      </div>
    </main>
  );
}
