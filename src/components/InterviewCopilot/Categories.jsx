import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const courses = [
  { name: "Web Development", icon: "🌐", color: "#6B7280" },
  { name: "Data Science", icon: "📊", color: "#10B981" },
  { name: "Cybersecurity", icon: "🔐", color: "#8B5CF6" },
  { name: "AI & Machine Learning", icon: "🤖", color: "#F472B6" },
  { name: "Cloud Computing", icon: "☁️", color: "#60A5FA" },
  { name: "DevOps", icon: "⚙️", color: "#F59E0B" },
  { name: "Blockchain", icon: "🔗", color: "#A78BFA" },
  { name: "Software Testing", icon: "🧪", color: "#34D399" },
  { name: "Game Development", icon: "🎮", color: "#EF4444" },
  { name: "Mobile App Development", icon: "📱", color: "#3B82F6" },
  { name: "Networking", icon: "📡", color: "#9333EA" },
  { name: "UI/UX Design", icon: "🎨", color: "#FBBF24" },
  { name: "Big Data", icon: "📈", color: "#14B8A6" },
  { name: "Robotics", icon: "🤖", color: "#F97316" },
  { name: "Augmented Reality", icon: "🕶️", color: "#D946EF" },
  { name: "Virtual Reality", icon: "🎮", color: "#FB7185" },
  { name: "Quantum Computing", icon: "⚛️", color: "#6EE7B7" },
  { name: "Digital Marketing", icon: "💻", color: "#22D3EE" },
  { name: "Internet of Things", icon: "🌐", color: "#A3E635" },
  { name: "E-commerce", icon: "🛒", color: "#FACC15" },
  { name: "3D Printing", icon: "🖨️", color: "#38BDF8" },
  { name: "Ethical Hacking", icon: "💻", color: "#C084FC" },
  { name: "Digital Forensics", icon: "🔍", color: "#FB923C" },
  { name: "IT Support", icon: "🛠️", color: "#4ADE80" },
];

const Categories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stars, setStars] = useState([]);
  const ref = useRef(null);

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
      { threshold: 0.1 }
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
      className="min-h-screen bg-gradient-to-t from-[#7e1dd3]  via-[#16368e] to-[#6b21a8]  py-20 px-6 overflow-hidden relative"
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

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -60 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl font-extrabold text-white">
          Discover Tech Excellence
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative z-10">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 120, damping: 12, delay: index * 0.1 }}
            className="relative flex flex-col items-center justify-center p-6 bg-[rgba(255,255,255,0.1)] backdrop-blur-lg border border-[rgba(255,255,255,0.2)] rounded-2xl shadow-lg cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(31,38,135,0.37)]"
          >
            <span className="text-4xl mb-3 drop-shadow-md">{course.icon}</span>
            <span className="text-white font-bold text-sm text-center">{course.name}</span>
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${course.color}40, rgba(255, 255, 255, 0.05))`,
                boxShadow: `0 4px 30px ${course.color}30`,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;