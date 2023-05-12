import { Projects } from "@/components/Projects";
import { About } from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8">
      <About />
      <Projects />

      <footer></footer>
    </main>
  );
}
