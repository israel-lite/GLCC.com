import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedStars from '../components/AnimatedStars';

const Privacy = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentSection, setCurrentSection] = useState(0);
  
  const sections = [
    { title: 'Your privacy is important to us.', subtitle: 'Learn how we protect your information.' },
    { title: 'Information We Collect', content: 'At Glory Live Church Children\'s Ministry, we collect information to provide better services to our community:' },
    { title: 'How We Use Your Information', content: 'We use the information we collect to:' },
    { title: 'Information Sharing', content: 'We do not sell, rent, or trade your personal information.' },
    { title: 'Data Security', content: 'We implement appropriate security measures to protect your personal information:' },
    { title: 'Photos and Media', content: 'From time to time, we may take photos or videos during ministry activities for:' },
    { title: 'Your Rights', content: 'You have the right to:' },
    { title: 'Children\'s Privacy', content: 'Our ministry is specifically designed for children, and we take extra precautions:' },
    { title: 'Contact Information', content: 'If you have questions about this Privacy Policy or need to exercise your rights, please contact us:' },
    { title: 'Policy Updates', content: 'We may update this Privacy Policy from time to time.' }
  ];

  useEffect(() => {
    const section = sections[currentSection];
    const textToType = section.title + (section.subtitle ? ` ${section.subtitle}` : '') + (section.content ? ` ${section.content}` : '');
    let charIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (charIndex < textToType.length) {
        setDisplayedText(textToType.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          if (currentSection < sections.length - 1) {
            setCurrentSection(currentSection + 1);
            setDisplayedText('');
          }
        }, 2000);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, [currentSection, sections]);
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
          <div className="relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <div className="h-1 w-32 mx-auto mb-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
            <div className="text-xl text-gray-300 min-h-[2em]">
              <span className="inline-block">
                {displayedText}
                <span className="animate-pulse text-green-400">|</span>
              </span>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gradient-to-r from-blue-400/30 to-purple-400/30 shadow-2xl"
          >
            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Information We Collect
                  </span>
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p className="text-lg">At Glory Live Church Children's Ministry, we collect information to provide better services to our community:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li className="text-blue-300">Contact information (name, email, phone number)</li>
                    <li className="text-purple-300">Children's information (age, grade, special needs)</li>
                    <li className="text-pink-300">Emergency contact details</li>
                    <li className="text-cyan-300">Event registration information</li>
                    <li className="text-green-300">Volunteer applications and background check information</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    How We Use Your Information
                  </span>
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p className="text-lg">We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li className="text-green-300">Communicate with parents and guardians about children's ministry activities</li>
                    <li className="text-cyan-300">Organize and manage events and programs</li>
                    <li className="text-blue-300">Ensure the safety and security of all children in our care</li>
                    <li className="text-purple-300">Send updates about ministry news and upcoming events</li>
                    <li className="text-pink-300">Process volunteer applications and maintain required records</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Information Sharing
                  </span>
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p className="text-lg">We do not sell, rent, or trade your personal information. We may share information only in the following circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li className="text-purple-300">With your explicit consent</li>
                    <li className="text-pink-300">With ministry volunteers and staff who need the information to perform their duties</li>
                    <li className="text-red-300">When required by law or to protect the safety of children</li>
                    <li className="text-orange-300">With background check services for volunteer screening</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <div className="text-gray-300 space-y-3">
                  <p>We implement appropriate security measures to protect your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Secure storage of physical and digital records</li>
                    <li>Limited access to sensitive information</li>
                    <li>Regular security reviews and updates</li>
                    <li>Staff training on privacy and security protocols</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Photos and Media</h2>
                <div className="text-gray-300 space-y-3">
                  <p>From time to time, we may take photos or videos during ministry activities for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Church website and social media</li>
                    <li>Ministry promotional materials</li>
                    <li>Church newsletters and communications</li>
                  </ul>
                  <p>We will obtain parental consent before using any images that clearly identify children.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <div className="text-gray-300 space-y-3">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access and review your personal information</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Withdraw consent for certain uses of your information</li>
                    <li>Request deletion of your information (where legally permitted)</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
                <div className="text-gray-300 space-y-3">
                  <p>Our ministry is specifically designed for children, and we take extra precautions:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>We only collect information necessary for ministry operations</li>
                    <li>We do not collect information from children without parental consent</li>
                    <li>We maintain strict confidentiality regarding children's information</li>
                    <li>All volunteers undergo background checks and training</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Contact Information
                  </span>
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p className="text-lg">If you have questions about this Privacy Policy or need to exercise your rights, please contact us:</p>
                  <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-4 mt-4 border border-blue-400/30">
                    <p className="text-cyan-300"><strong>Email:</strong> childrens@glorylivechurch.com</p>
                    <p className="text-purple-300"><strong>Phone:</strong> (123) 456-7890</p>
                    <p className="text-pink-300"><strong>Address:</strong> Korinjo House, British America, Jos Plateau, Nigeria</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
                <div className="text-gray-300 space-y-3">
                  <p>We may update this Privacy Policy from time to time. We will notify parents and guardians of any significant changes through our regular communication channels.</p>
                  <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
