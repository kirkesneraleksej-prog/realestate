"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { properties, districts, propertyTypeLabels } from "@/data/properties";
import PropertyCard from "@/components/ui/PropertyCard";
import { PropertyType, SortOption } from "@/types";

function CatalogContent() {
  const searchParams = useSearchParams();

  const [type, setType] = useState<PropertyType>(
    (searchParams.get("type") as PropertyType) || "all"
  );
  const [district, setDistrict] = useState(searchParams.get("district") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [minRooms, setMinRooms] = useState("");
  const [sort, setSort] = useState<SortOption>("newest");

  const filtered = useMemo(() => {
    let list = [...properties];

    if (type !== "all") list = list.filter((p) => p.type === type);
    if (district) list = list.filter((p) => p.district === district);
    if (maxPrice) list = list.filter((p) => p.price <= Number(maxPrice));
    if (minRooms) list = list.filter((p) => p.rooms >= Number(minRooms));

    switch (sort) {
      case "price_asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "area_asc":
        list.sort((a, b) => a.area - b.area);
        break;
      case "area_desc":
        list.sort((a, b) => b.area - a.area);
        break;
      default:
        list.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
    }

    return list;
  }, [type, district, maxPrice, minRooms, sort]);

  function reset() {
    setType("all");
    setDistrict("");
    setMaxPrice("");
    setMinRooms("");
    setSort("newest");
  }

  const selectCls =
    "border border-[#E8E0D5] px-3 py-2.5 text-sm text-[#1B3A5C] focus:outline-none focus:border-[#8B5E3C] transition-colors bg-white w-full";

  return (
    <>
      {/* Page Hero */}
      <div className="bg-[#1B3A5C] pt-28 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-[#8B5E3C]" />
            <span className="text-[#8B5E3C] text-xs tracking-[0.3em] uppercase">Объекты</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white">Каталог недвижимости</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="bg-white border border-[#E8E0D5] p-6 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-[#1B3A5C] tracking-wider uppercase mb-2">
                Тип
              </label>
              <select value={type} onChange={(e) => setType(e.target.value as PropertyType)} className={selectCls}>
                {Object.entries(propertyTypeLabels).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1B3A5C] tracking-wider uppercase mb-2">
                Район
              </label>
              <select value={district} onChange={(e) => setDistrict(e.target.value === "Все районы" ? "" : e.target.value)} className={selectCls}>
                {districts.map((d) => (
                  <option key={d} value={d === "Все районы" ? "" : d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1B3A5C] tracking-wider uppercase mb-2">
                Цена до
              </label>
              <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className={selectCls}>
                <option value="">Любая</option>
                <option value="5000000">5 млн ₽</option>
                <option value="10000000">10 млн ₽</option>
                <option value="20000000">20 млн ₽</option>
                <option value="50000000">50 млн ₽</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1B3A5C] tracking-wider uppercase mb-2">
                Комнат от
              </label>
              <select value={minRooms} onChange={(e) => setMinRooms(e.target.value)} className={selectCls}>
                <option value="">Любое</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1B3A5C] tracking-wider uppercase mb-2">
                Сортировка
              </label>
              <select value={sort} onChange={(e) => setSort(e.target.value as SortOption)} className={selectCls}>
                <option value="newest">Сначала новые</option>
                <option value="price_asc">Цена: по возрастанию</option>
                <option value="price_desc">Цена: по убыванию</option>
                <option value="area_asc">Площадь: по возрастанию</option>
                <option value="area_desc">Площадь: по убыванию</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Найдено: <strong className="text-[#1B3A5C]">{filtered.length}</strong> объектов
            </p>
            <button
              onClick={reset}
              className="text-sm text-[#8B5E3C] hover:underline"
            >
              Сбросить фильтры
            </button>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg">По вашим фильтрам ничего не найдено.</p>
            <button onClick={reset} className="mt-4 text-[#8B5E3C] hover:underline text-sm">
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default function CatalogPage() {
  return (
    <Suspense>
      <CatalogContent />
    </Suspense>
  );
}
