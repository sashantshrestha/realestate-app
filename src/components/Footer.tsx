
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center">
              <Building className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">AbodeFind</span>
            </div>
            <p className="mt-4 text-gray-400">
              Find your perfect property with AbodeFind. We offer a wide range of properties for sale and rent across the country.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/?status=for-sale" className="text-gray-400 hover:text-primary">Properties for Sale</Link>
              </li>
              <li>
                <Link to="/?status=for-rent" className="text-gray-400 hover:text-primary">Properties for Rent</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-primary">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/?propertyType=house" className="text-gray-400 hover:text-primary">Houses</Link>
              </li>
              <li>
                <Link to="/?propertyType=apartment" className="text-gray-400 hover:text-primary">Apartments</Link>
              </li>
              <li>
                <Link to="/?propertyType=condo" className="text-gray-400 hover:text-primary">Condos</Link>
              </li>
              <li>
                <Link to="/?propertyType=townhouse" className="text-gray-400 hover:text-primary">Townhouses</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-gray-400">123 Real Estate Ave</p>
              <p className="text-gray-400">New York, NY 10001</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
              <div className="flex items-center mt-4">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <a href="mailto:info@abodefind.com" className="text-gray-400 hover:text-primary">
                  info@abodefind.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AbodeFind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
