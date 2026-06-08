import Image from "next/image";
import { agents } from "@/data/properties";
import Button from "@/components/ui/Button";

const timeline = [
  { year: "2009", text: "Основание агентства. Первые 10 сделок за год." },
  { year: "2013", text: "Открытие второго офиса. Расширение в загородную недвижимость." },
  { year: "2017", text: "500-я сделка. Признание лучшим агентством региона." },
  { year: "2021", text: "Запуск онлайн-платформы. Дистанционное сопровождение сделок." },
  { year: "2025", text: "2000+ успешных сделок. 20 специалистов в команде." },
];

const values = [
  {
    title: "Честность",
    desc: "Говорим правду о рынке, объекте и условиях сделки — даже если это не то, что хочет услышать клиент.",
  },
  {
    title: "Профессионализм",
    desc: "Каждый специалист имеет профильное образование и проходит ежегодную аттестацию.",
  },
  {
    title: "Надёжность",
    desc: "Юридическая чистота каждой сделки. Страхование профессиональной ответственности.",
  },
  {
    title: "Индивидуальность",
    desc: "Никаких шаблонных решений. Каждый клиент получает персональный подход и стратегию.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative bg-[#1B3A5C] py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80')" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#8B5E3C]" />
            <span className="text-[#8B5E3C] text-xs tracking-[0.3em] uppercase">О компании</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">О нас</h1>
          <p className="text-white/70 max-w-xl">
            Более 15 лет мы помогаем людям находить место, которое они назовут домом.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[#8B5E3C]" />
                <span className="text-[#8B5E3C] text-xs tracking-[0.3em] uppercase">Наша миссия</span>
              </div>
              <h2 className="text-3xl font-bold text-[#1B3A5C] mb-6">
                Больше, чем просто сделка
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ЭСТЕЙТ основано в 2009 году группой профессионалов, убеждённых, что покупка недвижимости
                должна быть прозрачной, безопасной и приятной. За эти годы мы выросли из небольшого
                офиса в полноценное агентство с командой из 20 специалистов.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Мы сопровождаем каждого клиента от первого звонка до получения ключей — и остаёмся
                на связи после сделки. Потому что 80% наших клиентов возвращаются к нам снова.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Команда ЭСТЕЙТ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#8B5E3C]" />
              <span className="text-[#8B5E3C] text-xs tracking-[0.3em] uppercase">История</span>
              <div className="w-8 h-px bg-[#8B5E3C]" />
            </div>
            <h2 className="text-3xl font-bold text-[#1B3A5C]">Наш путь</h2>
          </div>
          <div className="relative">
            <div className="absolute left-16 sm:left-1/2 top-0 bottom-0 w-px bg-[#E8E0D5]" />
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-8 mb-10 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="hidden sm:block flex-1 text-right">
                  {i % 2 !== 0 && (
                    <p className="text-gray-600 text-sm leading-relaxed pt-2">{item.text}</p>
                  )}
                </div>
                <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-[#1B3A5C] text-white flex items-center justify-center text-sm font-bold ml-9 sm:ml-0">
                  {item.year}
                </div>
                <div className="flex-1">
                  {(i % 2 === 0) && (
                    <p className="text-gray-600 text-sm leading-relaxed pt-2">{item.text}</p>
                  )}
                  <p className="sm:hidden text-gray-600 text-sm leading-relaxed pt-2">
                    {i % 2 !== 0 && item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#8B5E3C]" />
              <span className="text-[#8B5E3C] text-xs tracking-[0.3em] uppercase">Ценности</span>
              <div className="w-8 h-px bg-[#8B5E3C]" />
            </div>
            <h2 className="text-3xl font-bold text-[#1B3A5C]">Чем мы живём</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border border-[#E8E0D5] p-7 hover:border-[#8B5E3C] transition-colors group">
                <div className="w-8 h-px bg-[#8B5E3C] mb-5" />
                <h3 className="font-semibold text-[#1B3A5C] text-lg mb-3 group-hover:text-[#8B5E3C] transition-colors">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#8B5E3C]" />
              <span className="text-[#8B5E3C] text-xs tracking-[0.3em] uppercase">Люди</span>
              <div className="w-8 h-px bg-[#8B5E3C]" />
            </div>
            <h2 className="text-3xl font-bold text-[#1B3A5C]">Наша команда</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-white border border-[#E8E0D5] overflow-hidden group hover:border-[#8B5E3C] transition-colors">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[#1B3A5C]">{agent.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{agent.title}</p>
                  <div className="flex gap-4 mt-3 text-xs text-[#8B5E3C]">
                    <span>{agent.experience} лет опыта</span>
                    <span>{agent.deals}+ сделок</span>
                  </div>
                  <a
                    href={`tel:${agent.phone}`}
                    className="block mt-4 text-center py-2 border border-[#1B3A5C] text-[#1B3A5C] text-xs hover:bg-[#1B3A5C] hover:text-white transition-colors"
                  >
                    {agent.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1B3A5C] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">
            Готовы работать с профессионалами?
          </h2>
          <p className="text-white/60 mb-8">
            Оставьте заявку — мы свяжемся с вами в течение 30 минут.
          </p>
          <Button href="/contacts" variant="brown" size="lg">
            Связаться с нами
          </Button>
        </div>
      </section>
    </div>
  );
}
