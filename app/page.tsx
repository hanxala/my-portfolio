import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}
