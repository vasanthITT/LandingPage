import React from 'react';
// Ensure this CSS file is in the same directory
import Main from './InterviewCopilot/Main';
import CompanyCarousel from './InterviewCopilot/CompanyCarousel';
import WhyChoose from './InterviewCopilot/WhyChoose';
import InterviewComparison from './InterviewCopilot/InterviewComparison';
import FAQ from './InterviewCopilot/Faq';
import FeedbackCarousel from './InterviewCopilot/FeedbackCarousel';
import ServicesUI from './InterviewCopilot/ServicesUI';

import StepCard from './InterviewCopilot/StepCard';
import CoursesPage from './InterviewCopilot/CoursesPage';
import Categories from './InterviewCopilot/Categories';
import AvatarCards from './InterviewCopilot/AvatarCards';
import Footer from './Footer';


const Home = () => {
  return (
    <div className="home-container">
      <Main />
      {/* <VideoBanner/> */}
      <CompanyCarousel />
      <StepCard />
      
      <CoursesPage />
      
      <AvatarCards />
      <Categories />
      <InterviewComparison />
      <WhyChoose />
      <ServicesUI />
      <FeedbackCarousel />
      <FAQ />
      <Footer/>


    </div>
  );
};

export default Home;