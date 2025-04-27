import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import StarryBackground from "./StarryBackground";
import PriyaSharma from "./images/Priya Sharma.jpg";
const WorkflowProcess = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const progressOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );
  const progressWidth = useTransform(
    scrollYProgress,
    [0.1, 0.8],
    ["0%", "100%"]
  );

  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account and select your target exam",
      icon: "👤",
      color: "from-[#A855F7] to-[#3B82F6]",
      detail:
        "Get started with a free account and personalize your learning journey by selecting your target exam and preferences.",
    },
    {
      number: "02",
      title: "Assess",
      description:
        "Take a diagnostic test to identify your strengths and weaknesses",
      icon: "📊",
      color: "from-[#4ADE80] to-[#22C55E]",
      detail:
        "Our AI-powered diagnostic tool evaluates your current knowledge level and identifies specific areas for improvement.",
    },
    {
      number: "03",
      title: "Practice",
      description: "Access custom mock tests and targeted study materials",
      icon: "📝",
      color: "from-[#F59E0B] to-[#D97706]",
      detail:
        "Study with personalized resources tailored to your learning style and get access to thousands of practice questions.",
    },
    {
      number: "04",
      title: "Analyze",
      description:
        "Review detailed performance analytics and improvement areas",
      icon: "📈",
      color: "from-[#EC4899] to-[#DB2777]",
      detail:
        "Track your progress with comprehensive analytics that highlight patterns in your performance and time management.",
    },
    {
      number: "05",
      title: "Improve",
      description: "Follow personalized recommendations to enhance your scores",
      icon: "🚀",
      color: "from-[#8B5CF6] to-[#6D28D9]",
      detail:
        "Receive targeted recommendations and adaptive learning paths that evolve as your proficiency increases.",
    },
  ];

  const features = [
    "AI-powered learning paths",
    "Personalized study schedules",
    "Expert-curated content",
    "Detailed performance insights",
    "Adaptive difficulty levels",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 relative bg-gradient-to-br from-[#16368e] to-[#6817ab] text-white overflow-hidden"
    >
      <StarryBackground />

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent opacity-25"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent opacity-25"></div>

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
            Step By Step
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How ExamX Works
          </h2>
          <p className="text-lg text-[#D1D5DB] max-w-2xl mx-auto">
            Our streamlined process makes exam preparation efficient and
            effective, guiding you every step of the way to exam success
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated connecting line */}
          <motion.div
            className="absolute top-28 left-0 h-1 bg-gradient-to-r from-[#A855F7] via-[#3B82F6] to-[#A855F7] hidden md:block"
            style={{
              width: progressWidth,
              opacity: progressOpacity,
              zIndex: 5,
            }}
          ></motion.div>

          {/* Static background line */}
          <div className="absolute top-28 left-0 w-full h-1 bg-white bg-opacity-10 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Connector for mobile view */}
                {index < steps.length - 1 && (
                  <div className="absolute top-20 left-1/2 w-1 h-16 bg-gradient-to-b from-[#A855F7] to-[#3B82F6] transform -translate-x-1/2 md:hidden"></div>
                )}

                <motion.div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 relative z-10 text-3xl shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {step.icon}
                </motion.div>

                <motion.div
                  className="bg-[rgba(255,255,255,0.1)] backdrop-blur-lg p-6 rounded-xl border border-[rgba(255,255,255,0.2)] h-full"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    backgroundColor: "rgba(255,255,255,0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`text-lg font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r ${step.color}`}
                  >
                    {step.number}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                  <p className="text-[#D1D5DB] mb-4">{step.description}</p>
                  <p className="text-sm text-[#D1D5DB] opacity-75">
                    {step.detail}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial section */}
        <motion.div
          className="mt-20 bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-[#A855F7] to-[#3B82F6] p-1 mx-auto">
                <div className="w-full h-full rounded-full bg-[#16368e] flex items-center justify-center">
                  <img
                    src={PriyaSharma}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <div className="text-xl italic text-purple-900 mb-4">
                "ExamX transformed my UPSC preparation journey. The personalized
                approach and detailed analytics helped me identify my weaknesses
                and turn them into strengths."
              </div>
              <div className="font-bold text-purple-900">Priya Sharma</div>
              <div className="text-sm text-purple-900">
                UPSC Civil Services, AIR 45
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features highlight */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8">
            What Makes Our Process Effective
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-white text-purple-900 bg-opacity-10 rounded-full flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
              >
                <span className="text-purple-300 mr-2">✓</span>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-12" whileHover={{ scale: 1.05 }}>
            <a
              href="/get-started"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] text-white font-semibold rounded-lg"
            >
              Start Your Journey
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="white"
            fillOpacity="0.05"
            d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,144C672,117,768,75,864,80C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default WorkflowProcess;
