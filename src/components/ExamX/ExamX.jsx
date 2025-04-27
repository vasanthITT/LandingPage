import React from "react";
import Hero from "./Hero";
import ExamCards from "./ExamCards";
import Stats from "./Stats";
import WorkflowProcess from "./WorkflowProcess";
import WhyChoose from "./WhyChoose";
import Features from "./Features";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import PricingSection from "./PricingSection";
import FAQ from "./FAQ";
import Footer from "./Footer";

const ExamX = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ExamCards />
      <Stats />
      <WorkflowProcess />
      <WhyChoose />
      <Features />
      <Testimonials />
      {/* <CTA /> */}
      <PricingSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default ExamX;