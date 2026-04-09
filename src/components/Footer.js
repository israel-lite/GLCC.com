import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-navy-dark/90 to-navy-medium/50 backdrop-blur-sm border-t border-light-blue/20">
      <div className="relative z-10 px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Church Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-light-blue mb-4">GLCC</h3>
              <p className="text-gray-300 mb-4">
                Glory Live Church Children's Ministry - Where faith meets fun!
              </p>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">
                  <span className="text-light-blue">Sunday:</span> 9:00 AM - 12:30 PM
                </p>
                <p className="text-gray-400 text-sm">
                  <span className="text-light-blue">Wednesday:</span> 6:30 PM - 8:00 PM
                </p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-light-blue transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-light-blue transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-gray-300 hover:text-light-blue transition-colors duration-300">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-300 hover:text-light-blue transition-colors duration-300">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-light-blue transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-light-blue/20 rounded-full flex items-center justify-center text-light-blue text-sm">
                    ?
                  </div>
                  <p className="text-gray-300 text-sm">childrens@glorylivechurch.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-light-blue/20 rounded-full flex items-center justify-center text-light-blue text-sm">
                    ?
                  </div>
                  <p className="text-gray-300 text-sm">(123) 456-7890</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-light-blue/20 rounded-full flex items-center justify-center text-light-blue text-sm">
                    ?
                  </div>
                  <p className="text-gray-300 text-sm">Korinjo House, British America, Jos Plateau, Nigeria</p>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-3 mb-4">
                {[
                  { name: 'Facebook', icon: '/images/facebook-icon.svg', color: 'bg-blue-600' },
                  { name: 'Instagram', icon: '/images/instagram-icon.svg', color: 'bg-pink-600' },
                  { name: 'YouTube', icon: '/images/youtube-icon.svg', color: 'bg-red-600' },
                  { name: 'Twitter', icon: '/images/twitter-icon.svg', color: 'bg-black' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-300`}
                    aria-label={social.name}
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name}
                      className="w-5 h-5"
                      onError={(e) => {
                        e.target.src = `https://cdn-icons-png.flaticon.com/512/174/174848.png`;
                      }}
                    />
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Join our community for updates and events!
              </p>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-light-blue/20 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Glory Live Church Children's Ministry. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-light-blue transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-light-blue transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
