import { Quote, Smartphone, Thermometer, ShieldCheck, Zap } from "lucide-react";

export default function TrustSection() {
  const equipments = [
    {
      name: "Termografia Infravermelha",
      icon: <Thermometer size={24} />,
      desc: "Detecção de infiltrações e falhas elétricas invisíveis a olho nu.",
    },
    {
      name: "Esclerometria Digital",
      icon: <Zap size={24} />,
      desc: "Avaliação da resistência e dureza do concreto estrutural.",
    },
    {
      name: "Medição a Laser",
      icon: <Smartphone size={24} />,
      desc: "Precisão milimétrica para conferência de áreas e desvios.",
    },
  ];

  const testimonials = [
    {
      text: "A vistoria da Rayelle foi o melhor investimento. Ela encontrou problemas na impermeabilização que a construtora tentou esconder.",
      author: "Juliana Mendes",
      role: "Proprietária Residencial Lux",
    },
    {
      text: "Laudo extremamente técnico e detalhado. Passou total segurança para o nosso processo de recebimento do imóvel.",
      author: "Ricardo Lima",
      role: "Investidor Imobiliário",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LADO ESQUERDO: EQUIPAMENTOS (6/12) */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-brand-gold"></span> Tecnologia
                de Ponta
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif text-brand-dark leading-tight">
                Instrumentação <br />
                <span className="italic font-light">de Alta Precisão.</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {equipments.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-6 p-6 rounded-2xl border border-brand-beige hover:bg-brand-light transition-all duration-500"
                >
                  <div className="bg-brand-gold/10 p-4 rounded-t-full text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark uppercase tracking-widest text-sm mb-1">
                      {item.name}
                    </h4>
                    <p className="text-brand-dark/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LADO DIREITO: DEPOIMENTOS (6/12) */}
          <div className="lg:col-span-6 relative lg:pt-20">
            {/* Detalhe Decorativo de Fundo */}
            <div className="absolute top-0 right-0 -z-10 text-brand-beige/20 select-none">
              <Quote size={200} strokeWidth={0.5} />
            </div>

            <div className="space-y-8 relative">
              <h3 className="text-3xl font-serif italic text-brand-dark mb-10">
                O que dizem sobre <br /> nossos diagnósticos
              </h3>

              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`relative p-8 rounded-2xl shadow-sm border-l-4 border-brand-gold bg-brand-light/50 backdrop-blur-sm
                             ${i === 1 ? "lg:ml-12" : ""}`}
                >
                  <Quote className="text-brand-gold/30 mb-4" size={32} />
                  <p className="text-brand-dark/80 text-lg italic leading-relaxed mb-6">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-[1px] bg-brand-gold"></div>
                    <div>
                      <p className="font-bold text-brand-dark uppercase text-[10px] tracking-widest">
                        {t.author}
                      </p>
                      <p className="text-brand-gold text-[10px] font-medium">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Selo de Confiança */}
              <div className="pt-10 flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                <ShieldCheck size={40} className="text-brand-dark" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark max-w-[150px]">
                  Garantia de conformidade técnica e jurídica
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
