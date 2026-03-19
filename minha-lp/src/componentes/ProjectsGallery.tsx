import imgProject from "../assets/serviços/OBRA.png";
import imgProject2 from "../assets/serviços/OBRA2.png";
import imgProject3 from "../assets/serviços/OBRA3.png";
import imgProject4 from "../assets/serviços/OBRA4.png";
import imgProject5 from "../assets/serviços/OBRA5.png";
import imgProject6 from "../assets/serviços/OBRA.png";
export default function ProjectsGallery() {
  const projects = [
    {
      src: imgProject,
      title: "Residencial Lux",
      tag: "Vistoria de Entrega",
    },
    {
      src: imgProject2,
      title: "Edifício Horizonte",
      tag: "Inspeção Diagnóstica",
    },
    {
      src: imgProject3,
      title: "Condomínio Premiere",
      tag: "Laudo Técnico",
    },
    {
      src: imgProject4,
      title: "Vistoria Comercial",
      tag: "Vistoria Cautelar",
    },
    {
      src: imgProject5,
      title: "Obra 5 - Detalhe",
      tag: "Patologia",
    }, // Adicionado 5º para grid
    {
      src: imgProject6,
      title: "Obra 6 - Fachada",
      tag: "Gerenciamento",
    }, // Adicionado 6º para grid
  ];

  return (
    <section
      id="projetos"
      className="py-24 bg-brand-dark text-white relative overflow-hidden"
    >
      {/* Detalhe de Fundo (Coordenadas) */}
      <div className="absolute right-10 top-20 text-[6rem] md:text-[10rem] font-serif font-black text-white/5 leading-none select-none">
        03 // PORTFÓLIO
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-gold"></span> Histórico de
              Sucesso
            </h2>
            <h3 className="text-5xl md:text-6xl font-serif leading-tight">
              Obras Atendidas & <br />
              <span className="italic font-light">Projetos Executados.</span>
            </h3>
          </div>
          <p className="text-white/60 text-sm max-w-[250px] italic leading-relaxed pt-3 border-t border-brand-brown lg:border-none">
            "Mais de 500 laudos emitidos com rigor técnico, garantindo a
            conformidade e a segurança de grandes empreendimentos."
          </p>
        </div>

        {/* GRID ASSIMÉTRICO DE PORTFÓLIO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Item 1 - Destaque */}
          <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl md:col-span-2 md:aspect-[16/10]">
            <img
              src={projects[0].src}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt={projects[0].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block bg-brand-brown text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full mb-3 tracking-widest">
                {projects[0].tag}
              </span>
              <h4 className="text-xl md:text-2xl font-serif italic text-white group-hover:text-brand-gold transition-colors">
                {projects[0].title}
              </h4>
            </div>
          </div>

          {/* Item 2 e 3 (Quadrados Simples) */}
          {[projects[1], projects[2]].map((p, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={p.src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={p.title}
              />
              <div className="absolute inset-0 bg-brand-dark/30 group-hover:bg-brand-dark/50 transition-colors flex flex-col justify-end p-5">
                <span className="text-[9px] uppercase font-bold text-brand-gold mb-1">
                  {p.tag}
                </span>
                <p className="text-white font-medium text-sm">{p.title}</p>
              </div>
            </div>
          ))}

          {/* Item 4 e 5 (Quadrados Simples) */}
          {[projects[3], projects[4]].map((p, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={p.src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={p.title}
              />
              <div className="absolute inset-0 bg-brand-dark/30 group-hover:bg-brand-dark/50 transition-colors flex flex-col justify-end p-5">
                <span className="text-[9px] uppercase font-bold text-brand-gold mb-1">
                  {p.tag}
                </span>
                <p className="text-white font-medium text-sm">{p.title}</p>
              </div>
            </div>
          ))}

          {/* Item 6 - Destaque Final */}
          <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl md:col-span-2 md:aspect-[16/10]">
            <img
              src={projects[5].src}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt={projects[5].title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-6 left-6 right-6 text-right flex flex-col items-end">
              <span className="inline-block bg-brand-brown text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full mb-3 tracking-widest">
                {projects[5].tag}
              </span>
              <h4 className="text-xl md:text-2xl font-serif italic text-white group-hover:text-brand-gold transition-colors">
                {projects[5].title}
              </h4>
            </div>
          </div>
        </div>

        {/* CTA FINAL DE PORTFÓLIO */}
        <div className="mt-20 text-center flex flex-col items-center gap-6">
          <p className="text-white/50 text-xs tracking-widest uppercase">
            Procura um projeto ou laudo específico?
          </p>
          <button className="bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-all shadow-xl">
            Solicitar Portfólio Técnico{" "}
            <span className="text-brand-brown">(PDF)</span>
          </button>
        </div>
      </div>
    </section>
  );
}
