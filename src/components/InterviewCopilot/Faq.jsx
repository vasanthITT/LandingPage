import React, { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import "./Faq.css"; // Import the updated CSS file

const faqs = [
  {
    question: "How does the AI Interviewer work?",
    answer:
      "Our AI Interviewer simulates real interview scenarios by analyzing your responses in real-time. It evaluates your answers based on industry standards, communication skills, and technical accuracy. You receive instant feedback along with improvement suggestions, making it an effective tool for interview preparation.",
  },
  {
    question: "What types of interviews can I practice with this AI?",
    answer:
      "You can practice for various types of interviews, including technical, behavioral, HR, and case study-based interviews. Our AI supports different job roles across industries like IT, finance, healthcare, marketing, and more.",
  },
  {
    question: "How is the AI Interviewer different from traditional mock interviews?",
    answer:
      "Unlike traditional mock interviews, our AI Interviewer is available 24/7, provides instant feedback, and analyzes your responses using AI-driven insights. It also offers personalized recommendations for improvement, helping you gain confidence before facing real interviewers.",
  },
  {
    question: "Is the AI Interviewer free to use?",
    answer:
      "We offer a free trial with limited interview sessions. For full access, we have affordable subscription plans that unlock premium features like detailed analytics, AI resume review, and industry-specific interview practice.",
  },
  {
    question: "What are the available pricing plans?",
    answer:
      "Our pricing plans cater to different needs:\n\nBasic Plan – Limited AI mock interviews (Free)\nPro Plan – Unlimited interviews, AI resume review, feedback reports\nEnterprise Plan – Best for companies & training institutes, with custom branding & analytics",
  },
  {
    question: "Can I upload my resume for AI-based feedback?",
    answer:
      "Yes! Our AI Resume Builder analyzes your resume, suggests improvements, and aligns it with job descriptions for better applicant tracking system (ATS) compatibility.",
  },
  {
    question: "Does the AI Interviewer provide industry-specific questions?",
    answer:
      "Absolutely! You can select your industry, job role, and experience level, and our AI will generate customized interview questions based on current hiring trends.",
  },
  {
    question: "Will I receive a report after my interview session?",
    answer:
      "Yes, after each interview, you'll receive a detailed report on your strengths, improvement areas, response quality, and overall performance score.",
  },
];

// Animation variants for FAQ items
const faqVariants = {
  hidden: { opacity: 0, y: -50 }, // Start above the viewport
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2, // Stagger each FAQ item by 0.2s
      ease: "easeOut",
    },
  }),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [stars, setStars] = useState([]);
  const ref = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

    // Intersection Observer for visibility
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-purple-900 to-indigo-800 text-white py-16 px-6 min-h-screen flex items-center justify-center"
    >
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

      {/* FAQ Section */}
      <div className="faq-content relative z-10">
        <h2 className="faq-heading">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              custom={index} // Pass index for staggered delay
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={faqVariants}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <Plus
                  className={`icon ${openIndex === index ? "rotate" : ""}`}
                />
              </button>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Twinkle Animation */}
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.3; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.2); }
          }
        `}
      </style>
    </div>
  );
}