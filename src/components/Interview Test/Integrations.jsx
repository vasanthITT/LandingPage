import React from "react";

const centerImage = "https://img.freepik.com/premium-photo/ai-generated-illustration-happy-cute-robot-friendly-cheerful-chatbot_441362-10020.jpg"; // Replace with your custom image

const skills = [
  { name: "Python", img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
  { name: "C++", img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
  { name: "Machine Learning", img: "https://cdn-icons-png.flaticon.com/512/3665/3665923.png" },
  { name: "Cloud Computing", img: "https://cdn-icons-png.flaticon.com/512/2203/2203126.png" },
  { name: "AI", img: "https://cdn-icons-png.flaticon.com/512/4149/4149690.png" },
  { name: "Web Dev", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { name: "Cybersecurity", img: "https://cdn-icons-png.flaticon.com/512/4974/4974966.png" },
  { name: "DevOps", img: "https://cdn-icons-png.flaticon.com/512/919/919853.png" },
  { name: "Data Science", img: "https://cdn-icons-png.flaticon.com/512/10066/10066377.png" },
  { name: "Blockchain", img: "https://cdn-icons-png.flaticon.com/512/2721/2721078.png" },
  { name: "Big Data", img: "https://cdn-icons-png.flaticon.com/512/4248/4248177.png" },
  { name: "IoT", img: "https://cdn-icons-png.flaticon.com/512/2630/2630764.png" },
  { name: "AR/VR", img: "https://cdn-icons-png.flaticon.com/512/3400/3400992.png" },
  { name: "Software Engineering", img: "https://cdn-icons-png.flaticon.com/512/906/906324.png" },
  { name: "Database Management", img: "https://cdn-icons-png.flaticon.com/512/2985/2985150.png" },
  { name: "Networking", img: "https://cdn-icons-png.flaticon.com/512/906/906317.png" },
  { name: "Robotics", img: "https://cdn-icons-png.flaticon.com/512/3142/3142128.png" },
  { name: "Cloud Security", img: "https://cdn-icons-png.flaticon.com/512/4359/4359763.png" },
  { name: "Full Stack", img: "https://cdn-icons-png.flaticon.com/512/4202/4202836.png" },
  { name: "Ethical Hacking", img: "https://cdn-icons-png.flaticon.com/512/10786/10786495.png" }
];

const Integrations = () => {
  return (
    <section
      className="bg-[#0F0F18] min-h-screen flex items-center justify-center px-6 lg:px-24 py-16 font-sans"
      style={{
        background: "url('https://demo.casethemes.net/aimo/wp-content/uploads/2024/10/bg-h1-ss2.webp') no-repeat center center/cover",
      }}
    >
      <div className="max-w-7xl w-full text-center">
        {/* Heading */}
        <p className="text-orange-400 text-sm uppercase tracking-wide mb-2">
          Skills & Expertise
        </p>
        <h2 className="text-5xl font-bold text-white mb-4">
          Mastering Skill <br/><br/> with <span className="text-blue-400">Interview Test</span>
        </h2>

        {/* Massive Grid Container */}
        <div className="grid grid-cols-9 gap-6 max-w-[1000px] mx-auto p-8 rounded-lg">
          {[
            skills[0],  null,  skills[1],   null,  skills[2],   null,  skills[3],   null,  skills[4],  
            null,  skills[5],   null,  null,  null,  null,  skills[6],   null,  skills[7],  
            skills[8],   null,  null,  skills[9],   null,  skills[10],  null,  null,  skills[11],  
            null,  null,  null,  null,  null,  null,  null,  null,  null,  
            skills[12],  null,  skills[13],  null,  "CENTER",  null,  skills[14],  null,  skills[15],  
            null,  null,  null,  null,  null,  null,  null,  null,  null,  
            skills[16],  null,  null,  skills[17],  null,  skills[18],  null,  null,  skills[19],  
            null,  skills[20],  null,  null,  null,  null,  skills[0],   null,  skills[1],  
            skills[2],   null,  skills[3],   null,  skills[4],   null,  skills[5],   null,  skills[6],  
          ].map((skill, index) => (
            <div
              key={index}
              className={`flex items-center justify-center ${
                skill === "CENTER"
                  ? "w-40 h-40 bg-white rounded-full shadow-2xl border-4 border-gray-800"
                  : skill
                  ? "w-20 h-20 bg-[#181828] p-3 rounded-lg border border-lime-400 shadow-lg hover:shadow-lime-500 transition-all"
                  : "opacity-0" // Invisible empty spaces
              }`}
            >
              {skill === "CENTER" ? (
                <img src={centerImage} alt="Center Icon" className="w-38 h-38 object-contain rounded-full" />
              ) : skill ? (
                <img src={skill.img} alt={skill.name} className="w-full h-full object-contain" />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
