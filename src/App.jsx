import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProfilePage from './pages/ProfilePage';
import ExamSetPage from './pages/ExamSetPage';
import ExamInfoPage from './pages/ExamInfoPage';
import ExamTakingPage from './pages/ExamTakingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/exam-set/:setId" element={<ExamSetPage />} />
          <Route path="/exam-set/:setId/exam/:examId" element={<ExamInfoPage />} />
          <Route path="/exam-set/:setId/exam/:examId/take" element={<ExamTakingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
