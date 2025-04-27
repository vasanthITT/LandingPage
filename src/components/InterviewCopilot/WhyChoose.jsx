import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import botAnimation from "./bot.json";
import Lottie from "lottie-react";

const WhyChoose = () => {
  const [activeSection, setActiveSection] = useState("features");
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
  }, []);

  // Animation variants for heading
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Letter-by-letter stagger
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="bg-gradient-to-t from-[#6817ab] via-[#16368e] to-[#6b21a8] text-white py-10 px-6 overflow-hidden relative">
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
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-5xl font-extrabold mb-11 text-white drop-shadow-[0_2px_4px_rgba(107,33,168,0.5)]"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {"Why Should You Choose Us?".split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6 relative z-10">
        {/* Left Side: Enlarged Bot Animation */}
        <motion.div
          className="relative w-full max-w-xl flex justify-center items-center"
          initial={{ y: -20 }}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Lottie animationData={botAnimation} className="w-[900px] lg:w-[1000px]" />
        </motion.div>

        {/* Right Side: Text and Buttons */}
        <motion.div
          className="text-left max-w-lg w-full self-start mt-28 backdrop-blur-lg p-6 rounded-xl border border-[rgba(255,255,255,0.2)] shadow-lg bg-gradient-to-br from-[#6817ab]/80 to-[#16368e]/80"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Boost up your confidence by giving interviews through our
            <span className="bg-gradient-to-r from-[#4ADE80] to-[#22C55E] text-transparent bg-clip-text font-extrabold drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">
              {" "}Interview Copilot
            </span>.
          </h3>

          <div className="flex gap-8">
            <button
              className={`px-5 py-2 rounded-lg text-sm font-semibold w-36 transition-all duration-300 ease-in-out 
                ${
                  activeSection === "features"
                    ? "bg-gradient-to-r from-[#A855F7] to-[#3B82F6] text-white shadow-lg shadow-purple-500/50 scale-105"
                    : "bg-[#4B1D95] text-gray-300 hover:bg-[#5E2AB7]"
                } 
                hover:scale-110 hover:shadow-md hover:shadow-purple-400`}
              onClick={() => setActiveSection("features")}
            >
              Features
            </button>
            <button
              className={`px-5 py-2 rounded-lg text-sm font-semibold w-32 transition-all duration-300 ease-in-out 
                ${
                  activeSection === "value"
                    ? "bg-gradient-to-r from-[#A855F7] to-[#3B82F6] text-white shadow-lg shadow-purple-500/50 scale-105"
                    : "bg-[#4B1D95] text-gray-300 hover:bg-[#5E2AB7]"
                } 
                hover:scale-110 hover:shadow-md hover:shadow-purple-400`}
              onClick={() => setActiveSection("value")}
            >
              Our Value
            </button>
          </div>

          {/* Content Area */}
          <div className="h-64 flex flex-col justify-center gap-4">
            {activeSection === "features" ? (
              <>
                <h3 className="text-2xl font-semibold text-white">Our Core Features</h3>
                <p className="text-[#D1D5DB]">
                  AI Interview Copilot provides real-time, adaptive feedback to help candidates refine their responses and improve interview performance.
                </p>
                <div className="grid grid-cols-2 gap-2 text-lg text-[#E5E7EB]">
                  <span>✔ Realistic</span>
                  <span>✔ Adaptive</span>
                  <span>✔ Insightful</span>
                  <span>✔ Interactive</span>
                  <span>✔ Personalized</span>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-white">Our Core Values</h3>
                <p className="text-[#D1D5DB]">
                  AI Interview Copilot ensures accurate, efficient, and fair candidate assessments with adaptable insights.
                </p>
                <div className="grid grid-cols-2 gap-2 text-lg text-[#E5E7EB]">
                  <span>✔ Accuracy</span>
                  <span>✔ Efficiency</span>
                  <span>✔ Adaptability</span>
                  <span>✔ Fairness</span>
                  <span>✔ Insights</span>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 text-center relative z-10">
        <motion.div
          className="bg-gradient-to-br from-[#6817ab]/80 to-[#16368e]/80 backdrop-blur-lg px-6 py-4 rounded-lg border border-[rgba(255,255,255,0.2)] shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-3xl font-bold text-white">10k+</p>
          <p className="text-sm text-[#D1D5DB]">Freshers and Professionals</p>
        </motion.div>
        <motion.div
          className="bg-gradient-to-br from-[#6817ab]/80 to-[#16368e]/80 backdrop-blur-lg px-6 py-4 rounded-lg border border-[rgba(255,255,255,0.2)] shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-3xl font-bold text-white">10+</p>
          <p className="text-sm text-[#D1D5DB]">Worldwide Interaction</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;