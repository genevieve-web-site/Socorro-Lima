import { CheckCircle2 } from "lucide-react";
import servico1 from "../assets/midia/abordagens/1.jpeg";
import servico2 from "../assets/midia/abordagens/2.jpeg";
import servico3 from "../assets/midia/abordagens/3.jpeg";
import servico4 from "../assets/midia/abordagens/4.jpeg";

export default function Services() {
  const services = [
    {
      title: "Análise emocional e psicanálise",
      img: servico1,
      desc: "Investigação das emoções profundas",
    },
    {
      title: "Escuta terapêutica e acolhimento",
      img: servico2,
      desc: "Espaço seguro sem julgamento, apoio contínuo.",
    },
    {
      title: "Identificação de padrões comportamentais",
      img: servico3,
      desc: "Interpretação de comportamentos.",
    },
    {
      title: "Técnicas terapêuticas complementares",
      img: servico4,
      desc: "Interpretação de desenhos (principalmente crianças)",
    },
  ];

  const listServices = [
    "Ansiedade e sobrecarga emocional",
    "Dependência emocional ",
    "Traumas e bloqueios emocionais",
    "Baixa autoestima e insegurança",
  ];

  return (
    <section
      id="servicos"
      className="py-20 sm:py-24 relative overflow-hidden bg-fixed bg-cover bg-center"
      // Aplica a imagem na seção toda
    >
      {/* OVERLAY: Escurece ou clareia a imagem de fundo para o texto aparecer */}
      <div className="absolute inset-0 bg-white/95 z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-gold"></span> Excelência
              Técnica
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-dark leading-tight">
              Como funciona <br />
              <span className="italic font-light">o processo terapêutico.</span>
            </h3>
          </div>
          <p className="text-brand-dark/60 text-sm md:text-base max-w-xs border-l border-brand-beige pl-4 italic">
            "Abordagens terapêuticas que ajudam a acessar emoções de forma
            profunda e personalizada."
          </p>
        </div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {services.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-t-full overflow-hidden border-4 border-white shadow-lg mb-4 sm:mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h4 className="text-lg sm:text-xl font-serif text-brand-dark mb-2 group-hover:text-brand-gold transition-colors italic">
                {item.title}
              </h4>
              <p className="text-sm text-brand-dark/60">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* LISTA COMPLEMENTAR E CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-6 border-t border-brand-beige/50 p-6 sm:p-8 rounded-2xl bg-cover bg-center relative">
          <div className="absolute inset-0 bg- rounded-2xl" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {listServices.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary shrink-0" size={18} />
                <span className="text-brand-dark/80 font-medium text-sm md:text-base">
                  {s}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-primary-light p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl border border-white/50 relative z-10">
            <p className="text-beige font-serif italic text-base sm:text-lg text-center md:text-left">
              Comece seu processo com <br /> um atendimento acolhedor e
              personalizado.
            </p>
            <a
              href="https://wa.me/557781135298"
              target="_blank"
              rel="noreferrer"
              className="bg-brand-beige text-primary px-7 sm:px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-brand-dark transition-all shadow-lg"
            >
              Falar Comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
