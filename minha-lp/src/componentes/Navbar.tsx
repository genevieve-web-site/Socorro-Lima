import { useState } from "react";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import logo from "../assets/logos/MARCA-D'AGUA-4.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Início", href: "/home" },
    { name: "Sobre", href: "/about" },
    { name: "Serviços", href: "/home#servicos" },
    { name: "Projetos", href: "/home#projetos" },
  ];

  return (
    // w-full e px-0 para garantir que nada limite a largura
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent py-4 px-6 md:px-12">
      {/* Grid de 3 colunas que ocupa 100% da largura disponível */}
      <div className="w-full grid grid-cols-3 items-center">
        {/* 1. CANTO ESQUERDO: MENU */}
        <div className="flex justify-start">
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-gold hover:text-brand-dark transition-colors p-2"
              aria-label="Abrir menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Dropdown do Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 mt-4 w-64 bg-brand-light shadow-2xl rounded-br-3xl border border-brand-beige overflow-hidden animate-in slide-in-from-left duration-300">
                <ul className="flex flex-col">
                  {menuItems.map((item) => (
                    <li
                      key={item.name}
                      className="border-b border-brand-beige/50 last:border-0"
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-brand-dark font-medium px-8 py-5 hover:bg-brand-beige/30 transition-all block"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* 2. CENTRO ABSOLUTO: LOGO */}
        <div className="flex justify-center">
          <a href="/home" className="flex flex-col items-center">
            <img
              src={logo}
              alt="Rayelle Engenharia"
              className="h-20 md:h-28 w-auto"
            />
            {/* Texto auxiliar abaixo da logo */}
            <span className="hidden md:block text-[10px] tracking-[0.4em] uppercase text-brand-dark font-bold -mt-2">
              Rayelle Mayla
            </span>
          </a>
        </div>

        {/* 3. CANTO DIREITO: ÍCONES SOCIAIS */}
        <div className="flex justify-end items-center gap-4 md:gap-8 text-brand-dark">
          <a
            href="https://instagram.com/rayellemayla.eng"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-gold transition-transform hover:-translate-y-1"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://wa.me/seu-numero"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-gold transition-transform hover:-translate-y-1"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}
