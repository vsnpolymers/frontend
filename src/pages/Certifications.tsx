import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, Shield, CheckCircle, FileText, Globe, Users, Beaker } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'ISO 9001:2015',
      description: 'Quality Management Systems',
      category: 'Quality',
      icon: Award,
      validUntil: '2026',
      certificateNumber: 'QMS-2023-001'
    },
    {
      title: 'ISO 14001:2015',
      description: 'Environmental Management Systems',
      category: 'Environment',
      icon: Globe,
      validUntil: '2026',
      certificateNumber: 'EMS-2023-002'
    },
    {
      title: 'OHSAS 18001',
      description: 'Occupational Health and Safety Assessment',
      category: 'Safety',
      icon: Shield,
      validUntil: '2025',
      certificateNumber: 'OHS-2023-003'
    },
    {
      title: 'GMP Certification',
      description: 'Good Manufacturing Practices',
      category: 'Manufacturing',
      icon: Beaker,
      validUntil: '2025',
      certificateNumber: 'GMP-2023-004'
    },
    {
      title: 'CE Marking',
      description: 'European Conformity',
      category: 'Compliance',
      icon: CheckCircle,
      validUntil: '2027',
      certificateNumber: 'CE-2023-005'
    },
    {
      title: 'REACH Compliance',
      description: 'Registration, Evaluation, Authorization of Chemicals',
      category: 'Regulatory',
      icon: FileText,
      validUntil: '2025',
      certificateNumber: 'REACH-2023-006'
    }
  ];

  const qualityStandards = [
    {
      title: 'Raw Material Testing',
      description: 'All incoming raw materials undergo rigorous quality testing',
      icon: Beaker
    },
    {
      title: 'In-Process Monitoring',
      description: 'Continuous monitoring throughout the manufacturing process',
      icon: CheckCircle
    },
    {
      title: 'Final Product Inspection',
      description: 'Comprehensive testing before product release',
      icon: Award
    },
    {
      title: 'Customer Feedback Loop',
      description: 'Regular feedback collection and process improvement',
      icon: Users
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Quality': 'from-blue-500 to-blue-600',
      'Environment': 'from-green-500 to-green-600',
      'Safety': 'from-red-500 to-red-600',
      'Manufacturing': 'from-purple-500 to-purple-600',
      'Compliance': 'from-orange-500 to-orange-600',
      'Regulatory': 'from-teal-500 to-teal-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quality
              <span className="block text-sky-400">Certifications</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence validated by international standards and certifications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of quality, safety, and environmental responsibility 
              through rigorous certification processes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={cert.certificateNumber}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  {/* Certificate Header */}
                  <div className={`bg-gradient-to-r ${getCategoryColor(cert.category)} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="h-8 w-8 group-hover:scale-110 transition-transform" />
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                        {cert.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-blue-100 text-sm">{cert.description}</p>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">Certificate No:</span>
                        <span className="text-gray-900 font-medium text-sm">{cert.certificateNumber}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">Valid Until:</span>
                        <span className="text-green-600 font-medium text-sm">{cert.validUntil}</span>
                      </div>
                    </div>

                    {/* Download Button */}
                    <button className="w-full bg-sky-600 text-white py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors font-medium flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Download Certificate</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quality Assurance Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive quality management system ensures consistent product excellence 
              at every stage of manufacturing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => {
              const IconComponent = standard.icon;
              return (
                <motion.div
                  key={standard.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{standard.title}</h3>
                  <p className="text-gray-600 text-sm">{standard.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <Shield className="h-16 w-16 text-sky-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Compliance Commitment
              </h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-center mb-6">
                At VSN Polymers Limited, we are committed to maintaining the highest standards 
                of quality, safety, and environmental responsibility. Our certifications represent 
                our dedication to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Excellence</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Consistent product quality</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Customer satisfaction</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Continuous improvement</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Responsibility</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Environmental protection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Worker safety</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Regulatory compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
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
              Need Certificate Verification?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our quality team is available to provide certificate verification and 
              answer any questions about our compliance standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Contact Quality Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors flex items-center justify-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download All Certificates</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;