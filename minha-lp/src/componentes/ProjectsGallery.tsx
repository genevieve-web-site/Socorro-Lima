import logoCardMain from "../assets/logo/782a7fb03e170fcf133d356733d3f04bcbc7e179.svg";
import logoCardAlt from "../assets/logo/TRG.png";

export default function ProjectsGallery() {
  const projects = [
    {
      title: "Formação reconhecida",
      tag: "Certificação",
      text: "Formação pelo Conselho Internacional de Terapia e Reprocessamento Regenerativo (CITRG), com atuação voltada ao cuidado emocional profundo e transformação interna.",
      bg: "var(--color-primary)",
      logo: logoCardMain,
    },
    {
      title: "Atendimento individual",
      tag: "Apoio",
      text: "Cada pessoa é atendida de forma única, respeitando seu tempo e sua história.",
      bg: "var(--color-brand-brown)",
    },
    {
      title: "Escuta qualificada",
      tag: "Diferencial",
      text: "Um espaço seguro, com acolhimento e sem julgamentos.",
      bg: "var(--color-beige)",
    },
    {
      title: "Autoconhecimento",
      tag: "Evolução",
      text: "Compreenda suas emoções e desenvolva mais equilíbrio emocional.",
      bg: "var(--color-muted)",
    },
    {
      title: "Transformação emocional",
      tag: "Resultado",
      text: "Mudança de padrões que impactam sua vida e seus relacionamentos.",
      bg: "var(--color-primary-light)",
    },
    {
      title: "Atuação na raiz do problema",
      tag: "Abordagem",
      text: "A terapia atua na identificação e ressignificação de experiências emocionais, promovendo mudanças reais e duradouras.",
      bg: "var(--color-primary-light)",
      logo: logoCardAlt,
    },
  ];

  return (
    <section
      id="projetos"
      className="py-24 bg-brand-light text-white relative overflow-hidden"
    >
      {/* Detalhe de Fundo (Coordenadas) */}
      <div className="absolute top-0 text-[6rem] md:text-[8rem] font-serif font-black text-brand-brown/5 leading-none select-none">
        TRG// REGENERATIVO
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-start items-start mb-16 gap-3 lg:gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-brown uppercase tracking-[0.3em] text-xs font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-brown"></span> Técnica
            </h2>
            <h3 className="text-5xl md:text-6xl text-brand-brown font-serif leading-tight">
              Formação & abordagem{" "}
              <span className="italic font-light">terapêutica.</span>
            </h3>
          </div>
          <p className="text-brand-brown text-sm max-w-[320px] italic leading-relaxed pt-2 border-t border-brand-brown lg:border-none lg:pt-0 lg:mt-2">
            "Uma atuação baseada em conhecimento, prática clínica e constante
            aperfeiçoamento no cuidado emocional."
          </p>
        </div>

        {/* GRID ASSIMÉTRICO DE PORTFÓLIO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Item 1 - Destaque (Card 1) */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl md:col-span-2 md:aspect-[16/10]">
            <div
              className="absolute inset-0"
              style={{ backgroundColor: projects[0].bg }}
            />
            {projects[0].logo && (
              <img
                src={projects[0].logo}
                className="absolute top-6 left-6 w-58 h-24 object-contain"
                alt="Logo"
              />
            )}

            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block bg-white/30 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full mb-3 tracking-widest">
                {projects[0].tag}
              </span>
              <h4 className="text-xl md:text-2xl font-serif italic text-white">
                {projects[0].title}
              </h4>
              <p className="text-white/90 text-sm mt-2 max-w-lg leading-relaxed">
                {projects[0].text}
              </p>
            </div>
          </div>

          {/* Item 2 e 3 (Quadrados Simples) */}
          {[projects[1], projects[2]].map((p, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <div
                className="absolute inset-0"
                style={{ backgroundColor: p.bg }}
              />
              <div className="absolute inset-0 bg-brand-dark/40 flex flex-col justify-end p-5">
                <span className="text-[9px] uppercase font-bold text-brand-gold mb-1">
                  {p.tag}
                </span>
                <p className="text-white font-medium text-sm mb-1">{p.title}</p>
                <p className="text-gray-200 text-xs leading-tight">{p.text}</p>
              </div>
            </div>
          ))}

          {/* Item 4 e 5 (Quadrados Simples) */}
          {[projects[3], projects[4]].map((p, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <div
                className="absolute inset-0"
                style={{ backgroundColor: p.bg }}
              />
              <div className="absolute inset-0 bg-brand-dark/40 flex flex-col justify-end p-5">
                <span className="text-[9px] uppercase font-bold text-brand-gold mb-1">
                  {p.tag}
                </span>
                <p className="text-white font-medium text-sm mb-1">{p.title}</p>
                <p className="text-gray-200 text-xs leading-tight">{p.text}</p>
              </div>
            </div>
          ))}

          {/* Item 6 - Destaque Final (Card 2) */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl md:col-span-2 md:aspect-[16/10]">
            <div
              className="absolute inset-0"
              style={{ backgroundColor: projects[5].bg }}
            />
            {projects[5].logo && (
              <img
                src={projects[5].logo}
                className="absolute top-6 left-6 w-64 h-32 object-contain"
                alt="Logo"
              />
            )}

            <div className="absolute bottom-6 left-6 right-6 text-right flex flex-col items-end">
              <span className="inline-block bg-brand-brown text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full mb-3 tracking-widest">
                {projects[5].tag}
              </span>
              <h4 className="text-xl md:text-2xl font-serif italic text-white">
                {projects[5].title}
              </h4>
              <p className="text-white/90 text-sm mt-2 max-w-md leading-relaxed">
                {projects[5].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
