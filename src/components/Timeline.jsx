  import { useState } from "react";
  import { motion } from "framer-motion";
  import defaultImg from "../assets/timeline1.jpg"; // Default image
  import img1 from "../assets/chatbotdesign.jpg";
  import img2 from "../assets/skills.jpg";
  import img3 from "../assets/jobrole.jpg";
  import img4 from "../assets/timeline1.jpg";

  export default function Timeline() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const events = [
      { year: "Step 1", title: "👤 Profile Setup", description: "Set up your preferences and choose an avatar for a personalized experience.", image: img1, lineHeight: "82px" },
      { year: "Step 2", title: "⚙️ Environment Setup", description: "Customize the interview environment and select the mode that suits you.", image: img2, lineHeight: "232px" },
      { year: "Step 3", title: "🎙️ AI-Powered Interview", description: "Engage in a real-time AI-driven interview with dynamic questions and feedback.", image: img3, lineHeight: "372px" },
      { year: "Step 4", title: "📊 Performance Report", description: "Receive in-depth feedback and actionable insights for improvement.", image: img4, lineHeight: "522px" }
  ];


    return (
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center min-h-screen bg-gradient-to-b from-[#0a1931] to-[#3b2556] min-h-screen py-12 px-6">

        {/* Left: Timeline */}
        <div className="relative flex flex-col items-start w-full lg:w-1/2 max-w-lg min-h-full">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-500 mb-8 drop-shadow-lg tracking-wide text-center lg:text-left">
            ✨ Our 4 Phase Step Process
          </h2>

          {/* Vertical Line (Controlled by lineHeight) */}
          <motion.div
            className={`hidden lg:block absolute left-[-20px] top-[55px] w-1 transition-all duration-500 ${hoveredIndex !== null ? "opacity-100" : "opacity-0"
              }`}
            style={{
              height: hoveredIndex !== null ? events[hoveredIndex].lineHeight : "0",
              background: `linear-gradient(to bottom, #ff00ff, #8800ff, #0055ff, #00ccff, transparent)`, // Smooth neon gradient
              boxShadow: `0px 0px 3px 0.5px rgba(255, 0, 255, 0.4), 
                  0px 0px 5px 1px rgba(136, 0, 255, 0.3), 
                  0px 0px 7px 1px rgba(0, 85, 255, 0.25),
                  0px 0px 9px 1.5px rgba(0, 204, 255, 0.2)`, // Subtle neon glow
              filter: "blur(1px)", // Soft glow
            }}
          >
            {/* White Star at the End of the Line */}
            <motion.div
              className="absolute left-[-7px] text-white text-xl" // Adjust position
              style={{ top: hoveredIndex !== null ? events[hoveredIndex].lineHeight : "0" }}
              animate={{ rotate: [0, 360] }} // Rotates for a glowing effect
              transition={{ duration: 10000, repeat: Infinity, ease: "linear" }}
            >
              ⚝
            </motion.div>
          </motion.div>


          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex flex-col lg:flex-row items-start lg:items-center w-full my-4 lg:my-6 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Timeline Point */}
              {/* <div className="relative w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full border-4 border-white shadow-lg mx-auto lg:mx-0 left-[-4px]"></div> */}

              {/* Timeline Text */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`ml-0 lg:ml-6 mt-4 lg:mt-0 transition-all duration-300 w-full lg:w-80 ${hoveredIndex === index ? "text-white" : "text-gray-500"
                  }`}
              >
                <span
                  className={`text-sm font-bold tracking-widest ${hoveredIndex === index ? "text-yellow-300" : "text-gray-500"
                    }`}
                >
                  {event.year}
                </span>
                <h3
                  className={`text-base lg:text-lg font-semibold mt-1 ${hoveredIndex === index ? "text-white" : "text-gray-500"
                    }`}
                >
                  {event.title}
                </h3>
                <p
                  className={`mt-2 leading-relaxed text-xs lg:text-sm ${hoveredIndex === index ? "text-white" : "text-gray-500"
                    }`}
                >
                  {event.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Right: Default & Hovered Image Display */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-6 lg:mt-0 min-h-full">
          <motion.img
            src={hoveredIndex !== null ? events[hoveredIndex].image : defaultImg}
            alt={hoveredIndex !== null ? events[hoveredIndex].title : "Default"}
            key={hoveredIndex} // Ensures smooth transition
            initial={{ opacity: 0, scale: 1.5, rotate: 0 }}
            animate={{ opacity: 1, scale: 1.5, rotate: 0 }} // Increased size & rotated
            exit={{ opacity: 0, scale: 1.5, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full lg:w-[600px] max-w-full h-auto object-cover rounded-lg shadow-2xl border-8 border-blue-900"
          />

        </div>
      </div>
    );
  }
