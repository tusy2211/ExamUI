import React from 'react';
import './AnswerSheet.css';

const AnswerSheet = ({
    questions,
    answers,
    onAnswerSelect,
    currentSection,
    sections,
    onSectionChange,
    onSubmit,
    timeLeft,
    totalQuestions,
}) => {
    const answeredCount = Object.keys(answers).length;

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    // Build full question list across all sections
    let allQuestions = [];
    sections.forEach((section) => {
        section.questions.forEach((q) => {
            allQuestions.push(q);
        });
    });

    return (
        <div className="answer-sheet">
            <div className="answer-sheet-header">
                <span className="answered-count">
                    Đã trả lời: {answeredCount} / {totalQuestions}
                </span>
                <span className="timer">{formatTime(timeLeft)}</span>
            </div>

            <div className="answer-grid">
                {allQuestions.map((q, idx) => {
                    const questionNum = idx + 1;
                    return (
                        <div key={q.id} className="answer-row">
                            <span className="question-num">{questionNum}</span>
                            {['A', 'B', 'C', 'D'].map((opt) => (
                                <button
                                    key={opt}
                                    className={`answer-option ${answers[q.id] === opt ? 'selected' : ''}`}
                                    onClick={() => onAnswerSelect(q.id, opt)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    );
                })}
            </div>

            <div className="answer-sheet-footer">
                <div className="section-nav">
                    {sections.map((section, idx) => (
                        <button
                            key={section.id}
                            className={`section-btn ${currentSection === idx ? 'active' : ''}`}
                            onClick={() => onSectionChange(idx)}
                        >
                            {idx > 0 && <span className="section-arrow">›</span>}
                            {section.title}
                        </button>
                    ))}
                </div>
                <button className="submit-btn" onClick={onSubmit}>
                    Nộp bài
                </button>
            </div>
        </div>
    );
};

export default AnswerSheet;
