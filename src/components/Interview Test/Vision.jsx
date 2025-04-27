import React from "react";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center px-6 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - AI Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://www.coolest-gadgets.com/wp-content/uploads/2024/04/AI-in-Robotics-Statistics.webp"
            alt="AI Innovation"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Explore New Skills With <br />
            <span className="text-purple-600">AI-Driven Interviews.</span>
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Unlock and Explore new skills with our AI-powered InterveiwBot tailored to uplift your confidence.
            From theory to implementation, we text your skills and provide with data-driven insights.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mt-6 text-gray-700 text-base">
            <p>🚀 Compnay Oriented Interviews</p>
            <p>💰 Cost-Effectiveness</p>
            <p>🔍 Cutting edge AI Technology</p>
            <p>⚡ Effective skill based Interview </p>
            <p>🔗 Experience based Interview</p>
          </div>

          {/* Call to Action */}
          <div className="mt-6">
            <a
              href="https://interviewbot.intraintech.com/ai-interview-test"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium text-lg rounded-full shadow-lg hover:scale-105 transition duration-300"
            >
              Start Interview Test
              <span className="ml-2">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
