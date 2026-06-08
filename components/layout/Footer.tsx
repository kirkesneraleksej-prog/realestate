import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B3A5C] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border-2 border-[#8B5E3C] flex items-center justify-center">
                <span className="text-[#8B5E3C] font-bold">Э</span>
              </div>
              <div>
                <div className="text-white font-bold tracking-wide">ЭСТЕЙТ</div>
                <div className="text-[#8B5E3C] text-[10px] tracking-[0.2em] uppercase">
                  Недвижимость
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              Профессиональное агентство недвижимости с 15-летним опытом. Помогаем найти дом мечты.
            </p>
            <div className="flex gap-3">
              {["VK", "TG", "WA"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-xs hover:border-[#8B5E3C] hover:text-[#8B5E3C] transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5 border-b border-white/10 pb-3">
              Разделы
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Главная" },
                { href: "/catalog", label: "Каталог объектов" },
                { href: "/about", label: "О компании" },
                { href: "/contacts", label: "Контакты" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:pl-1 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Типы объектов */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5 border-b border-white/10 pb-3">
              Объекты
            </h4>
            <ul className="space-y-3 text-sm">
              {["Квартиры", "Дома и коттеджи", "Коммерция", "Земля", "Элитная недвижимость"].map(
                (t) => (
                  <li key={t}>
                    <Link
                      href="/catalog"
                      className="hover:text-white hover:pl-1 transition-all duration-200"
                    >
                      {t}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5 border-b border-white/10 pb-3">
              Контакты
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-[#8B5E3C] mt-0.5">📍</span>
                <span>г. Москва, ул. Тверская, 14, офис 302</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8B5E3C] mt-0.5">📞</span>
                <a href="tel:+79001234567" className="hover:text-white transition-colors">
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8B5E3C] mt-0.5">✉️</span>
                <a href="mailto:info@estate.ru" className="hover:text-white transition-colors">
                  info@estate.ru
                </a>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8B5E3C] mt-0.5">🕐</span>
                <span>Пн–Пт: 9:00–20:00, Сб–Вс: 10:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2025 ЭСТЕЙТ. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
