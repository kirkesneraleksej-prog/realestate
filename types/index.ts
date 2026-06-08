export interface Property {
  id: string;
  title: string;
  address: string;
  district: string;
  price: number;
  type: "apartment" | "house" | "commercial" | "land";
  rooms: number;
  area: number;
  floor?: number;
  totalFloors?: number;
  images: string[];
  description: string;
  features: string[];
  isFeatured?: boolean;
  isNew?: boolean;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  photo: string;
  experience: number;
  deals: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  property: string;
  date: string;
}

export type PropertyType = "all" | "apartment" | "house" | "commercial" | "land";
export type SortOption = "price_asc" | "price_desc" | "area_asc" | "area_desc" | "newest";
