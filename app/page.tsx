// src/app/page.tsx

import Hero from './src/components/Hero'; // 1. Import the new Hero component
import About from './src/components/About';
import Skills from './src/components/Skills';
import Projects from './src/components/Projects';
import Contact from './src/components/Contact';
export default function Home() {
  return (
    
    <main className="bg-white">
      <Hero /> 
      <About />
      <Skills />
      <Projects />
      <Contact />
     
    </main>
  );
}