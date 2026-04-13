export default function ProjectsGallery() {
  const projects = [
    {
      title: "Entenda além do comportamento",
      tag: "A técnica",
      text: "Nem sempre a dificuldade está no fazer, mas no que sentimos. A psicanálise ajuda a compreender emoções, conflitos e padrões internos que se repetem — muitas vezes sem perceber — e que impactam sua rotina, seus relacionamentos e a forma como você lida com desafios. Ao dar nome ao que sente e entender de onde vem, fica mais possível escolher caminhos com mais clareza e leveza.",
      bg: "var(--color-primary)",
    },

    {
      title: "Autoconhecimento que transforma",
      tag: "Abordagem",
      text: "Ao compreender suas emoções e padrões, você desenvolve mais autonomia, equilíbrio e qualidade de vida no cotidiano. O processo terapêutico favorece uma leitura mais gentil de si, amplia recursos internos para lidar com ansiedade, estresse e inseguranças e ajuda a construir uma rotina com mais sentido. Pequenas mudanças internas podem refletir em decisões mais firmes, limites mais saudáveis e bem-estar sustentado.",
      bg: "var(--color-calm-light)",
    },
  ];

  const firstProject = projects[0];
  const middleProjects = projects.slice(1, -1);
  const lastProject =
    projects.length > 1 ? projects[projects.length - 1] : null;

  return (
    <section
      id="projetos"
      className="py-20 sm:py-24 bg-brand-light text-white relative overflow-hidden"
    >
      {/* Detalhe de Fundo (Coordenadas) */}
      <div className="absolute top-2 text-[3.5rem] sm:text-[6rem] md:text-[8rem] font-serif font-black text-brand-brown/5 leading-none select-none">
        Psicanálise
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-start items-start mb-12 sm:mb-16 gap-3 lg:gap-6">
          <div className="max-w-2xl">
            <h2 className="text-brand-brown uppercase tracking-[0.3em] text-xs font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-brown"></span> Técnica
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-6xl text-brand-brown font-serif leading-tight">
              Psicanálise aplicada à{" "}
              <span className="italic font-light">Terapia.</span> Ocupacional
            </h3>
          </div>
          <p className="text-brand-brown text-lg max-w-[320px] italic leading-relaxed pt-2 border-t border-brand-brown lg:border-none lg:pt-0 lg:mt-2">
            "A psicanálise busca compreender como emoções, experiências e o
            inconsciente influenciam o seu dia a dia."
          </p>
        </div>

        {/* GRID ASSIMÉTRICO DE PORTFÓLIO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Destaque inicial */}
          <div className="relative aspect-[3/4] sm:aspect-[3/4] overflow-hidden rounded-2xl md:aspect-[16/10]">
            <div
              className="absolute inset-0"
              style={{ backgroundColor: firstProject.bg }}
            />

            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6">
              <span className="inline-block bg-white/30 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full mb-3 tracking-widest">
                {firstProject.tag}
              </span>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-white">
                {firstProject.title}
              </h4>
              <p className="text-white/90 text-sm sm:text-base mt-2 max-w-lg leading-relaxed">
                {firstProject.text}
              </p>
            </div>
          </div>

          {/* Cards intermediários (se existirem) */}
          {middleProjects.map((p, i) => (
            <div
              key={`${p.title}-${i}`}
              className="relative aspect-[3/4] sm:aspect-square overflow-hidden rounded-2xl"
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

          {/* Destaque final (se houver mais de 1 card) */}
          {lastProject && (
            <div className="relative aspect-[3/4] sm:aspect-[3/4] overflow-hidden rounded-2xl md:aspect-[16/10]">
              <div
                className="absolute inset-0"
                style={{ backgroundColor: lastProject.bg }}
              />

              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6">
                <span className="inline-block bg-brand-brown text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full mb-3 tracking-widest">
                  {lastProject.tag}
                </span>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-white">
                  {lastProject.title}
                </h4>
                <p className="text-white/90 text-sm sm:text-base mt-2 max-w-lg leading-relaxed">
                  {lastProject.text}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
