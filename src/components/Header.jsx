import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, PhoneCall, ArrowUpRight, Menu, X } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header id="header-container" className="header">
      {/* Left Section: Logo */}
      <Link to="/" id="logo" onClick={() => setIsOpen(false)} aria-label="Home">
        <span>AI 4 </span>
        <span> Interviewer's</span>
      </Link>

      {/* Toggle Button for Small Screens */}
      <button
        id="toggle-button"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
      </button>

      {/* Navigation and Right Section Container */}
      <nav id="nav-container" className={isOpen ? "open" : ""} aria-hidden={!isOpen && "true"}>
        {/* Navigation Links */}
        {[
          { name: "Interview Copilot", path: "/" },
          { name: "Interview Test", path: "/interview-test" },
          
          { name: "Live Interview", path: "/live-interview" },
          { name: "ExamX", path: "/exam" },
          
        ].map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="nav-link"
            onClick={() => setIsOpen(false)}
            aria-label={item.name}
          >
            {item.name} <ChevronDown size={14} className="ml-1" />
          </Link>
        ))}

        {/* Call Section */}
        <div id="call-section">
          <div id="call-icon">
            <PhoneCall size={20} className="text-white" />
          </div>
          <div id="call-info">
            <p>Call us:</p>
            <a href="tel:+919337448930" onClick={() => setIsOpen(false)}>
              +91 93374 48930
            </a>
          </div>
          {/* Social Media Icons */}
          <div id="social-icons">
            {[
              { Icon: FaFacebookF, link: "https://www.facebook.com/share/1ADnnTHB4X/" },
              { Icon: FaLinkedinIn, link: "https://www.linkedin.com" },
              { Icon: FaWhatsapp, link: "https://wa.me/919337448930" },
              { Icon: FaInstagram, link: "https://www.instagram.com/intraintech3?igsh=MTZidzVhNmZ6OW53dQ==" },
            ].map(({ Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-purple-400 cursor-pointer transition-all"
                onClick={() => setIsOpen(false)}
                aria-label={`Visit us on ${link.includes("facebook") ? "Facebook" : link.includes("linkedin") ? "LinkedIn" : link.includes("whatsapp") ? "WhatsApp" : "Instagram"}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Login Button */}
        <a
          href="https://interviewbot.intraintech.com/" // Replace with your external login URL
          id="login-button"
          target="_blank" // Opens in new tab
          rel="noopener noreferrer" // Security best practice
          onClick={() => setIsOpen(false)}
          aria-label="Login"
          className="login-link" // Add this class if you want to maintain same styling
        >
          Login
          <span>
            <ArrowUpRight size={16} />
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Header;