import React from "react";
import { motion } from "framer-motion";
import StarryBackground from "./StarryBackground";

const CTA = () => {
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
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

  return (
    <section className="py-16 px-6 relative bg-gradient-to-br from-[#A855F7] to-[#3B82F6] text-white">
      <StarryBackground />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-6 text-white"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {"Ready to Excel?".split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <p className="text-lg text-[#D1D5DB] mb-8">
          Join thousands of students preparing smarter with ExamX. Sign up today and start your journey to success!
        </p>
        <motion.a
          href="/signup"
          className="inline-block px-8 py-3 bg-white text-[#6817ab] font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Sign Up Now
        </motion.a>
      </div>
    </section>
  );
};

export default CTA;