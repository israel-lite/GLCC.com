import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedStars from '../components/AnimatedStars';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedStars />
      
      <div className="relative z-10 px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-300">We'd love to hear from you! Reach out with any questions or to learn more about our children's ministry.</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-green-primary/20 to-green-secondary/20 backdrop-blur-sm rounded-3xl p-8 border border-green-accent/30">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 mb-6"
                >
                  <p className="text-green-400">{submitStatus}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-green-accent font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy-dark/50 border border-green-accent/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-accent/50 focus:border-green-accent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-green-accent font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy-dark/50 border border-green-accent/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-accent/50 focus:border-green-accent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-green-accent font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-navy-dark/50 border border-light-blue/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-light-blue/50 focus:border-light-blue transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-green-accent text-navy-dark font-semibold rounded-xl hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Quick Contact Info */}
            <div className="bg-gradient-to-br from-green-primary/20 to-green-secondary/20 backdrop-blur-sm rounded-3xl p-8 border border-green-accent/30">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-accent/20 rounded-full flex items-center justify-center text-green-accent">
                    ??
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">childrens@glorylivechurch.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-accent/20 rounded-full flex items-center justify-center text-green-accent">
                    ??
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-accent/20 rounded-full flex items-center justify-center text-green-accent">
                    ??
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Address</p>
                    <p className="text-white font-medium">Korinjo House, British America, Jos Plateau, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div className="bg-gradient-to-r from-green-primary/20 to-green-accent/20 backdrop-blur-sm rounded-3xl p-8 border border-green-accent/30">
              <h3 className="text-xl font-bold text-white mb-4">Service Times</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday School</span>
                  <span className="text-green-accent font-medium">9:00 AM - 10:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Children's Church</span>
                  <span className="text-green-accent font-medium">11:00 AM - 12:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Wednesday Kids Club</span>
                  <span className="text-green-accent font-medium">6:30 PM - 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-green-primary/20 to-green-secondary/20 backdrop-blur-sm rounded-3xl p-8 border border-green-accent/30">
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { name: 'Facebook', icon: '/images/facebook-icon.svg', color: 'bg-blue-600' },
                  { name: 'Instagram', icon: '/images/instagram-icon.svg', color: 'bg-pink-600' },
                  { name: 'YouTube', icon: '/images/youtube-icon.svg', color: 'bg-red-600' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-300`}
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name}
                      className="w-6 h-6"
                      onError={(e) => {
                        e.target.src = `https://cdn-icons-png.flaticon.com/512/174/174848.png`;
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-6xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-br from-green-primary/20 to-green-secondary/20 backdrop-blur-sm rounded-3xl p-8 border border-green-accent/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Find Us</h3>
            <div className="aspect-video bg-gradient-to-br from-green-primary/20 to-green-secondary/20 rounded-2xl flex items-center justify-center border-2 border-dashed border-green-accent/30">
              <div className="text-center">
                <div className="text-6xl mb-4">??</div>
                <p className="text-gray-400">Interactive Map</p>
                <p className="text-green-accent text-sm mt-2">Korinjo House, British America, Jos Plateau, Nigeria</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
