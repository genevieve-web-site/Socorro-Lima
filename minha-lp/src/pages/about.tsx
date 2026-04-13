import perfil from "../assets/midia/projetos/clinica_Elo.jpeg";
import logo from "../assets/logo/Logo.png";

export default function About() {
  const formacoes = [
    "Formação em Psicanálise",
    "Formação em Análise e Interpretação de Desenhos",
    "Capacitação em Leitura Comportamental",
    "Capacitação em Análise Corporal",
    "Formação em Atendimento Terapêutico para Crianças e Adolescentes",
    "Estudos e práticas voltados à saúde emocional e transtornos psicológicos",
  ];

  return (
    <section
      id="sobre"
      className="py-24 bg-brand-light relative overflow-hidden"
    >
      {/* Texto decorativo ao fundo - SEO: aria-hidden para não poluir leitores de tela */}
      <div
        className="absolute left-0 bottom-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[18rem] font-serif font-black text-brand-dark leading-none select-none uppercase">
          Socorro
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* LADO DA IMAGEM (5/12) */}
          <div className="lg:col-span-5 relative">
            {/* Moldura em Arco */}
            <div className="relative z-10 w-full max-w-sm mx-auto aspect-[4/5] rounded-t-full border-[10px] border-white shadow-2xl overflow-hidden">
              <img
                src={perfil}
                className="w-full h-full object-cover scale-110"
                alt="Socorro Lima - Psicanalista e Terapeuta atuante na Bahia"
              />
            </div>

            {/* Badge Flutuante de Experiência */}
            <div className="absolute -bottom-6 -right-4 md:right-0 bg-brand-brown text-white p-8 rounded-2xl shadow-2xl z-20 animate-bounce-slow">
              <p className="text-4xl font-serif italic leading-none">260+</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold mt-2 opacity-80">
                Vidas Transformadas
              </p>
            </div>

            {/* Detalhe Geométrico atrás da foto */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-brand-beige/40 -z-10 rounded-full blur-3xl"
              aria-hidden="true"
            />
          </div>

          {/* LADO DO TEXTO (7/12) */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-brand-gold"></span>
                <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
                  A Terapeuta
                </h2>
              </div>

              <h3 className="text-5xl md:text-4xl font-serif text-brand-dark leading-tight">
                Socorro Lima <br />
                <span className="italic font-light text-brand-dark/70">
                  Psicanalista e Terapeuta.
                </span>
              </h3>

              <div className="text-brand-dark/80 text-lg leading-relaxed max-w-2xl">
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

              {/* SESSÃO: FORMAÇÕES E CAPACITAÇÕES */}
              <div className="pt-10 space-y-6">
                <h4 className="text-brand-dark font-serif text-2xl italic border-b border-brand-beige pb-2">
                  Formações e Capacitações Profissionais
                </h4>
                <ul
                  className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6"
                  aria-label="Lista de formações acadêmicas"
                >
                  {formacoes.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-brand-dark/80 text-sm"
                    >
                      <span className="text-brand-gold mt-1" aria-hidden="true">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="bg-brand-beige/20 p-6 rounded-2xl border-l-4 border-brand-gold">
                  <h5 className="font-bold text-brand-dark text-sm uppercase tracking-widest mb-2">
                    Experiência Complementar
                  </h5>
                  <p className="text-brand-dark/70 text-sm leading-relaxed italic">
                    Atuação prática com atendimentos terapêuticos, com foco no
                    desenvolvimento emocional, comportamento humano e
                    acompanhamento de crianças, adolescentes e adultos.
                    Formações adquiridas ao longo da prática clínica e estudos
                    contínuos na área da saúde mental.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LOGO NO FIM DO COMPONENTE */}
        <div className="mt-20 flex justify-center border-t border-brand-beige/50 pt-12">
          <img
            src={logo}
            alt="Logo Oficial Socorro Lima - Terapia e Psicanálise"
            className="h-24 md:h-32 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
}
