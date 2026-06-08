"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { properties, agents, propertyTypeLabels } from "@/data/properties";
import Button from "@/components/ui/Button";

function formatPrice(price: number) {
  if (price >= 1_000_000) {
    return (price / 1_000_000).toFixed(1).replace(".0", "") + " млн ₽";
  }
  return price.toLocaleString("ru-RU") + " ₽";
}

export default function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const property = properties.find((p) => p.id === id);

  if (!property) notFound();

  const agent = agents[0];
  const [activeImg, setActiveImg] = useState(0);
  const [formState, setFormState] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-[#FAF7F2] border-b border-[#E8E0D5] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500 flex gap-2 flex-wrap">
          <Link href="/" className="hover:text-[#1B3A5C]">Главная</Link>
          <span>/</span>
          <Link href="/catalog" className="hover:text-[#1B3A5C]">Каталог</Link>
          <span>/</span>
          <span className="text-[#1B3A5C]">{property.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Gallery + Details */}
          <div className="lg:col-span-2">
            {/* Gallery */}
            <div className="mb-6">
              <div className="relative aspect-[16/9] overflow-hidden mb-2">
                <Image
                  src={property.images[activeImg]}
                  alt={`${property.title} — фото ${activeImg + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-[#1B3A5C] text-white text-xs px-2.5 py-1">
                    {propertyTypeLabels[property.type]}
                  </span>
                  {property.isNew && (
                    <span className="bg-[#8B5E3C] text-white text-xs px-2.5 py-1">Новое</span>
                  )}
                </div>
              </div>
              {property.images.length > 1 && (
                <div className="flex gap-2">
                  {property.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`relative w-20 h-14 overflow-hidden flex-shrink-0 border-2 transition-colors ${
                        i === activeImg ? "border-[#8B5E3C]" : "border-transparent"
                      }`}
                      aria-label={`Фото ${i + 1}`}
                    >
                      <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title & Price */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-[#1B3A5C] mb-2">
                  {property.title}
                </h1>
                <p className="text-gray-500">{property.address}, {property.district} район</p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-3xl font-bold text-[#1B3A5C]">
                  {formatPrice(property.price)}
                </div>
                {property.area > 0 && (
                  <div className="text-sm text-gray-400">
                    {Math.round(property.price / property.area).toLocaleString("ru-RU")} ₽/м²
                  </div>
                )}
              </div>
            </div>

            {/* Characteristics */}
            <div className="bg-[#FAF7F2] border border-[#E8E0D5] p-6 mb-8">
              <h2 className="text-[#1B3A5C] font-semibold text-lg mb-5 pb-3 border-b border-[#E8E0D5]">
                Характеристики
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: "Тип", value: propertyTypeLabels[property.type] },
                  ...(property.rooms > 0 ? [{ label: "Комнаты", value: `${property.rooms} комн.` }] : []),
                  { label: "Площадь", value: `${property.area} м²` },
                  ...(property.floor ? [{ label: "Этаж", value: `${property.floor} из ${property.totalFloors}` }] : []),
                  { label: "Район", value: property.district },
                ].map((item) => (
                  <div key={item.label} className="bg-white p-3 border border-[#E8E0D5]">
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">{item.label}</div>
                    <div className="font-semibold text-[#1B3A5C] text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-[#1B3A5C] font-semibold text-lg mb-4 pb-3 border-b border-[#E8E0D5]">
                Описание
              </h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            {property.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-[#1B3A5C] font-semibold text-lg mb-4 pb-3 border-b border-[#E8E0D5]">
                  Особенности
                </h2>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1.5 border border-[#8B5E3C] text-[#8B5E3C] text-sm"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Map placeholder */}
            <div>
              <h2 className="text-[#1B3A5C] font-semibold text-lg mb-4 pb-3 border-b border-[#E8E0D5]">
                Расположение
              </h2>
              <div className="bg-[#E8E0D5] h-64 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-4xl mb-2">📍</div>
                  <p className="text-sm">{property.address}</p>
                  <p className="text-xs mt-1">(Карта — подключить Яндекс.Карты или Google Maps)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Agent + Form */}
          <div className="lg:col-span-1">
            {/* Agent */}
            <div className="bg-white border border-[#E8E0D5] p-6 mb-6 sticky top-24">
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#F0EBE1]">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image src={agent.photo} alt={agent.name} fill className="object-cover" sizes="64px" />
                </div>
                <div>
                  <div className="font-semibold text-[#1B3A5C]">{agent.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{agent.title}</div>
                  <div className="text-xs text-[#8B5E3C] mt-1">
                    {agent.experience} лет опыта · {agent.deals}+ сделок
                  </div>
                </div>
              </div>

              <a
                href={`tel:${agent.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#1B3A5C] text-white text-sm font-medium hover:bg-[#122740] transition-colors mb-3"
              >
                <span>📞</span> {agent.phone}
              </a>
              <a
                href={`https://wa.me/${agent.phone.replace(/\D/g, "")}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <span>💬</span> WhatsApp
              </a>

              {/* Contact Form */}
              <div className="mt-6 pt-6 border-t border-[#F0EBE1]">
                <h3 className="text-[#1B3A5C] font-semibold mb-4 text-sm">
                  Оставить заявку
                </h3>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 p-4 text-center">
                    <div className="text-2xl mb-2">✓</div>
                    <p className="text-green-700 text-sm">
                      Заявка отправлена! Свяжемся с вами в ближайшее время.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full border border-[#E8E0D5] px-3 py-2.5 text-sm focus:outline-none focus:border-[#8B5E3C] transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Телефон"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full border border-[#E8E0D5] px-3 py-2.5 text-sm focus:outline-none focus:border-[#8B5E3C] transition-colors"
                    />
                    <textarea
                      placeholder="Комментарий"
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full border border-[#E8E0D5] px-3 py-2.5 text-sm focus:outline-none focus:border-[#8B5E3C] transition-colors resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#8B5E3C] text-white text-sm font-medium hover:bg-[#6B4423] transition-colors"
                    >
                      Отправить заявку
                    </button>
                    <p className="text-[10px] text-gray-400 text-center leading-tight">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
