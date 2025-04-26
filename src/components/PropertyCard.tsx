
import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '@/lib/types';
import { formatPrice } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Building, Bed, Bath, MapPin, Move } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link to={`/property/${property.id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
        <div className="relative">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full property-image"
          />
          <Badge 
            className={`absolute top-3 left-3 ${
              property.status === 'for-rent' ? 'bg-primary' : 'bg-accent'
            }`}
          >
            {property.status === 'for-rent' ? 'For Rent' : 'For Sale'}
          </Badge>
          {property.featured && (
            <Badge className="absolute top-3 right-3 bg-amber-500">
              Featured
            </Badge>
          )}
        </div>
        
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-2xl font-bold">
                {property.status === 'for-rent'
                  ? `${formatPrice(property.price)}/mo`
                  : formatPrice(property.price)}
              </p>
              <h3 className="text-lg font-semibold mt-1 line-clamp-1">{property.title}</h3>
            </div>
            <Building className="h-5 w-5 text-gray-500 mt-1 shrink-0" />
          </div>
          
          <div className="flex items-center text-gray-500 text-sm mt-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">
              {`${property.address.street}, ${property.address.city}, ${property.address.state}`}
            </span>
          </div>
        </CardContent>
        
        <CardFooter className="px-4 py-3 border-t flex justify-between text-sm">
          <div className="flex items-center text-gray-700">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Move className="h-4 w-4 mr-1" />
            <span>{property.area} sqft</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PropertyCard;
