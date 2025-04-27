import React from "react";
import { motion } from "framer-motion";

export default function InterviewComparison() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-b from-[#7e1dd3]  via-[#16368e] to-[#6b21a8] overflow-hidden relative">
      {/* Content */}
      <div className="w-full max-w-5xl text-white text-center relative z-10">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl md:text-4xl font-extrabold leading-tight tracking-wide uppercase"
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Revolutionize Your Job Interviews <br />
          <span className="relative inline-block px-3 py-1">
            <span className="relative z-10 text-green-400">with AI Power</span>
          </span>
        </motion.h2>

        {/* Comparison Table */}
        <div className="mt-16 flex flex-col md:flex-row justify-center gap-10 text-lg font-medium">
          {/* Without AI */}
          <motion.div
            className="flex-1 p-8 rounded-2xl bg-[rgba(255,255,255,0.15)] backdrop-blur-xl border border-[rgba(255,255,255,0.25)] shadow-xl hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            whileHover={{ y: -10 }}
          >
            <h3 className="text-2xl font-bold text-red-300 mb-6 font-serif tracking-wide">
              Without AI
            </h3>
            <div className="space-y-4">
              {["Unprepared", "Nervous", "Ghosted"].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-red-100/20 py-3 px-5 rounded-lg text-red-300 font-semibold flex items-center gap-3 text-lg shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                >
                  <span className="text-2xl">✗</span> {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* With AI - Glowing Border Effect */}
          <motion.div
            className="relative flex-1 p-8 rounded-2xl bg-[rgba(255,255,255,0.15)] backdrop-blur-xl border border-[rgba(255,255,255,0.25)] shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ y: -10 }}
          >
            {/* Glowing Border Animation */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent before:absolute before:inset-0 before:rounded-2xl before:border-2 before:border-green-400 before:blur-lg before:opacity-60 before:animate-glow"></div>

            <h3 className="text-2xl font-bold text-green-300 mb-6 font-serif tracking-wide">
              With AI 
            </h3>
            <div className="space-y-4">
              {["Organized and Ready", "Confident Answers", "Receive Final Offers"].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-green-100/20 py-3 px-5 rounded-lg text-green-300 font-semibold flex items-center gap-3 text-lg shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                >
                  <span className="text-2xl">✓</span> {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for Glowing Effect */}
      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(50, 255, 50, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(50, 255, 50, 0.9), 0 0 40px rgba(50, 255, 50, 0.6);
          }
          100% {
            box-shadow: 0 0 5px rgba(50, 255, 50, 0.4);
          }
        }
        .before\\:animate-glow {
          animation: glow 2s infinite alternate;
        }
      `}</style>
    </div>
  );
}
