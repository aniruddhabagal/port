// import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas, Achievements } from '@/components';
import { About, Experience, Hero, Navbar,  } from '@/components';

export default function Home() {
  return (
    <main className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      {/* <Works /> This will render your projects */}
      {/* <Achievements /> */}
      <div className="relative z-0">
        {/* <Contact /> */}
        {/* <StarsCanvas /> */}
      </div>
    </main>
  );
}