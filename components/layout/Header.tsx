"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О нас" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1B3A5C] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border-2 border-[#8B5E3C] flex items-center justify-center">
              <span className="text-[#8B5E3C] font-bold text-lg leading-none">Э</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-tight tracking-wide">
                ЭСТЕЙТ
              </div>
              <div className="text-[#8B5E3C] text-[10px] tracking-[0.2em] uppercase leading-tight">
                Недвижимость
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#8B5E3C] border-b border-[#8B5E3C] pb-0.5"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+79001234567"
              className="text-white/80 text-sm hover:text-white transition-colors"
            >
              +7 (900) 123-45-67
            </a>
            <Link
              href="/contacts"
              className="px-4 py-2 border border-[#8B5E3C] text-[#8B5E3C] text-sm hover:bg-[#8B5E3C] hover:text-white transition-all duration-200"
            >
              Консультация
            </Link>
          </div>

          {/* Burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Открыть меню"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#122740] border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-wide py-1 border-b border-white/10 ${
                  pathname === link.href ? "text-[#8B5E3C]" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+79001234567"
              className="text-white/60 text-sm mt-2"
            >
              +7 (900) 123-45-67
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
