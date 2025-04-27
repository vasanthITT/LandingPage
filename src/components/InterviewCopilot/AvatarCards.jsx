import React, { useState, useEffect, useRef } from "react";
import Anandi from "../../assets/Anandi.jpg";
import Ada from "../../assets/Ada.jpg";
import Chandragupt from "../../assets/Chandragupt.jpg";
import Hyp from "../../assets/Hyp.jpg";
import Alex from "../../assets/Alex.jpg";
import { motion } from "framer-motion";

const avatars = [
  { id: 1, name: "Anandi", title: "Beginner AI Interviewer", img: Anandi },
  { id: 2, name: "Ada", title: "Intermediate AI Interviewer", img: Ada },
  { id: 3, name: "Chandragupta", title: "Advanced AI Interviewer", img: Chandragupt },
  { id: 4, name: "Alexander", title: "Expert AI Interviewer", img: Hyp },
  { id: 5, name: "Tesla", title: "Master AI Interviewer", img: Alex },
];

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: -100 }, // Start above the viewport
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2, // Stagger each card by 0.2s
      ease: "easeOut",
    },
  }),
};

const AvatarCards = () => {
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
      className="relative bg-gradient-to-t from-[#6b21a8] via-[#16368e] to-[#7e1dd3] py-12 px-6 overflow-hidden w-screen -translate-x-1/2 left-1/2"
    >
      {/* Starry Background */}
      <div className="absolute inset-0 overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-purple-300">Our Talented</span> AI Interviewers
        </h2>

        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {avatars.slice(0, 3).map((avatar, index) => (
            <motion.div
              key={avatar.id}
              className="text-center bg-white/10 rounded-lg p-4 shadow-lg backdrop-blur-md border border-white/15 hover:scale-105 transition-transform duration-300"
              custom={index} // Pass index for staggered delay
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <img
                src={avatar.img}
                alt={avatar.name}
                className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-lg mx-auto"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150"; // Fallback image
                }}
              />
              <p className="text-purple-200 text-sm sm:text-md mt-4">{avatar.title}</p>
              <h3 className="text-white text-base sm:text-lg font-semibold">{avatar.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Second Row - 2 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto">
          {avatars.slice(3).map((avatar, index) => (
            <motion.div
              key={avatar.id}
              className="text-center bg-white/10 rounded-lg p-4 shadow-lg backdrop-blur-md border border-white/15 hover:scale-105 transition-transform duration-300"
              custom={index + 3} // Adjust index to continue stagger from first row
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <img
                src={avatar.img}
                alt={avatar.name}
                className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-lg mx-auto"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150"; // Fallback image
                }}
              />
              <p className="text-purple-200 text-sm sm:text-md mt-4">{avatar.title}</p>
              <h3 className="text-white text-base sm:text-lg font-semibold">{avatar.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvatarCards;