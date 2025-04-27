import React, { useState, useEffect } from "react";
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const [stars, setStars] = useState([]);

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
          animationDuration: Math.random() * 5 + 3,
        });
      }
      setStars(starArray);
    };

    createStars();
  }, []);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    }),
    hover: { scale: 1.25, rotate: 12, transition: { duration: 0.3 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const contactVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const starVariants = {
    twinkle: {
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-indigo-800 via-purple-900 to-blue-900 text-white py-12 relative overflow-hidden">
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
            }}
            variants={starVariants}
            animate="twinkle"
            transition={{ duration: star.animationDuration }}
          />
        ))}
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: false }}
          >
            <motion.p
              className="text-gray-200 leading-relaxed mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              InTrain Tech is at the forefront of aligning cutting-edge technology skills with industry standards, catering to the digitalization needs of individuals and corporate clients. 
              We provide comprehensive Training and Internships.
            </motion.p>
            <h3 className="text-xl font-bold mt-6 mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Follow Us
            </h3>
            <div className="flex space-x-6 mt-2 justify-center md:justify-start">
              {[
                { icon: FaYoutube, href: "https://www.youtube.com/@intraintech" },
                { icon: FaFacebookF, href: "https://www.facebook.com/people/Intraintech-Itt/100094125669376/?_rdr" },
                { icon: FaInstagram, href: "https://www.instagram.com/intraintech_itt_1?igsh=c2tvdHNzYXBuNnpi" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/intraintech/posts/?feedView=all" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  variants={socialVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  whileHover="hover"
                  className="bg-gradient-to-br from-purple-600 to-blue-600 p-3 rounded-full cursor-pointer shadow-lg"
                >
                  <social.icon className="text-white text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent border-b-2 border-purple-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-200">
              {[
                { text: "Home", href: "https://intraintech.com/" },
                { text: "Professional Courses", href: "https://intraintech.com/professional-courses/" },
                { text: "International Courses", href: "https://intraintech.com/index.php/international-page/" },
                { text: "College Bootcamps", href: "https://intraintech.com/college-students/" },
                { text: "Our Services", href: "https://intraintech.com/our-services/" },
                { text: "Internship", href: "https://internship.intraintech.com/" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={linkVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: false }}
                >
                  <a
                    href={link.href}
                    className="flex items-center group hover:text-purple-300 transition-all duration-300"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:w-4 transition-all"></span>
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent border-b-2 border-blue-500 pb-2 inline-block">
              Contacts
            </h3>
            <ul className="space-y-6 text-gray-200">
              {[
                { icon: FaPhone, text: "+91 97778 09437", href: "tel:+919777809437" },
                { icon: FaPhone, text: "+91 93374 48930", href: "tel:+919337448930" },
                { icon: FaEnvelope, text: "intraintech.courses@gmail.com", href: "mailto:intraintech.courses@gmail.com" },
              ].map((contact, index) => (
                <motion.li
                  key={index}
                  variants={contactVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index}
                  viewport={{ once: false }}
                  className="flex items-center group"
                >
                  <contact.icon className="mr-3 text-purple-400 group-hover:text-blue-400 transition-colors" />
                  <a href={contact.href} className="hover:text-blue-300 transition-colors">
                    {contact.text}
                  </a>
                </motion.li>
              ))}
              {[
                "1st floor, Rana complex, Silver Springs Layout, Munnekollal, Bengaluru, Karnataka 560037",
                "Balaji palli, Hugulaptta, Berhampur, Ganjam, Odisha - 761001 INDIA",
              ].map((address, index) => (
                <motion.li
                  key={index + 3}
                  variants={contactVariants}
                  initial="hidden"
                  whileInView="visible"
                  custom={index + 3}
                  viewport={{ once: false }}
                  className="flex items-start group"
                >
                  <FaMapMarkerAlt className="mr-3 text-purple-400 mt-1 group-hover:text-blue-400 transition-colors" />
                  <span className="transform group-hover:translate-x-2 transition-transform">
                    {address}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}