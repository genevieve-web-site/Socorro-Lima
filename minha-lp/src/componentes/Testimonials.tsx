import { useEffect, useRef, useState } from "react";

export default function ComplimentsCarousel() {
  const reviews = [
    {
      name: "Ana Silva (@ana.silva_)",
      text: "A Socorro mudou minha vida. Com a TRG, consegui superar traumas que carregava há anos. Gratidão eterna! ❤️🙌",
    },
    {
      name: "Marcos Souza (@marcosouza_terapia)",
      text: "Excelente profissional. O acolhimento dela é indescritível, me senti seguro desde a primeira sessão.",
    },
    {
      name: "Clara G. (@clara.guimaraes)",
      text: "Eu não acreditava que poderia me livrar da ansiedade tão rápido. A abordagem da Socorro é direta e transformadora. ✨",
    },
    {
      name: "Roberto F. (@roberto.fernandes)",
      text: "Uma terapeuta de alma iluminada. Super recomendo o trabalho dela para quem busca cura real.",
    },
    {
      name: "Carla Dias (@carladias_)",
      text: "Simplesmente maravilhosa! Me ajudou a me reconectar comigo mesma em um momento muito difícil.",
    },
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth;
      const currentIndex = Math.round(
        carouselRef.current.scrollLeft / cardWidth,
      );
      setActiveIndex(currentIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % reviews.length;
      scrollTo(nextIndex);
    }, 3500);

    return () => clearInterval(interval);
  }, [activeIndex, reviews.length]);

  return (
    <section className="py-20 sm:py-24 bg-brand-light">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 text-center relative">
        <h2 className="text-brand-brown uppercase tracking-[0.3em] text-xs font-bold mb-4 flex items-center gap-2 justify-center">
          <span className="w-8 h-[1px] bg-brand-brown"></span> Reconhecimento
        </h2>
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-dark mb-12 sm:mb-16 italic">
          O que dizem sobre nossa jornada
        </h3>

        {/* CONTÊINER DO CARROSSEL (CSS Snap) */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 sm:pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((r, i) => (
            <div
              key={i}
              className="flex-none w-[92%] sm:w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] snap-start group"
            >
              <div className="bg-white p-6 sm:p-10 rounded-3xl shadow-lg border border-brand-beige italic h-full flex flex-col justify-between transition-all duration-300 group-hover:border-brand-gold/50 group-hover:shadow-xl group-hover:-translate-y-1">
                <div>
                  <div className="text-4xl sm:text-5xl text-brand-gold/30 font-serif leading-none mb-4">
                    “
                  </div>
                  <p className="text-brand-dark/80 text-base sm:text-lg leading-relaxed mb-6">
                    {r.text}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-brand-beige">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-beige/50 flex items-center justify-center font-bold text-brand-brown text-lg sm:text-xl uppercase">
                    {r.name.substring(0, 1)}
                  </div>
                  <p className="font-bold text-brand-gold text-xs sm:text-sm not-italic tracking-wide">
                    {r.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINAÇÃO (Dots) */}
        <div className="flex justify-center gap-3 mt-4 mb-12 sm:mb-16">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "w-8 bg-brand-brown"
                  : "w-2 bg-brand-brown/30 hover:bg-brand-brown/60"
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>

        {/* BOTÃO VER MAIS (Direcionando ao Insta) */}
        <div className="mt-16">
          <a
            href="https://www.instagram.com/terapeutasocorrolima/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-brown text-brand-light px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest shadow-xl transition-all hover:bg-white hover:text-brand-gold hover:shadow-2xl hover:-translate-y-1"
          >
            Ver mais depoimentos no Instagram{" "}
            <span className="text-brand-light font-light">
              @terapeutasocorrolima
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Adicione este CSS global ou no seu arquivo de estilos para esconder a barra de rolagem
// .scrollbar-hide::-webkit-scrollbar {
//   display: none;
// }
