import React, { useState } from "react";
import "./JobUi.css";
import seInterviewer from "../../assets/se_interviewer.jpg";
import SeInterview_ans from "../../assets/se_interviewer_ans.png";
import Product from "../../assets/product_manager.png";
import Productans from "../../assets/product_manager_ans.png";
import finance from "../../assets/Data_Analyst.png";
import financeans from "../../assets/Data_Analyst_ans.png";
import data from "../../assets/Data_Scientist.png";
import dataans from "../../assets/Data_Scientist_ans.png";

const jobs = [
  { title: "Software Engineer", interviewerImg: seInterviewer, responseImg: SeInterview_ans },
  { title: "Product Manager", interviewerImg: Product, responseImg: Productans },
  { title: "Financial Analyst", interviewerImg: finance, responseImg: financeans },
  { title: "Data Scientist", interviewerImg: data, responseImg: dataans },
];

const JobInterviewUI = () => {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <div className="job-container">
      <div className="job-box">
        <h3>Select Job Title</h3>
        {jobs.map((job, index) => (
          <button
            key={index}
            className={`job-button ${selectedJob.title === job.title ? "selected" : ""}`}
            onClick={() => setSelectedJob(job)}
          >
            {job.title}
          </button>
        ))}
      </div>
      <div className="interviewer-box">
        <img
          src={selectedJob.interviewerImg}
          alt="Interviewer"
          className="interviewer-img"
        />
      </div>
      <div className="response-box">
        <img
          src={selectedJob.responseImg}
          alt="AI Response"
          className="response-img"
        />
      </div>
    </div>
  );
};

export default JobInterviewUI;