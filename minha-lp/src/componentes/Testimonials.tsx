import { useEffect, useRef, useState } from "react";
import imgAtendimento1 from "../assets/midia/projetos/Atendimento.jpeg";
import imgAtendimento2 from "../assets/midia/projetos/Palestra.jpeg";
import imgProjeto1 from "../assets/midia/projetos/cliente_criança.jpeg";
import imgProjeto2 from "../assets/midia/projetos/testemunho.jpeg";

export default function ProjectsCarousel() {
  const projects = [
    {
      title: "Atendimento Infantil",
      category: "Presencial",
      img: imgAtendimento1,
    },
    {
      title: "Sessão Terapêutica Em Grupo",
      category: "Presencial",
      img: imgAtendimento2,
    },
    {
      title: "Atendimento Infantil",
      category: " Presencial",
      img: imgProjeto1,
    },
    { title: "Atendimento Online", category: "Depoimento ", img: imgProjeto2 },
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollState = () => {
    const el = carouselRef.current;
    if (!el) return;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;
    const epsilon = 2;

    setCanScrollPrev(el.scrollLeft > epsilon);
    setCanScrollNext(el.scrollLeft < maxScrollLeft - epsilon);
  };

  const getScrollStep = () => {
    const el = carouselRef.current;
    if (!el) return 0;

    const firstCard = el.querySelector<HTMLElement>("[data-carousel-card]");
    const gap = Number.parseFloat(getComputedStyle(el).gap || "0");
    if (!firstCard) return el.clientWidth;

    return (
      firstCard.getBoundingClientRect().width + (Number.isFinite(gap) ? gap : 0)
    );
  };

  const handleScroll = () => {
    updateScrollState();
  };

  const scrollPrev = () => {
    if (!carouselRef.current) return;
    const step = getScrollStep();
    carouselRef.current.scrollBy({ left: -step, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!carouselRef.current) return;
    const step = getScrollStep();
    carouselRef.current.scrollBy({ left: step, behavior: "smooth" });
  };

  useEffect(() => {
    updateScrollState();
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-brand-brown uppercase tracking-[0.3em] text-xs font-bold mb-4 flex items-center gap-2 justify-center">
            <span className="w-8 h-[1px] bg-brand-brown"></span> Portfólio
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-brand-dark italic">
            Atendimentos e Projetos Realizados
          </h3>
        </div>

        {/* CARROSSEL DE IMAGENS */}
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((item, i) => (
              <div
                key={i}
                data-carousel-card
                className="flex-none w-[85%] sm:w-[45%] lg:w-[30%] snap-start"
              >
                <div className="relative group overflow-hidden rounded-3xl shadow-lg aspect-[4/5]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay com informações */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent flex flex-col justify-end p-8 transition-opacity duration-300 group-hover:bg-brand-dark/40">
                    <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-2 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      {item.category}
                    </span>
                    <h4 className="text-white text-xl font-serif italic opacity-0 translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Anterior"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-brand-brown text-white w-11 h-11 flex items-center justify-center shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Próximo"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-brown text-white w-11 h-11 flex items-center justify-center shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* MENSAGEM DE AGRADECIMENTO FINAL */}
        <div className="mt-16 text-center max-w-3xl mx-auto border-t border-brand-beige pt-10">
          <p className="text-brand-dark/70 italic text-lg leading-relaxed">
            "Meu agradecimento a cada um de vocês que permitiu e acreditou em
            meu profissionalismo. Juntos conseguimos transformações reais e
            duradouras."
          </p>
          <div className="mt-6 font-serif text-brand-gold font-bold">
            — Terapeuta Socorro Lima
          </div>
        </div>
      </div>
    </section>
  );
}
