export default function Testimonials() {
  const reviews = [
    {
      name: "Ana Silva",
      text: "A vistoria da Rayelle evitou que eu recebesse um apartamento com infiltrações graves escondidas.",
    },
    {
      name: "Marcos Souza",
      text: "Excelente profissional. O laudo é extremamente detalhado e ajudou muito na negociação com a construtora.",
    },
  ];

  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-serif text-brand-dark mb-12 italic">
          O que nossos clientes dizem
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-beige italic"
            >
              <p className="text-brand-dark/80 mb-4">"{r.text}"</p>
              <p className="font-bold text-brand-gold">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
