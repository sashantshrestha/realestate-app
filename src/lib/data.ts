
import { Property } from './types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Home with Ocean View',
    address: {
      street: '123 Ocean Drive',
      city: 'Miami',
      state: 'Florida',
      zipCode: '33139'
    },
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3200,
    description: 'This stunning modern home offers breathtaking ocean views from multiple terraces. Features include open concept living areas, a gourmet kitchen with high-end appliances, a private pool, and smart home technology throughout. Perfect for those seeking luxury coastal living.',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ],
    type: 'house',
    featured: true,
    status: 'for-sale',
    createdAt: '2023-08-15'
  },
  {
    id: '2',
    title: 'Downtown Luxury Apartment',
    address: {
      street: '456 Central Ave',
      city: 'New York',
      state: 'New York',
      zipCode: '10001'
    },
    price: 890000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    description: 'Exquisite luxury apartment in the heart of downtown. Floor-to-ceiling windows provide abundant natural light and stunning city views. Building amenities include a 24-hour doorman, state-of-the-art fitness center, rooftop terrace, and resident lounge.',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ],
    type: 'apartment',
    featured: false,
    status: 'for-sale',
    createdAt: '2023-09-01'
  },
  {
    id: '3',
    title: 'Spacious Suburban Family Home',
    address: {
      street: '789 Maple Street',
      city: 'Austin',
      state: 'Texas',
      zipCode: '78701'
    },
    price: 5200,
    bedrooms: 5,
    bathrooms: 3,
    area: 3800,
    description: 'Beautiful family home in a quiet suburban neighborhood. Features include an open floor plan, gourmet kitchen, formal dining room, spacious master suite, and a large backyard with covered patio. Close to top-rated schools, parks, and shopping centers.',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ],
    type: 'house',
    featured: true,
    status: 'for-rent',
    createdAt: '2023-07-25'
  },
  {
    id: '4',
    title: 'Modern City Condo',
    address: {
      street: '101 Urban Lane',
      city: 'Chicago',
      state: 'Illinois',
      zipCode: '60601'
    },
    price: 425000,
    bedrooms: 1,
    bathrooms: 1,
    area: 850,
    description: 'Contemporary condo in a vibrant urban setting. This thoughtfully designed space features high ceilings, hardwood floors, and a gourmet kitchen with stainless steel appliances. Building offers a fitness center, rooftop deck, and secure parking.',
    images: [
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ],
    type: 'condo',
    featured: false,
    status: 'for-sale',
    createdAt: '2023-09-10'
  },
  {
    id: '5',
    title: 'Charming Historical Townhouse',
    address: {
      street: '202 Heritage Way',
      city: 'Boston',
      state: 'Massachusetts',
      zipCode: '02108'
    },
    price: 3800,
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1950,
    description: 'Beautifully renovated historical townhouse combining classic charm with modern amenities. Features include original hardwood floors, exposed brick walls, updated kitchen and bathrooms, private courtyard, and rooftop deck with city views.',
    images: [
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1560185008-a33f5c4d5412?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ],
    type: 'townhouse',
    featured: true,
    status: 'for-rent',
    createdAt: '2023-08-05'
  },
  {
    id: '6',
    title: 'Luxury Waterfront Villa',
    address: {
      street: '303 Shoreline Drive',
      city: 'San Diego',
      state: 'California',
      zipCode: '92101'
    },
    price: 2950000,
    bedrooms: 6,
    bathrooms: 5,
    area: 5500,
    description: 'Spectacular waterfront villa offering the ultimate luxury lifestyle. This exceptional property features panoramic water views, a private dock, infinity pool, spa, home theater, wine cellar, and chef\'s kitchen. Perfect for entertaining and refined living.',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ],
    type: 'house',
    featured: true,
    status: 'for-sale',
    createdAt: '2023-09-05'
  }
];

export const propertyTypes = [
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'condo', label: 'Condo' },
  { value: 'townhouse', label: 'Townhouse' }
];

export const formatPrice = (price: number): string => {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)}M`;
  } else if (price >= 1000) {
    return `$${(price / 1000).toFixed(0)}K`;
  } else {
    return `$${price}`;
  }
};

export const formatPriceWithCommas = (price: number): string => {
  return `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};
