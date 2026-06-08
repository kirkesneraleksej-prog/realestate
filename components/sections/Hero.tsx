"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { districts } from "@/data/properties";

export default function Hero() {
  const router = useRouter();
  const [type, setType] = useState("all");
  const [district, setDistrict] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (type !== "all") params.set("type", type);
    if (district) params.set("district", district);
    if (maxPrice) params.set("maxPrice", maxPrice);
    router.push(`/catalog?${params.toString()}`);
  }

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#1B3A5C]/70" aria-hidden="true" />

      {/* Decorative border */}
      <div className="absolute inset-6 border border-white/10 pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#8B5E3C]" />
            <span className="text-[#8B5E3C] text-xs tracking-[0.3em] uppercase font-medium">
              Агентство недвижимости
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Найдите дом,
            <br />
            <span className="text-[#8B5E3C]">который вам нравится</span>
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl">
            Более 15 лет помогаем клиентам находить идеальное жильё.
            Профессиональное сопровождение на каждом этапе сделки.
          </p>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="bg-white/95 backdrop-blur p-5 shadow-2xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-[#1B3A5C] text-xs font-semibold tracking-wider uppercase mb-2">
                  Тип объекта
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full border border-[#E8E0D5] px-3 py-2.5 text-sm text-[#1B3A5C] focus:outline-none focus:border-[#8B5E3C] transition-colors bg-white"
                >
                  <option value="all">Все типы</option>
                  <option value="apartment">Квартира</option>
                  <option value="house">Дом</option>
                  <option value="commercial">Коммерция</option>
                  <option value="land">Участок</option>
                </select>
              </div>
              <div>
                <label className="block text-[#1B3A5C] text-xs font-semibold tracking-wider uppercase mb-2">
                  Район
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full border border-[#E8E0D5] px-3 py-2.5 text-sm text-[#1B3A5C] focus:outline-none focus:border-[#8B5E3C] transition-colors bg-white"
                >
                  {districts.map((d) => (
                    <option key={d} value={d === "Все районы" ? "" : d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[#1B3A5C] text-xs font-semibold tracking-wider uppercase mb-2">
                  Бюджет до
                </label>
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full border border-[#E8E0D5] px-3 py-2.5 text-sm text-[#1B3A5C] focus:outline-none focus:border-[#8B5E3C] transition-colors bg-white"
                >
                  <option value="">Любой</option>
                  <option value="5000000">5 млн ₽</option>
                  <option value="10000000">10 млн ₽</option>
                  <option value="20000000">20 млн ₽</option>
                  <option value="50000000">50 млн ₽</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1B3A5C] text-white py-3 text-sm font-semibold tracking-widest uppercase hover:bg-[#122740] transition-colors duration-200"
            >
              Найти объект
            </button>
          </form>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-8">
            {[
              { value: "500+", label: "Объектов" },
              { value: "15 лет", label: "На рынке" },
              { value: "2000+", label: "Сделок" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-white font-bold text-xl">{stat.value}</div>
                <div className="text-white/50 text-xs tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
