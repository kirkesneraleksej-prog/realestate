import { properties } from "@/data/properties";
import PropertyCard from "@/components/ui/PropertyCard";
import Button from "@/components/ui/Button";

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-[#8B5E3C]" />
              <span className="text-[#8B5E3C] text-xs tracking-[0.3em] uppercase font-medium">
                Подборка
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B3A5C]">
              Избранные объекты
            </h2>
          </div>
          <Button href="/catalog" variant="outline">
            Смотреть все →
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
