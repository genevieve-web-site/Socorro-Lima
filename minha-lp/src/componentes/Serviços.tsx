import { CheckCircle2 } from "lucide-react";
import servico1 from "../assets/serviços/OBRA.png";
import servico2 from "../assets/serviços/OBRA2.png";
import servico3 from "../assets/serviços/OBRA3.png";
import servico4 from "../assets/serviços/OBRA4.png";

export default function Services() {
  const services = [
    {
      title: "Vistoria de Imóvel Novo",
      img: servico1,
      desc: "Entrega de chaves com rigor técnico.",
    },
    {
      title: "Projetos Hidrossanitários",
      img: servico2,
      desc: "Planejamento e execução de sistemas.",
    },
    {
      title: "Inspeção Predial",
      img: servico3,
      desc: "Análise profunda da saúde do edifício.",
    },
    {
      title: "Laudos Periciais",
      img: servico4,
      desc: "Documentação técnica especializada.",
    },
  ];

  const listServices = [
    "Vistoria Locativa (Início e Fim)",
    "Gerenciamento de Obras",
    "Projetos Hidrossanitários",
    "Consultoria em Patologias",
  ];

  return (
    <section
      id="servicos"
      className="py-24 relative overflow-hidden bg-fixed bg-cover bg-center"
      // Aplica a imagem na seção toda
    >
      {/* OVERLAY: Escurece ou clareia a imagem de fundo para o texto aparecer */}
      <div className="absolute inset-0 bg-white/95 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-gold"></span> Excelência
              Técnica
            </h2>
            <h3 className="text-5xl md:text-6xl font-serif text-brand-dark leading-tight">
              Soluções que garantem <br />
              <span className="italic font-light">seu patrimônio.</span>
            </h3>
          </div>
          <p className="text-brand-dark/60 text-sm md:text-base max-w-xs border-l border-brand-beige pl-4 italic">
            "Diagnósticos precisos para evitar prejuízos futuros e garantir
            segurança jurídica."
          </p>
        </div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-t-full overflow-hidden border-4 border-white shadow-lg mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h4 className="text-xl font-serif text-brand-dark mb-2 group-hover:text-brand-gold transition-colors italic">
                {item.title}
              </h4>
              <p className="text-sm text-brand-dark/60">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* LISTA COMPLEMENTAR E CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-16 border-t border-brand-beige/50 p-8 rounded-2xl bg-cover bg-center relative">
          <div className="absolute inset-0 bg- rounded-2xl" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {listServices.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-gold shrink-0" size={18} />
                <span className="text-brand-dark/80 font-medium text-sm md:text-base">
                  {s}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-brand-gold p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/50 relative z-10">
            <p className="text-brand-dark font-serif italic text-lg text-center md:text-left">
              Precisa de um laudo <br /> personalizado para sua obra?
            </p>
            <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-brand-dark transition-all shadow-lg">
              Falar Comigo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
