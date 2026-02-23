import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { getExamSet } from '../data/examData';
import './ExamSetPage.css';

const ExamSetPage = () => {
    const { setId } = useParams();
    const examSet = getExamSet(setId);

    if (!examSet) {
        return <div className="not-found">Không tìm thấy bộ đề</div>;
    }

    const completedCount = examSet.exams.filter((e) => e.completed).length;
    const totalCount = examSet.exams.length;
    const progressPercent = Math.round((completedCount / totalCount) * 100);

    return (
        <div className="exam-set-layout">
            <Sidebar examSet={examSet} />
            <main className="exam-set-main">
                <div className="exam-set-content">
                    <h1 className="section-title">Tiến độ ôn luyện</h1>
                    <p className="last-access">
                        Tương tác ôn luyện lần cuối lúc: {examSet.lastAccessTime}
                    </p>

                    <div className="stats-row">
                        <div className="stat-card">
                            <div className="stat-label">Đề thi đã làm</div>
                            <div className="stat-value">{completedCount}/{totalCount}</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-label">Tiến độ hoàn thành</div>
                            <div className="stat-value">{progressPercent}%</div>
                        </div>
                    </div>

                    <div className="exams-section">
                        <h2 className="exams-title">Đề thi</h2>
                        <table className="exams-table">
                            <thead>
                                <tr>
                                    <th>Tên đề thi</th>
                                    <th>Thời gian hoàn thành</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {examSet.exams.map((exam) => (
                                    <tr key={exam.id}>
                                        <td className="exam-name-cell">{exam.title}</td>
                                        <td className="exam-time-cell">
                                            {exam.completed ? exam.completedAt : '—'}
                                        </td>
                                        <td className="exam-action-cell">
                                            <Link
                                                to={`/exam-set/${setId}/exam/${exam.id}`}
                                                className="action-link"
                                            >
                                                Xem lại
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ExamSetPage;
