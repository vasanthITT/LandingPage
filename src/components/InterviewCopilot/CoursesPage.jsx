import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Added for visibility detection
import BG from "../../assets/image.png";
import "./CoursesPage.css";


const courses = [
  // Artificial Intelligence
  {
    id: 1,
    image: "https://integranxt.com/wp-content/uploads/2023/12/image-1012x675-5-1.png",
    category: "Artificial Intelligence",
    title: "Artificial Intelligence: From Basics to Advanced",
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_wL3Oh9SQ7qLIYqBO1cH94zXWMHVs3S6OQ&s",
    category: "Artificial Intelligence",
    title: "Generative AI with Deep Learning & Transformers",
  },
  {
    id: 3,
    image: "https://ellenkicet.ac.in/wp-content/uploads/2024/12/Applicazioni-AI-1-fb-EN.jpg",
    category: "Artificial Intelligence",
    title: "AI for Everyone: Understanding AI & Its Applications",
  },
  {
    id: 4,
    image: "https://images.prismic.io/turing/652ebe6bfbd9a45bcec81881_Natural_Language_Processing_Functionality_in_AI_95cadec9bc.webp?auto=format,compress",
    category: "Artificial Intelligence",
    title: "Natural Language Processing with AI",
  },
  {
    id: 21,
    image: " https://etimg.etb2bimg.com/photo/111875550.cms ",
    category: "Artificial Intelligence",
    title: "AI in Healthcare: Revolutionizing Medicine",
  },
  {
    id: 22,
    image: " https://justoborn.com/wp-content/uploads/2024/12/ai_robots_hero_image.jpeg ",
    category: "Artificial Intelligence",
    title: "AI for Robotics: Building Intelligent Robots",
  },
  {
    id: 23,
    image: "https://ena.vc/wp-content/uploads/2024/09/DALL%C2%B7E-2024-09-02-10.30.01-A-modern-digital-illustration-showcasing-the-rise-of-algorithmic-trading-powered-by-AI-in-finance.-Central-to-the-image-is-a-financial-trader-analyzin.webp",
    category: "Artificial Intelligence",
    title: "AI in Finance: Predictive Analytics & Trading",
  },
  {
    id: 24,
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPdsohXI-Zxnm0wYKNJ9ZAHuS7iFOCRFtwXQ&s ",
    category: "Artificial Intelligence",
    title: "AI Ethics: Understanding the Implications",
  },

  // Machine Learning
  {
    id: 5,
    image: "https://cdn0.knowledgecity.com/opencontent/courses/previews/L373396780/800--v112243.jpg",
    category: "Machine Learning",
    title: "Master Machine Learning with Python & TensorFlow",
  },
  {
    id: 6,
    image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/c1/16a2fa16b943038f07cd0e4064a25e/Course-logo-1.png",
    category: "Machine Learning",
    title: "Deep Learning and Neural Networks Bootcamp",
  },
  {
    id: 7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8ZuaUAGdgupOA0OFu1SN_aqB4UGheehILA&s",
    category: "Machine Learning",
    title: "AI & ML for Real-World Applications",
  },
  {
    id: 8,
    image: "https://anubrain.com/wp-content/uploads/2023/05/Black-White-Simple-Photo-How-AI-Take-Over-the-World-YouTube-Thumbnail-1.jpg",
    category: "Machine Learning",
    title: "Reinforcement Learning & AI Agents",
  },
  {
    id: 25,
    image: " https://www.seedinfotech.com/wp-content/uploads/2023/11/machine_learning.jpg ",
    category: "Machine Learning",
    title: "Machine Learning for Data Science",
  },
  {
    id: 26,
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2SDPjxBnSSbhJZ_k9-V1UcVb8RBN0RHTzSQ&s ",
    category: "Machine Learning",
    title: "Advanced Machine Learning Techniques",
  },
  {
    id: 27,
    image: " https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2018/03/Machine-Learning-with-R.png ",
    category: "Machine Learning",
    title: "Machine Learning with R",
  },
  {
    id: 28,
    image: " https://emeritus.org/wp-content/uploads/2023/05/a3-3.png ",
    category: "Machine Learning",
    title: "Machine Learning for Big Data",
  },

  // Cybersecurity
  {
    id: 9,
    image: "https://i0.wp.com/www.technologygee.com/wp-content/uploads/2024/03/ethical-hacking-tech-gee-knowledge-base-tech-gee-technology-gee.jpeg?fit=1200%2C630&ssl=1",
    category: "Cybersecurity",
    title: "Certified Ethical Hacking (CEH) Course",
  },
  {
    id: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RjxWcXnE8u88jYN-B0qbUwvAv9IV8bEKWQ&s",
    category: "Cybersecurity",
    title: "Cybersecurity & Hacking: Hands-on Practical Guide",
  },
  {
    id: 11,
    image: "https://cybersecurityforme.com/wp-content/uploads/2022/04/cybersecurity-bootcamp-for-beginners-complete-guide.jpg",
    category: "Cybersecurity",
    title: "Complete Cybersecurity Bootcamp: From Zero to Hero",
  },
  {
    id: 12,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeFCumwbA7f0W4F8Yi7o62LG7WEHhoGrYWg&s",
    category: "Cybersecurity",
    title: "Advanced Cyber Threat Intelligence & Defense",
  },
  {
    id: 29,
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtKFMm8ZYySsMn6KOa3DiWwRiSQUEna382Rw&s ",
    category: "Cybersecurity",
    title: "Network Security Fundamentals",
  },
  {
    id: 30,
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhuOEOKvvGpTBrikLHgydbUTu8BKdGMTFXg&s ",
    category: "Cybersecurity",
    title: "Penetration Testing & Vulnerability Assessment",
  },
  {
    id: 31,
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRRuEoIww4X_ipuvVYM5_medILTO3kSflxDQ&s ",
    category: "Cybersecurity",
    title: "Cybersecurity for IoT Devices",
  },
  {
    id: 32,
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxNEq15q2uJOsmSwgwCcdhSeXH73cquyC5A&s ",
    category: "Cybersecurity",
    title: "Incident Response & Digital Forensics",
  },

  // Web Development
  {
    id: 13,
    image: "https://www.cdmi.in/courses@2x/full-stack.webp",
    category: "Web Development",
    title: "Full-Stack Web Development with React & Node.js",
  },
  {
    id: 14,
    image: "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=3840&fit=max",
    category: "Web Development",
    title: "MERN Stack Web Development from Scratch",
  },
  {
    id: 15,
    image: "https://i.ytimg.com/vi/PQ5XdJzkFs4/maxresdefault.jpg",
    category: "Web Development",
    title: "Modern React Development with Hooks and Redux",
  },
  {
    id: 16,
    image: "https://miro.medium.com/v2/resize:fit:1097/0*NrWHekSMGRbMcgIw.png",
    category: "Web Development",
    title: "Frontend Web Development with HTML, CSS, & JavaScript",
  },
  {
    id: 33,
    image: " https://img-c.udemycdn.com/course/750x422/4537474_af9c_4.jpg ",
    category: "Web Development",
    title: "Advanced CSS & Sass: Flexbox, Grid, Animations",
  },
  {
    id: 34,
    image: " https://znitech.io/pwa.png ",
    category: "Web Development",
    title: "Progressive Web Apps (PWAs) Development",
  },
  {
    id: 35,
    image: " https://miro.medium.com/v2/resize:fit:1019/1*1bux_a_rU8tiC6A1sZdjIg.png ",
    category: "Web Development",
    title: "Backend Development with Node.js & Express",
  },
  {
    id: 36,
    image: " https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200504230050/7-Tips-For-Performances-Optimization-in-Web-Development.png ",
    category: "Web Development",
    title: "Web Performance Optimization",
  },

  // Cloud Computing
  {
    id: 17,
    image: "https://img-c.udemycdn.com/course/750x422/5914092_588d_2.jpg",
    category: "Cloud Computing",
    title: "AWS Solutions Architect Certification Guide",
  },
  {
    id: 18,
    image: "https://i.ytimg.com/vi/nFKpWH31pis/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBHgTibJQSv-PTJmXP9brjzfLvkaw",
    category: "Cloud Computing",
    title: "Azure Cloud Fundamentals for Beginners",
  },
  {
    id: 19,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMICY52RqJP7n0_IJzUfBeYMlri4w0epLVYQ&s",
    category: "Cloud Computing",
    title: "Cloud Security and DevOps on AWS & Azure",
  },
  {
    id: 20,
    image: "https://www.weka.io/wp-content/uploads/files/2024/03/Featured-Image_Everything-you-need-to-know-about-Google-Cloud-Platform-1.jpg",
    category: "Cloud Computing",
    title: "Google Cloud Platform (GCP) Essentials",
  },
  {
    id: 37,
    image: " https://i.ytimg.com/vi/68AHdMFbQV0/maxresdefault.jpg ",
    category: "Cloud Computing",
    title: "Kubernetes for Developers",
  },
  {
    id: 38,
    image: " https://miro.medium.com/v2/resize:fit:1400/0*PHxeVyqO6o6Jjphu.png ",
    category: "Cloud Computing",
    title: "Serverless Architecture on AWS",
  },
  {
    id: 39,
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-zdrMcJkyeMAEYEtZIfzsQs0NMsaNgU0H3w&s ",
    category: "Cloud Computing",
    title: "Multi-Cloud Strategy & Management",
  },
  {
    id: 40,
    image: " https://www.easydeploy.io/blog/wp-content/uploads/2019/09/Cloud_Migration_Best_Practices.png ",
    category: "Cloud Computing",
    title: "Cloud Migration Best Practices",
  },
  // Programming
  {
    id: 41,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/C_Programming_Language.svg",
    category: "Programming",
    title: "C Programming for Beginners",
  },
  {
    id: 42,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Python_Programming_Language.png",
    category: "Programming",
    title: "Python Programming: From Basics to Advanced",
  },
  {
    id: 43,
    image: "https://www.freecodecamp.org/news/content/images/size/w2000/2023/02/javascript-vs-python.png",
    category: "Programming",
    title: "JavaScript Mastery: ES6+ and Beyond",
  },
  {
    id: 44,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Java_logo.png/640px-Java_logo.png",
    category: "Programming",
    title: "Java Programming: Object-Oriented & Beyond",
  },
  {
    id: 49,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    category: "Programming",
    title: "Mastering C++: From Basics to Advanced",
  },
  {
    id: 50,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1200px-Ruby_logo.svg.png",
    category: "Programming",
    title: "Ruby on Rails: Web App Development",
  },
  {
    id: 51,
    image: "https://miro.medium.com/v2/resize:fit:1400/1*tDSc2X6D-DR1N4PcvnMOyg.png",
    category: "Programming",
    title: "Go Language: Build Scalable Applications",
  },
  {
    id: 52,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Swift_logo.png",
    category: "Programming",
    title: "Swift for iOS Development",
  },

  // Data Science
  {
    id: 45,
    image: "https://miro.medium.com/v2/resize:fit:1400/1*H3Gv8cJdDljX8YPoEZlN6Q.png",
    category: "Data Science",
    title: "Introduction to Data Science & Analytics",
  },
  {
    id: 46,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgCj0HKhCmAcBaSvD9dWIfp0Wq2bVZg2bQQ&s",
    category: "Data Science",
    title: "Machine Learning for Data Science",
  },
  {
    id: 47,
    image: "https://www.analytixlabs.co.in/blog/wp-content/uploads/2021/05/Big-Data-Tools.jpg",
    category: "Data Science",
    title: "Big Data & Data Engineering Fundamentals",
  },
  {
    id: 48,
    image: "https://i.ytimg.com/vi/5XFOQRvWTEU/maxresdefault.jpg",
    category: "Data Science",
    title: "Data Visualization with Python & Tableau",
  },
  {
    id: 53,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Apache_Spark_logo.svg",
    category: "Data Science",
    title: "Apache Spark & Big Data Analytics",
  },
  {
    id: 54,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Kaggle_logo.png/600px-Kaggle_logo.png",
    category: "Data Science",
    title: "Kaggle Competitions & Data Science Challenges",
  },
  {
    id: 55,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtuMGn1rMz2GorDmeEMf_cjGo5HJyGe4wqA&s",
    category: "Data Science",
    title: "Deep Learning with TensorFlow & Keras",
  },
  {
    id: 56,
    image: "https://miro.medium.com/v2/resize:fit:1400/1*jM5ZvZXzU-ym-OvG_FsO4A.png",
    category: "Data Science",
    title: "Data Science for Business Analytics",
  }
];

