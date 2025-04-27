import React from "react";

const companies = [
  { name: "Google", img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Tesla", img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
  { name: "Meta", img: "https://votresitepro.be/wp-content/uploads/2023/11/Abonnement-Meta.jpg" },
  { name: "Netflix", img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg" },
  { name: "Apple", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "IBM", img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Adobe", img: "https://www.adobe.com/content/dam/cc/us/en/products/Adobe-social-share-image.jpg" },
  { name: "Intel", img: "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/03/intel-hero-image-3.jpg" },
  { name: "Oracle", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
  { name: "Salesforce", img: "https://www.sdxcentral.com/wp-content/uploads/2023/09/salesforce_red-hat_mashup_1200x600_091523.jpg" },
];

const Card = ({ name, img }) => {
  return (
    <div className="relative flex w-56 flex-col rounded-xl bg-gradient-to-br from-white to-gray-100 bg-clip-border text-gray-700 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 m-3">
      <div className="relative mx-auto -mt-8 h-24 w-24 overflow-hidden rounded-xl bg-white shadow-lg transform transition-all duration-300 hover:scale-105">
        <img src={img} alt={name} className="w-full h-full object-contain p-2" />
      </div>
      <div className="p-4 text-center">
        <h5 className="text-lg font-semibold text-gray-900">{name}</h5>
      </div>
      <div className="p-4 pt-0">
        <a href="https://interviewbot.intraintech.com/ai-interview-test" className="w-full">
          <button className="w-full px-4 py-2 font-bold text-white rounded-lg bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            Attend Interview
          </button>
        </a>
      </div>
    </div>
  );
};

const CompaniesGrid = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-10 font-sans"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #e6e0f8)"
      }}
      
    >
      <h2 className="text-5xl font-extrabold text-black drop-shadow-lg mb-4">
      Top Companies to Interview With!
    </h2>

      <p className="text-lg text-gray-900 mb-10 font-semibold text-center max-w-2xl px-4 py-2">
        Ace your dream company interview with <span className="text-blue-700 font-bold">AI-powered mock interviews.</span> Get started now! 🎯
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {companies.map((company, index) => (
          <Card key={index} name={company.name} img={company.img} />
        ))}
      </div>
    </div>
  );
};

export default CompaniesGrid;