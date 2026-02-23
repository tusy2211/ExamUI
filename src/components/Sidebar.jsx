import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ examSet }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { examId } = useParams();
    const location = useLocation();

    if (!examSet) return null;

    const filteredExams = examSet.exams.filter((exam) =>
        exam.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const completedCount = examSet.exams.filter((e) => e.completed).length;
    const totalCount = examSet.exams.length;
    const progressPercent = Math.round((completedCount / totalCount) * 100);

    return (
        <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <button className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d={collapsed ? 'M8 4L14 10L8 16' : 'M12 4L6 10L12 16'}
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {!collapsed && (
                <div className="sidebar-content">
                    <div className="sidebar-header">
                        <h3 className="sidebar-title">{examSet.title}</h3>
                        <div className="sidebar-progress">
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
                            <span className="progress-text">{progressPercent}% hoàn thành</span>
                        </div>
                    </div>

                    <div className="sidebar-search">
                        <input
                            type="text"
                            placeholder="Tìm kiếm đề thi"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <div className="sidebar-exams">
                        <div className="exams-group">
                            <div className="exams-group-header">
                                <span>BỘ ĐỀ MINH HỌA</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M4 6L8 10L12 6" stroke="#666" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <ul className="exams-list">
                                {filteredExams.map((exam) => {
                                    const isActive = examId === exam.id;
                                    return (
                                        <li key={exam.id} className={`exam-item ${isActive ? 'active' : ''}`}>
                                            <Link
                                                to={`/exam-set/${examSet.id}/exam/${exam.id}`}
                                                className="exam-link"
                                            >
                                                <span className={`exam-status ${exam.completed ? 'completed' : ''}`}>
                                                    {exam.completed ? (
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <circle cx="9" cy="9" r="8" fill="#1976d2" />
                                                            <path d="M5 9L8 12L13 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    ) : (
                                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <circle cx="9" cy="9" r="8" stroke="#ccc" strokeWidth="1.5" fill="none" />
                                                        </svg>
                                                    )}
                                                </span>
                                                <span className="exam-name">{exam.title}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </aside>
    );
};

export default Sidebar;
