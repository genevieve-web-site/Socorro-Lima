export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h4 className="text-brand-gold font-bold mb-4 uppercase tracking-widest">
            Rayelle Engenharia
          </h4>
          <p className="text-white/60 text-sm">
            Protegendo seu sonho através da engenharia diagnóstica de precisão.
          </p>
        </div>
        <div>
          <h4 className="text-brand-gold font-bold mb-4 uppercase tracking-widest">
            Links
          </h4>
          <ul className="text-white/60 space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Início
              </a>
            </li>
            <li>
              <a href="/#servicos" className="hover:text-white">
                Serviços
              </a>
            </li>
            <li>
              <a href="/#projetos" className="hover:text-white">
                Projetos
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                Sobre
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-brand-gold font-bold mb-4 uppercase tracking-widest">
            Contato
          </h4>
          <p className="text-white/60 text-sm mb-2">
            contato@rayelleeng.com.br
          </p>
          <p className="text-white/60 text-sm">(XX) 9XXXX-XXXX</p>
          <p className="text-white/60 text-sm mt-2">
            Atendimento em Salvador/BA e região
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 pt-8 text-white/30 text-xs max-w-7xl mx-auto px-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <span>
          © 2026 Rayelle Mayla Engenharia. Todos os direitos reservados.
        </span>
        <span className="md:text-right">
          desenvolvido por{" "}
          <a
            href="https://www.genevieve.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Genevieve Website
          </a>
        </span>
      </div>
    </footer>
  );
}
