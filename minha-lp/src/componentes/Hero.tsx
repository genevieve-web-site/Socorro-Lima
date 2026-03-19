import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, HardHat } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/bg.png";
import secondImage from "../assets/logos/SUBLOGO-2.jpg.jpeg";

const carouselItems = [
  { src: heroImage, title: "Precisão", subtitle: "Engenharia Diagnóstica" },
  { src: secondImage, title: "Segurança", subtitle: "Vistoria de Entrega" },
  {
    src: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80",
    title: "Rigor",
    subtitle: "Laudos Técnicos",
  },
];

export default function HeroModerno() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-brand-light flex items-center overflow-hidden pt-20">
      {/* TEXTO DE FUNDO (DECORATIVO) */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 select-none pointer-events-none hidden lg:block">
        <span className="text-[15rem] font-serif font-black text-brand-beige/40 leading-none">
          DIAGNÓSTICO
        </span>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* COLUNA DE TEXTO (5/12) */}
        <div className="lg:col-span-5 space-y-8 lg:-mt-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20">
            <ShieldCheck size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">
              Selo de Qualidade Técnica
            </span>
          </div>

          <h1 className="text-5xl md:text-4xl font-serif text-brand-dark leading-[0.9] lg:-ml-1">
            Excelência <br />
            <span className="italic font-light">nos detalhes</span> <br />
            que importam.
          </h1>

          <p className="text-sm text-brand-dark/70 max-w-sm leading-relaxed border-l-2 border-brand-gold pl-6">
            Não é apenas uma vistoria. É a garantia de que seu maior
            investimento está livre de vícios e falhas ocultas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-gold/80 text-gray-600 px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-brand-dark transition-all flex items-center justify-center gap-3 shadow-xl animate-[pulse_3.5s_ease-in-out_infinite]">
              Entrar em contato <ArrowRight size={18} />
            </button>
            <Link
              to="/about"
              className="border border-brand-brown text-brand-brown px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest bg-brand-gold/10 transition-all text-center"
            >
              Sobre mim
            </Link>
          </div>
        </div>

        {/* COLUNA DA IMAGEM (7/12) */}
        <div className="lg:col-span-7 relative h-[600px] flex justify-center items-center">
          {/* CARROSSEL EM ARCO */}
          <div className="relative w-full max-w-[450px] h-full rounded-t-full overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-white">
            {carouselItems.map((item, i) => (
              <img
                key={i}
                src={item.src}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  active === i ? "opacity-100 scale-100" : "opacity-0 scale-110"
                }`}
                alt="Projetos Rayelle"
              />
            ))}

            {/* OVERLAY DE TEXTO NO CARROSSEL */}
            <div className="absolute bottom-12 left-0 right-0 text-center text-white p-4">
              <p className="text-xs uppercase tracking-[0.3em] opacity-80">
                {carouselItems[active].subtitle}
              </p>
              <h4 className="text-2xl font-serif italic">
                {carouselItems[active].title}
              </h4>
            </div>
          </div>

          {/* ELEMENTOS FLUTUANTES (STATUS) */}

          <div className="absolute bottom-6 right-0 md:right-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow flex items-center gap-4 border border-brand-beige">
            <div className="bg-brand-gold/20 p-2 rounded-lg text-brand-gold">
              <HardHat size={24} />
            </div>
            <div>
              <p className="text-xl font-bold text-brand-dark leading-none">
                500+
              </p>
              <p className="text-[10px] uppercase text-brand-dark/60 font-bold">
                Vistorias
              </p>
            </div>
          </div>

          {/* INDICADORES VERTICAIS */}
          <div className="absolute left-0 lg:left-10 flex flex-col gap-3">
            {carouselItems.map((_, i) => (
              <div
                key={i}
                className={`h-12 w-1 rounded-full transition-all duration-500 ${active === i ? "bg-brand-gold" : "bg-brand-gold/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
