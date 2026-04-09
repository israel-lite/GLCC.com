import React from 'react';
import { motion } from 'framer-motion';
import AnimatedStars from '../components/AnimatedStars';

const About = () => {
  const teachers = [
    {
      name: "Aunti Chisoume",
      role: "Lead Teacher",
      experience: "8 years",
      bio: "Passionate about teaching children about God's love through creative storytelling and interactive activities.",
      image: "/images/teacher-chisoume.jpg"
    },
    {
      name: "Aunti Ife",
      role: "Music & Worship",
      experience: "5 years",
      bio: "Brings joy through music and helps children express their faith through songs and praise.",
      image: "/images/teacher-ife.jpg"
    },
    {
      name: "Aunti Jedidaya",
      role: "Arts & Crafts",
      experience: "6 years",
      bio: "Creates beautiful craft projects that reinforce biblical lessons and encourage creativity.",
      image: "/images/teacher-jedidaya.jpg"
    },
    {
      name: "Aunti Peace",
      role: "Games & Activities",
      experience: "4 years",
      bio: "Organizes fun games and activities that teach teamwork and biblical values.",
      image: "/images/teacher-peace.jpg"
    },
    {
      name: "Uncle Peter",
      role: "Storytelling",
      experience: "7 years",
      bio: "Brings Bible stories to life with engaging narratives and interactive storytelling.",
      image: "/images/teacher-peter.jpg"
    },
    {
      name: "Aunti Christable",
      role: "Youth Mentor",
      experience: "3 years",
      bio: "Guides older children in their faith journey and helps them develop leadership skills.",
      image: "/images/teacher-christable.jpg"
    }
  ];

  return (
    <div className="relative min-h-screen">
      <AnimatedStars />
      
      <div className="relative z-10 px-4 py-20">
        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Our Ministry</h1>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-purple-primary/20 to-purple-secondary/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-accent/30">
                <h2 className="text-2xl font-semibold text-purple-accent mb-4">Our Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  At Glory Live Church Children's Ministry, we are dedicated to creating a safe, loving, and engaging environment where children can grow in their faith, build lasting friendships, and discover the joy of knowing God. We believe every child is precious and has a unique purpose in God's plan.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Safe Environment",
                  description: "All volunteers are background-checked and trained in child safety",
                  icon: "??"
                },
                {
                  title: "Age-Appropriate Learning",
                  description: "Lessons and activities tailored for different age groups",
                  icon: "??"
                },
                {
                  title: "Fun & Engaging",
                  description: "Interactive lessons that make learning about God exciting",
                  icon: "??"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-primary/20 to-purple-secondary/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-accent/30 hover:border-purple-accent/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Teachers Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Amazing Teachers</h2>
            <p className="text-xl text-light-blue font-semibold">We have 6 amazing teachers dedicated to your children's growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-gradient-to-br from-purple-primary/20 to-purple-secondary/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-accent/30 hover:border-purple-accent/50 transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-primary to-purple-secondary rounded-full overflow-hidden mx-auto mb-4 border-4 border-white/20">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/${teacher.name}/200/200.jpg`;
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{teacher.name}</h3>
                  <p className="text-purple-accent font-medium">{teacher.role}</p>
                  <p className="text-gray-400 text-sm">{teacher.experience} experience</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{teacher.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
