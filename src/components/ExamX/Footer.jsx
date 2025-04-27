import React from "react";
import { motion } from "framer-motion";
import StarryBackground from "./StarryBackground";

const Footer = () => {
  return (
    <footer className="py-12 px-6 relative bg-gradient-to-br from-[#16368e] to-[#6817ab] text-[#D1D5DB]">
      <StarryBackground />
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">ExamX</h3>
          <p className="text-[#D1D5DB]">
            Empowering students to excel in UPSC, JEE, NEET, and Board Exams with AI-driven tools and expert resources.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="/upsc" className="hover:text-white transition-colors">UPSC</a></li>
            <li><a href="/jee" className="hover:text-white transition-colors">JEE</a></li>
            <li><a href="/neet" className="hover:text-white transition-colors">NEET</a></li>
            <li><a href="/boards" className="hover:text-white transition-colors">Board Exams</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-[#D1D5DB] mb-4">Subscribe for exam tips and updates.</p>
          <motion.div
            className="flex"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg bg-white text-black w-full focus:outline-none"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-[#A855F7] to-[#3B82F6] text-white rounded-r-lg hover:scale-105 transition-transform">
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>© 2025 ExamX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;