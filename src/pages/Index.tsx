
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PropertyFilters } from '@/lib/types';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyList from '@/components/PropertyList';
import SearchFilters from '@/components/SearchFilters';
import Footer from '@/components/Footer';
import { Building, Home } from 'lucide-react';

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = React.useState<PropertyFilters>({});

  React.useEffect(() => {
    const statusParam = searchParams.get('status');
    const propertyTypeParam = searchParams.get('propertyType');
    
    if (statusParam || propertyTypeParam) {
      const initialFilters: PropertyFilters = {};
      
      if (statusParam) {
        initialFilters.status = statusParam as 'for-sale' | 'for-rent' | 'all';
      }
      
      if (propertyTypeParam) {
        initialFilters.propertyType = propertyTypeParam;
      }
      
      setFilters(initialFilters);
    }
  }, [searchParams]);

  const handleFilterChange = (newFilters: PropertyFilters) => {
    setFilters(newFilters);
    
    // Update URL params
    const params = new URLSearchParams();
    if (newFilters.status && newFilters.status !== 'all') {
      params.set('status', newFilters.status);
    }
    if (newFilters.propertyType && newFilters.propertyType !== 'all') {
      params.set('propertyType', newFilters.propertyType);
    }
    
    setSearchParams(params);
  };

  return (
    <>
      <Navbar />
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center space-x-2 mb-12">
          <Building className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-center">Featured Properties</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-20">
              <SearchFilters onFilterChange={handleFilterChange} />
            </div>
          </div>
          
          <div className="md:col-span-3">
            <PropertyList filters={filters} />
          </div>
        </div>
      </div>
      
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Home className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Why Choose AbodeFind</h2>
            <p className="text-gray-600">
              We're committed to helping you find the perfect property with our extensive listings and expert guidance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Wide Range of Properties</h3>
              <p className="text-gray-600">
                Browse thousands of properties across different locations, types, and price ranges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Save Time and Effort</h3>
              <p className="text-gray-600">
                Our advanced filters help you quickly find properties that match your specific requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Our experienced agents are available to provide advice and answer any questions you may have.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
