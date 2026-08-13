import { Footer } from "./components/layout/Footer";
import { GlowEffect } from "./components/layout/GlowEffect";
import { Header } from "./components/layout/Header";
import { About } from "./components/sections/About";
import { CTA } from "./components/sections/CTA";
import { FAQ } from "./components/sections/FAQ";
import { Hero } from "./components/sections/Hero";
import { Process } from "./components/sections/Process";
import { Projects } from "./components/sections/Projects";
import { Services } from "./components/sections/Services";
import { Technologies } from "./components/sections/Technologies";

function App() {
  return (
    <>
      <GlowEffect />
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Technologies />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
