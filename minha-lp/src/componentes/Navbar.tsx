import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle } from "lucide-react";

import logo from "../assets/logo/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current) {
        return;
      }

      if (!menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Início", href: "/home" },
    { name: "Sobre Mim ", href: "/about" },
    { name: "Depoimentos", href: "/#testimonials" },
    { name: "Técnicas", href: "/home#projetos" },
  ];

  return (
    // w-full e px-0 para garantir que nada limite a largura
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent py-3 sm:py-4 px-4 sm:px-6 md:px-12">
      {/* Grid de 3 colunas que ocupa 100% da largura disponível */}
      <div className="w-full grid grid-cols-3 items-center">
        {/* 1. CANTO ESQUERDO: MENU */}
        <div className="flex justify-start">
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-primary-dark)] transition-colors p-2"
              aria-label="Abrir menu"
            >
              <Menu size={28} className={isOpen ? "hidden" : "block"} />
            </button>

            {/* Dropdown do Menu */}
            {isOpen && (
              <div
                className="absolute top-full left-0 mt-3 w-56 sm:w-64 shadow-2xl rounded-br-3xl border border-brand-beige overflow-hidden animate-in slide-in-from-left duration-300"
                style={{ backgroundColor: "var(    --color-brand-gold)" }}
              >
                <ul className="flex flex-col">
                  {menuItems.map((item) => (
                    <li
                      key={item.name}
                      className="border-b border-brand-beige/50 last:border-0"
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-brand-beige font-medium px-8 py-5 hover:bg-brand-beige/30 transition-all block"
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
              alt="Terapeuta Socorro Lima - Logo"
              className="h-22 sm:h-20 md:h-38 w-auto"
            />
          </a>
        </div>

        {/* 3. CANTO DIREITO: ÍCONES SOCIAIS */}
        <div className="flex justify-end items-center gap-3 sm:gap-4 md:gap-8 text-brand-dark">
          <a
            href="https://wa.me/557781135298"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-calm-text)]"
          >
            <MessageCircle size={22} />
          </a>
          <a
            href="https://www.instagram.com/terapeutasocorrolima/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[var(--color-calm-text)]"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
