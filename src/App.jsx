import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProfilePage from './pages/ProfilePage';
import ExamSetPage from './pages/ExamSetPage';
import ExamInfoPage from './pages/ExamInfoPage';
import ExamTakingPage from './pages/ExamTakingPage';
import { supabase } from './lib/supabase';
import './App.css';

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return (
      <div className="protected-message-container">
        <div className="protected-message-card">
          <div className="lock-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h2>Yêu cầu đăng nhập</h2>
          <p>Bạn cần đăng nhập bằng tài khoản Google để truy cập vào nội dung đề thi và bắt đầu ôn luyện.</p>
          <button className="auth-btn login-large" onClick={() => document.querySelector('.auth-btn.login')?.click()}>
            Đăng nhập ngay
          </button>
        </div>
      </div>
    );
  }
  return children;
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <div className="app">
        <Header user={user} />
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route
            path="/exam-set/:setId"
            element={<ProtectedRoute user={user}><ExamSetPage /></ProtectedRoute>}
          />
          <Route
            path="/exam-set/:setId/exam/:examId"
            element={<ProtectedRoute user={user}><ExamInfoPage /></ProtectedRoute>}
          />
          <Route
            path="/exam-set/:setId/exam/:examId/take"
            element={<ProtectedRoute user={user}><ExamTakingPage /></ProtectedRoute>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
