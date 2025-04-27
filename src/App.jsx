import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Price from './components/Price'; // Import Pricing component
import Footer from './components/Footer';
import JobInterviewUI from './components/Interview Test/JobInterviewUI';
import ServicesUI from './components/InterviewCopilot/ServicesUI';
import Live_Interview from './components/Live_Interview';
import Interviewtest from './components/Interviewtest';
import ExamX from './components/ExamX/ExamX';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/live-interview" element={<Live_Interview/>} />
        <Route path="/exam" element={<ExamX/> } />
        <Route path="/Interview-test" element={<Interviewtest/>}  />
      </Routes>
      
    </Router>
  );
}

export default App;
