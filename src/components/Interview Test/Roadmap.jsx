import React, { useState } from "react";
import { motion } from "framer-motion";

/** Example icons (replace with your own). */
const IconDataCollection = () => (
  <svg width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2">
    <circle cx="32" cy="32" r="14" stroke="white" />
    <path d="M32 18 L32 46" stroke="white" />
    <path d="M18 32 L46 32" stroke="white" />
    <path d="M25 25 L39 39" stroke="white" />
    <path d="M39 25 L25 39" stroke="white" />
  </svg>
);
const IconDataAnalysis = () => (
  <svg width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2">
    <rect x="20" y="18" width="24" height="28" stroke="white" />
    <path d="M32 18 L32 46" stroke="white" />
    <path d="M20 32 L44 32" stroke="white" />
    <path d="M26 46 L38 46" stroke="white" />
  </svg>
);
const IconModelBuilding = () => (
  <svg width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2">
    <rect x="14" y="14" width="36" height="36" stroke="white" />
    <path d="M32 14 L32 50" stroke="white" />
    <path d="M14 32 L50 32" stroke="white" />
    <circle cx="32" cy="32" r="4" fill="white" />
  </svg>
);
const IconModelDeployment = () => (
  <svg width="60" height="60" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2">
    <circle cx="32" cy="32" r="14" stroke="white" />
    <path d="M22 32 L42 32" stroke="white" />
    <path d="M32 18 L32 46" stroke="white" />
    <circle cx="32" cy="32" r="4" fill="white" />
  </svg>
);

/** Step data */
const steps = [
  {
    number: "01",
    title: "Select AI Interview Test",
    description: "Choose 'AI Interview Test' from the available options to proceed.",
    Icon: IconDataCollection,
  },
  {
    number: "02",
    title: "Pick Your Interview Type",
    description: "Select either 'Job Role-Based Interview' or 'Job Description-Based Interview' based on your preference.",
    Icon: IconDataAnalysis,
  },
  {
    number: "03",
    title: "Customize & Start Your Test",
    description: "Fill in the required details, customize your interview settings, and begin your AI-powered test!.",
    Icon: IconModelBuilding,
  },
  {
    number: "04",
    title: "Result and Evaluation",
    description: "Immediately get the result of how you performed During the Interview . ",
    Icon: IconModelDeployment,
  },
];

/** Main container */
const containerStyle = {
  backgroundColor: "#181818",
  color: "#fff",
  padding: "4rem 1rem",
  fontFamily: "sans-serif",
  backgroundImage: 'url(https://demo.casethemes.net/aimo/wp-content/uploads/2024/11/bg-ft-34.webp)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const headingStyle = {
  fontSize: "2.25rem",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "0.1px",
};

const timelineContainerStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

/** Horizontal center line */
const timelineLineStyle = {
  position: "absolute",
  top: "50%",
  left: 0,
  width: "100%",
  borderTop: "1px solid #fff",
  transform: "translateY(-50%)",
};

/** The 4 columns (1 for each step) */
const stepsWrapperStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "3rem",
  maxWidth: "1200px",
  width: "100%",
  zIndex: 10,
};

/** Each step container */
const stepContainerStyle = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

/** Dot in the center line */
const timelineDotStyle = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "24px",
  height: "24px",
  backgroundColor: "#fff",
  borderRadius: "50%",
  border: "2px solid #3f3f3f",
  zIndex: 2,
  top: "50%",
};

/** Vertical line connecting the dot to the step content */
const verticalLineStyle = (isTop) => {
  // length of line from the center dot to the content
  const verticalLineHeight = 60; // px, adjust as needed
  return {
    position: "absolute",
    left: "50%",
    width: "2px",
    backgroundColor: "#fff",
    transform: "translateX(-50%)",
    zIndex: 1,
   
    // If top, line extends upward from dot. If bottom, extends downward.
    height: `${verticalLineHeight}px`,
    top: isTop ? `calc(50% - ${verticalLineHeight}px)` : "50%",
  };
};

/** We’ll alternate top/bottom: 
 * step #1 -> bottom
 * step #2 -> top
 * step #3 -> bottom
 * step #4 -> top
 */
const contentWrapperStyle = (isTop) => ({
  marginTop: isTop ? "0" : "8rem",
  marginBottom: isTop ? "8rem" : "0",
});

/** Icon container. We highlight it pink if hovered. */
const iconContainerStyle = (isHovered) => ({
  backgroundColor: "#242424",
  width: "12rem",
  height: "12rem",
  borderRadius: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "8rem auto 8rem",
  
  boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
  border: isHovered ? "2px solid rgb(158, 47, 237)" : "2px solid transparent",
  transition: "border 0.3s",
});

/** Step text styles. We highlight the number/title if hovered. */
const numberStyle = (isHovered) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  margin: "1rem 0 0.5rem",
  color: isHovered ? "rgb(158, 47, 237)" : "#fff",
  transition: "color 0.3s",
});

const titleStyle = (isHovered) => ({
  fontSize: "1.25rem",
  fontWeight: 600,
  marginBottom: "0.5rem",
  color: isHovered ? "rgb(158, 47, 237)" : "#fff",
  transition: "color 0.3s",
});

const descriptionStyle = {
  color: "#aaa",
  fontSize: "1rem",
  maxWidth: "15rem",
  margin: "0 auto",
};

/** Main Component */
const Roadmap = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    
    <div style={containerStyle}>
      <div>
    <h2 style={{
      fontSize: "2.5rem",
      fontWeight: "bold",
      textAlign: "center",
      color: "#fff",
      margin: "10px"
    }}>
      Your AI Interview Roadmap
    </h2>
    <p style={{
      fontSize: "1rem",
      color: "#aaa",
      textAlign: "center",
      maxWidth: "600px",
      margin: "0 auto"
    }}>
      Follow these four simple steps to experience an AI-driven interview process.
    </p>
  </div>
      <div style={timelineContainerStyle}>
        {/* Horizontal line */}
        <div style={timelineLineStyle} />

        {/* Steps */}
        <div style={stepsWrapperStyle}>
          {steps.map((step, index) => {
            // Even indexes (0,2) => bottom, Odd indexes (1,3) => top
            const isTop = index % 2 === 1;
            const isHovered = hoveredStep === index;

            return (
              <motion.div
                key={index}
                style={stepContainerStyle}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Center dot */}
                <div style={timelineDotStyle} />

                {/* Short vertical line from dot to content */}
                <div style={verticalLineStyle(isTop)} />

                {/* Step content wrapper (above or below line) */}
                <div style={contentWrapperStyle(isTop)}>
                  {/** If top, icon at top => #2,4. 
                       If bottom, icon at bottom => #1,3 
                       (like your second screenshot). 
                  */}
                  {isTop ? (
                    <>
                      <div style={iconContainerStyle(isHovered)}>
                        <step.Icon />
                      </div>
                      <div style={numberStyle(isHovered)}>{step.number}</div>
                      <div style={titleStyle(isHovered)}>{step.title}</div>
                      <p style={descriptionStyle}>{step.description}</p>
                    </>
                  ) : (
                    <>
                      <div style={numberStyle(isHovered)}>{step.number}</div>
                      <div style={titleStyle(isHovered)}>{step.title}</div>
                      <p style={descriptionStyle}>{step.description}</p>
                      <div style={iconContainerStyle(isHovered)}>
                        <step.Icon />
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;