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
    { id: 'hygiene', name: 'Hygiene' }
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
      <section className="bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Product
              <span className="block text-sky-300">Portfolio</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive range of specialized polymer solutions for diverse industrial applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    {/* Card Header */}
                    <div className={`bg-gradient-to-r ${product.color} p-6 text-white`}>
                      <IconComponent className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                      <p className="text-blue-100 text-sm">{product.description}</p>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
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
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Applications</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors font-medium">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our technical team can develop customized polymer solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Contact Technical Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
                Download Product Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;