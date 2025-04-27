import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarryBackground from "./StarryBackground";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How are ExamX mock tests different from others?",
      answer: "ExamX mock tests are designed by top educators and exam experts who understand the latest patterns and trends. Our tests use advanced algorithms to adapt to your skill level, providing a personalized experience. Additionally, our detailed analytics break down your performance by topic, helping you focus on areas that need improvement."
    },
    {
      question: "Can I access ExamX on mobile devices?",
      answer: "Yes, ExamX is fully responsive and works perfectly on smartphones and tablets. We also offer dedicated apps for Android and iOS for an optimized mobile experience. Study on the go, track your progress, and take mock tests wherever you are."
    },
    {
      question: "How frequently are study materials updated?",
      answer: "We update our study materials continuously to reflect the latest exam patterns and syllabus changes. Our team monitors announcement from examination boards and incorporates changes within 48 hours, ensuring you always have the most current study resources."
    },
    {
      question: "Do you offer refunds if I'm not satisfied?",
      answer: "Yes, we offer a 7-day money-back guarantee for all new subscriptions. If you find that ExamX doesn't meet your needs, simply contact our support team within 7 days of purchase, and we'll process your refund with no questions asked."
    },
    {
      question: "Can I switch between exam categories?",
      answer: "Absolutely! Our flexible platform allows you to switch between different exam categories (UPSC, JEE, NEET, etc.) without any additional charges. This is particularly useful for students preparing for multiple competitive exams simultaneously."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 relative bg-gradient-to-br from-[#16368e] to-[#6817ab] text-white">
      <StarryBackground />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.3)] rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-xl font-semibold">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#D1D5DB]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;