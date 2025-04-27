import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
// Note: You'll need to download these JSON files from LottieFiles
import qualityAnimation from "./Json/quality.json";
import analyticsAnimation from "./Json/analytics.json";
import comprehensiveAnimation from "./Json/comprehensive.json";
import interfaceAnimation from "./Json/interface.json";
import StarryBackground from "./StarryBackground";

const WhyChoose = () => {
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.2,
      } 
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: i * 0.2,
      },
    }),
  };

  const reasons = [
    {
      title: "Expert-Curated Content",
      description: "Access high-quality resources crafted by top educators and exam experts for UPSC, JEE, NEET, and Boards.",
      animation: qualityAnimation,
      color: "bg-blue-100 border-blue-500",
      iconColor: "text-blue-600",
    },
    {
      title: "AI-Powered Analytics",
      description: "Get personalized insights and predictive scoring to optimize your study plan and boost performance.",
      animation: analyticsAnimation,
      color: "bg-green-100 border-green-500",
      iconColor: "text-green-600",
    },
    {
      title: "Comprehensive Coverage",
      description: "Prepare for every exam stage with mock tests, notes, videos, and schedules tailored to your needs.",
      animation: comprehensiveAnimation,
      color: "bg-purple-100 border-purple-500",
      iconColor: "text-purple-600",
    },
    {
      title: "User-Friendly Interface",
      description: "Navigate seamlessly with our intuitive design, optimized for both desktop and mobile devices.",
      animation: interfaceAnimation,
      color: "bg-orange-100 border-orange-500",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-t from-[#16368e] to-[#6817ab]">
      {/* Background with StarryBackground component */}
      <div className="absolute inset-0 z-0">
        <StarryBackground />
        
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-5"
              style={{
                width: `${100 + Math.random() * 200}px`,
                height: `${100 + Math.random() * 200}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.08, 0.05],
              }}
              transition={{
                duration: 8 + Math.random() * 7,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={headingVariants}
        >
          {Array.from("Why Choose ExamX?").map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className={`rounded-xl p-6 border-2 ${reason.color} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm bg-opacity-80`}
            >
              <div className="h-32 mb-4 flex items-center justify-center">
                <Lottie 
                  animationData={reason.animation} 
                  loop={true}
                  className="w-24 h-24"
                />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${reason.iconColor}`}>
                {reason.title}
              </h3>
              <p className="text-gray-700">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChoose;