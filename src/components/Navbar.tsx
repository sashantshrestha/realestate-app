
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-gray-900">AbodeFind</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-gray-900 hover:text-primary">
              Home
            </Link>
            <Link to="/?status=for-sale" className="text-sm font-medium text-gray-900 hover:text-primary">
              Buy
            </Link>
            <Link to="/?status=for-rent" className="text-sm font-medium text-gray-900 hover:text-primary">
              Rent
            </Link>
            <Button variant="outline" className="ml-4">
              Sign In
            </Button>
            <Button>
              Sign Up
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              to="/"
              className="block text-sm font-medium text-gray-900 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/?status=for-sale"
              className="block text-sm font-medium text-gray-900 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Buy
            </Link>
            <Link
              to="/?status=for-rent"
              className="block text-sm font-medium text-gray-900 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Rent
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
