import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
