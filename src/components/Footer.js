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
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-light-blue to-soft-yellow rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-navy-dark font-bold text-sm">LBC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Life Builder's</h3>
                  <p className="text-light-blue text-sm -mt-1">City Church</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Children's Ministry - Where faith meets fun!
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
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm">childrens@lifebuilderscitychurch.org</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-light-blue/20 rounded-full flex items-center justify-center text-light-blue text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-gray-300 text-sm">
                    <a href="tel:+2347039285363" className="hover:text-light-blue transition-colors">+234 703 928 5363</a>
                    <br />
                    <a href="tel:+2347037804874" className="hover:text-light-blue transition-colors">+234 703 780 4874</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-light-blue/20 rounded-full flex items-center justify-center text-light-blue text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
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
                  { name: 'Facebook', icon: 'https://cdn-icons-png.flaticon.com/512/174/174848.png', color: 'bg-blue-600' },
                  { name: 'Instagram', icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', color: 'bg-pink-600' },
                  { name: 'YouTube', icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png', color: 'bg-red-600' },
                  { name: 'X', icon: 'https://cdn-icons-png.flaticon.com/512/5969/5969020.png', color: 'bg-black' }
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
                © {currentYear} Life Builder's City Church Children's Ministry. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy" className="text-gray-400 hover:text-light-blue transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-gray-400 hover:text-light-blue transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
