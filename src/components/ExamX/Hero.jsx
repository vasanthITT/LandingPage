import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import botAnimation from "./Json/bot.json";
import StarryBackground from "./StarryBackground";

const Hero = () => {
  const [botAnimationData, setBotAnimationData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setBotAnimationData(botAnimation);
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const statItems = [
    { number: "98%", text: "Success Rate" },
    { number: "5K+", text: "Active Students" },
    { number: "200+", text: "Expert Educators" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6817ab] to-[#16368e] text-white overflow-hidden">
      <StarryBackground />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, Math.random() * -30, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.span 
              className="inline-block px-4 py-1 bg-purple-700 bg-opacity-50 rounded-full text-sm font-medium mb-4"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              #1 Exam Prep AI Platform in India
            </motion.span>
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              Master Your Exams with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">ExamX</span>
            </motion.h1>
            
            <motion.p
              className="mt-4 text-lg md:text-xl text-[#D1D5DB]"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              AI-driven mock tests and expert-curated resources for UPSC, JEE, NEET, and Board Exams. Prepare smarter, not harder.
            </motion.p>
            
            <motion.div
              className="mt-6 flex flex-wrap justify-center md:justify-start gap-6"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
            >
              {statItems.map((item, index) => (
                <div key={index} className="text-center">
                  <motion.div 
                    className="text-3xl font-bold text-blue-300"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.6 + (index * 0.2),
                      type: "spring" 
                    }}
                  >
                    {item.number}
                  </motion.div>
                  <div className="text-sm mt-1">{item.text}</div>
                </div>
              ))}
            </motion.div>
            
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <motion.a
                href="/signup"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] text-white font-semibold rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
              >
                Sign Up Now
              </motion.a>
              <motion.a
                href="/demo"
                className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255,255,255,0.1)" 
                }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
              >
                Try a Free Demo
              </motion.a>
            </div>
            
            <motion.div
              className="mt-8 flex items-center justify-center md:justify-start gap-2"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200" />
                ))}
              </div>
              <span className="text-sm text-gray-300">Join 7000+ students already using ExamX</span>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          {/* Decorative background circle */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-purple-600 bg-opacity-20 filter blur-xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            transition={{ duration: 1.5 }}
            style={{ transform: 'translate(-50%, -50%)' }}
          />
          
          {botAnimationData ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <Lottie
                animationData={botAnimationData}
                loop={true}
                className="w-[400px] md:w-[600px] mx-auto"
                aria-label="Animated study assistant illustration"
              />
            </motion.div>
          ) : (
            <motion.img
              src="/fallback-bot.png"
              alt="ExamX study illustration"
              className="w-[400px] md:w-[600px] mx-auto relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          )}
          
          {/* Floating features badges */}
          {isVisible && (
            <>
              <motion.div
                className="absolute top-12 right-8 md:right-24 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg px-4 py-2 rounded-lg text-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <span className="font-semibold">AI Personalized</span>
                <span className="block text-xs">Learning Path</span>
              </motion.div>
              
              <motion.div
                className="absolute bottom-12 left-8 md:left-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg px-4 py-2 rounded-lg text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                <span className="font-semibold">24/7 Expert</span>
                <span className="block text-xs">Support</span>
              </motion.div>
            </>
          )}
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="0.05" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;