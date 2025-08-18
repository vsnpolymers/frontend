import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Beaker, 
  Shield, 
  Award, 
  Building2,
  Paintbrush,
  Droplets,
  Layers,
  Microscope,
  HardHat,
  Zap,
  Container
} from 'lucide-react';

const Home: React.FC = () => {
  const productCategories = [
    {
      icon: Building2,
      title: 'Acrylic Polymers for Construction Chemicals',
      description: 'High-performance polymers for construction applications',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Paintbrush,
      title: 'Acrylic Emulsions for Paints',
      description: 'Premium quality emulsions for paint formulations',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Droplets,
      title: 'Acrylic Emulsions for Water-Based Inks',
      description: 'Specialized emulsions for printing industry',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Layers,
      title: 'Water-Based Polyurethane Dispersions',
      description: 'Advanced PUD technology for various applications',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Microscope,
      title: 'Nano-Acrylics',
      description: 'Cutting-edge nanotechnology solutions',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: HardHat,
      title: 'Clear PU Topcoats for Concrete',
      description: 'Protective coatings for concrete surfaces',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Zap,
      title: 'Hygiene Coatings for Cleanrooms',
      description: 'Specialized coatings for sterile environments',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Container,
      title: 'Wood coating for wooden furniture',
      description: 'Protective coatings for wooden surfaces',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Product Categories', value: '8' },
    { label: 'Global Clients', value: '100+' },
    { label: 'Countries Served', value: '5+' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative text-white bg-gradient-to-br from-sky-600 via-blue-700 to-indigo-800"
        style={{
          backgroundImage: "url('/src/assets/img/acrylic.jpg')",
        }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Innovative Polymer
              <span className="block text-sky-300">Solutions</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-blue-100 md:text-2xl">
              Leading manufacturer of specialty polymers and chemical solutions for 
              construction, paints, inks, Wooden coating and industrial applications worldwide.
            </p>
            <div className="flex flex-col gap-4 justify-center sm:flex-row">
              <Link
                to="/products"
                className="flex justify-center items-center px-8 py-3 space-x-2 font-semibold text-blue-700 bg-white rounded-lg transition-colors hover:bg-blue-50"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 font-semibold text-white rounded-lg border-2 border-white transition-colors hover:bg-white hover:text-blue-700"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-2 text-3xl font-bold text-sky-600 md:text-4xl">
                  {stat.value}
                </div>
                <div className="font-medium text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              About VSN Polymers
            </h2>
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
              With over 10 years of expertise in polymer chemistry, VSN Polymers Limited 
              has established itself as a trusted partner for businesses worldwide. We specialize 
              in developing and manufacturing high-quality polymer solutions that meet the evolving 
              needs of the construction, paint, printing, and industrial sectors.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 text-center bg-white rounded-xl shadow-lg"
            >
              <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-sky-100 rounded-full">
                <Beaker className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge research and development to create next-generation polymer solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 text-center bg-white rounded-xl shadow-lg"
            >
              <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Quality</h3>
              <p className="text-gray-600">
                Rigorous quality control processes ensuring consistent product excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 text-center bg-white rounded-xl shadow-lg"
            >
              <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-purple-100 rounded-full">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                Commitment to delivering superior products and exceptional customer service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Product Categories
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Discover our comprehensive range of specialized polymer solutions designed 
              to meet diverse industry requirements.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl shadow-lg transition-shadow cursor-pointer hover:shadow-xl group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-sky-600">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 space-x-2 font-semibold text-white bg-sky-600 rounded-lg transition-colors hover:bg-sky-700"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
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
              Ready to Explore Our Solutions?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
             Contact us for more information about our products and services.
            </p>
            <div className="flex flex-col gap-4 justify-center sm:flex-row">
              {/* <Link
                to="/brochures"
                className="flex justify-center items-center px-8 py-3 space-x-2 font-semibold text-blue-700 bg-white rounded-lg transition-colors hover:bg-blue-50"
              >
                <Download className="w-5 h-5" />
                <span>Download Brochures</span>
              </Link> */}
              <Link
                to="/contact"
                className="flex justify-center items-center px-8 py-3 space-x-2 font-semibold text-blue-700 bg-white rounded-lg transition-colors hover:bg-blue-50"
              >
                Contact Our Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;