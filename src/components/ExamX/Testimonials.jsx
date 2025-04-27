import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import StarryBackground from "./StarryBackground";
import KiranPatel from "../ExamX/images/KiranPatel.jpg"
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef(null);

  const testimonials = [
    {
      quote: "ExamX helped me ace my UPSC Prelims with its realistic mock tests and detailed feedback. The personalized study plan was a game-changer for my preparation strategy.",
      name: "Priya Sharma",
      position: "UPSC Aspirant",
      exam: "Cleared Prelims 2024",
      image: "/api/placeholder/80/80"
    },
    {
      quote: "The JEE practice tests on ExamX were exceptional. I improved my speed and accuracy significantly, which helped me secure a rank in the top 500.",
      name: "Arjun Mehra",
      position: "JEE Candidate",
      exam: "AIR 487, JEE Advanced",
      image: "/api/placeholder/80/80"
    },
    {
      quote: "As someone preparing for NEET, the subject-wise mock tests and detailed solutions provided by ExamX were invaluable. I could identify my weak areas and work on them systematically.",
      name: "Kiran Patel",
      position: "NEET Aspirant",
      exam: "Scored 650+ in NEET",
      image: {KiranPatel}
    },
    {
      quote: "The board exam preparation materials on ExamX are comprehensive and aligned with the latest CBSE pattern. My scores improved from 75% to 92% in just 3 months of using the platform.",
      name: "Ananya Gupta",
      position: "Class 12 Student",
      exam: "CBSE Topper (School Level)",
      image: "/api/placeholder/80/80"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-6 relative bg-gradient-to-t from-[#6817ab] via-[#16368e] to-[#6b21a8] text-white">
      <StarryBackground />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Success Stories
        </motion.h2>

        <div 
          className="overflow-hidden"
          ref={testimonialsRef}
        >
          <motion.div 
            className="flex transition-all duration-500 ease-in-out"
            animate={{ x: `-${activeIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 150, damping: 30 }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="w-full shrink-0 px-4"
              >
                <div className="backdrop-blur-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.3)] p-8 rounded-xl max-w-3xl mx-auto">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full border-2 border-[#A855F7]"
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                      <p className="text-[#D1D5DB]">{testimonial.position}</p>
                      <p className="text-[#A855F7] text-sm">{testimonial.exam}</p>
                    </div>
                  </div>
                  <p className="text-[#E5E7EB] italic text-lg">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-[#A855F7]" : "bg-[rgba(255,255,255,0.3)]"
              } transition-all duration-300`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;