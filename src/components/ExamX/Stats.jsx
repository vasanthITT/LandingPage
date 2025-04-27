import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StarryBackground from "./StarryBackground";

const Stats = () => {
  const [animateNumbers, setAnimateNumbers] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("stats-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          setAnimateNumbers(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const stats = [
    {
      value: "5,000+",
      label: "Active Students",
      icon: "👨‍🎓",
      description: "Students preparing for various competitive exams across India",
      color: "from-[#A855F7] to-[#3B82F6]"
    },
    {
      value: "1,000+",
      label: "Mock Tests",
      icon: "📝",
      description: "Comprehensive practice tests designed by expert educators",
      color: "from-[#4ADE80] to-[#22C55E]"
    },
    {
      value: "85%",
      label: "Success Rate",
      icon: "🏆",
      description: "Students qualifying their exams after using our platform",
      color: "from-[#F59E0B] to-[#D97706]"
    },
    {
      value: "24/7",
      label: "Expert Support",
      icon: "🛠️",
      description: "Round-the-clock guidance from our team of educators",
      color: "from-[#EC4899] to-[#DB2777]"
    }
  ];
  
  const additionalStats = [
    { label: "States Covered", value: "28+" },
    { label: "Top Rankers", value: "500+" },
    { label: "Video Lessons", value: "25K+" },
    { label: "Avg. Score Improvement", value: "32%" },
  ];

  return (
    <section id="stats-section" className="py-20 px-6 relative bg-gradient-to-bl from-[#6817ab] to-[#16368e] text-white overflow-hidden">
      <StarryBackground />
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/4"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-4 py-1 bg-white text-black bg-opacity-20 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Impact
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">ExamX in Numbers</h2>
          <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
            Our dedication to educational excellence has made us India's fastest growing exam preparation platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.2)] p-8 rounded-xl text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient background that appears on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />
              
              {/* Animated circle behind icon */}
              <motion.div 
                className="absolute top-8 left-1/2 w-16 h-16 rounded-full bg-white bg-opacity-10"
                style={{ translateX: "-50%" }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
              
              <div className="text-4xl mb-4 relative">{stat.icon}</div>
              
              <motion.div 
                className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-2`}
                initial={{ opacity: 0.5 }}
                animate={animateNumbers ? { 
                  opacity: 1,
                  transition: { 
                    duration: 0.5,
                    delay: index * 0.2
                  }
                } : {}}
              >
                {stat.value}
              </motion.div>
              
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              
              <div className="text-sm text-[#D1D5DB] mt-2 opacity-80">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional row with horizontal stats */}
        <motion.div
          className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {additionalStats.map((item, index) => (
              <div key={index} className="text-center">
                <motion.div 
                  className="text-2xl md:text-3xl font-bold text-purple-900 mb-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  {item.value}
                </motion.div>
                <div className="text-sm text-purple-900">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Testimonial or highlight section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-[#A855F7] to-[#3B82F6] mb-6">
            <div className="w-24 h-24 rounded-full bg-[#16368e] flex items-center justify-center text-4xl">
              🚀
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join India's Fastest Growing Education Platform</h3>
          <p className="text-[#D1D5DB] max-w-2xl mx-auto mb-8">
            Our students consistently outperform their peers with improved scores and better rank achievements
          </p>
          <motion.a
            href="/signup"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] text-white font-semibold rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free
          </motion.a>
        </motion.div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="white" fillOpacity="0.05" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Stats;