import React from "react";

// Industry Data with Custom SVG Icons
const industries = [
  {
    title: "Company-Oriented Interviews",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 10h18M9 21V7m6 14V7M3 10L12 2l9 8"
        />
      </svg>
    ),
    bg: "bg-[#151721]",
    description:
      "Practice company-specific interview questions from leading organizations. Our AI adapts based on your resume and industry insights.",
  },
  {
    title: "Skill-Based Assessments",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12h4m-8 0H5m7-7v14"
        />
      </svg>
    ),
    bg: "bg-[#151721]",
    description:
      "Strengthen your technical and soft skills with AI-driven skill assessments tailored to your career goals.",
  },
  {
    title: "Domain-Based Interviews",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <rect x="4" y="4" width="16" height="16" rx="3" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16M12 4v16" />
      </svg>
    ),
    bg: "bg-[#151721]",
    description:
      "Get domain-specific interview practice with AI-curated questions for fields like IT, finance, healthcare, and engineering.",
  },
  {
    title: "Role-Specific Preparation",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6h18M3 12h18M3 18h18M9 6v12m6-12v12"
        />
      </svg>
    ),
    bg: "bg-[#151721]",
    description:
      "Prepare for specific job roles like software engineering and product management with targeted AI-generated questions.",
  },
  {
    title: "Resume-Based AI Interviews",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3h8m-4 0v18m-4 0h8m-5-5l5-5m0 0l-5-5" />
      </svg>
    ),
    bg: "bg-[#151721]",
    description:
      "Upload your resume, and our AI will generate personalized interview questions based on your experience and skills.",
  },
  {
    title: "AI Interviews",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle cx="12" cy="8" r="4" strokeWidth={2} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20h16M8 16h8" />
      </svg>
    ),
    bg: "bg-[#151721]",
    description:
      "Simulate real interview experiences with AI-driven interviews and receive instant feedback on your responses.",
  },
];

const IndustryCard = ({ title, icon, bg, description }) => {
  return (
    <div
      className={`p-6 rounded-lg ${bg} text-white shadow-lg transition-all duration-300 hover:bg-[#1b255e] aspect-square flex flex-col justify-between`}
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
      <a href="#" className="text-[#7b8ce5] font-bold hover:underline">
        LEARN MORE
      </a>
    </div>
  );
};

const IndustryGrid = () => {
  return (
    <div
      className="text-white py-16 px-6"
      style={{
        backgroundImage: "url('https://demo.casethemes.net/aimo/wp-content/uploads/2024/10/bg-h1-ss2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Ace Your Next Interview <br /> with AI-Powered Preparation
        </h2> 
      </div>

      {/* Grid Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {industries.map((industry, index) => (
          <IndustryCard key={index} {...industry} />
        ))}
      </div>
    </div>
  );
};

export default IndustryGrid;
