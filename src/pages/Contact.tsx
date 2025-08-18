import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Building,
  User,
  FileText
} from 'lucide-react';
import emailjs from 'emailjs-com';


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    emailjs
      .send(
        'service_1h10j29',   // email key
        'template_9cppx4j',  // template key
        formData,
        'Z9Map0s2NKpntbsNk'    // public key
      )
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            subject: '',
            message: '',
            inquiryType: 'general'
          });
        },
        (error) => {
          console.error('Error sending message:', error.text);
          alert('Failed to send message. Try again later.');
        }
      );
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 9619825381'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['contact@vsnpolymers.com'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['123 Industrial Estate', 'Mumbai, Maharashtra 400001', 'India'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM', 'Sunday: Closed'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'product', label: 'Product Information' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'sales', label: 'Sales Inquiry' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'careers', label: 'Career Opportunities' }
  ];

  const offices = [
    {
      name: 'Manufacturing Unit',
      address: '456 Chemical Complex, Mumbai, Maharashtra 400002',
      phone: '+91 (0) 22 8765 4321',
      email: 'production@VSNpolymers.com',
      type: 'Manufacturing'
    }
  ];

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
              Get In
              <span className="block text-sky-300">Touch</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-blue-100">
              Ready to discuss your polymer solution needs? Our experts are here to help you find the perfect products for your applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Contact Information
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Multiple ways to reach us for all your inquiries and support needs
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="overflow-hidden bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className={`bg-gradient-to-r ${info.color} p-6 text-white`}>
                    <IconComponent className="mb-3 w-8 h-8" />
                    <h3 className="text-lg font-bold">{info.title}</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <div className="relative">
                      <FileText className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="Brief subject line"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="py-3 pr-4 pl-10 w-full rounded-lg border border-gray-300 resize-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex justify-center items-center px-6 py-3 space-x-2 w-full font-medium text-white bg-sky-600 rounded-lg transition-colors hover:bg-sky-700"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Map and Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Google Map Placeholder */}
              {/* <div className="flex justify-center items-center h-64 bg-gray-300 rounded-xl">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 w-12 h-12 text-gray-500" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Google Maps Integration</p>
                </div>
              </div> */}

              {/* Office Locations */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Our Locations</h3>
                {offices.map((office, index) => (
                  <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-bold text-gray-900">{office.name}</h4>
                      <span className="px-3 py-1 text-xs text-sky-800 bg-sky-100 rounded-full">
                        {office.type}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 mt-0.5 text-gray-400" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Need Immediate Assistance?
            </h2>
            <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
              For urgent inquiries or immediate support, reach out to us directly through these channels
            </p>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 text-center bg-white rounded-xl shadow-lg">
                <Phone className="mx-auto mb-4 w-12 h-12 text-sky-600" />
                <h3 className="mb-2 text-lg font-bold text-gray-900">Call Us</h3>
                <p className="mb-4 text-gray-600">Speak directly with our team</p>
                <a
                  href="tel:+919619825381"
                  className="inline-block px-6 py-2 font-medium text-white bg-sky-600 rounded-lg transition-colors hover:bg-sky-700"
                >
                  Call Now
                </a>
              </div>

              <div className="p-6 text-center bg-white rounded-xl shadow-lg">
                <Mail className="mx-auto mb-4 w-12 h-12 text-green-600" />
                <h3 className="mb-2 text-lg font-bold text-gray-900">Email Us</h3>
                <p className="mb-4 text-gray-600">Get detailed written responses</p>
                <a
                  href="mailto:contact@vsnpolymers.com"
                  className="inline-block px-6 py-2 font-medium text-white bg-green-600 rounded-lg transition-colors hover:bg-green-700"
                >
                  Send Email
                </a>
              </div>

              <div className="p-6 text-center bg-white rounded-xl shadow-lg">
                <MessageSquare className="mx-auto mb-4 w-12 h-12 text-purple-600" />
                <h3 className="mb-2 text-lg font-bold text-gray-900">WhatsApp</h3>
                <p className="mb-4 text-gray-600">Quick messages and support</p>
                <a
                  href="https://wa.me/+919619825381"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 font-medium text-white bg-purple-600 rounded-lg transition-colors hover:bg-purple-700"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;