import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signInWithGoogle, signOut } from '../lib/auth';
import './Header.css';

const Header = ({ user }) => {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="header-logo">
                    <div className="logo-icon">
                        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                            <path d="M20 2L4 12V28L20 38L36 28V12L20 2Z" stroke="#1a237e" strokeWidth="2" fill="none" />
                            <path d="M20 2L20 38" stroke="#1a237e" strokeWidth="2" />
                            <path d="M4 12L36 28" stroke="#1a237e" strokeWidth="1.5" />
                            <path d="M36 12L4 28" stroke="#1a237e" strokeWidth="1.5" />
                        </svg>
                    </div>
                    <div className="logo-text">
                        <span className="logo-subtitle">TRƯỜNG THCS & THPT</span>
                        <span className="logo-title">LƯƠNG THẾ VINH</span>
                    </div>
                </Link>

                <nav className="header-nav">
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Chương trình ôn luyện
                    </Link>
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/my-exams' ? 'active' : ''}`}
                    >
                        Bộ đề của tôi
                    </Link>

                    {user ? (
                        <div className="user-profile">
                            <div className="header-avatar">
                                {user.user_metadata?.avatar_url ? (
                                    <img src={user.user_metadata.avatar_url} alt="Avatar" className="avatar-img" />
                                ) : (
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <circle cx="14" cy="14" r="13" stroke="#9e9e9e" strokeWidth="1.5" fill="#e0e0e0" />
                                        <circle cx="14" cy="11" r="4" fill="#9e9e9e" />
                                        <path d="M6 24C6 20 9 17 14 17C19 17 22 20 22 24" stroke="#9e9e9e" strokeWidth="1.5" fill="none" />
                                    </svg>
                                )}
                            </div>
                            <button className="auth-btn logout" onClick={signOut}>Đăng xuất</button>
                        </div>
                    ) : (
                        <button className="auth-btn login" onClick={signInWithGoogle}>
                            Đăng nhập với Google
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
