import React from 'react';
import { Link } from 'react-router-dom';
import { examSets } from '../data/examData';
import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <div className="profile-page">
            <div className="profile-header">
                <div className="profile-avatar">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <circle cx="40" cy="40" r="39" stroke="#ccc" strokeWidth="1.5" fill="#e8e8e8" />
                        <circle cx="40" cy="32" r="12" fill="#bbb" />
                        <path d="M16 68C16 56 24 48 40 48C56 48 64 56 64 68" stroke="#bbb" strokeWidth="2" fill="none" />
                    </svg>
                </div>
                <h1 className="profile-title">Hồ sơ ôn luyện</h1>
            </div>

            <div className="profile-content">
                <div className="tab-bar">
                    <button className="tab-btn active">Bộ đề</button>
                </div>

                <div className="exam-sets-grid">
                    {examSets.map((set) => (
                        <div key={set.id} className="exam-set-card">
                            <div className="card-image">
                                <img
                                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop"
                                    alt={set.title}
                                />
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">{set.title}</h3>
                                <div className="card-progress">
                                    <span className="progress-label" style={{ color: '#4caf50' }}>
                                        {set.progress} %
                                    </span>
                                    <div className="progress-bar-small">
                                        <div
                                            className="progress-fill-small"
                                            style={{ width: `${set.progress}%` }}
                                        />
                                    </div>
                                </div>
                                <Link to={`/exam-set/${set.id}`} className="card-btn">
                                    Xem chi tiết
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="explore-more">
                    <a href="#" className="explore-link">
                        Khám phá thêm những bộ đề khác
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
