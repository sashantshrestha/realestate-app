
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Property } from '@/lib/types';
import { properties, formatPriceWithCommas } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Bed, Bath, MapPin, ArrowLeft, CalendarClock, Move, Home, Building } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [activeImage, setActiveImage] = React.useState(0);
  const property = properties.find(p => p.id === id) as Property;
  
  if (!property) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold">Property not found</h2>
          <Button onClick={() => navigate('/')} className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to properties
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)} 
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Images Section */}
          <div className="lg:col-span-2">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={property.images[activeImage]} 
                alt={property.title} 
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-2 mt-2">
              {property.images.map((image, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer rounded overflow-hidden border-2 ${
                    activeImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${property.title} image ${index + 1}`} 
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span>
                  {`${property.address.street}, ${property.address.city}, ${property.address.state} ${property.address.zipCode}`}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Badge className={property.status === 'for-rent' ? 'bg-primary' : 'bg-accent'}>
                  {property.status === 'for-rent' ? 'For Rent' : 'For Sale'}
                </Badge>
                <Badge variant="outline" className="flex items-center">
                  <Building className="h-3 w-3 mr-1" />
                  {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                </Badge>
              </div>
              
              <h2 className="text-2xl font-bold text-primary">
                {property.status === 'for-rent'
                  ? `${formatPriceWithCommas(property.price)} / month`
                  : formatPriceWithCommas(property.price)
                }
              </h2>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 mt-6">
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <Bed className="h-5 w-5 text-gray-600 mb-2" />
                  <span className="text-sm text-gray-500">Bedrooms</span>
                  <span className="font-semibold">{property.bedrooms}</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <Bath className="h-5 w-5 text-gray-600 mb-2" />
                  <span className="text-sm text-gray-500">Bathrooms</span>
                  <span className="font-semibold">{property.bathrooms}</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <Move className="h-5 w-5 text-gray-600 mb-2" />
                  <span className="text-sm text-gray-500">Area</span>
                  <span className="font-semibold">{property.area} sqft</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <Home className="h-5 w-5 text-gray-600 mb-2" />
                  <span className="text-sm text-gray-500">Type</span>
                  <span className="font-semibold capitalize">{property.type}</span>
                </div>
              </div>
              
              <Separator className="my-8" />
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {property.description}
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Property Details</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property ID</span>
                    <span className="font-medium">{property.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Type</span>
                    <span className="font-medium capitalize">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status</span>
                    <span className="font-medium capitalize">{property.status.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Year Built</span>
                    <span className="font-medium">2020</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Listed Date</span>
                    <div className="flex items-center">
                      <CalendarClock className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="font-medium">{property.createdAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Interested in this property?</h3>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and a real estate agent will contact you shortly.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      rows={4}
                      placeholder="I'm interested in this property..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full">
                    Send Message
                  </Button>
                </form>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Agent Information</h4>
                  <p className="text-gray-600 text-sm mb-1">John Smith</p>
                  <p className="text-gray-600 text-sm mb-1">Premium Realty Inc.</p>
                  <p className="text-gray-600 text-sm mb-1">License #: AB12345</p>
                  <div className="flex items-center mt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      View Agent Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default PropertyDetails;
