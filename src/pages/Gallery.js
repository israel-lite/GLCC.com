import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedStars from '../components/AnimatedStars';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery images with placeholder data
  const galleryImages = [
    {
      id: 1,
      title: "Sunday School Fun",
      description: "Happy learning moment with our amazing kids",
      category: "classroom"
    },
    {
      id: 2,
      title: "Bible Story Time",
      description: "Engaging storytelling brings God's word to life",
      category: "storytelling"
    },
    {
      id: 3,
      title: "Craft Activities",
      description: "Creative projects that teach biblical lessons",
      category: "crafts"
    },
    {
      id: 4,
      title: "Worship Time",
      description: "Kids praising God with joyful hearts",
      category: "worship"
    },
    {
      id: 5,
      title: "Games & Fun",
      description: "Building friendships through play and learning",
      category: "games"
    },
    {
      id: 6,
      title: "Teacher Love",
      description: "Our dedicated teachers caring for the children",
      category: "teachers"
    },
    {
      id: 7,
      title: "Prayer Time",
      description: "Teaching children the power of prayer",
      category: "prayer"
    },
    {
      id: 8,
      title: "Bible Learning",
      description: "Interactive Bible study sessions",
      category: "learning"
    }
  ];

  // Sample videos
  const videos = [
    {
      id: 1,
      title: "Welcome from Our Teachers",
      description: "Meet the amazing team who love and care for your children",
      thumbnail: "video-thumb-1"
    },
    {
      id: 2,
      title: "Kids Say Hello!",
      description: "Watch our wonderful children share their excitement",
      thumbnail: "video-thumb-2"
    },
    {
      id: 3,
      title: "Sunday School Highlights",
      description: "A glimpse into our fun and learning activities",
      thumbnail: "video-thumb-3"
    },
    {
      id: 4,
      title: "Praise & Worship",
      description: "Join our children in joyful worship songs",
      thumbnail: "video-thumb-4"
    }
  ];

  // 8 children videos
  const childrenVideos = [
    {
      id: 1,
      childName: "Emma",
      title: "Emma's Bible Story",
      description: "Emma shares her favorite Bible story about David and Goliath",
      thumbnail: "emma-bible-story"
    },
    {
      id: 2,
      childName: "Noah",
      title: "Noah's Worship Song",
      description: "Noah sings a beautiful worship song about God's love",
      thumbnail: "noah-worship"
    },
    {
      id: 3,
      childName: "Sophia",
      title: "Sophia's Prayer",
      description: "Sophia leads us in a heartfelt prayer for our families",
      thumbnail: "sophia-prayer"
    },
    {
      id: 4,
      childName: "Liam",
      title: "Liam's Craft Time",
      description: "Liam shows us how to make a Noah's ark craft",
      thumbnail: "liam-craft"
    },
    {
      id: 5,
      childName: "Olivia",
      title: "Olivia's Memory Verse",
      description: "Olivia recites John 3:16 with amazing confidence",
      thumbnail: "olivia-verse"
    },
    {
      id: 6,
      childName: "Ethan",
      title: "Ethan's Game Show",
      description: "Ethan hosts a fun Bible trivia game with friends",
      thumbnail: "ethan-game"
    },
    {
      id: 7,
      childName: "Ava",
      title: "Ava's Dance Performance",
      description: "Ava performs a beautiful dance to a worship song",
      thumbnail: "ava-dance"
    },
    {
      id: 8,
      childName: "Mason",
      title: "Mason's Science Experiment",
      description: "Mason demonstrates God's creation through a fun science experiment",
      thumbnail: "mason-science"
    }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-xl text-gray-300">Catch a glimpse of the joy and learning in our children's ministry</p>
        </motion.div>

        {/* Images Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Photo Memories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-pink-primary/20 to-orange-accent/20 border border-pink-secondary/30"
                onClick={() => setSelectedImage(image)}
              >
                {/* Placeholder for image */}
                <div className="aspect-square bg-gradient-to-br from-pink-primary/20 to-orange-accent/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-6xl mb-2">??</div>
                    <p className="text-white font-medium">{image.title}</p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="text-center">
                    <h3 className="text-white font-semibold mb-2">{image.title}</h3>
                    <p className="text-orange-accent text-sm">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Videos Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-7xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Video Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-pink-primary/20 to-orange-accent/20 border border-pink-secondary/30"
              >
                {/* Video thumbnail placeholder */}
                <div className="aspect-video bg-gradient-to-br from-pink-primary/20 to-orange-accent/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-5xl mb-2">??</div>
                    <p className="text-white font-medium text-sm">{video.title}</p>
                  </div>
                </div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-navy-dark/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-pink-secondary rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </div>
                
                {/* Video info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold text-sm">{video.title}</h3>
                  <p className="text-orange-accent text-xs">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Children Videos Section - 8 videos in 2x2 grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Our Amazing Children</h2>
          <p className="text-center text-gray-300 mb-8">Watch our talented children share their faith and creativity</p>
          
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {childrenVideos.map((childVideo, index) => (
              <motion.div
                key={childVideo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gradient-to-br from-pink-primary/20 to-orange-accent/20 border border-pink-secondary/30 hover:border-pink-secondary/50 transition-all duration-300"
              >
                {/* Video thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-pink-primary/20 to-orange-accent/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-primary to-pink-secondary rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                      ?
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{childVideo.childName}</h3>
                    <p className="text-orange-accent font-medium">{childVideo.title}</p>
                  </div>
                </div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-navy-dark/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 bg-pink-secondary rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-y-[10px] border-y-transparent ml-2"></div>
                  </div>
                </div>
                
                {/* Video info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-dark/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-bold text-lg mb-2">{childVideo.childName}'s Video</h3>
                  <p className="text-orange-accent text-sm">{childVideo.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-navy-dark/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl max-h-[90vh] bg-navy-medium/50 backdrop-blur-sm rounded-3xl border border-light-blue/20 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="aspect-video bg-gradient-to-br from-light-blue/20 to-soft-yellow/20 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-8xl mb-4">??</div>
                    <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                  </div>
                </div>
                <p className="text-light-blue mb-6">{selectedImage.description}</p>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-6 py-3 bg-light-blue text-navy-dark font-semibold rounded-full hover:bg-white transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
