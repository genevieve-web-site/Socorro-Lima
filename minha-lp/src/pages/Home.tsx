import Navbar from "../componentes/Navbar";
import Hero from "../componentes/Hero";
import Services from "../componentes/Serviços";
import ProjectsGallery from "../componentes/ProjectsGallery";

import Testimonials from "../componentes/Testimonials";

export default function Home() {
  return (
    <div id="home" className="bg-brand-light font-sans antialiased">
      <Navbar />
      <Hero />
      <Services />
      <ProjectsGallery />
      <Testimonials />
    </div>
  );
}
