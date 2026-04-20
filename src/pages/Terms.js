import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedStars from '../components/AnimatedStars';

const Terms = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const sections = [
      { title: 'Guidelines and policies for participating in our children\'s ministry programs.' },
      { title: 'Agreement to Terms', content: 'By participating in Glory Live Church Children\'s Ministry programs, you agree to comply with these Terms of Service.' },
      { title: 'Registration and Participation', content: 'To participate in our children\'s ministry programs:' },
      { title: 'Parent and Guardian Responsibilities', content: 'Parents and guardians are responsible for:' },
      { title: 'Child Safety and Behavior', content: 'To ensure a safe and positive environment for all children:' },
      { title: 'Health and Medical Policies', content: 'To protect the health of all children:' },
      { title: 'Volunteer Requirements', content: 'All volunteers must:' },
      { title: 'Photo and Media Release', content: 'By participating in our programs, you grant permission for:' },
      { title: 'Emergency Procedures', content: 'In case of emergency:' },
      { title: 'Changes to Terms', content: 'We may update these Terms of Service as needed.' }
    ];
    
    const section = sections[currentSection];
    const textToType = section.title + (section.content ? ` ${section.content}` : '');
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
  }, [currentSection]);
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
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <div className="h-1 w-32 mx-auto mb-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            <div className="text-xl text-gray-300 min-h-[2em]">
              <span className="inline-block">
                {displayedText}
                <span className="animate-pulse text-purple-400">|</span>
              </span>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-orange-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gradient-to-r from-purple-400/30 to-pink-400/30 shadow-2xl"
          >
            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                <div className="text-gray-300 space-y-3">
                  <p>By participating in Glory Live Church Children's Ministry programs, you agree to comply with these Terms of Service. These terms apply to all parents, guardians, children, and volunteers involved in our ministry.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Registration and Participation
                  </span>
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p className="text-lg">To participate in our children's ministry programs:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li className="text-blue-300">Complete and submit a registration form for each child</li>
                    <li className="text-cyan-300">Provide accurate and up-to-date contact information</li>
                    <li className="text-green-300">Inform us of any allergies, medical conditions, or special needs</li>
                    <li className="text-purple-300">Update information promptly when changes occur</li>
                    <li className="text-pink-300">Sign and return all required consent forms</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Parent and Guardian Responsibilities
                  </span>
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p className="text-lg">Parents and guardians are responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li className="text-green-300">Ensuring children arrive on time for programs and events</li>
                    <li className="text-emerald-300">Picking up children promptly at the end of activities</li>
                    <li className="text-teal-300">Providing appropriate contact information for emergencies</li>
                    <li className="text-cyan-300">Communicating any changes in children's needs or circumstances</li>
                    <li className="text-blue-300">Supporting ministry rules and guidelines</li>
                    <li className="text-purple-300">Volunteering when possible to support ministry activities</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Child Safety and Behavior
                  </span>
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p className="text-lg">To ensure a safe and positive environment for all children:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li className="text-orange-300">Children must respect volunteers and other children</li>
                    <li className="text-red-300">No bullying, fighting, or disruptive behavior will be tolerated</li>
                    <li className="text-pink-300">Children must follow all safety instructions</li>
                    <li className="text-purple-300">Personal belongings should be clearly labeled</li>
                    <li className="text-blue-300">Toys, electronics, and valuables should be left at home</li>
                    <li className="text-green-300">Appropriate modest clothing is required for all activities</li>
                  </ul>
                  <p className="text-yellow-300 mt-3">We reserve the right to remove children from activities if their behavior poses a safety risk or consistently disrupts the program.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Health and Medical Policies</h2>
                <div className="text-gray-300 space-y-3">
                  <p>To protect the health of all children:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Children who are sick should not attend ministry activities</li>
                    <li>Children must be fever-free for 24 hours before returning</li>
                    <li>Parents will be contacted to pick up sick children immediately</li>
                    <li>Medication will only be administered with written parental consent</li>
                    <li>Emergency medical treatment may be provided if parents cannot be reached</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Volunteer Requirements</h2>
                <div className="text-gray-300 space-y-3">
                  <p>All volunteers must:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Complete a volunteer application</li>
                    <li>Pass a background check</li>
                    <li>Attend required training sessions</li>
                    <li>Adhere to our child protection policies</li>
                    <li>Maintain appropriate boundaries with children</li>
                    <li>Work in teams whenever possible</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Photo and Media Release</h2>
                <div className="text-gray-300 space-y-3">
                  <p>By participating in our programs, you grant permission for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Photographs and videos of your child to be taken during ministry activities</li>
                    <li>Use of these images in church publications, website, and social media</li>
                    <li>Use of testimonials or quotes from children and parents</li>
                  </ul>
                  <p>If you do not wish your child's image to be used, please notify us in writing.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Emergency Procedures
                  </span>
                </h2>
                <div className="text-gray-300 space-y-3">
                  <p className="text-lg">In case of emergency:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li className="text-indigo-300">Staff will follow established emergency protocols</li>
                    <li className="text-purple-300">Emergency services will be contacted when necessary</li>
                    <li className="text-pink-300">Parents/guardians will be notified immediately</li>
                    <li className="text-red-300">Children will be supervised until picked up by authorized persons</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Property and Equipment</h2>
                <div className="text-gray-300 space-y-3">
                  <p>Regarding church property and equipment:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Children are expected to treat church property with respect</li>
                    <li>Parents are responsible for damage caused by their children</li>
                    <li>Personal items brought to church are at your own risk</li>
                    <li>The church is not responsible for lost or stolen items</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Communication</h2>
                <div className="text-gray-300 space-y-3">
                  <p>We communicate with families through:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Email newsletters and updates</li>
                    <li>Church announcements and bulletins</li>
                    <li>Text messages for urgent communications</li>
                    <li>Social media platforms</li>
                  </ul>
                  <p>Please ensure we have your current contact information and preferred communication methods.</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <div className="text-gray-300 space-y-3">
                  <p>While we take every precaution to ensure safety:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Participation in activities involves some inherent risk</li>
                    <li>The church is not liable for injuries sustained during normal activities</li>
                    <li>Parents are responsible for their children's medical insurance</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Termination of Participation</h2>
                <div className="text-gray-300 space-y-3">
                  <p>We reserve the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Suspend or remove children who consistently violate rules</li>
                    <li>Dismiss volunteers who fail to follow policies</li>
                    <li>Terminate participation for non-payment of fees (where applicable)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                <div className="text-gray-300 space-y-3">
                  <p>We may update these Terms of Service as needed. Changes will be communicated through our regular channels and will become effective immediately upon posting.</p>
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

export default Terms;
