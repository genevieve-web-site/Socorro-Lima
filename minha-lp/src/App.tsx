import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Home from "./pages/Home";
import About from "./pages/about";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans antialiased">
      <ScrollToTop />

      {/* Navbar fixa para todas as páginas (exceto se quiser esconder em alguma) */}
      <Navbar />

      <main>
        <Routes>
          {/* Agora a Home é a página principal */}
          <Route path="/" element={<Home />} />

          {/* Rota para a página Sobre */}
          <Route path="/about" element={<About />} />

          {/* Fallback: Se o usuário digitar algo errado, volta para a Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
