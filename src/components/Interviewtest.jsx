import React from 'react';
// Ensure this CSS file is in the same directory
import JobInterviewUI from './Interview Test/JobInterviewUI';
import Roadmap from './Interview Test/Roadmap';
import Vision from './Interview Test/Vision';
import SelectCompany from './Interview Test/SelectCompany';
import Integrations from './Interview Test/Integrations';
import FeaturesIntro from './Interview Test/FeaturesIntro';
import TestIntro from './Interview Test/TestIntro';
import CompaniesGrid from './Interview Test/CompaniesGrid';
import IndustryGrid from './Interview Test/IndustryGrid';
import OurBenefits from './Interview Test/OurBenefits';
import Testimonial from './Interview Test/TestimonialCarousel';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home-container">
        <TestIntro/>
        <FeaturesIntro/>
        <Roadmap />
        <Vision />
        <SelectCompany />
        <OurBenefits/>
        <IndustryGrid/>
        <CompaniesGrid/> 
        <Integrations/>
        <Testimonial/>
        <Footer/>

      


    </div>
  );
};

export default Home;