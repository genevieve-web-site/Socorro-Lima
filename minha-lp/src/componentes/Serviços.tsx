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
      desc: "Análise e Interpretação de Desenhos (principalmente de  crianças)",
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
      className="py-8 sm:py-24 relative overflow-hidden bg-fixed bg-cover bg-center"
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
          <p className="text-brand-dark/60 text-base md:text-lg max-w-xs border-l border-brand-beige pl-4 italic">
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
              <h4 className="text-[22px] sm:text-xl font-serif text-brand-dark mb-2 group-hover:text-brand-gold transition-colors italic">
                {item.title}
              </h4>
              <p className="text-lg text-brand-dark/60">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* LISTA COMPLEMENTAR E CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-6 border-t border-brand-beige/50 p-6 sm:p-8 rounded-2xl bg-cover bg-center relative">
          <div className="absolute inset-0 bg- rounded-2xl" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {listServices.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary shrink-0" size={24} />
                <span className="text-brand-dark/80 font-medium text-sm md:text-base">
                  {s}
                </span>
              </div>
            ))}
          </div>
          {/* TEXTO DE FUNDO (DECORATIVO) */}
          <div className="absolute top-4 left-10 -translate-y-1/2 select-none pointer-events-none hidden lg:block">
            <span className="text-[12rem] mt-0 font-serif font-black text-brand-gold/10 leading-none">
              Terapia
            </span>
          </div>

          <div className="bg-[var(--color-primary)] mt-18 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl border border-white/50 relative z-10">
            <p className="text-white font-serif italic text-base sm:text-lg text-center md:text-left">
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
        {/* SEÇÃO DE ATENDIMENTOS (Adicione logo abaixo do fechamento da <nav>) */}
        <div className="mt-8 md:mt-32 px-4 sm:px-6 md:px-12 pb-12">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-brand-beige overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Coluna de Texto: Informações de Atendimento */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-brand-dark)] mb-4">
                Atendimentos
              </h2>

              <p className="text-lg text-[var(--color-calm-text)] mb-6">
                Sessões{" "}
                <span className="font-semibold text-[var(--color-action)]">
                  online
                </span>{" "}
                e presenciais com duração de{" "}
                <span className="font-semibold text-[var(--color-brand-primary)]">
                  45 a 50 min
                </span>
                .
              </p>
              <h4 className="font-semibold text-[var(--color-brand-dark)] uppercase tracking-wider text-sm">
                Atendimentos Online:
              </h4>
              <ul className="grid grid-cols-1 mb-12  sm:grid-cols-2 gap-2 text-sm text-[var(--color-calm-text)]">
                <li className="flex items-start gap-2"> 👩🏽‍💻 WhatsApp </li>
                <li className="flex items-start gap-2"> 👩🏽‍💻 Google Meet </li>
              </ul>

              <div className="space-y-4">
                <h3 className="font-semibold text-[var(--color-brand-dark)] uppercase tracking-wider text-sm">
                  Atendimentos Presenciais:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[var(--color-calm-text)]">
                  <li className="flex items-start gap-2">
                    📍 Policlínica (Santa Maria da Vitória)
                  </li>
                  <li className="flex items-start gap-2">
                    📍 Fisio Clin (Bom Jesus da Lapa)
                  </li>
                  <li className="flex items-start gap-2">
                    📍 Projeto (Jaborandi)
                  </li>
                  <li className="flex items-start gap-2">📍 Coribe - Bahia</li>
                </ul>
              </div>

              <div className="mt-8 p-4 bg-[var(--color-brand-surface)] rounded-xl border-l-4 border-[var(--color-action)]">
                <p className="text-sm font-medium text-[var(--color-brand-dark)]">
                  Oferecemos pacotes promocionais ou valor por sessão avulsa.
                  <a
                    href="https://wa.me/557781135298"
                    className="ml-2 underline text-[var(--color-action)] hover:text-[var(--color-brand-primary)]"
                  >
                    Consultar valores
                  </a>
                </p>
              </div>
            </div>

            {/* Coluna do Mapa: Google Maps */}
            <div className="h-64 md:h-auto min-h-[300px] relative w-full">
              {/* Comentário deve ficar aqui, fora da tag */}
              <iframe
                title="Localização Socorro Lima"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.237245291672!2d-44.20221052541524!3d-13.397631153724937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7593d4536d45d73%3A0x409af24d92e94c6e!2sELO%20Medical%20Center!5e0!3m2!1spt-BR!2sbr!4v1776104899409!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=" transition-all duration-500"
              ></iframe>
              <div className="absolute bottom-4 right-4">
                <a
                  href="https://maps.app.goo.gl/4srKlaawA05mtkytd"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white px-4 py-2 rounded-full shadow-lg text-xs font-bold text-[var(--color-brand-dark)] hover:scale-105 transition-transform inline-block"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
