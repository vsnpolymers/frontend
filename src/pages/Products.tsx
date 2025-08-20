import React, { useState } from 'react';

interface Product {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  applications: string[];
  color: string;
}
import { motion, AnimatePresence } from 'framer-motion';
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
  Filter,
  X,
  Mail,
  User,
  Building,
  Phone,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    quantity: '',
    application: ''
  });

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
      icon: Container,
      title: 'Replakyd 527 for Furniture',
      description: 'High-quality protective coating designed to enhance durability and provide a smooth finish for wooden furniture.',
      features: ['Scratch resistant', 'UV protection', 'Water resistance', 'Enhances natural wood grain'],
      applications: ['Home furniture', 'Office interiors', 'Wooden flooring', 'Decorative wooden panels'],
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'wooden-589',
      icon: Container,
      title: 'Replakyd 589 for Furniture',
      description: 'High-quality protective coating designed to enhance durability and provide a smooth finish for wooden furniture.',
      features: ['Scratch resistant', 'UV protection', 'Water resistance', 'Enhances natural wood grain'],
      applications: ['Home furniture', 'Office interiors', 'Wooden flooring', 'Decorative wooden panels'],
      color: 'from-amber-500 to-amber-600'
    },
    
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
    // { id: 'wooden', name: 'Wood finish' },
    { id: 'wooden-589', name: 'Wood finish' }
  ];

  const filteredProducts = productCategories.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.id === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openRequestModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setAlertMessage({ type: '', message: '' });
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      quantity: '',
      application: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage({ type: 'error', message: 'Please fill in all required fields.' });
      setTimeout(() => setAlertMessage({ type: '', message: '' }), 3000);
      return;
    }

    setLoading(true);
    setAlertMessage({ type: '', message: '' });

    // Prepare form data for API
    const submitFormData = new FormData();
    submitFormData.append('name', formData.name);
    submitFormData.append('email', formData.email);
    submitFormData.append('phone', formData.phone || '');
    
    // Create detailed subject with product info
    const subject = `Product Information Request: ${selectedProduct?.title || 'Product Inquiry'}`;
    submitFormData.append('subject', subject);
    
    // Enhanced message with all details
    const enhancedMessage = `
Product: ${selectedProduct?.title || 'N/A'}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Quantity/Volume Needed: ${formData.quantity || 'Not specified'}
Application: ${formData.application || 'Not specified'}

Message/Additional Requirements:
${formData.message}

--- Product Details ---
Category: ${selectedProduct?.id || 'N/A'}
Description: ${selectedProduct?.description || 'N/A'}
Features: ${selectedProduct?.features?.join(', ') || 'N/A'}
Applications: ${selectedProduct?.applications?.join(', ') || 'N/A'}`;
    submitFormData.append('message', enhancedMessage);

    try {
      const response = await fetch('https://api.vsnpolymers.com/send_mail.php', {
        method: 'POST',
        body: submitFormData
      });

      // Check if response is OK
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const responseText = await response.text();
        console.log('Non-JSON response:', responseText);
        throw new Error("Server returned non-JSON response. Check console for details.");
      }

      const result = await response.json();

      if (result.success) {
        // Show success message
        setAlertMessage({ type: 'success', message: 'Your product information request has been sent successfully! Our team will contact you soon.' });
        
        // Reset form and close modal after delay
        setTimeout(() => {
          setIsModalOpen(false);
          setAlertMessage({ type: '', message: '' });
          setSelectedProduct(null);
        }, 2000);
      } else {
        // Show error message
        const errorMsg = result.errors 
          ? result.errors.join(', ') 
          : result.message || 'An error occurred. Please try again.';
        setAlertMessage({ type: 'error', message: errorMsg });
        setTimeout(() => setAlertMessage({ type: '', message: '' }), 5000);
      }
    } catch (error: unknown) {
      const err = error as Error;
      if (err.message.includes('Failed to fetch')) {
        setAlertMessage({ type: 'error', message: 'Cannot connect to server. Please check your connection and try again.' });
      } else {
        setAlertMessage({ type: 'error', message: 'Error: ' + err.message });
      }
      console.error('Error details:', error);
      setTimeout(() => setAlertMessage({ type: '', message: '' }), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16">
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

      <section className="sticky top-16 z-40 py-8 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 justify-between items-center lg:flex-row">
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
                    <div className={`bg-gradient-to-r ${product.color} p-6 text-white`}>
                      <IconComponent className="mb-4 w-10 h-10 transition-transform group-hover:scale-110" />
                      <h3 className="mb-2 text-xl font-bold">{product.title}</h3>
                      <p className="text-sm text-blue-100">{product.description}</p>
                    </div>

                    <div className="p-6">
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

                      <div className="pt-6 mt-6 border-t border-gray-200">
                        <button 
                          onClick={() => openRequestModal(product)}
                          className="px-4 py-2 w-full font-medium text-white bg-sky-600 rounded-lg transition-colors hover:bg-sky-700">
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
              <button 
                onClick={() => openRequestModal({
                  title: 'Custom Solution Request',
                  id: 'custom',
                  icon: Building2,
                  description: 'Request a custom polymer solution tailored to your needs',
                  features: ['Customized formulation', 'Technical consultation', 'Sample development', 'Quality assurance'],
                  applications: ['Custom applications', 'Specific requirements', 'Special projects'],
                  color: 'from-blue-500 to-blue-600'
                })}
                className="px-8 py-3 font-semibold text-blue-700 bg-white rounded-lg transition-colors hover:bg-blue-50">
                Contact Technical Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Information Request Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            className="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="overflow-y-auto p-6 w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-lg"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Request Information
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {selectedProduct.title}
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 text-gray-400 rounded-lg transition-colors hover:text-gray-600 hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {alertMessage.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                    alertMessage.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {alertMessage.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium">{alertMessage.message}</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Quantity/Volume Needed
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="px-3 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="e.g., 500kg, 10 tons, bulk order"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Intended Application
                    </label>
                    <input
                      type="text"
                      name="application"
                      value={formData.application}
                      onChange={handleInputChange}
                      className="px-3 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="e.g., exterior paint, construction adhesive"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Message/Requirements <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 resize-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Please describe your specific requirements, technical specifications, or any questions you have about this product..."
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-3 justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg transition-colors hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex gap-2 items-center px-6 py-2 font-medium text-white bg-sky-600 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-sky-700 hover:shadow-lg"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        <span>Send Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Products;