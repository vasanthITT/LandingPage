import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Live_Interview.css';
import axios from 'axios';

// Import local images from assets
import SurajImage from '../assets/tutors/Baishalini.png';
import NavjeetImage from '../assets/tutors/sushil.png';
import AvinashImage from '../assets/tutors/dadnan.png';
import RudranshImage from '../assets/tutors/Maheswatu.png';
import GeetaImage from '../assets/tutors/shivangi.png';
import ChetanaImage from '../assets/tutors/sanket.png';
import VaibhaviImage from '../assets/tutors/Abhishek.png';
import ArtiImage from '../assets/tutors/sabya.png';
import images from '../assets/tutors/Von_yon.png';

const tutors = [
  { id: 1, name: 'Baishalini', specialty: 'Data Scientist', languages: 'English, Hindi', experience: '11 Years', price: '₹49/min', rating: 4.8, status: 'Busy', image: SurajImage, email: 'surajk@example.com' },
  { id: 2, name: 'Swasti Desai', specialty: 'Data Scientist', languages: 'English, Hindi, Punjabi', experience: '7 Years', price: '₹25/min', rating: 4.5, status: 'Online', image: NavjeetImage, email: 'vasanthvitian@gmail.com' },
  { id: 3, name: 'Dadnan S', specialty: 'Data Scientist', languages: 'Hindi', experience: '8 Years', price: '₹21/min', rating: 4.2, status: 'Online', image: AvinashImage, email: 'avinash@example.com' },
  { id: 4, name: 'Maheshwatu Sahu', specialty: 'Data Scientist', languages: 'English, Hindi, Bhojpuri, Kannada...', experience: '6 Years', price: '₹21/min', rating: 4.7, status: 'Online', image: RudranshImage, email: 'rudransh@example.com' },
  { id: 5, name: 'Shivangi Joshi', specialty: 'Analytics Head', languages: 'English, Hindi', experience: '18 Years', price: '₹67/min', rating: 4.9, status: 'Online', image: GeetaImage, email: 'geeta@example.com' },
  { id: 6, name: 'Sanket', specialty: 'Data Scientist', languages: 'English, Hindi, Punjabi', experience: '20 Years', price: '₹78/min', rating: 4.8, status: 'Online', image: ChetanaImage, email: 'chetana@example.com' },
  { id: 7, name: 'Abhishek Kumar', specialty: 'Solution Delivery', languages: 'English, Hindi, Punjabi', experience: '13 Years', price: '₹600/min', rating: 4.6, status: 'Online', image: VaibhaviImage, email: 'vaibhavi@example.com' },
  { id: 8, name: 'Sabya Sachin', specialty: 'Full Stack Developer Manager', languages: 'English, Hindi, Punjabi, Gujarati', experience: '5 Years', price: '₹55/min', rating: 4.3, status: 'Busy', image: ArtiImage, email: 'arti@example.com' },
  { id: 9, name: 'Von yon', specialty: 'Career coach', languages: 'English, Hindi, Punjabi, Gujarati', experience: '5 Years', price: '₹55/min', rating: 4.3, status: 'Busy', image: images, email: 'arti@example.com' }
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const notificationVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
};

const LoadingSpinner = () => (
  <motion.div
    id="loading-spinner"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  >
    <div id="spinner-circle" />
  </motion.div>
);

