import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Phone, Mail, MapPin } from 'lucide-react';

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
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4 space-x-2">
              <Beaker className="w-8 h-8 text-sky-400" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">VSN</span>
                <span className="-mt-1 text-sm text-gray-400">Polymers Limited</span>
              </div>
            </div>
            <p className="mb-4 text-sm text-gray-400">
              Leading manufacturer of specialty polymers and chemical solutions for construction, 
              paints, inks, and industrial applications.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-sky-400" />
                <span>+91 9619825381</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-sky-400" />
                <span>contact@vsnpolymers.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-sky-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2">
              {productCategories.map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-sm text-gray-400 transition-colors hover:text-sky-400"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
  
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-sky-400"
                >
                  Technical Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 transition-colors hover:text-sky-400"
                >
                  Safety Data Sheets
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col justify-between items-center md:flex-row">
            <p className="text-sm text-gray-400">
              © 2025 VSN Polymers Limited. All rights reserved.
            </p>
            <div className="flex mt-2 space-x-6 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-sky-400">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-sky-400">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-sky-400">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;