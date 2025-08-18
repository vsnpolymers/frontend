import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Users, 
  Globe, 
  Award, 
  TrendingUp,
  CheckCircle,
  Calendar
} from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: '1999', event: 'Company Founded', description: 'VSN Polymers Limited established with a vision to revolutionize polymer chemistry' },
    { year: '2005', event: 'First Export Order', description: 'Successfully expanded to international markets with first export shipment' },
    { year: '2010', event: 'ISO Certification', description: 'Achieved ISO 9001:2008 certification for quality management systems' },
    { year: '2015', event: 'R&D Center Expansion', description: 'Expanded research and development capabilities with state-of-the-art facility' },
    { year: '2018', event: 'Nano-Technology Launch', description: 'Introduced revolutionary nano-acrylic product line' },
    { year: '2020', event: 'Sustainability Initiative', description: 'Launched eco-friendly product development program' },
    { year: '2024', event: 'Digital Transformation', description: 'Complete digitalization of operations and customer service' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously developing cutting-edge polymer solutions through advanced research and development.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Maintaining the highest standards in manufacturing processes and product quality control.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building long-term partnerships by understanding and exceeding customer expectations.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers across multiple continents with reliable and consistent service.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              About VSN
              <span className="block text-sky-400">Polymers Limited</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              10+ years of excellence in polymer chemistry and manufacturing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-12 items-center lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Our Story
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Founded in 1999, VSN Polymers Limited has grown from a small chemical 
                  manufacturing unit to a leading global supplier of specialty polymer solutions. 
                  Our journey began with a simple vision: to create innovative polymer products 
                  that solve real-world challenges across various industries.
                </p>
                <p>
                  Today, we stand as a testament to the power of innovation, quality, and 
                  customer-centricity. Our state-of-the-art manufacturing facilities and 
                  world-class research and development capabilities enable us to deliver 
                  products that consistently exceed industry standards.
                </p>
                <p>
                  With operations spanning across 15+ countries and serving over 500 clients 
                  globally, we continue to expand our reach while maintaining our commitment 
                  to excellence and sustainability.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-6 bg-sky-50 rounded-xl">
                <TrendingUp className="mb-4 w-12 h-12 text-sky-600" />
                <h3 className="mb-2 text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-600">Global Clients</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl">
                <Globe className="mb-4 w-12 h-12 text-green-600" />
                <h3 className="mb-2 text-2xl font-bold text-gray-900">15+</h3>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-xl">
                <Award className="mb-4 w-12 h-12 text-purple-600" />
                <h3 className="mb-2 text-2xl font-bold text-gray-900">25+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-6 bg-orange-50 rounded-xl">
                <Users className="mb-4 w-12 h-12 text-orange-600" />
                <h3 className="mb-2 text-2xl font-bold text-gray-900">100+</h3>
                <p className="text-gray-600">Team Members</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="flex justify-center items-center mb-6 w-16 h-16 bg-sky-100 rounded-full">
                <Target className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                To be the leading manufacturer of innovative polymer solutions that enhance 
                the performance and sustainability of our customers' products while contributing 
                to a better world through responsible chemistry and manufacturing practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="flex justify-center items-center mb-6 w-16 h-16 bg-purple-100 rounded-full">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-lg leading-relaxed text-gray-600">
                To become the most trusted global partner for specialty polymer solutions, 
                driving innovation in chemical manufacturing while maintaining our commitment 
                to environmental stewardship and sustainable business practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 text-center bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-sky-100 rounded-full">
                    <IconComponent className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Journey
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 w-1 h-full bg-sky-200 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="px-6 w-1/2">
                    <div className={`bg-white p-6 rounded-xl shadow-lg ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                      <div className="flex items-center mb-2 space-x-2">
                        <Calendar className="w-5 h-5 text-sky-600" />
                        <span className="text-2xl font-bold text-sky-600">{milestone.year}</span>
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-gray-900">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-sky-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Preview */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Quality Certifications
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
              Our commitment to quality is validated by international certifications and standards.
            </p>
            
            <div className="grid gap-6 mb-8 md:grid-cols-3">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <CheckCircle className="mx-auto mb-4 w-12 h-12 text-green-500" />
                <h3 className="mb-2 text-xl font-bold text-gray-900">ISO 9001:2015</h3>
                <p className="text-gray-600">Quality Management Systems</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <CheckCircle className="mx-auto mb-4 w-12 h-12 text-green-500" />
                <h3 className="mb-2 text-xl font-bold text-gray-900">ISO 14001:2015</h3>
                <p className="text-gray-600">Environmental Management</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <CheckCircle className="mx-auto mb-4 w-12 h-12 text-green-500" />
                <h3 className="mb-2 text-xl font-bold text-gray-900">OHSAS 18001</h3>
                <p className="text-gray-600">Occupational Health & Safety</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;