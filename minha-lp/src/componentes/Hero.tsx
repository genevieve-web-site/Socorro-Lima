import { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/midia/comprimidas/1.png";
import secondImage from "../assets/midia/3.png";
import Image from "../assets/midia/comprimidas/5.jpg";

const carouselItems = [
  {
    src: heroImage,
    title: "Equilíbrio Emocional",
  },
  {
    src: secondImage,
    title: "Ansiedade sob Controle",
  },
  {
    src: Image,
    title: "Transformação Emocional",
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
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-20"
      style={{ backgroundColor: "var(--color-brand-beige)" }}
    >
      {/* TEXTO DE FUNDO (DECORATIVO) */}
      <div className="absolute top-150 left-10 -translate-y-1/2 select-none pointer-events-none hidden lg:block">
        <span className="text-[12rem] mt-0 font-serif font-black text-brand-gold/10 leading-none">
          Psicanálise
        </span>
      </div>

      <div className="container mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        {/* COLUNA DE TEXTO (5/12) */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8 lg:-mt-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-calm-text)] border border-brand-gold/20">
            <ShieldCheck size={16} className="text-[var(--color-calm-light)]" />
            <span className="text-xs text-[var(--color-calm-ice)] uppercase tracking-widest">
              Certificada
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-4xl font-serif text-[var(--color-brand-dark)] leading-[1] sm:leading-[0.95] lg:-ml-1">
            Psicanálise & <br />
            <span className="italic font-light text-[var(--color-action)]">
              terapia{" "}
            </span>{" "}
            <br />
            para ansiedade
          </h1>

          <p className="text-lg text-brand-brown max-w-sm leading-relaxed border-l-2 border-brand-gold pl-4 sm:pl-6">
            Se reconectar consigo mesma pode transformar toda a sua vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://wa.me/557781135298"
              target="_blank"
              rel="noreferrer"
              className="bg-brand-gold/80 text-gray-100 px-12 py-4 rounded-full font-bold uppercase text-sm flex items-center justify-center gap-3 shadow-xl"
            >
              Angendar
              <ArrowRight size={32} />
            </a>
            <Link
              to="/about"
              className="border border-brand-brown text-brand-brown px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest bg-brand-gold/10 transition-all text-center"
            >
              Sobre Mim
            </Link>
          </div>
        </div>

        {/* COLUNA DA IMAGEM (7/12) */}
        <div className="lg:col-span-7 relative h-[420px] sm:h-[520px] lg:h-[600px] flex justify-center items-center">
          {/* CARROSSEL EM ARCO */}
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[450px] h-full rounded-t-full overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-8 border-white">
            {carouselItems.map((item, i) => (
              <img
                key={i}
                src={item.src}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  active === i ? "opacity-100 scale-100" : "opacity-0 scale-110"
                }`}
                alt="Metodo TRG Socorro Lima"
              />
            ))}

            {/* OVERLAY DE TEXTO NO CARROSSEL */}
            <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 text-center p-3 sm:p-4 max-w-[85%]">
              <h4 className="text-xl sm:text-2xl font-serif italic text-[var(--color-primary-dark)]">
                {carouselItems[active].title}
              </h4>
            </div>
          </div>

          {/* ELEMENTOS FLUTUANTES (STATUS) */}

          <div className="absolute bottom-18 sm:bottom-24 right-2 sm:right-6 md:right-10 bg-white p-3 sm:p-4 rounded-2xl shadow-xl animate-bounce-slow flex items-center gap-3 sm:gap-4 border border-brand-beige z-20">
            <div className="bg-brand-gold/20 p-2 rounded-lg text-brand-gold">
              <Brain size={24} />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-bold text-brand-dark leading-none">
                260+
              </p>
              <p className="text-[9px] sm:text-[10px] uppercase text-brand-dark/60 font-bold">
                Atendimentos
              </p>
            </div>
          </div>

          {/* INDICADORES VERTICAIS */}
          <div className="absolute left-0 lg:left-10 hidden sm:flex flex-col gap-3">
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
