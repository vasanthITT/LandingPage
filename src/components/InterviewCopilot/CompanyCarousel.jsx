import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CompanyCarousel.css';
import apple from '../../assets/apple.png';
import google from '../../assets/google.png';
import microsoft from '../../assets/microsoft.png';
import amazon from '../../assets/amazon.png';
import tesla from '../../assets/tesla.png';
import spotify from '../../assets/spotify.png';
import adobe from '../../assets/adobe.jpg';
import BG from "../../assets/image.png";

const companies = [
  { name: 'Apple', logo: apple },
  { name: 'Google', logo: google },
  { name: 'Microsoft', logo: microsoft },
  { name: 'Amazon', logo: amazon },
  { name: 'Tesla', logo: tesla },
  { name: 'Spotify', logo: spotify },
  { name: 'Adobe', logo: adobe },
];

// Animation variants
const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const carouselVariants = {
  animate: {
    x: ["0%", "-50%"], // Right to left
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

const CompanyCarousel = () => {
  const [count, setCount] = useState(0);
  const [stars, setStars] = useState([]);

  const doubledCompanies = [...companies, ...companies];

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

    const handleScroll = () => {
      const element = document.querySelector('.carousel-container');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          let start = 1200;
          const end = 12500;
          const duration = 5000;
          const increment = end / (duration / 16);

          const animateCount = () => {
            start += increment;
            if (start < end) {
              setCount(Math.ceil(start));
              requestAnimationFrame(animateCount);
            } else {
              setCount(end);
            }
          };

          animateCount();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="full-width-wrapper">
      <div className="carousel-container">
        <div className="starry-background">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="star"
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

        <motion.h1
          className="carousel-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Trusted Partners
        </motion.h1>

        <div className="carousel-wrapper">
          <motion.div
            className="left-image-container"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <img
              src={BG}
              alt="Featured Company"
              className="left-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300';
              }}
            />
          </motion.div>
          <div className="right-content">
            <h2 className="carousel-title">
              Trusted by {count}+ Happy Customers from the Whole World
            </h2>
            <div className="carousel-track-wrapper">
              <motion.div
                className="carousel-track"
                variants={carouselVariants}
                animate="animate"
              >
                {doubledCompanies.map((company, index) => (
                  <div key={index} className="carousel-slide">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="company-logo"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150';
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;