import React from "react";

const OurBenefits = () => {
  return (
    <section className="relative text-black py-16 px-6 bg-white overflow-hidden">
      {/* Background Image Above White Section */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover z-10 opacity-30"
        style={{
          backgroundImage:
            "url('https://demo.casethemes.net/aimo/wp-content/uploads/2024/09/bg-team-h2.webp')",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center z-20 p-8 rounded-lg">
        {/* Left Side Content */}
        <div>
          <h4 className="text-blue-500 uppercase text-sm tracking-wide mb-2">
            Why Choose Us?
          </h4>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Elevate Your Potential with <br />
            <span className="text-blue-600">Cutting-Edge Intelligence.</span>
          </h2>
          <p className="text-gray-700 mb-6">
            We offer advanced AI-driven solutions tailored to optimize your
            business performance and personal efficiency. Experience the future
            of automation and intelligence today.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BenefitCard
              number="01."
              title="Experienced Team"
              description="Our experts bring years of experience in AI and automation, ensuring high-quality solutions."
            />
            <BenefitCard
              number="02."
              title="Top-Notch Quality"
              description="We prioritize excellence in every project, delivering reliable and efficient services."
            />
            <BenefitCard
              number="03."
              title="Seamless Automations"
              description="Streamline your workflows with intelligent automation designed for maximum productivity."
            />
            <BenefitCard
              number="04."
              title="24/7 Premium Support"
              description="Our dedicated support team is available round the clock to assist with your needs."
            />
          </div>
        </div>

        {/* Right Side - Robot Image Positioned Above */}
        <div className="flex justify-center">
          <img
            src="https://askproject.net/legion/wp-content/uploads/sites/162/2023/11/Robot_Brano_lookPalm3_adobe_005-1024x519.png"
            alt="AI Robot"
            className="w-[500px] md:w-[700px] lg:w-[800px]"
          />
        </div>
      </div>
    </section>
  );
};

// Benefit Box Component
const BenefitCard = ({ number, title, description }) => {
  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
      <h3 className="text-blue-500 text-xl font-semibold">
        {number} {title}
      </h3>
      <p className="text-gray-700 text-sm mt-2">{description}</p>
    </div>
  );
};

export default OurBenefits;
