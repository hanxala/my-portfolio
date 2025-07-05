import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
    </div>
  );
}
