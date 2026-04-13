import perfil from "../assets/midia/projetos/clinica_Elo.jpeg";

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 bg-brand-light relative overflow-hidden"
    >
      {/* Texto decorativo ao fundo */}
      <div className="absolute left-0 bottom-0 opacity-[0.03] pointer-events-none">
        <span className="text-[18rem] font-serif font-black text-brand-dark leading-none select-none uppercase">
          Socorro
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* LADO DA IMAGEM (5/12) */}
        <div className="lg:col-span-5 relative">
          {/* Moldura em Arco - Consistência com o Hero */}
          <div className="relative z-10 w-full max-w-sm mx-auto aspect-[4/5] rounded-t-full border-[10px] border-white shadow-2xl overflow-hidden">
            <img
              src={perfil}
              className="w-full h-full object-cover scale-110"
              alt="Terapeuta Socorro Lima"
            />
          </div>

          {/* Badge Flutuante de Experiência */}
          <div className="absolute -bottom-6 -right-4 md:right-0 bg-brand-brown text-white p-8 rounded-2xl shadow-2xl z-20 animate-bounce-slow">
            <p className="text-4xl font-serif italic leading-none">260+</p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold mt-2 opacity-80">
              Atendimentos
            </p>
          </div>

          {/* Detalhe Geométrico atrás da foto */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-brand-beige/40 -z-10 rounded-full blur-3xl" />
        </div>

        {/* LADO DO TEXTO (7/12) */}
        <div className="lg:col-span-7">
          <div className="space-y-0">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-gold"></span>
              <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
                A Terapeuta
              </h2>
            </div>

            <h3 className="text-5xl md:text-4xl font-serif text-brand-dark leading-tight">
              Socorro Lima <br />
              <span className="italic font-light text-brand-dark/70">
                Terapeuta.
              </span>
            </h3>

            <div className="space-y-4 text-brand-dark/80 text-lg leading-relaxed max-w-2xl">
              <p>
                Sou psicanalista e terapeuta, com atuação voltada ao cuidado
                emocional e à transformação interna. Através de uma escuta
                acolhedora e uma abordagem profunda, ajudo pessoas a
                compreenderem suas emoções, superarem padrões limitantes e
                desenvolverem mais equilíbrio e qualidade de vida.
              </p>
            </div>

            {/* Grid de Diferenciais Rápidos */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-brand-beige">
              <div>
                <p className="text-brand-gold font-bold text-xl mb-1 italic font-serif">
                  Escuta Acolhedora
                </p>
                <p className="text-xs uppercase tracking-widest text-brand-dark/50 font-bold">
                  Sem julgamentos
                </p>
              </div>
              <div>
                <p className="text-brand-gold font-bold text-xl mb-1 italic font-serif">
                  Atendimento Personalizado
                </p>
                <p className="text-xs uppercase tracking-widest text-brand-dark/50 font-bold">
                  Cada história é única
                </p>
              </div>
            </div>

            {/* CTA ou Assinatura */}
            <div className="pt-6">
              <button className="group flex items-center gap-4 text-brand-dark font-bold uppercase text-xs tracking-[0.2em] hover:text-brand-gold transition-colors">
                Certificações
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
