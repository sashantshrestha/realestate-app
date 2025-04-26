
import React from 'react';
import { PropertyFilters } from '@/lib/types';
import { propertyTypes } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SearchFiltersProps {
  onFilterChange: (filters: PropertyFilters) => void;
}

const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const [filters, setFilters] = React.useState<PropertyFilters>({
    status: 'all',
    propertyType: 'all',
    minPrice: undefined,
    maxPrice: undefined,
    bedrooms: undefined,
    bathrooms: undefined,
  });

  const handleChange = (key: string, value: any) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const handleReset = () => {
    const resetFilters = {
      status: 'all',
      propertyType: 'all',
      minPrice: undefined,
      maxPrice: undefined,
      bedrooms: undefined,
      bathrooms: undefined,
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Status Filter */}
          <div>
            <Label className="text-base font-medium">Status</Label>
            <RadioGroup
              value={filters.status || 'all'}
              onValueChange={(value) => handleChange('status', value)}
              className="flex space-x-4 mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all" className="cursor-pointer">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="for-sale" id="for-sale" />
                <Label htmlFor="for-sale" className="cursor-pointer">For Sale</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="for-rent" id="for-rent" />
                <Label htmlFor="for-rent" className="cursor-pointer">For Rent</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Property Type */}
          <div>
            <Label htmlFor="property-type">Property Type</Label>
            <Select
              value={filters.propertyType || 'all'}
              onValueChange={(value) => handleChange('propertyType', value)}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="All Property Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Property Types</SelectItem>
                {propertyTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="min-price">Min Price</Label>
              <Input
                id="min-price"
                type="number"
                className="mt-2"
                placeholder="No Min"
                value={filters.minPrice || ''}
                onChange={(e) => handleChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
              />
            </div>
            <div>
              <Label htmlFor="max-price">Max Price</Label>
              <Input
                id="max-price"
                type="number"
                className="mt-2"
                placeholder="No Max"
                value={filters.maxPrice || ''}
                onChange={(e) => handleChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
              />
            </div>
          </div>

          {/* Bedrooms & Bathrooms */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="bedrooms">Min Bedrooms</Label>
              <Select
                value={filters.bedrooms?.toString() || ''}
                onValueChange={(value) => handleChange('bedrooms', value ? Number(value) : undefined)}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="bathrooms">Min Bathrooms</Label>
              <Select
                value={filters.bathrooms?.toString() || ''}
                onValueChange={(value) => handleChange('bathrooms', value ? Number(value) : undefined)}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button type="submit" className="flex-1">Apply Filters</Button>
            <Button type="button" variant="outline" onClick={handleReset} className="flex-1">
              Reset
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;
