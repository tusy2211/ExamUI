import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { getExamSet, getExam, getTotalQuestions } from '../data/api';
import './ExamInfoPage.css';

const ExamInfoPage = () => {
    const { setId, examId } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({ examSet: null, exam: null });
    const [loading, setLoading] = useState(true);
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const set = await getExamSet(setId);
            const ex = await getExam(setId, examId);
            setData({ examSet: set, exam: ex });
            if (ex) setTimeLeft(ex.duration * 60);
            setLoading(false);
        };
        fetchData();
    }, [setId, examId]);

    if (loading) {
        return <div className="loading-screen">Đang tải thông tin đề thi...</div>;
    }

    const { examSet, exam } = data;

    if (!examSet || !exam) {
        return <div className="not-found">Không tìm thấy đề thi</div>;
    }

    const totalQuestions = getTotalQuestions(exam);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    const handleStart = () => {
        navigate(`/exam-set/${setId}/exam/${examId}/take`);
    };

    return (
        <div className="exam-info-layout">
            <Sidebar examSet={examSet} />
            <main className="exam-info-main">
                <div className="exam-info-content">
                    <h1 className="exam-info-title">{exam.title}</h1>

                    <section className="info-section">
                        <h2 className="info-section-title">Mô tả đề thi</h2>
                        <div className="info-description-box">
                            <p className="info-description">{exam.description}</p>
                        </div>
                    </section>

                    <section className="info-section">
                        <h2 className="info-section-title">Đề thi</h2>
                        <div className="exam-details-box">
                            <div className="exam-details-row">
                                <div className="exam-detail">
                                    <div className="detail-label">Thời gian</div>
                                    <div className="detail-value">{exam.duration} phút</div>
                                </div>
                                <div className="exam-detail">
                                    <div className="detail-label">Thực hiện</div>
                                    <div className="detail-value">{exam.attempts}</div>
                                </div>
                                <div className="exam-detail-action">
                                    <span className="time-remaining">
                                        Còn <span className="time-highlight">{formatTime(timeLeft)}</span> làm bài - phần 1
                                    </span>
                                    <button className="start-btn" onClick={handleStart}>
                                        Tiếp tục làm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="info-section">
                        <h2 className="info-section-title">Kết quả</h2>
                        <div className="result-box">
                            <div className="result-icon">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <rect x="12" y="8" width="36" height="44" rx="3" stroke="#ccc" strokeWidth="2" fill="none" />
                                    <path d="M20 20H40" stroke="#ddd" strokeWidth="2" />
                                    <path d="M20 28H40" stroke="#ddd" strokeWidth="2" />
                                    <path d="M20 36H35" stroke="#ddd" strokeWidth="2" />
                                    <path d="M38 30L44 36L54 22" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className="result-message">
                                Bạn chưa hoàn thành đề thi này. Vui lòng nộp bài và xem kết quả sau khi đã hoàn tất.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default ExamInfoPage;
