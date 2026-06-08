"use client";

import { useState } from "react";

const contacts = [
  { icon: "📍", label: "Адрес", value: "г. Москва, ул. Тверская, 14, офис 302" },
  { icon: "📞", label: "Телефон", value: "+7 (900) 123-45-67", href: "tel:+79001234567" },
  { icon: "✉️", label: "Email", value: "info@estate.ru", href: "mailto:info@estate.ru" },
  { icon: "🕐", label: "Режим работы", value: "Пн–Пт: 9:00–20:00, Сб–Вс: 10:00–18:00" },
];

export default function ContactsPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputCls =
    "w-full border border-[#E8E0D5] px-4 py-3 text-sm focus:outline-none focus:border-[#8B5E3C] transition-colors bg-white";

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="bg-[#1B3A5C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#8B5E3C]" />
            <span className="text-[#8B5E3C] text-xs tracking-[0.3em] uppercase">Связь</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Контакты</h1>
          <p className="text-white/60">Свяжитесь с нами любым удобным способом</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contacts info */}
          <div>
            <h2 className="text-[#1B3A5C] font-bold text-xl mb-6 pb-3 border-b border-[#E8E0D5]">
              Реквизиты
            </h2>
            <div className="space-y-5 mb-8">
              {contacts.map((c) => (
                <div key={c.label} className="flex gap-4">
                  <span className="text-xl mt-0.5">{c.icon}</span>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-[#1B3A5C] hover:text-[#8B5E3C] transition-colors font-medium">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#1B3A5C] font-medium">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <h3 className="text-[#1B3A5C] font-semibold text-sm mb-4 pb-3 border-b border-[#E8E0D5]">
              Мы в соцсетях
            </h3>
            <div className="flex gap-3">
              {[
                { label: "ВКонтакте", abbr: "VK" },
                { label: "Telegram", abbr: "TG" },
                { label: "WhatsApp", abbr: "WA" },
              ].map((s) => (
                <a
                  key={s.abbr}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 border border-[#1B3A5C] text-[#1B3A5C] flex items-center justify-center text-xs font-semibold hover:bg-[#1B3A5C] hover:text-white transition-all"
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-[#1B3A5C] font-bold text-xl mb-6 pb-3 border-b border-[#E8E0D5]">
              Форма обратной связи
            </h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-10 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-green-800 font-semibold text-lg mb-2">
                  Сообщение отправлено!
                </h3>
                <p className="text-green-600 text-sm">
                  Мы свяжемся с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1B3A5C] uppercase tracking-wide mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1B3A5C] uppercase tracking-wide mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (900) 000-00-00"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputCls}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1B3A5C] uppercase tracking-wide mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="ivan@mail.ru"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1B3A5C] uppercase tracking-wide mb-2">
                      Тема
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={inputCls}
                    >
                      <option value="">Выберите тему</option>
                      <option>Покупка недвижимости</option>
                      <option>Продажа недвижимости</option>
                      <option>Аренда</option>
                      <option>Оценка объекта</option>
                      <option>Другое</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#1B3A5C] uppercase tracking-wide mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Опишите ваш запрос..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <div className="flex items-start justify-between gap-6">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="#" className="text-[#8B5E3C] hover:underline">
                      политикой конфиденциальности
                    </a>
                  </p>
                  <button
                    type="submit"
                    className="flex-shrink-0 px-8 py-3 bg-[#1B3A5C] text-white text-sm font-semibold hover:bg-[#122740] transition-colors"
                  >
                    Отправить
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12">
          <h2 className="text-[#1B3A5C] font-bold text-xl mb-6 pb-3 border-b border-[#E8E0D5]">
            Как нас найти
          </h2>
          <div className="bg-[#E8E0D5] h-72 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <div className="text-5xl mb-3">📍</div>
              <p className="font-medium">г. Москва, ул. Тверская, 14, офис 302</p>
              <p className="text-sm mt-1 text-gray-400">
                (Здесь размещается карта — Яндекс.Карты или Google Maps)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
