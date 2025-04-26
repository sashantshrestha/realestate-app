
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[600px] w-full">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" 
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
            Find Your Perfect Property
          </h1>
          <p className="text-xl text-white mb-8 text-shadow max-w-xl">
            Discover beautiful homes, apartments and properties across the country. Your dream home is just a few clicks away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              Browse Properties
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-50">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 flex items-center text-white">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="text-shadow">Properties available nationwide</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
