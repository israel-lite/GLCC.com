import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedStars from '../components/AnimatedStars';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <AnimatedStars />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        {/* Big Glowing Star */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative"
          >
            <div className="w-32 h-32 relative">
              {/* Star with multiple colors */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-2xl"
              >
                <defs>
                  <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6B6B" />
                    <stop offset="10%" stopColor="#4ECDC4" />
                    <stop offset="20%" stopColor="#45B7D1" />
                    <stop offset="30%" stopColor="#96CEB4" />
                    <stop offset="40%" stopColor="#FFEAA7" />
                    <stop offset="50%" stopColor="#DDA0DD" />
                    <stop offset="60%" stopColor="#98D8C8" />
                    <stop offset="70%" stopColor="#F7DC6F" />
                    <stop offset="80%" stopColor="#BB8FCE" />
                    <stop offset="90%" stopColor="#85C1E2" />
                    <stop offset="100%" stopColor="#F8B739" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <motion.path
                  d="M50,10 L61,35 L88,35 L66,57 L75,87 L50,70 L25,87 L34,57 L12,35 L39,35 Z"
                  fill="url(#starGradient)"
                  filter="url(#glow)"
                  animate={{
                    fill: [
                      "url(#starGradient)",
                      "#FF6B6B",
                      "#4ECDC4",
                      "#45B7D1",
                      "#96CEB4",
                      "#FFEAA7",
                      "#DDA0DD",
                      "#98D8C8",
                      "#F7DC6F",
                      "#BB8FCE",
                      "#85C1E2",
                      "#F8B739",
                      "url(#starGradient)"
                    ]
                  }}
                  transition={{ 
                    fill: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              </svg>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 rounded-full blur-xl animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Welcome to Life Builder's City Church
            <span className="block bg-gradient-to-r from-light-blue to-soft-yellow bg-clip-text text-transparent">Children's Ministry</span>
            <span className="text-5xl md:text-6xl lg:text-7xl mt-2 inline-block">{" "}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Where faith meets fun! Join us for an amazing journey of learning, laughter, and love in a safe and nurturing environment.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-light-blue to-soft-yellow text-navy-dark font-semibold rounded-full hover:from-white hover:to-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Us
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-transparent border-2 border-light-blue text-light-blue font-semibold rounded-full hover:bg-gradient-to-r hover:from-light-blue hover:to-soft-yellow hover:text-navy-dark transition-all duration-300 transform hover:scale-105"
            >
              Explore
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Children Image Section */}
      <section className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Our <span className="bg-gradient-to-r from-light-blue to-soft-yellow bg-clip-text text-transparent">Amazing Children</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              See the joy and excitement as our children learn, grow, and have fun in their faith journey
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Learning Together",
                description: "Children engaged in Bible study and activities",
                emoji: "👥",
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              {
                title: "Creative Worship",
                description: "Expressing faith through arts and music",
                emoji: "🎨",
                gradient: "from-yellow-500/20 to-orange-500/20"
              },
              {
                title: "Fun & Friendship",
                description: "Building lasting friendships in God's love",
                emoji: "🌟",
                gradient: "from-green-500/20 to-teal-500/20"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-medium/50 to-navy-dark/50 border border-light-blue/20 hover:border-light-blue/40 transition-all duration-300 backdrop-blur-sm"
              >
                <div className={`aspect-video bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                  <div className="text-center p-6">
                    <div className="text-6xl mb-4">{item.emoji}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-light-blue rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-soft-yellow rounded-full animate-pulse delay-75"></div>
                    <div className="w-2 h-2 bg-light-blue rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Enhanced Bible Verse Section */}
      <section className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-navy-medium/60 to-navy-dark/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-light-blue/30 shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-light-blue via-soft-yellow to-light-blue"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-light-blue/10 to-soft-yellow/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-soft-yellow/10 to-light-blue/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-16 h-16 bg-gradient-to-r from-light-blue to-soft-yellow rounded-full flex items-center justify-center text-2xl mx-auto mb-6"
              >
                📖
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-light-blue to-soft-yellow bg-clip-text text-transparent mb-6"
              >
                Verse of the Week
              </motion.h2>
              
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-white italic mb-4 leading-relaxed"
              >
                "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these."
              </motion.blockquote>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-gray-300 font-medium"
              >
                Matthew 19:14
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Video Section */}
      <section className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Watch Our <span className="bg-gradient-to-r from-light-blue to-soft-yellow bg-clip-text text-transparent">Latest Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              Experience the joy and excitement of our children's ministry through our video highlights
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-navy-medium/50 to-navy-dark/50 border border-light-blue/20 hover:border-light-blue/40 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-purple/20 to-pink/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-gradient-to-r from-light-blue to-soft-yellow rounded-full flex items-center justify-center text-3xl mb-6 mx-auto cursor-pointer"
                  >
                    ▶️
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Sunday Service Highlights</h3>
                  <p className="text-gray-300 text-sm">Join us for an amazing time of worship and learning</p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-navy-dark/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-4">
                    <div className="w-0 h-0 border-l-[12px] border-l-navy-dark border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-white font-semibold">Play Video</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-navy-medium/50 to-navy-dark/50 border border-light-blue/20 hover:border-light-blue/40 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-blue/20 to-green/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-gradient-to-r from-soft-yellow to-light-blue rounded-full flex items-center justify-center text-3xl mb-6 mx-auto cursor-pointer"
                  >
                    🎬
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">Special Events</h3>
                  <p className="text-gray-300 text-sm">Celebrating our children's achievements and milestones</p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-navy-dark/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center mb-4">
                    <div className="w-0 h-0 border-l-[12px] border-l-navy-dark border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                  <p className="text-white font-semibold">Play Video</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Fun Activity Section */}
      <section className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">Fun Activities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Bible Stories",
                description: "Interactive storytelling that brings God's word to life",
                emoji: "??",
                color: "from-light-blue to-blue-500"
              },
              {
                title: "Crafts & Arts",
                description: "Creative projects that teach biblical lessons",
                emoji: "??",
                color: "from-soft-yellow to-yellow-500"
              },
              {
                title: "Games & Songs",
                description: "Fun activities that build friendships and faith",
                emoji: "??",
                color: "from-purple-400 to-pink-500"
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-light-blue/10 to-soft-yellow/10 backdrop-blur-sm rounded-2xl p-6 border border-light-blue/30 hover:border-soft-yellow/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${activity.color} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto`}>
                  {activity.emoji}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{activity.title}</h3>
                <p className="text-gray-300 text-center">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Leaders/Teachers Section */}
      <section className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Meet Our <span className="bg-gradient-to-r from-light-blue to-soft-yellow bg-clip-text text-transparent">Dedicated Leaders</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              Our passionate teachers and leaders who nurture and guide our children in their faith journey
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                name: "Min. Ife",
                role: "Children's Pastor",
                emoji: "👩‍🏫",
                gradient: "from-blue-500/20 to-purple-500/20"
              },
              {
                name: "Min. Chisom",
                role: "Sunday School Teacher",
                emoji: "👨‍🏫",
                gradient: "from-green-500/20 to-teal-500/20"
              },
              {
                name: "Min. Gift",
                role: "Worship Leader",
                emoji: "👩‍🎤",
                gradient: "from-yellow-500/20 to-orange-500/20"
              },
              {
                name: "Min. Jedidiah",
                role: "Activities Coordinator",
                emoji: "👨‍🎨",
                gradient: "from-pink-500/20 to-red-500/20"
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-navy-medium/50 to-navy-dark/50 border border-light-blue/20 hover:border-light-blue/40 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="aspect-square bg-gradient-to-br from-light-blue/20 to-soft-yellow/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${leader.gradient} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg`}>
                      {leader.emoji}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{leader.name}</h3>
                    <p className="text-light-blue text-sm">{leader.role}</p>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-center w-full">
                    <h3 className="text-white font-bold text-lg mb-1">{leader.name}</h3>
                    <p className="text-light-blue text-sm mb-3">{leader.role}</p>
                    <div className="flex justify-center space-x-2">
                      <div className="w-8 h-8 bg-light-blue/20 rounded-full flex items-center justify-center">
                        <span className="text-xs">💬</span>
                      </div>
                      <div className="w-8 h-8 bg-soft-yellow/20 rounded-full flex items-center justify-center">
                        <span className="text-xs">📧</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Content Section - 3 cards near footer */}
      <section className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Moments</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Video Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-navy-medium/50 to-navy-dark/50 border border-light-blue/20 hover:border-light-blue/40 transition-all duration-300"
            >
              {/* Video thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-purple/20 to-pink/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-light-blue to-soft-yellow rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                    ?
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Sunday Service Highlights</h3>
                  <p className="bg-gradient-to-r from-light-blue to-soft-yellow bg-clip-text text-transparent text-sm">Watch our amazing children in action</p>
                </div>
              </div>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-navy-dark/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-light-blue to-soft-yellow rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                </div>
              </div>
              
              {/* Video info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-dark/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg mb-2">Latest Service</h3>
                <p className="bg-gradient-to-r from-light-blue to-soft-yellow bg-clip-text text-transparent text-sm">Experience the joy and excitement of our children's ministry</p>
              </div>
            </motion.div>

            {/* Image Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-navy-medium/50 to-navy-dark/50 border border-light-blue/20 hover:border-light-blue/40 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-light-blue/20 to-soft-yellow/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-soft-yellow to-light-blue rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                    ?
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Bible Story Time</h3>
                  <p className="bg-gradient-to-r from-soft-yellow to-light-blue bg-clip-text text-transparent text-sm">Children engaged in God's word</p>
                </div>
              </div>
              
              {/* Image info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-dark/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg mb-2">Story Time</h3>
                <p className="bg-gradient-to-r from-soft-yellow to-light-blue bg-clip-text text-transparent text-sm">Bringing Bible stories to life with imagination</p>
              </div>
            </motion.div>

            {/* Image Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-navy-medium/50 to-navy-dark/50 border border-light-blue/20 hover:border-light-blue/40 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-green/20 to-blue/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-light-blue to-soft-yellow rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                    ?
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Crafts & Creativity</h3>
                  <p className="bg-gradient-to-r from-light-blue to-soft-yellow bg-clip-text text-transparent text-sm">Hands-on learning activities</p>
                </div>
              </div>
              
              {/* Image info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-dark/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg mb-2">Creative Arts</h3>
                <p className="bg-gradient-to-r from-light-blue to-soft-yellow bg-clip-text text-transparent text-sm">Expressing faith through creativity and fun</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
