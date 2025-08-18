import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Phone, Mail, MapPin, Download } from 'lucide-react';

const Footer: React.FC = () => {
  const productCategories = [
    'Acrylic Polymers for Construction',
    'Acrylic Emulsions for Paints',
    'Water-Based Inks',
    'Polyurethane Dispersions',
    'Nano-Acrylics',
    'PU Topcoats for Concrete',
    'Hygiene Coatings'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Brochures', href: '/brochures' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Beaker className="h-8 w-8 text-sky-400" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">VSN</span>
                <span className="text-sm text-gray-400 -mt-1">Polymers Limited</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Leading manufacturer of specialty polymers and chemical solutions for construction, 
              paints, inks, and industrial applications.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-sky-400" />
                <span>+91 (0) 22 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-sky-400" />
                <span>info@VSNpolymers.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-sky-400" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              {productCategories.map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-gray-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/brochures"
                  className="text-gray-400 hover:text-sky-400 transition-colors text-sm flex items-center space-x-1"
                >
                  <Download className="h-4 w-4" />
                  <span>Product Brochures</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/certifications"
                  className="text-gray-400 hover:text-sky-400 transition-colors text-sm flex items-center space-x-1"
                >
                  <Download className="h-4 w-4" />
                  <span>Certifications</span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-sky-400 transition-colors text-sm"
                >
                  Technical Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-sky-400 transition-colors text-sm"
                >
                  Safety Data Sheets
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 VSN Polymers Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;