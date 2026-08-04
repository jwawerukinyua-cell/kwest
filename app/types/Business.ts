import type { OpeningHours } from "./OpeningHours";

export interface Business {
  id: string;
  slug: string;

  name: string;
  categoryId: string;
  description: string;

  phone: string;
  whatsapp?: string;
  email?: string;
  website?: string;

  address: string;
  landmark: string;
  latitude?: number;
  longitude?: number;

  logo?: string;
  featuredImage: string;
  gallery: string[];

  verified: boolean;
  featured: boolean;

  openingHours: OpeningHours[];

  rating: number;
  reviewCount: number;

  createdAt: string;
  updatedAt: string;
}