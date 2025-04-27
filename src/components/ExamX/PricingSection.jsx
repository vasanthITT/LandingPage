import React, { useState } from "react";
import { motion } from "framer-motion";
import StarryBackground from "./StarryBackground";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
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
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }
    }),
  };

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 499,
      annualPrice: 4999,
      features: [
        "Subject-wise Mock Tests",
        "Basic Performance Analytics",
        "Limited Question Bank",
        "Study Notes Access"
      ],
      highlighted: false,
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Premium",
      monthlyPrice: 999,
      annualPrice: 9999,
      features: [
        "Full-length Mock Tests",
        "Advanced Analytics Dashboard",
        "Unlimited Question Bank",
        "Video Lessons & Flashcards",
        "Personalized Study Plan",
        "Live Doubt Solving Sessions"
      ],
      highlighted: true,
      color: "from-purple-500 to-purple-700"
    },
    {
      name: "Ultimate",
      monthlyPrice: 1499,
      annualPrice: 14999,
      features: [
        "Everything in Premium",
        "One-on-One Mentorship",
        "Previous Years' Paper Analysis",
        "Interview Preparation",
        "Peer Group Discussions",
        "Lifetime Access to Materials"
      ],
      highlighted: false,
      color: "from-pink-500 to-rose-700"
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-gradient-to-br from-[#16368e] to-[#6817ab] text-white">
      <StarryBackground />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Array.from("Invest in Your Future").map((char, index) => (
            <motion.span 
              key={index} 
              variants={letterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>
        
        <motion.p 
          className="text-lg text-[#D1D5DB] mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Join thousands of students who are preparing smarter and achieving their goals with ExamX. Choose the plan that fits your preparation needs.
        </motion.p>

        {/* Toggle switch */}
        <motion.div 
          className="flex justify-center items-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className={`mr-3 text-lg ${!isAnnual ? 'font-semibold text-white' : 'text-[#D1D5DB]'}`}>Monthly</span>
          <div 
            className="w-16 h-8 bg-[rgba(255,255,255,0.2)] rounded-full p-1 cursor-pointer flex items-center"
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <motion.div 
              className="w-6 h-6 bg-white rounded-full shadow-md"
              animate={{ x: isAnnual ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>
          <span className={`ml-3 text-lg ${isAnnual ? 'font-semibold text-white' : 'text-[#D1D5DB]'}`}>Annual</span>
          {isAnnual && (
            <span className="ml-2 bg-[#A855F7] text-xs px-2 py-1 rounded-full font-medium">Save 15%</span>
          )}
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`backdrop-blur-lg border ${
                plan.highlighted ? 'border-[#A855F7]' : 'border-[rgba(255,255,255,0.2)]'
              } bg-[rgba(0,0,0,0.3)] rounded-xl overflow-hidden ${
                plan.highlighted ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="bg-[#A855F7] text-white py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold">
                    ₹{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </div>
                  <div className="text-[#D1D5DB] text-sm">
                    {isAnnual ? 'per year' : 'per month'}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r h-1 mb-6 rounded-full w-16 mx-auto ${plan.color}"></div>
                
                <ul className="space-y-3 mb-8 text-left pl-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-[#A855F7] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[#E5E7EB]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.highlighted 
                      ? 'bg-gradient-to-r from-[#A855F7] to-[#3B82F6] text-white' 
                      : 'bg-[rgba(255,255,255,0.1)] text-white hover:bg-[rgba(255,255,255,0.2)]'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee section */}
        <motion.div
          className="max-w-2xl mx-auto backdrop-blur-sm bg-[rgba(255,255,255,0.1)] rounded-xl p-6 border border-[rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl mb-3">🔒</div>
          <h3 className="text-xl font-semibold mb-2">7-Day Money Back Guarantee</h3>
          <p className="text-[#D1D5DB]">Not satisfied with ExamX? Get a full refund within 7 days, no questions asked. We're confident our platform will exceed your expectations.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;