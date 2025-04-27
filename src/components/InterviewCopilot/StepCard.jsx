import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Pic1 from "../../assets/Step1_pic.png";
import Pic2 from "../../assets/Step2_pic.png";
import Pic3 from "../../assets/Step3_pic.png";
import Pic4 from "../../assets/Step4_pic.png";
import Pic5 from "../../assets/Step5_pic.jpg";
import "./StepCardAnimations.css";

const steps = [
  {
    step: "STEP 1",
    title: "Select Your Preference",
    description: "Choose between General Interview or Coding Interview",
    image: Pic1,
  },
  {
    step: "STEP 2",
    title: "Fill Your Details",
    description: "Fill your Experience level, Domain, Resume and select number of Questions",
    image: Pic2,
  },
  {
    step: "STEP 3",
    title: "Select Avatar",
    description: "Select the difficulty level with AI avatar, depending on your preference",
    image: Pic3,
  },
  {
    step: "STEP 4",
    title: "Practice & Get Results",
    description: "After the interview, get the results",
    image: Pic5,
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.2,
      ease: "easeOut",
    },
  }),
  hover: { scale: 1.05, boxShadow: "0 8px 25px rgba(139, 92, 246, 0.4)" },
};

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageDisplayVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const starVariants = {
  twinkle: {
    opacity: [0.3, 1, 0.3],
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const StepCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [autoIndex, setAutoIndex] = useState(0);
  const [hoveredManually, setHoveredManually] = useState(false);
  const [stars, setStars] = useState([]);

  // Auto-rotation effect
  useEffect(() => {
    if (!hoveredManually) {
      const interval = setInterval(() => {
        setAutoIndex((prevIndex) => (prevIndex + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [hoveredManually]);

  // Starry effect setup
  useEffect(() => {
    const createStars = () => {
      let starArray = [];
      for (let i = 0; i < 100; i++) {
        starArray.push({
          id: i,
          top: Math.random() * 100 + "vh",
          left: Math.random() * 100 + "vw",
          size: Math.random() * 3 + 1 + "px",
          opacity: Math.random() * 0.5 + 0.5,
          animationDuration: Math.random() * 5 + 3,
        });
      }
      setStars(starArray);
    };

    createStars();
  }, []);

  return (
    <div id="step-card-container">
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
            }}
            variants={starVariants}
            animate="twinkle"
            transition={{ duration: star.animationDuration }}
          />
        ))}
      </div>

      <motion.h1
        id="courses_heading"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        Master Your Interview: A Step-by-Step Guide to Success
      </motion.h1>

      <div id="step-card-grid" className="relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            id="step-card"
            className={(hoveredIndex === index || (!hoveredManually && autoIndex === index)) ? "active" : ""}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            whileHover="hover"
            viewport={{ once: false }}
            onMouseEnter={() => {
              setHoveredIndex(index);
              setHoveredManually(true);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setHoveredManually(false);
            }}
          >
            <span>{step.step}</span>
            <h2>{step.title}</h2>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.h2
        id="image-display-h"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {steps[hoveredIndex !== null ? hoveredIndex : autoIndex].title}
      </motion.h2>

      <motion.div
        id="image-display"
        className={(hoveredIndex !== null || !hoveredManually) ? "active" : ""}
        variants={imageDisplayVariants}
        initial="hidden"
        animate={(hoveredIndex !== null || !hoveredManually) ? "visible" : "hidden"}
      >
        <motion.img
          src={steps[hoveredIndex !== null ? hoveredIndex : autoIndex].image}
          alt="Step preview"
          whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default StepCard;