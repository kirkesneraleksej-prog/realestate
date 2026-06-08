const advantages = [
  {
    icon: "🏛️",
    title: "Юридическая чистота",
    description:
      "Полная проверка документов и юридическое сопровождение сделки от начала до конца.",
  },
  {
    icon: "🤝",
    title: "Личный менеджер",
    description:
      "За каждым клиентом закрепляется персональный специалист, доступный в любое время.",
  },
  {
    icon: "📊",
    title: "Рыночная аналитика",
    description:
      "Актуальная оценка стоимости объектов на основе данных реального рынка.",
  },
  {
    icon: "🔑",
    title: "Полный цикл",
    description:
      "Берём на себя переговоры, ипотечное оформление, страхование и передачу ключей.",
  },
];

export default function Advantages() {
  return (
    <section className="py-20 bg-[#1B3A5C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#8B5E3C]" />
            <span className="text-[#8B5E3C] text-xs tracking-[0.3em] uppercase font-medium">
              Почему мы
            </span>
            <div className="w-8 h-px bg-[#8B5E3C]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Наши преимущества
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="border border-white/10 p-8 hover:border-[#8B5E3C] transition-colors duration-300 group"
            >
              <div className="text-4xl mb-5">{adv.icon}</div>
              <div className="w-8 h-px bg-[#8B5E3C] mb-5" />
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-[#8B5E3C] transition-colors">
                {adv.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
