import React from "react";
import { motion } from "framer-motion";
import StarryBackground from "./StarryBackground";

const Features = () => {
  const featureGroups = [
    {
      title: "Personalized Learning",
      description: "Tailor your preparation with AI-driven personalization tools that adapt to your unique learning style and needs.",
      features: [
        {
          name: "Adaptive Learning",
          description: "Our AI analyzes your performance to create a personalized study plan",
          icon: "🧠"
        },
        {
          name: "Weakness Identification",
          description: "Pinpoint specific topics and concepts that need improvement",
          icon: "🔍"
        },
        {
          name: "Custom Question Bank",
          description: "Get questions tailored to your skill level and learning goals",
          icon: "❓"
        }
      ]
    },
    {
      title: "Performance Analytics",
      description: "Make data-driven decisions with comprehensive analytics that reveal patterns and opportunities for improvement.",
      features: [
        {
          name: "Detailed Insights",
          description: "Track your progress with comprehensive performance metrics",
          icon: "📊"
        },
        {
          name: "Comparison Tools",
          description: "See how you rank against other aspirants preparing for the same exam",
          icon: "📈"
        },
        {
          name: "Improvement Tracking",
          description: "Monitor your growth over time with visual progress charts",
          icon: "📱"
        }
      ]
    },
    {
      title: "Study Resources",
      description: "Access a rich library of high-quality learning materials designed by top educators and subject matter experts.",
      features: [
        {
          name: "Video Lessons",
          description: "Access engaging video explanations from top educators",
          icon: "🎬"
        },
        {
          name: "Flashcards",
          description: "Revise key concepts quickly with digital flashcards",
          icon: "🗂️"
        },
        {
          name: "Revision Notes",
          description: "Download concise notes for last-minute preparation",
          icon: "📝"
        }
      ]
    },
    {
      title: "Interactive Learning",
      description: "Engage with content that makes learning active, enjoyable, and effective for long-term retention.",
      features: [
        {
          name: "Live Sessions",
          description: "Participate in interactive live classes with real-time doubt resolution",
          icon: "📡"
        },
        {
          name: "Practice Challenges",
          description: "Compete with peers in timed challenges to test your knowledge",
          icon: "🏆"
        },
        {
          name: "Discussion Forums",
          description: "Collaborate with other students through moderated discussion boards",
          icon: "💬"
        }
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 12
      }
    }
  };

  // Floating animation for decorative elements
  const floatingAnimation = {
    y: ["-10px", "10px", "-10px"],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="py-20 px-6 relative bg-gradient-to-br from-[#16368e] to-[#6817ab] text-white overflow-hidden">
      <StarryBackground />
      
      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-3xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-32 left-8 w-40 h-40 rounded-full bg-blue-500 opacity-10 blur-3xl"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1 }
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-pink-500 opacity-10 blur-3xl"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 2 }
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Advanced Features
          </motion.h2>
          <motion.p 
            className="text-lg text-purple-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Discover powerful tools and resources designed to maximize your exam preparation and boost your performance
          </motion.p>
        </motion.div>

        <div className="space-y-24">
          {featureGroups.map((group, groupIndex) => (
            <motion.div 
              key={groupIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="mb-16"
            >
              <div className="flex flex-col md:flex-row items-start justify-between mb-12">
                <div className="md:w-1/3 mb-8 md:mb-0 md:pr-10">
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#A855F7] to-[#3B82F6]"
                    variants={itemVariants}
                  >
                    {group.title}
                  </motion.h3>
                  <motion.p 
                    className="text-purple-100"
                    variants={itemVariants}
                  >
                    {group.description}
                  </motion.p>
                </div>
                
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {group.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="backdrop-blur-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.3)] p-6 rounded-xl transition-all duration-300"
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(167, 139, 250, 0.3)",
                        backgroundColor: "rgba(15, 15, 35, 0.5)"
                      }}
                    >
                      <motion.div 
                        className="text-3xl mb-4 p-3 bg-gradient-to-br from-blue-500 to-purple-600 inline-block rounded-lg"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <h4 className="text-xl font-semibold mb-2">{feature.name}</h4>
                      <p className="text-[#D1D5DB]">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call-to-action section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Exam Preparation?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-purple-100">
            Join thousands of students who have improved their scores and achieved their academic goals with our platform.
          </p>
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-lg font-bold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;