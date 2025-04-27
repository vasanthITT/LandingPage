import React from 'react';
import { motion } from 'framer-motion';
import './Main.css';
import video from "../../assets/service.mp4";

const Main = () => {
  return (
    <main className="main-content" style={{ backgroundImage: 'url(https://themexriver.com/wp/ai-power/wp-content/uploads/2023/06/banner_3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="title">
            Welcome to Interview Copilot
          </p>
          <p className="title-2">
            Your <span className="mainHead">AI-Powered</span> Career Mentor for Ultimate Success!
          </p>
          <p className="description">
            Ace Your Interviews with Our AI-Powered Bot!
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <p className="stat-number">500K+</p>
              <p className="stat-text">Users Empowered</p>
            </div>
            <div className="divider">|</div>
            <div className="stat-item">
              <p className="stat-number">1.2M+</p>
              <p className="stat-text">Interviews Aced</p>
            </div>
          </div>
          <div className="stats-container">
            <div className="stat-item">
              <p className="stat-number">Real-Time</p>
              <p className="stat-text">AI Feedback</p>
            </div>
            <div className="divider">|</div>
            <div className="stat-item">
              <p className="stat-number">Industry-Specific</p>
              <p className="stat-text">Mock Interviews</p>
            </div>
          </div>
          <div className="button-wrapper">
            <a href="https://interviewbot.intraintech.com/interview-practice" className="relative group border-none bg-transparent p-0 outline-none cursor-pointer font-mono font-light uppercase text-base">
              <span className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-[250ms] group-active:translate-y-px" />
              <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]" />
              <div className="relative flex items-center justify-between py-3 px-6 text-lg text-white rounded-lg transform -translate-y-1 bg-gradient-to-r from-[#f27121] via-[#e94057] to-[#8a2387] gap-3 transition duration-[600ms] ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-[250ms] group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110">
                <span className="select-none">Try Interview Copilot Now!</span>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1">
                  <path clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fillRule="evenodd" />
                </svg>
              </div>
            </a>
          </div>
        </motion.div>
        <motion.div
          className="video-content"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <video className="main-video" autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </main>
  );
};

export default Main;