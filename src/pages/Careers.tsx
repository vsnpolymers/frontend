import React, { useState } from 'react';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  posted: string;
}
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  MapPin, 
  Clock, 
  Search, 
  Filter,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Heart,
  Shield,
  Coffee,
  Lightbulb,
  Award,
  X,
  Upload,
  CheckCircle,
  AlertCircle
} from 'lucide-react';


const Careers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [loading, setLoading] = useState(false);
  const [resume, setResume] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [alertMessage, setAlertMessage] = useState({ type: '', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    coverLetter: ''
  });

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      // Validate file size (10MB max)
      if (file.size > 10485760) {
        setAlertMessage({ type: 'error', message: 'File size must be less than 10MB' });
        setTimeout(() => setAlertMessage({ type: '', message: '' }), 3000);
        return;
      }
      
      // Validate file type
      const allowedTypes = ['.pdf', '.doc', '.docx'];
      const fileName = file.name.toLowerCase();
      const isValidType = allowedTypes.some(type => fileName.endsWith(type));
      
      if (!isValidType) {
        setAlertMessage({ type: 'error', message: 'Please upload PDF, DOC, or DOCX files only' });
        setTimeout(() => setAlertMessage({ type: '', message: '' }), 3000);
        return;
      }
      
      setResume(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleResumeSubmit = async () => {
    if (!resume) {
      setAlertMessage({ type: 'error', message: 'Please choose a file.' });
      setTimeout(() => setAlertMessage({ type: '', message: '' }), 3000);
      return;
    }

    if (!formData.name || !formData.email) {
      setAlertMessage({ type: 'error', message: 'Please fill in all required fields.' });
      setTimeout(() => setAlertMessage({ type: '', message: '' }), 3000);
      return;
    }

    setLoading(true);
    setAlertMessage({ type: '', message: '' });

    const submitFormData = new FormData();
    submitFormData.append('name', formData.name);
    submitFormData.append('email', formData.email);
    submitFormData.append('phone', formData.phone);
    submitFormData.append('subject', 'General Resume Submission');
    submitFormData.append('message', formData.message || 'Resume submission for future opportunities');
    submitFormData.append('attachment', resume);

    try {
      const response = await fetch('https://api.vsnpolymers.com/send_mail.php', {
        method: 'POST',
        body: submitFormData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const responseText = await response.text();
        console.log('Non-JSON response:', responseText);
        throw new Error("Server returned non-JSON response.");
      }

      const result = await response.json();

      if (result.success) {
        setAlertMessage({ type: 'success', message: 'Resume submitted successfully!' });
        setResume(null);
        setFormData({ name: '', email: '', phone: '', message: '', coverLetter: '' });
        setTimeout(() => {
          setIsModalOpen(false);
          setAlertMessage({ type: '', message: '' });
        }, 2000);
      } else {
        const errorMsg = result.errors ? result.errors.join(', ') : result.message || 'An error occurred. Please try again.';
        setAlertMessage({ type: 'error', message: errorMsg });
      }
    } catch (error: unknown) {
      const err = error as Error;
      if (err.message.includes('Failed to fetch')) {
        setAlertMessage({ type: 'error', message: 'Cannot connect to server. Please check your connection.' });
      } else {
        setAlertMessage({ type: 'error', message: 'Error: ' + err.message });
      }
      console.error('Error details:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleJobApplication = async () => {
    if (!resume) {
      setAlertMessage({ type: 'error', message: 'Please upload your resume.' });
      setTimeout(() => setAlertMessage({ type: '', message: '' }), 3000);
      return;
    }

    if (!formData.name || !formData.email || !formData.coverLetter) {
      setAlertMessage({ type: 'error', message: 'Please fill in all required fields.' });
      setTimeout(() => setAlertMessage({ type: '', message: '' }), 3000);
      return;
    }

    setLoading(true);
    setAlertMessage({ type: '', message: '' });

    const submitFormData = new FormData();
    submitFormData.append('name', formData.name);
    submitFormData.append('email', formData.email);
    submitFormData.append('phone', formData.phone);
    submitFormData.append('subject', `Job Application: ${selectedJob?.title || 'Unknown Position'}`);
    submitFormData.append('message', `
Position: ${selectedJob?.title || 'Unknown'}\nDepartment: ${selectedJob?.department || 'Unknown'}\nLocation: ${selectedJob?.location || 'Unknown'}\n\nCover Letter:\n${formData.coverLetter}`);
    submitFormData.append('attachment', resume);

    try {
      const response = await fetch('https://api.vsnpolymers.com/send_mail.php', {
        method: 'POST',
        body: submitFormData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const responseText = await response.text();
        console.log('Non-JSON response:', responseText);
        throw new Error("Server returned non-JSON response.");
      }

      const result = await response.json();

      if (result.success) {
        setAlertMessage({ type: 'success', message: 'Application submitted successfully!' });
        setResume(null);
        setFormData({ name: '', email: '', phone: '', message: '', coverLetter: '' });
        setTimeout(() => {
          setIsApplicationModalOpen(false);
          setSelectedJob(null);
          setAlertMessage({ type: '', message: '' });
        }, 2000);
      } else {
        const errorMsg = result.errors ? result.errors.join(', ') : result.message || 'An error occurred. Please try again.';
        setAlertMessage({ type: 'error', message: errorMsg });
      }
    } catch (error: unknown) {
      const err = error as Error;
      if (err.message.includes('Failed to fetch')) {
        setAlertMessage({ type: 'error', message: 'Cannot connect to server. Please check your connection.' });
      } else {
        setAlertMessage({ type: 'error', message: 'Error: ' + err.message });
      }
      console.error('Error details:', error);
    } finally {
      setLoading(false);
    }
  };

  const openApplicationModal = (job: Job) => {
    setSelectedJob(job);
    setIsApplicationModalOpen(true);
    setAlertMessage({ type: '', message: '' });
  };
  


  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Polymer Chemist',
      department: 'R&D',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Lead polymer development projects and drive innovation in acrylic formulations.',
      requirements: ['Ph.D. in Chemistry/Chemical Engineering', 'Polymer research experience', 'Leadership skills'],
      posted: '2024-01-15'
    },
    {
      id: 2,
      title: 'Production Manager',
      department: 'Manufacturing',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '7-10 years',
      description: 'Oversee manufacturing operations and ensure quality production standards.',
      requirements: ['Chemical Engineering degree', 'Manufacturing experience', 'Team management'],
      posted: '2024-01-12'
    },
    {
      id: 3,
      title: 'Quality Control Analyst',
      department: 'Quality Assurance',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Conduct quality testing and ensure compliance with industry standards.',
      requirements: ['Chemistry/Chemical Engineering degree', 'Analytical skills', 'Attention to detail'],
      posted: '2024-01-10'
    },
    {
      id: 4,
      title: 'Sales Executive - International',
      department: 'Sales',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Develop international markets and manage key customer relationships.',
      requirements: ['Business/Chemistry degree', 'Sales experience', 'Communication skills'],
      posted: '2024-01-08'
    },
    {
      id: 5,
      title: 'Process Engineer',
      department: 'Engineering',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '3-6 years',
      description: 'Optimize manufacturing processes and implement efficiency improvements.',
      requirements: ['Chemical/Process Engineering', 'Process optimization', 'Problem-solving'],
      posted: '2024-01-05'
    },
    {
      id: 6,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Mumbai, Maharashtra',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Develop marketing strategies and promote our polymer solutions.',
      requirements: ['Marketing/Business degree', 'Digital marketing', 'Creative thinking'],
      posted: '2024-01-03'
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'R&D', name: 'Research & Development' },
    { id: 'Manufacturing', name: 'Manufacturing' },
    { id: 'Quality Assurance', name: 'Quality Assurance' },
    { id: 'Sales', name: 'Sales' },
    { id: 'Engineering', name: 'Engineering' },
    { id: 'Marketing', name: 'Marketing' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'Mumbai, Maharashtra', name: 'Mumbai, Maharashtra' }
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Focused on fostering creativity, research, and breakthrough solutions that shape the future.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Continuous training and skill development opportunities'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths and mentorship programs'
    },
    {
      icon: Shield,
      title: 'Job Security',
      description: 'Stable employment with a growing company'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and family-friendly policies'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance-based bonuses and recognition programs'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative work environment and team building activities'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const getDepartmentColor = (department: string) => {
    const colors = {
      'R&D': 'bg-purple-100 text-purple-800',
      'Manufacturing': 'bg-blue-100 text-blue-800',
      'Quality Assurance': 'bg-green-100 text-green-800',
      'Sales': 'bg-orange-100 text-orange-800',
      'Engineering': 'bg-indigo-100 text-indigo-800',
      'Marketing': 'bg-pink-100 text-pink-800'
    };
    return colors[department as keyof typeof colors] || 'bg-gray-100 text-gray-800';
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
              Join Our
              <span className="block text-sky-300">Team</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-blue-100">
              Build your career with a leading polymer manufacturing company and be part of our innovative journey
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Work With Us?
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Join a dynamic team of professionals committed to innovation, quality, and growth
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 text-center bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 bg-sky-100 rounded-full">
                    <IconComponent className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-40 py-8 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 justify-between items-center lg:flex-row">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 w-5 h-5 text-gray-400 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="py-2 pr-4 pl-10 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Current Openings</h2>
            <p className="text-lg text-gray-600">
              {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} available
            </p>
          </motion.div>

          {filteredJobs.length === 0 ? (
            <div className="py-12 text-center">
              <Filter className="mx-auto mb-4 w-12 h-12 text-gray-400" />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-3 space-x-3">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDepartmentColor(job.department)}`}>
                          {job.department}
                        </span>
                      </div>
                      
                      <p className="mb-4 text-gray-600">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="mb-2 font-semibold text-gray-900">Key Requirements:</h4>
                        <ul className="space-y-1 text-sm list-disc list-inside text-gray-600">
                          {job.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:ml-6 lg:flex-shrink-0">
                      <button 
                        onClick={() => openApplicationModal(job)}
                        className="px-8 py-3 w-full font-medium text-white bg-sky-600 rounded-lg transition-colors lg:w-auto hover:bg-sky-700">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Application Process
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Our streamlined hiring process ensures a smooth experience for all candidates
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: '1', title: 'Apply Online', description: 'Submit your application and resume through our portal' },
              { step: '2', title: 'Initial Screening', description: 'HR team reviews your application and conducts initial screening' },
              { step: '3', title: 'Technical Interview', description: 'Department head conducts technical and behavioral assessment' },
              { step: '4', title: 'Final Decision', description: 'Receive offer letter and join our team' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 text-xl font-bold text-white bg-sky-600 rounded-full">
                  {process.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{process.title}</h3>
                <p className="text-sm text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-700">
      <div className="px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Ready to Join Our Team?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
          Don&apos;t see a perfect match? Send us your resume and we&apos;ll keep you in mind for future opportunities.
        </p>

        {/* Main Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-3 font-semibold text-blue-700 bg-white rounded-lg transition-colors hover:bg-blue-50"
        >
          Submit Your Resume
        </button>

        {/* Resume Submission Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                className="overflow-y-auto p-6 w-full max-w-lg max-h-[90vh] bg-white rounded-2xl shadow-lg"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Submit Your Resume
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1 text-gray-400 rounded-lg transition-colors hover:text-gray-600 hover:bg-gray-100"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {alertMessage.message && (
                  <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
                    alertMessage.type === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {alertMessage.type === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span className="text-sm">{alertMessage.message}</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Tell us about your experience and interests..."
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Resume <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeChange}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="flex gap-3 items-center px-4 py-3 w-full text-gray-600 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed transition-colors cursor-pointer hover:border-sky-500 hover:bg-sky-50"
                      >
                        <Upload className="w-5 h-5" />
                        <span className="text-sm">
                          {resume ? resume.name : 'Choose file (PDF, DOC, DOCX - Max 10MB)'}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 justify-end mt-6">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg transition-colors hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleResumeSubmit}
                    disabled={loading}
                    className="flex gap-2 items-center px-6 py-2 font-medium text-white bg-sky-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-sky-700"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white animate-spin border-t-transparent" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Resume'
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Job Application Modal */}
        <AnimatePresence>
          {isApplicationModalOpen && selectedJob && (
            <motion.div
              className="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsApplicationModalOpen(false)}
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
                      Apply for {selectedJob.title}
                    </h3>
                    <p className="mt-1 text-gray-600">
                      {selectedJob.department} • {selectedJob.location}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsApplicationModalOpen(false)}
                    className="p-1 text-gray-400 rounded-lg transition-colors hover:text-gray-600 hover:bg-gray-100"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {alertMessage.message && (
                  <div className={`mb-4 p-3 rounded-lg flex items-center gap-2 ${
                    alertMessage.type === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {alertMessage.type === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span className="text-sm">{alertMessage.message}</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Cover Letter <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={6}
                      className="px-3 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Resume/CV <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeChange}
                        className="hidden"
                        id="application-resume-upload"
                      />
                      <label
                        htmlFor="application-resume-upload"
                        className="flex gap-3 items-center px-4 py-3 w-full text-gray-600 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed transition-colors cursor-pointer hover:border-sky-500 hover:bg-sky-50"
                      >
                        <Upload className="w-5 h-5" />
                        <span className="text-sm">
                          {resume ? resume.name : 'Choose file (PDF, DOC, DOCX - Max 10MB)'}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 justify-end mt-6">
                  <button
                    onClick={() => setIsApplicationModalOpen(false)}
                    className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg transition-colors hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleJobApplication}
                    disabled={loading}
                    className="flex gap-2 items-center px-6 py-2 font-medium text-white bg-sky-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-sky-700"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white animate-spin border-t-transparent" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
    </div>
  );
};

export default Careers;