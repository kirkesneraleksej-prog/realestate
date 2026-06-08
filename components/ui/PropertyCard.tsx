import Link from "next/link";
import Image from "next/image";
import { Property } from "@/types";
import { propertyTypeLabels } from "@/data/properties";

function formatPrice(price: number) {
  if (price >= 1_000_000) {
    return (price / 1_000_000).toFixed(1).replace(".0", "") + " млн ₽";
  }
  return price.toLocaleString("ru-RU") + " ₽";
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group bg-white border border-[#E8E0D5] hover:border-[#8B5E3C] transition-all duration-300 hover:shadow-lg flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-[#1B3A5C] text-white text-xs px-2.5 py-1 tracking-wide">
            {propertyTypeLabels[property.type]}
          </span>
          {property.isNew && (
            <span className="bg-[#8B5E3C] text-white text-xs px-2.5 py-1 tracking-wide">
              Новое
            </span>
          )}
        </div>
        <div className="absolute bottom-3 right-3 bg-white/95 px-3 py-1.5">
          <span className="text-[#1B3A5C] font-bold text-base">{formatPrice(property.price)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[#1B3A5C] font-semibold text-base leading-snug mb-1 group-hover:text-[#8B5E3C] transition-colors">
          {property.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4">{property.address}</p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-600 pb-4 border-b border-[#F0EBE1]">
          {property.rooms > 0 && (
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#8B5E3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {property.rooms} комн.
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-[#8B5E3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            {property.area} м²
          </span>
          {property.floor && (
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#8B5E3C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {property.floor}/{property.totalFloors} эт.
            </span>
          )}
        </div>

        <div className="mt-4">
          <Link
            href={`/property/${property.id}`}
            className="block text-center py-2.5 border border-[#8B5E3C] text-[#8B5E3C] text-sm tracking-wide hover:bg-[#8B5E3C] hover:text-white transition-all duration-200"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </article>
  );
}
