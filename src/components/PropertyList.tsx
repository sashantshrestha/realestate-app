
import React from 'react';
import PropertyCard from './PropertyCard';
import { Property, PropertyFilters } from '@/lib/types';
import { properties } from '@/lib/data';

interface PropertyListProps {
  filters?: PropertyFilters;
}

const PropertyList = ({ filters }: PropertyListProps) => {
  const [filteredProperties, setFilteredProperties] = React.useState<Property[]>(properties);

  React.useEffect(() => {
    let result = [...properties];

    if (filters) {
      // Filter by property type
      if (filters.propertyType && filters.propertyType !== 'all') {
        result = result.filter(property => property.type === filters.propertyType);
      }

      // Filter by status (for rent/for sale)
      if (filters.status && filters.status !== 'all') {
        result = result.filter(property => property.status === filters.status);
      }

      // Filter by price range
      if (filters.minPrice !== undefined) {
        result = result.filter(property => property.price >= filters.minPrice!);
      }
      if (filters.maxPrice !== undefined) {
        result = result.filter(property => property.price <= filters.maxPrice!);
      }

      // Filter by bedrooms
      if (filters.bedrooms !== undefined) {
        result = result.filter(property => property.bedrooms >= filters.bedrooms!);
      }

      // Filter by bathrooms
      if (filters.bathrooms !== undefined) {
        result = result.filter(property => property.bathrooms >= filters.bathrooms!);
      }
    }

    setFilteredProperties(result);
  }, [filters]);

  if (filteredProperties.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-900">No properties found</h3>
        <p className="mt-2 text-gray-500">Try adjusting your filters to find properties.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
