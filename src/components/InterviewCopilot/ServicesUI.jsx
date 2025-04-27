import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "PERSONALIZED QUESTIONS",
    description:
      "Get customized interview questions based on your experience, domain, and skills.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        <rect x="20" y="15" width="24" height="24" rx="4" stroke="#4ADE80" strokeWidth="2" />
        <circle cx="29" cy="25" r="3" fill="#4ADE80" />
        <circle cx="35" cy="25" r="3" fill="#4ADE80" />
        <path d="M25 34 L39 34" stroke="#4ADE80" strokeWidth="2" />
        <path d="M15 45 L49 45" stroke="#3B82F6" strokeWidth="2" />
        <rect x="20" y="39" width="24" height="12" rx="2" stroke="#3B82F6" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "ADAPTIVE DIFFICULTY",
    description:
      "Choose from Beginner to Expert levels for a tailored challenge.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        <rect x="14" y="18" width="36" height="28" rx="2" stroke="#3B82F6" strokeWidth="2" />
        <path d="M14 25 H50" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="19" cy="22" r="1" fill="#4ADE80" />
        <circle cx="23" cy="22" r="1" fill="#4ADE80" />
        <circle cx="27" cy="22" r="1" fill="#4ADE80" />
        <rect x="22" y="32" width="20" height="8" rx="1" stroke="#4ADE80" strokeWidth="2" />
        <path d="M27 32 L27 40" stroke="#4ADE80" strokeWidth="2" />
        <path d="M37 32 L37 40" stroke="#4ADE80" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "INSTANT EVALUATION",
    description:
      "Get real-time scores and feedback based on your responses.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        <path d="M22 24 C18 28 18 36 22 40" stroke="#3B82F6" strokeWidth="2" />
        <path d="M28 20 C22 26 22 38 28 44" stroke="#3B82F6" strokeWidth="2" />
        <path d="M34 16 C26 24 26 40 34 48" stroke="#3B82F6" strokeWidth="2" />
        <path d="M40 32 L52 32" stroke="#4ADE80" strokeWidth="2" />
        <path d="M44 28 L48 32 L44 36" stroke="#4ADE80" strokeWidth="2" />
        <circle cx="34" cy="32" r="8" stroke="#4ADE80" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "REAL WORLD SIMULATIONS",
    description:
      "Experience AI-driven mock interviews that mimic real hiring scenarios.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none">
        <circle cx="32" cy="32" r="20" stroke="#3B82F6" strokeWidth="2" />
        <path d="M22 32 H42" stroke="#4ADE80" strokeWidth="2" />
        <path d="M32 22 V42" stroke="#4ADE80" strokeWidth="2" />
        <circle cx="32" cy="32" r="6" stroke="#4ADE80" strokeWidth="2" />
      </svg>
    ),
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: 0 }, // Start straight
  visible: (index) => ({
    opacity: 1,
    y: 0,
    rotate: 0, // Stay straight
    transition: {
      duration: 0.6,
      delay: index * 0.2, // Staggered entry
      ease: "easeOut",
    },
  }),
};

const iconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
    animate: {
      scale: [1, 1.1, 1], // Pulse effect
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    x: [0, 5, 0], // Bounce effect
    transition: { duration: 0.3, repeat: 2 },
  },
};

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Letter-by-letter effect
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ServiceUI = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Starry effect setup
    const createStars = () => {
      let starArray = [];
      for (let i = 0; i < 100; i++) {
        starArray.push({
          id: i,
          top: Math.random() * 100 + "vh",
          left: Math.random() * 100 + "vw",
          size: Math.random() * 3 + 1 + "px",
          opacity: Math.random() * 0.5 + 0.5,
          animationDuration: Math.random() * 5 + 3 + "s",
        });
      }
      setStars(starArray);
    };

    createStars();

    // Animation control based on visibility
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-[#6817ab] via-[#16368e] to-[#6b21a8] text-white overflow-hidden relative">
      {/* Starry Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
            animate={{
              y: ["0px", "5px", "0px"],
              transition: {
                duration: parseFloat(star.animationDuration),
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10 mt-32">
        {/* Header */}
        <header className="mb-28 text-center">
          <motion.h1
            className="text-5xl font-extrabold text-white"
            variants={headerVariants}
            initial="hidden"
            animate={controls}
          >
            {"What We Can Help You With".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              ref={ref}
              key={index}
              className={`bg-[rgba(255,255,255,0.1)] backdrop-blur-lg rounded-2xl p-8 flex flex-col h-[350px] border border-[rgba(255,255,255,0.18)] shadow-lg transition-all duration-300
              ${index === 0 ? "md:mt-24" : ""}
              ${index === 1 ? "md:mt-12" : ""}
              ${index === 2 ? "md:mt-6" : ""}
              ${index === 3 ? "md:mt-0" : ""}`}
              custom={index}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(31, 38, 135, 0.5)" }}
            >
              {/* Icon */}
              <motion.div
                className="flex justify-center mb-4"
                variants={iconVariants}
                initial="hidden"
                animate={controls}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold text-center mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-center flex-grow">{service.description}</p>

              {/* Read More Button */}
              <div className="flex justify-center mt-auto">
                <motion.button
                  className="text-green-400 font-medium flex items-center group"
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  Read More
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceUI;