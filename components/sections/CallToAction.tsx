import Button from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative border */}
        <div className="border border-[#E8E0D5] p-12 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
            <div className="w-8 h-8 border-2 border-[#8B5E3C] flex items-center justify-center">
              <span className="text-[#8B5E3C] font-bold text-lg">Э</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#8B5E3C]" />
            <span className="text-[#8B5E3C] text-xs tracking-[0.3em] uppercase font-medium">
              Начните сейчас
            </span>
            <div className="w-8 h-px bg-[#8B5E3C]" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#1B3A5C] mb-4">
            Готовы найти свою недвижимость?
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Оставьте заявку — наш специалист свяжется с вами в течение 30 минут
            и подберёт варианты под ваш запрос.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contacts" variant="primary" size="lg">
              Получить консультацию
            </Button>
            <Button href="/catalog" variant="brown" size="lg">
              Смотреть каталог
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
