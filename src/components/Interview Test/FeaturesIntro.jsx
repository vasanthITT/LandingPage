import React from "react";
import { motion } from "framer-motion";
import video1 from "../../assets/Interview_test.mp4";
import video2 from "../../assets/Interview_test_result.mp4";

const features = [
  {
    title: "AI Interview Test",
    emoji: "🤖",
    description:
      "This Video depicts how you can start Interview Test and start testing your skills right away.",
    buttonText: "Start Chat",
    buttonLink: "#",
    video: video1,
  },
  {
    title: "Test Results",
    emoji: "🎥",
    description:
      "You can check out the questions, your responses, and review your answers and marks.",
    buttonText: "See Results",
    buttonLink: "#",
    video: video2,
  },
];

const FeatureCard = ({ title, emoji, description, buttonText, buttonLink, video }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-md border border-purple-700/20 text-black font-bold w-full lg:w-[48%] transform hover:-translate-y-2 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.02 }}
    >
      <p className="text-orange-500 text-sm uppercase tracking-wider mb-3 font-semibold bg-orange-100/50 inline-block px-3 py-2 rounded-full">
        {title}
      </p>
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        {title.split(" ")[1]} {emoji}
      </h2>
      <p className="text-gray-700 mb-5 text-base leading-relaxed">{description}</p>
      <a
        href={buttonLink}
        className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 flex items-center group text-base"
      >
        {buttonText}
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform"> → </span>
      </a>
      <div className="mt-5 bg-gray-100 rounded-xl p-4 flex justify-center items-center overflow-hidden shadow-inner">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-[650px] h-[300px] rounded-lg shadow-lg object-cover"
        />
      </div>
    </motion.div>
  );
};

const FeaturesIntro = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        backgroundImage:
          "url('https://themexriver.com/wp/ai-power/wp-content/uploads/2023/06/side-shape.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="relative overflow-hidden"
    >
      <div className="text-black font-bold min-h-screen flex items-center justify-center px-6 py-16">
        <motion.div
          className="max-w-[96%] w-full border-2 border-purple-700/30 rounded-3xl p-6 lg:p-12 shadow-lg bg-white/95 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:flex lg:items-center gap-12">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-purple-700 font-semibold text-base bg-purple-100/50 inline-block px-4 py-2 rounded-full">
                Welcome to Interview Test
              </h3>
              <h1 className="text-4xl font-bold mt-3 leading-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Practice Company-Oriented Interviews
              </h1>
              <p className="text-purple-800 mt-4 text-lg leading-relaxed">
                Prepare for company-specific interviews with tailored questions & scenarios.
                Gain confidence and achieve career success.
              </p>
              <ul className="mt-4 space-y-3 text-lg">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✅</span> 100+ company-specific interview simulations.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✅</span> Real-world scenarios with feedback.
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✅</span> Improve interview skills with structured practice.
                </li>
              </ul>
              <a
                href="https://interviewbot.intraintech.com/ai-interview-test"
                className="mt-6 inline-block"
              >
                <button className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-medium uppercase text-lg">
                  <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 rounded-xl transform translate-y-1 transition duration-500 ease-out group-hover:translate-y-2" />
                  <div className="relative flex items-center justify-between py-3 px-5 text-lg text-white rounded-lg bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition-all duration-500 group-hover:shadow-md group-hover:-translate-y-1">
                    <span className="select-none">Start Test</span>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        clipRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              </a>
            </div>
            <motion.div
              className="lg:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://i.postimg.cc/BZjCptMq/image.png"
                alt="Interview Practice"
                className="w-full max-w-[500px] rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="w-full text-center mb-2 mt-4">
        <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
          <span>💡</span> Your AI Interview Coach is Ready—Are You?
        </h1>
        <p className="text-gray-800 mt-3 text-lg leading-relaxed mx-4">
          Take your interview prep to the next level with AI-powered practice sessions. 
          Learn, adapt, and succeed with real-time feedback and insights!
        </p>
      </div>

      <section className="min-h-screen flex flex-wrap items-center justify-center gap-6 px-4 py-8 bg-gradient-to-b from-white to-purple-50">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </section>
    </div>
  );
};

export default FeaturesIntro;
