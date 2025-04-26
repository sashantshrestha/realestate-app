
export interface Property {
  id: string;
  title: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  images: string[];
  type: 'house' | 'apartment' | 'condo' | 'townhouse';
  featured: boolean;
  status: 'for-sale' | 'for-rent';
  createdAt: string;
}

export interface PropertyFilters {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: string;
  status?: 'for-sale' | 'for-rent' | 'all';
}
