import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Search, Filter, Eye } from 'lucide-react';

const Brochures: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const brochures = [
    {
      id: 1,
      title: 'Acrylic Polymers for Construction Chemicals',
      description: 'Comprehensive guide to our construction chemical polymer solutions',
      category: 'construction',
      fileSize: '2.4 MB',
      pages: 12,
      lastUpdated: '2024-01-15',
      downloadCount: 1250
    },
    {
      id: 2,
      title: 'Acrylic Emulsions for Paints & Coatings',
      description: 'Technical specifications and applications for paint industry',
      category: 'paints',
      fileSize: '3.1 MB',
      pages: 16,
      lastUpdated: '2024-01-10',
      downloadCount: 980
    },
    {
      id: 3,
      title: 'Water-Based Ink Solutions',
      description: 'Specialized emulsions for printing and packaging applications',
      category: 'inks',
      fileSize: '1.8 MB',
      pages: 10,
      lastUpdated: '2023-12-20',
      downloadCount: 750
    },
    {
      id: 4,
      title: 'Polyurethane Dispersions (PUDs) Catalog',
      description: 'Complete range of water-based polyurethane dispersions',
      category: 'puds',
      fileSize: '2.7 MB',
      pages: 14,
      lastUpdated: '2024-01-08',
      downloadCount: 620
    },
    {
      id: 5,
      title: 'Nano-Acrylics Technology Overview',
      description: 'Advanced nanotechnology solutions and applications',
      category: 'nano',
      fileSize: '3.5 MB',
      pages: 20,
      lastUpdated: '2024-01-12',
      downloadCount: 890
    },
    {
      id: 6,
      title: 'Clear PU Topcoats for Concrete',
      description: 'Protective coating solutions for concrete surfaces',
      category: 'concrete',
      fileSize: '2.2 MB',
      pages: 8,
      lastUpdated: '2023-12-18',
      downloadCount: 540
    },
    {
      id: 7,
      title: 'Hygiene Coatings for Cleanrooms',
      description: 'Antimicrobial coatings for sterile environments',
      category: 'hygiene',
      fileSize: '1.9 MB',
      pages: 11,
      lastUpdated: '2024-01-05',
      downloadCount: 420
    },
    {
      id: 8,
      title: 'Complete Product Catalog 2024',
      description: 'Comprehensive catalog featuring all product categories',
      category: 'general',
      fileSize: '8.2 MB',
      pages: 48,
      lastUpdated: '2024-01-20',
      downloadCount: 2100
    },
    {
      id: 9,
      title: 'Technical Data Sheets Collection',
      description: 'Detailed technical specifications for all products',
      category: 'technical',
      fileSize: '4.6 MB',
      pages: 35,
      lastUpdated: '2024-01-18',
      downloadCount: 1580
    }
  ];

  const categories = [
    { id: 'all', name: 'All Brochures' },
    { id: 'construction', name: 'Construction' },
    { id: 'paints', name: 'Paints' },
    { id: 'inks', name: 'Inks' },
    { id: 'puds', name: 'PUDs' },
    { id: 'nano', name: 'Nano-Tech' },
    { id: 'concrete', name: 'Concrete' },
    { id: 'hygiene', name: 'Hygiene' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' }
  ];

  const filteredBrochures = brochures.filter(brochure => {
    const matchesCategory = selectedCategory === 'all' || brochure.category === selectedCategory;
    const matchesSearch = brochure.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         brochure.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'construction': 'bg-blue-100 text-blue-800',
      'paints': 'bg-green-100 text-green-800',
      'inks': 'bg-purple-100 text-purple-800',
      'puds': 'bg-orange-100 text-orange-800',
      'nano': 'bg-red-100 text-red-800',
      'concrete': 'bg-indigo-100 text-indigo-800',
      'hygiene': 'bg-teal-100 text-teal-800',
      'general': 'bg-gray-100 text-gray-800',
      'technical': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

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
              Product
              <span className="block text-sky-300">Brochures</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-blue-100">
              Download comprehensive product information, technical specifications, and application guides
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
                placeholder="Search brochures..."
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

      {/* Brochures Grid */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {filteredBrochures.length === 0 ? (
            <div className="py-12 text-center">
              <Filter className="mx-auto mb-4 w-12 h-12 text-gray-400" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">No brochures found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredBrochures.map((brochure, index) => (
                <motion.div
                  key={brochure.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl group"
                >
                  {/* Brochure Header */}
                  <div className="p-6 text-white bg-gradient-to-r from-sky-500 to-blue-600">
                    <div className="flex justify-between items-center mb-4">
                      <FileText className="w-8 h-8 transition-transform group-hover:scale-110" />
                      <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(brochure.category)} text-black`}>
                        {categories.find(cat => cat.id === brochure.category)?.name}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{brochure.title}</h3>
                    <p className="text-sm text-blue-100">{brochure.description}</p>
                  </div>

                  {/* Brochure Details */}
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                      <div>
                        <span className="text-gray-600">File Size:</span>
                        <p className="font-medium text-gray-900">{brochure.fileSize}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Pages:</span>
                        <p className="font-medium text-gray-900">{brochure.pages}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Updated:</span>
                        <p className="font-medium text-gray-900">{formatDate(brochure.lastUpdated)}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Downloads:</span>
                        <p className="font-medium text-gray-900">{brochure.downloadCount.toLocaleString()}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="flex flex-1 justify-center items-center px-4 py-2 space-x-2 font-medium text-white bg-sky-600 rounded-lg transition-colors hover:bg-sky-700">
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                      <button className="px-4 py-2 text-gray-700 rounded-lg border border-gray-300 transition-colors hover:bg-gray-50">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Popular Downloads */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Most Popular Downloads
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our most requested brochures and technical documentation
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {brochures
              .sort((a, b) => b.downloadCount - a.downloadCount)
              .slice(0, 3)
              .map((brochure, index) => (
                <motion.div
                  key={brochure.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 text-center bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-sky-100 rounded-full">
                    <FileText className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{brochure.title}</h3>
                  <p className="mb-4 text-sm text-gray-600">{brochure.description}</p>
                  <div className="flex justify-center items-center mb-4 space-x-4 text-sm text-gray-500">
                    <span>{brochure.fileSize}</span>
                    <span>•</span>
                    <span>{brochure.downloadCount.toLocaleString()} downloads</span>
                  </div>
                  <button className="flex justify-center items-center px-4 py-2 space-x-2 w-full font-medium text-white bg-sky-600 rounded-lg transition-colors hover:bg-sky-700">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </motion.div>
              ))}
          </div>
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
              Need Custom Documentation?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              Our technical team can provide customized product documentation and 
              application-specific guides tailored to your requirements.
            </p>
            <div className="flex flex-col gap-4 justify-center sm:flex-row">
              <button className="px-8 py-3 font-semibold text-blue-700 bg-white rounded-lg transition-colors hover:bg-blue-50">
                Request Custom Documentation
              </button>
              <button className="flex justify-center items-center px-8 py-3 space-x-2 font-semibold text-white rounded-lg border-2 border-white transition-colors hover:bg-white hover:text-blue-700">
                <Download className="w-5 h-5" />
                <span>Download All Brochures</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Brochures;