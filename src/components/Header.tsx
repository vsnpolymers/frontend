import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    'Acrylic Polymers for Construction Chemicals',
    'Acrylic Emulsions for Paints',
    'Acrylic Emulsions for Water-Based Inks',
    'Water-Based Polyurethane Dispersions (PUDs)',
    'Nano-Acrylics',
    'Clear PU Topcoats for Concrete',
    'Hygiene Coatings for Cleanrooms'
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products', hasDropdown: true },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Brochures', href: '/brochures' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'backdrop-blur-sm bg-white/95'
      }`}>
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* <Beaker className="w-8 h-8 text-sky-600" /> */}
            <div className="flex flex-col">
              <img
                src="/src/assets/img/vsn-new.jpg"
                alt="VSN Logo"
                className="h-[100px] w-[80px] object-contain"
              />



              {/* <span className="text-xl font-bold text-navy-800">VSN</span> */}
              {/* <span className="-mt-1 text-sm text-gray-600">Polymers Limited</span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <button className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === item.href
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-gray-700 hover:text-sky-600'
                      }`}>
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {isProductsOpen && (
                      <div className="absolute left-0 top-full py-2 mt-1 w-80 bg-white rounded-md border border-gray-200 shadow-lg">
                        {productCategories.map((category, index) => (
                          <Link
                            key={index}
                            to="/products"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                          >
                            {category}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === item.href
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-gray-700 hover:text-sky-600'
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 rounded-md hover:text-sky-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === item.href
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-gray-700 hover:text-sky-600 hover:bg-gray-100'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;