const categories = [
  "Artificial Intelligence",
  "Machine Learning",
  "Cybersecurity",
  "Web Development",
  "Cloud Computing",
  "Programming",
  "Data Science",
];

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2, // Delay each card by 0.2s for a staggered effect
      ease: "easeOut",
    },
  }),
};

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Artificial Intelligence");
  const [stars, setStars] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  // Starry effect setup
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
  }, []);

  return (
    <div className="courses-page" ref={ref}>
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

      {/* Heading */}
      <h1 className="courses-heading relative z-10">Courses Offered</h1>

      {/* Category Filter */}
      <div className="category-filter relative z-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? "active" : ""}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="courses-grid relative z-10">
        {courses
          .filter((course) => course.category === selectedCategory)
          .map((course, index) => (
            <motion.div
              key={course.id}
              className="course-card"
              custom={index} // Pass index for staggered delay
              initial="hidden"
              animate={inView ? "visible" : "hidden"} // Animate only when in view
              variants={cardVariants}
            >
              <img src={course.image} alt={course.title} className="course-image" />
              <div className="course-content">
                <h3 className="course-title">{course.title}</h3>
                <div className="course-buttons">
                  <a
                    href="https://interviewbot.intraintech.com/interview-practice"
                    className="start-learning-btn"
                  >
                    Start Learning
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
      </div>

      {/* Twinkle Animation */}
      <style>
        {`
          @keyframes twinkle {
            0% { opacity: 0.3; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.2); }
          }
        `}
      </style>
    </div>
  );
};

export default CoursesPage;