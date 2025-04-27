import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TestImg from "../../assets/TestIntro.jpg"; // Ensure correct path

const TestIntro = () => {
  const [count, setCount] = useState(0);

  // Counting effect for 300+
  useEffect(() => {
    let start = 0;
    const end = 300;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "url('https://robotiko.tokotema.com/wp-content/uploads/2023/05/Hero-Background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ml-2">
        {/* Left Side - Text Content */}
        <motion.div
          className="text-white text-center lg:text-left font-sans"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Confidence Starts with Practice -{" "}
            <span className="text-blue-400 items-center">
              Master Your Interviews
            </span>
          </h1>
          <p className="text-gray-400 mt-4 text-xl">
            Take the next step in your career with job-specific and role-based
            AI-driven tests. Get instant feedback, track your progress, and
            sharpen your skills to ace real interviews!
          </p>

          {/* Call-to-Action & Stats */}
          <div className="mt-6 flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Glowing Button */}
            <motion.a
              href="https://interviewbot.intraintech.com/ai-interview-test"
              className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base"
              animate={{
                boxShadow: [
                  "0px 0px 10px rgba(255, 165, 0, 0.8)",
                  "0px 0px 20px rgba(255, 165, 0, 1)",
                  "0px 0px 10px rgba(255, 165, 0, 0.8)",
                  "0px 0px 0px rgba(255, 165, 0, 0)",
                ],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px" />
              <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]" />
              <div className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
                <span className="select-none">Try Interview Test</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </motion.a>

            {/* Counting Effect */}
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-3xl font-bold text-white">
                {count}+
              </span>
              <span className="text-gray-400">Trusted Companies</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - AI Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={TestImg}
            alt="AI Future"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TestIntro;
