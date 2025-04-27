import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StarryBackground from "./StarryBackground";

const ExamCards = () => {
  const [activeExam, setActiveExam] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setPlayAnimation(true);
    
    // Optional: Reset animation when component is scrolled into view
    const handleScroll = () => {
      const element = document.getElementById("exam-cards-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          setPlayAnimation(true);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 10, stiffness: 100 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const exams = [
    {
      name: "UPSC",
      description:
        "Prepare for Prelims, Mains, and Interviews with realistic mock tests, expert-curated notes, and detailed analytics for History, Polity, and more.",
      color: "from-[#A855F7] to-[#3B82F6]",
      icon: "📜",
      category: "Civil Services",
      stats: {
        users: "20K+",
        pass: "92%",
        questions: "50K+"
      },
      features: ["Mock Tests", "Study Notes", "Live Classes", "Expert Guidance"]
    },
    {
      name: "JEE",
      description:
        "Master JEE Main and Advanced with timed practice tests, video solutions, and progress tracking for Physics, Chemistry, and Mathematics.",
      color: "from-[#4ADE80] to-[#22C55E]",
      icon: "🔬",
      category: "Engineering",
      stats: {
        users: "35K+",
        pass: "89%",
        questions: "75K+"
      },
      features: ["Practice Tests", "Video Solutions", "Formula Sheets", "Previous Papers"]
    },
    {
      name: "NEET",
      description:
        "Ace NEET with adaptive mock tests, in-depth Biology resources, and performance insights for Physics, Chemistry, and Biology.",
      color: "from-[#F59E0B] to-[#D97706]",
      icon: "🩺",
      category: "Medical",
      stats: {
        users: "28K+",
        pass: "94%",
        questions: "60K+"
      },
      features: ["Adaptive Tests", "NCERT Solutions", "Daily Quizzes", "Medical Updates"]
    },
    {
      name: "Board Exams",
      description:
        "Excel in CBSE/ICSE Boards with comprehensive study materials, practice questions, and schedules for all subjects.",
      color: "from-[#EC4899] to-[#DB2777]",
      icon: "📚",
      category: "School",
      stats: {
        users: "40K+",
        pass: "96%",
        questions: "80K+"
      },
      features: ["Chapter Tests", "Sample Papers", "Study Planner", "Doubt Solving"]
    },
    {
      name: "GATE",
      description:
        "Achieve top ranks in GATE exams with specialized preparation for all engineering branches including CSE, ECE, ME, and CE.",
      color: "from-[#3B82F6] to-[#1D4ED8]",
      icon: "🎓",
      category: "Engineering",
      stats: {
        users: "15K+",
        pass: "87%",
        questions: "45K+"
      },
      features: ["Subject Tests", "Technical Papers", "Interview Prep", "Job Updates"]
    },
    {
      name: "CAT",
      description:
        "Maximize your CAT score with comprehensive prep for Quantitative Aptitude, Verbal Ability, and Logical Reasoning sections.",
      color: "from-[#8B5CF6] to-[#6D28D9]",
      icon: "💼",
      category: "Management",
      stats: {
        users: "18K+",
        pass: "91%",
        questions: "40K+"
      },
      features: ["Speed Tests", "MBA Mentorship", "GD/PI Prep", "Case Studies"]
    },
  ];

  const categories = ["All", ...new Set(exams.map(exam => exam.category))];
  
  const filteredExams = selectedCategory === "All" 
    ? exams 
    : exams.filter(exam => exam.category === selectedCategory);

  return (
    <section id="exam-cards-section" className="py-20 px-6 relative bg-gradient-to-br from-[#16368e] to-[#6817ab] text-white overflow-hidden">
      <StarryBackground />
      
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-5"
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
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
      
        <motion.div
          initial="hidden"
          animate={playAnimation ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            variants={headingVariants}
          >
            {"Explore Your Exam".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-purple-700 bg-opacity-50 rounded-full text-sm font-medium mb-6">
              Tailored for Success
            </span>
          </motion.div>
          
          <motion.p
            className="text-lg text-[#D1D5DB] mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Choose from our comprehensive preparation resources designed by top educators and exam experts to boost your confidence and maximize your performance.
          </motion.p>
          
          {/* Category filter buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {categories.map(category => (
              <motion.button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-white text-purple-900"
                    : "bg-white text-purple-900 bg-opacity-10 hover:bg-opacity-20"
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {filteredExams.map((exam, index) => (
              <motion.div
                key={exam.name}
                className={`p-8 rounded-2xl backdrop-blur-lg border border-[rgba(255,255,255,0.2)] bg-gradient-to-br ${exam.color} shadow-xl cursor-pointer relative overflow-hidden group`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                onMouseEnter={() => setActiveExam(exam.name)}
                onMouseLeave={() => setActiveExam(null)}
              >
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 -translate-y-8">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white" d="M39.9,-66.2C51.1,-59.3,59.5,-46.6,65.8,-33C72.1,-19.4,76.2,-4.9,74.3,8.8C72.4,22.6,64.6,35.5,54.5,46.6C44.3,57.6,31.9,66.8,17.8,71.8C3.7,76.9,-12.1,77.8,-26.2,73.2C-40.2,68.7,-52.6,58.7,-62.3,46.5C-72.1,34.2,-79.2,19.7,-80.2,4.5C-81.1,-10.7,-75.9,-26.5,-66.8,-39.3C-57.8,-52.1,-44.9,-61.8,-31.4,-67.6C-17.9,-73.5,-3.8,-75.4,9.4,-73.2C22.6,-71,34.8,-64.7,39.9,-66.2Z" transform="translate(100 100)" />
                  </svg>
                </div>
              
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl p-4 bg-white bg-opacity-20 rounded-xl">{exam.icon}</div>
                  <span className="text-xs font-semibold px-3 py-1 bg-black bg-opacity-20 rounded-full">
                    {exam.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-3">{exam.name}</h3>
                <p className="text-[#E5E7EB] mb-6 text-sm">{exam.description}</p>
                
                {/* Stats bar */}
                <div className="flex justify-between text-xs mb-6 bg-black bg-opacity-20 p-2 rounded-lg">
                  <div className="text-center">
                    <div className="font-bold">{exam.stats.users}</div>
                    <div className="text-gray-300">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">{exam.stats.pass}</div>
                    <div className="text-gray-300">Success</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">{exam.stats.questions}</div>
                    <div className="text-gray-300">Questions</div>
                  </div>
                </div>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exam.features.map((feature, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white text-purple-900 bg-opacity-20 rounded-md">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <motion.div
                  className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={activeExam === exam.name ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={`/${exam.name.toLowerCase()}`}
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <span>Explore {exam.name}</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Bottom section with call-to-action */}
          <motion.div
            className="mt-16 p-8 rounded-2xl backdrop-blur-lg border border-[rgba(255,255,255,0.2)] bg-white bg-opacity-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-purple-900">Not sure which exam to prepare for?</h3>
            <p className="text-purple-900 mb-6 max-w-2xl mx-auto">
              Take our free assessment test to discover your strengths and get personalized exam recommendations tailored to your skills and interests.
            </p>
            <motion.a
              href="/assessment"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Take Free Assessment
            </motion.a>
          </motion.div>
        </motion.div>
        
      </div>
      
      {/* Decorative elements */}
      
    </section>
  );
};

export default ExamCards;