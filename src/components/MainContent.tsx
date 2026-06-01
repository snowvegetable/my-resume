import About from './about/About';
import Projects from './projects/Projects';
import Skills from './skills/Skills';

export default function MainContent() {
  return (
    <main className="p-6 px-20 md:px-80 flex flex-col gap-30">
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
