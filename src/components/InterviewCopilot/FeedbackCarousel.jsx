import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "This platform helped me gain confidence in technical interviews. The AI-generated questions were spot-on!",
    name: "Samishka",
    role: "Software Engineering Student",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    text: "I struggled with interviews before, but the role-based practice tests really prepared me for real-world scenarios.",
    name: "Priyansh",
    role: "Data Science Enthusiast",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    text: "The instant feedback on my answers was a game-changer. It helped me improve my weak areas quickly!",
    name: "Santosh",
    role: "Aspiring Cloud Engineer",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    text: "I loved the structured approach! The difficulty levels allowed me to gradually improve my interview skills.",
    name: "Ankit Soni",
    role: "Full-Stack Developer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "The AI-driven job description-based interviews made me feel like I was in a real interview. Highly recommend!",
    name: "Jose Ruben",
    role: "Cybersecurity Analyst",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    text: "The best part was the adaptive difficulty. It pushed me just enough to challenge myself without feeling overwhelmed.",
    name: "Whuan",
    role: "AI/ML Researcher",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1, // Staggered entry for each card
      ease: "easeOut",
    },
  }),
};

const FeedbackCarousel = () => {
  const carouselRef = useRef(null);
  const controls = useAnimation();
  const [stars, setStars] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll function with smooth animation
  const scroll = (offset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
      controls.start({
        x: offset > 0 ? [-10, 0] : [10, 0], // Subtle bounce effect
        transition: { duration: 0.4, ease: "easeOut" },
      });
    }
  };

  // Starry effect and visibility detection
  useEffect(() => {
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

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b  from-[#6b21a8] via-indigo-800 to-blue-900 text-white py-16 px-6 min-h-screen">
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

      {/* Heading */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mt-32">
          What <span className="text-purple-300">Customers</span> Have To Say
        </h2>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        <motion.button
          onClick={() => scroll(-375)}
          className="absolute left-4 z-20 bg-purple-600/80 p-3 rounded-full hover:bg-purple-700 transition-all backdrop-blur-md"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1, rotate: -10 }}
        >
          <ChevronLeft size={24} className="text-white" />
        </motion.button>

        {/* Testimonials Carousel */}
        <motion.div
          ref={carouselRef}
          className="flex overflow-x-auto space-x-6 px-8 py-4 relative z-10 snap-x snap-mandatory"
          style={{
            width: "100%",
            maxWidth: "1200px",
            // Inline styles to hide scrollbar across browsers
            msOverflowStyle: "none", // IE and Edge
            scrollbarWidth: "none", // Firefox
            WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
          }}
          animate={controls}
          whileTap={{ cursor: "grabbing" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] md:min-w-[350px] flex flex-col items-center p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 snap-center"
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
            >
              {/* Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-2 border-purple-300 mb-4 object-cover"
              />
              {/* Text */}
              <p className="text-center text-gray-200 text-sm md:text-base italic mb-4">
                "{testimonial.text}"
              </p>
              {/* Name and Role */}
              <div className="text-center">
                <h3 className="text-purple-300 font-semibold text-lg">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Button */}
        <motion.button
          onClick={() => scroll(375)}
          className="absolute right-4 z-20 bg-purple-600/80 p-3 rounded-full hover:bg-purple-700 transition-all backdrop-blur-md"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <ChevronRight size={24} className="text-white" />
        </motion.button>
      </div>

      {/* Global CSS to hide scrollbar for Webkit browsers */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default FeedbackCarousel;