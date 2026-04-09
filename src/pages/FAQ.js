import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedStars from '../components/AnimatedStars';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What time is the children's service?",
      answer: "Our children's ministry runs during the main church service. We have Sunday School from 9:00 AM to 10:30 AM, and Children's Church during the 11:00 AM service. Parents can drop off their children 15 minutes before each service begins.",
      icon: "??"
    },
    {
      question: "What age groups are allowed?",
      answer: "We welcome children from ages 3 to 12! Our classes are divided into age-appropriate groups: Little Lambs (3-5 years), Explorers (6-8 years), and Warriors (9-12 years). Each group has tailored activities and lessons suitable for their age.",
      icon: "??"
    },
    {
      question: "Is it safe for children?",
      answer: "Absolutely! Safety is our top priority. All our volunteers undergo background checks, are trained in child safety, and follow strict safety protocols. We maintain proper teacher-to-child ratios and have secure check-in/check-out procedures.",
      icon: "??"
    },
    {
      question: "Do I need to register my child in advance?",
      answer: "While advance registration is helpful, it's not required. You can register your child on your first visit. We recommend arriving 15 minutes early to complete the registration form and meet our team. You can also find registration forms on our website.",
      icon: "??"
    },
    {
      question: "What should my child bring?",
      answer: "Just bring your child and a smile! We provide all materials for activities and lessons. If your child has specific dietary needs or allergies, please let us know. For younger children, you may want to pack an extra change of clothes.",
      icon: "??"
    },
    {
      question: "Can parents stay with their children?",
      answer: "We understand that some children may need time to adjust. Parents are welcome to stay for a short period to help their child feel comfortable. However, we encourage parents to attend the main service once their child is settled, as this helps children build independence and engage better with their peers.",
      icon: "??"
    },
    {
      question: "What curriculum do you use?",
      answer: "We use age-appropriate, Bible-based curriculum that focuses on making God's word relevant and exciting for children. Our lessons include interactive storytelling, hands-on activities, worship songs, and memory verses. All materials are designed to help children understand and apply biblical truths.",
      icon: "??"
    },
    {
      question: "How can I get involved as a volunteer?",
      answer: "We'd love to have you join our team! Volunteers can serve as teachers, helpers, worship leaders, or in administrative roles. Contact our Children's Ministry Director for more information about volunteer opportunities, training requirements, and the application process.",
      icon: "??"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">Find answers to common questions about our children's ministry</p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="mb-4"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-gradient-to-br from-teal-primary/20 to-teal-secondary/20 backdrop-blur-sm rounded-2xl border border-teal-accent/30 hover:border-teal-accent/50 transition-all duration-300 p-6 focus:outline-none focus:ring-2 focus:ring-teal-accent/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <h3 className="text-lg md:text-xl font-semibold text-white">{faq.question}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-teal-accent text-2xl"
                  >
                    ?
                  </motion.div>
                </div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-teal-primary/20 to-teal-secondary/20 backdrop-blur-sm rounded-2xl border-t-0 border border-teal-accent/30 p-6 mt-2">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="bg-gradient-to-r from-teal-primary/20 to-teal-accent/20 backdrop-blur-sm rounded-3xl p-8 border border-teal-accent/30 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
            <p className="text-gray-300 mb-6">
              We're here to help! Feel free to reach out to our Children's Ministry team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:childrens@glorylivechurch.com"
                className="px-6 py-3 bg-teal-accent text-navy-dark font-semibold rounded-full hover:bg-white transition-colors duration-300"
              >
                Email Us
              </a>
              <a
                href="tel:+1234567890"
                className="px-6 py-3 bg-transparent border-2 border-teal-accent text-teal-accent font-semibold rounded-full hover:bg-teal-accent hover:text-navy-dark transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
