import { testimonials } from "@/data/properties";

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#8B5E3C]" />
            <span className="text-[#8B5E3C] text-xs tracking-[0.3em] uppercase font-medium">
              Отзывы
            </span>
            <div className="w-8 h-px bg-[#8B5E3C]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B3A5C]">
            Клиенты о нас
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-[#E8E0D5] p-8 hover:border-[#8B5E3C] transition-colors duration-300 relative"
            >
              {/* Quote mark */}
              <div className="text-6xl text-[#1B3A5C]/10 font-serif leading-none absolute top-4 right-6 select-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#8B5E3C] text-sm">★</span>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm italic">
                "{t.text}"
              </p>

              <div className="border-t border-[#F0EBE1] pt-4">
                <div className="font-semibold text-[#1B3A5C] text-sm">{t.name}</div>
                <div className="text-gray-400 text-xs mt-0.5">{t.property}</div>
                <div className="text-gray-400 text-xs">{t.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