const TutorCard = ({ tutor }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', time: '', date: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const renderStars = () => {
    return (
      <div style={{ display: 'flex', gap: '5px', color: 'goldenrod', fontSize: '18px' }}>
        ★ ★ ★ ★ ★
      </div>
    );
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailBody = `Hello, ${formData.name} booked (${tutor.name}) on ${formData.date} at ${formData.time}.\nUser phone number: ${formData.phone}\nUser email: ${formData.email}`;
    const emailBody1 = `Hello, ${formData.name}!\nYou have booked (${tutor.name}) on ${formData.date} at ${formData.time}.\nKindly attend the meeting as scheduled.\nThank you`;

    try {
      await axios.post('http://localhost:8089/api/email/send', null, {
        params: {
          to: tutor.email,
          subject: 'New Booking Request',
          text: emailBody,
          user: formData.email,
          usertext: emailBody1,
        },
      });
      
      setIsSubmitting(false);
      setIsFormOpen(false);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      alert('Failed to send email to tutor.');
    }
  };

  return (
    <>
      <motion.div
        id="tutor-card"
        variants={itemVariants}
        whileInView="visible"
        viewport={{ once: true }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
      >
        <div id="tutor-content">
          <motion.div id="tutor-image-wrapper" variants={itemVariants}>
            <motion.img src={tutor.image} alt={tutor.name} id="tutor-image" />
            <motion.div
              id="status-indicator"
              data-status={tutor.status.toLowerCase()}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div id="tutor-details-wrapper" variants={itemVariants}>
            <motion.h2 id="tutor-title" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              {tutor.name}
            </motion.h2>
            <motion.p id="tutor-specialty" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              {tutor.specialty}
            </motion.p>
            <motion.div id="tutor-details" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <span><strong>Languages:</strong> {tutor.languages}</span>
              <span><strong>Experience:</strong> {tutor.experience}</span>
              <span><strong>Price:</strong> {tutor.price}</span>
              <span><strong>Rating:</strong> <span id="star-rating">{renderStars(tutor.rating)}</span></span>
            </motion.div>
            <motion.div id="tutor-buttons" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <motion.button
                id="tutor-button-schedule"
                className="tutor-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFormOpen(true)}
              >
                Schedule
              </motion.button>
              <motion.button
                id={tutor.status === 'Busy' ? 'tutor-button-chat-busy' : 'tutor-button-chat-online'}
                className="tutor-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tutor.status === 'Busy' ? 'Busy' : 'Chat'}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {isFormOpen && (
        <motion.div
          id="schedule-form-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.form
            id="schedule-form"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onSubmit={handleSubmit}
          >
            <button type="button" id="close-button" onClick={() => setIsFormOpen(false)}>×</button>
            <h2 className="mt-10">Schedule a Session with {tutor.name}</h2>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleFormChange} required />
            <label>Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required />
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleFormChange} required />
            <label>Time</label>
            <input type="time" name="time" value={formData.time} onChange={handleFormChange} required />
            <label>Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleFormChange} required />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <LoadingSpinner /> : 'Submit'}
            </button>
          </motion.form>
        </motion.div>
      )}

      <AnimatePresence>
        {showNotification && (
          <motion.div
            id="success-notification"
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <span>✓ Booking Successful!</span>
            <p>Your session with {tutor.name} has been booked.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ScheduleMeet = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('');
  const [filterLanguage, setFilterLanguage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);

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
  }, []);

  const specialties = [...new Set(tutors.map(tutor => tutor.specialty.split(',')[0].trim()))];
  const languages = [...new Set(tutors.flatMap(tutor => tutor.languages.split(', ').map(lang => lang.trim())))];

  const filteredTutors = tutors
    .filter(tutor => 
      tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterSpecialty === '' || tutor.specialty.includes(filterSpecialty)) &&
      (filterLanguage === '' || tutor.languages.includes(filterLanguage))
    )
    .sort((a, b) => {
      if (sortBy === 'price') {
        return parseInt(a.price.replace('₹', '')) - parseInt(b.price.replace('₹', ''));
      }
      if (sortBy === 'experience') {
        return parseInt(b.experience) - parseInt(a.experience);
      }
      return 0;
    });

  return (
    <section className="bg-gradient-to-b from-[#6817ab] via-[#6b21a8] to-indigo-800 text-white py-10 px-6 overflow-hidden relative">
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

      <motion.div id="main-container" className="max-w-6xl mx-auto relative z-10" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 id="main-title" className="text-5xl font-bold mb-8 text-center" variants={itemVariants}>
          Meet Our Tutors
        </motion.h1>

        <div id="controls-container">
          <input
            type="text"
            id="search-bar"
            placeholder="Search tutors by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price">Price (Low to High)</option>
            <option value="experience">Experience (High to Low)</option>
          </select>
          <select
            id="filter-select"
            value={filterSpecialty}
            onChange={(e) => setFilterSpecialty(e.target.value)}
          >
            <option value="">Filter by Specialty</option>
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty}>{specialty}</option>
            ))}
          </select>
          <select
            id="filter-select"
            value={filterLanguage}
            onChange={(e) => setFilterLanguage(e.target.value)}
          >
            <option value="">Filter by Language</option>
            {languages.map((language, index) => (
              <option key={index} value={language}>{language}</option>
            ))}
          </select>
        </div>

        <motion.div id="tutors-wrapper" variants={containerVariants}>
          {isLoading ? (
            <div id="loading-container">
              <LoadingSpinner />
              <p>Loading tutors...</p>
            </div>
          ) : filteredTutors.length > 0 ? (
            filteredTutors.map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))
          ) : (
            <p>No tutors found matching your criteria.</p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ScheduleMeet;