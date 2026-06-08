import Button from "@/components/ui/Button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                alt="Офис агентства ЭСТЕЙТ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-6 -right-6 bg-[#1B3A5C] text-white p-6 hidden md:block">
              <div className="text-4xl font-bold">15</div>
              <div className="text-sm text-white/70 mt-1">лет на рынке</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#8B5E3C]" />
              <span className="text-[#8B5E3C] text-xs tracking-[0.3em] uppercase font-medium">
                О компании
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B3A5C] mb-6">
              Надёжный партнёр
              <br />в мире недвижимости
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ЭСТЕЙТ — одно из ведущих агентств недвижимости города с безупречной
              репутацией. Мы специализируемся на покупке, продаже и аренде жилой и
              коммерческой недвижимости с 2009 года.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Наша команда из 20 лицензированных специалистов обеспечивает полное
              юридическое сопровождение каждой сделки — от первого просмотра до
              получения ключей.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-[#F0EBE1]">
              {[
                { val: "2 000+", label: "Сделок" },
                { val: "98%", label: "Довольных клиентов" },
                { val: "20", label: "Специалистов" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-[#1B3A5C]">{s.val}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <Button href="/about" variant="primary">
              Подробнее о нас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
