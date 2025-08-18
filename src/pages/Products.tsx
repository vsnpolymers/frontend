import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2,
  Paintbrush,
  Droplets,
  Layers,
  Microscope,
  HardHat,
  Zap,
  Container,
  Search,
  Filter
} from 'lucide-react';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const productCategories = [
    {
      id: 'construction',
      icon: Building2,
      title: 'Acrylic Polymers for Construction Chemicals',
      description: 'High-performance acrylic polymers designed for construction applications including adhesives, sealants, and protective coatings.',
      features: ['Excellent adhesion', 'Weather resistance', 'Durability', 'Chemical resistance'],
      applications: ['Tile adhesives', 'Waterproofing', 'Repair mortars', 'Protective coatings'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'paints',
      icon: Paintbrush,
      title: 'Acrylic Emulsions for Paints',
      description: 'Premium quality acrylic emulsions for interior and exterior paint formulations with superior performance characteristics.',
      features: ['Color retention', 'Scrub resistance', 'Low VOC', 'Fast drying'],
      applications: ['Interior paints', 'Exterior paints', 'Primers', 'Specialty coatings'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'inks',
      icon: Droplets,
      title: 'Acrylic Emulsions for Water-Based Inks',
      description: 'Specialized acrylic emulsions optimized for water-based printing inks with excellent print quality and adhesion.',
      features: ['Print clarity', 'Color brilliance', 'Substrate adhesion', 'Rub resistance'],
      applications: ['Flexographic inks', 'Screen printing', 'Digital printing', 'Packaging inks'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'puds',
      icon: Layers,
      title: 'Water-Based Polyurethane Dispersions (PUDs)',
      description: 'Advanced polyurethane dispersions offering superior mechanical properties and environmental friendliness.',
      features: ['Flexibility', 'Abrasion resistance', 'Chemical resistance', 'Eco-friendly'],
      applications: ['Leather coatings', 'Textile finishing', 'Wood coatings', 'Synthetic leather'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'nano',
      icon: Microscope,
      title: 'Nano-Acrylics',
      description: 'Cutting-edge nanotechnology-enhanced acrylic polymers for advanced performance applications.',
      features: ['Self-cleaning', 'UV protection', 'Enhanced durability', 'Antimicrobial'],
      applications: ['Architectural coatings', 'Automotive', 'Electronics', 'Medical devices'],
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'concrete',
      icon: HardHat,
      title: 'Clear PU Topcoats for Concrete',
      description: 'High-performance polyurethane topcoats providing exceptional protection for concrete surfaces.',
      features: ['Chemical resistance', 'Abrasion resistance', 'UV stability', 'Easy maintenance'],
      applications: ['Industrial floors', 'Warehouses', 'Parking decks', 'Commercial spaces'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'hygiene',
      icon: Zap,
      title: 'Hygiene Coatings for Cleanrooms',
      description: 'Specialized antimicrobial coatings designed for sterile environments and cleanroom applications.',
      features: ['Antimicrobial', 'Easy cleaning', 'Chemical resistance', 'Low outgassing'],
      applications: ['Pharmaceutical facilities', 'Hospitals', 'Food processing', 'Electronics cleanrooms'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'wooden',
      icon: Container, // maybe replace with a wood/furniture icon if available
      title: 'Wooden Coating for Furniture',
      description: 'High-quality protective coating designed to enhance durability and provide a smooth finish for wooden furniture.',
      features: ['Scratch resistant', 'UV protection', 'Water resistance', 'Enhances natural wood grain'],
      applications: ['Home furniture', 'Office interiors', 'Wooden flooring', 'Decorative wooden panels'],
      color: 'from-amber-500 to-amber-600'
    }
    
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'construction', name: 'Construction' },
    { id: 'paints', name: 'Paints' },
    { id: 'inks', name: 'Inks' },
    { id: 'puds', name: 'PUDs' },
    { id: 'nano', name: 'Nano-Tech' },
    { id: 'concrete', name: 'Concrete' },
    { id: 'hygiene', name: 'Hygiene' },
    { id: 'coating', name: 'Wooden Coating' }
  ];

  const filteredProducts = productCategories.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.id === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Our Product
              <span className="block text-sky-300">Portfolio</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-blue-100">
              Comprehensive range of specialized polymer solutions for diverse industrial applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="sticky top-16 z-40 py-8 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 justify-between items-center lg:flex-row">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 w-5 h-5 text-gray-400 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="py-2 pr-4 pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-sky-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-sky-50 hover:text-sky-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="py-12 text-center">
              <Filter className="mx-auto mb-4 w-12 h-12 text-gray-400" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="overflow-hidden bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl group"
                  >
                    {/* Card Header */}
                    <div className={`bg-gradient-to-r ${product.color} p-6 text-white`}>
                      <IconComponent className="mb-4 w-10 h-10 transition-transform group-hover:scale-110" />
                      <h3 className="mb-2 text-xl font-bold">{product.title}</h3>
                      <p className="text-sm text-blue-100">{product.description}</p>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="mb-3 text-lg font-semibold text-gray-900">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div>
                        <h4 className="mb-3 text-lg font-semibold text-gray-900">Applications</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs text-gray-700 bg-gray-100 rounded-full"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-6 mt-6 border-t border-gray-200">
                        <button className="px-4 py-2 w-full font-medium text-white bg-sky-600 rounded-lg transition-colors hover:bg-sky-700">
                          Request Information
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-700">
        <div className="px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Need Custom Solutions?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              Our technical team can develop customized polymer solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col gap-4 justify-center sm:flex-row">
              <button className="px-8 py-3 font-semibold text-blue-700 bg-white rounded-lg transition-colors hover:bg-blue-50">
                Contact Technical Team
              </button>
              {/* <button className="px-8 py-3 font-semibold text-white rounded-lg border-2 border-white transition-colors hover:bg-white hover:text-blue-700">
                Download Product Catalog
              </button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;