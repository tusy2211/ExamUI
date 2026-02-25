import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AnswerSheet from '../components/AnswerSheet';
import { getExamSet, getExam, getTotalQuestions } from '../data/api';
import './ExamTakingPage.css';

const ExamTakingPage = () => {
    const { setId, examId } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({ examSet: null, exam: null });
    const [loading, setLoading] = useState(true);

    const [answers, setAnswers] = useState({});
    const [currentSection, setCurrentSection] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const timerRef = useRef(null);

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

    useEffect(() => {
        if (!data.exam || submitted || loading) return;

        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerRef.current);
    }, [exam, submitted]);

    if (loading) {
        return <div className="loading-screen">Đang tải bài thi...</div>;
    }

    const { examSet, exam } = data;

    if (!examSet || !exam) {
        return <div className="not-found">Không tìm thấy đề thi</div>;
    }

    const totalQuestions = getTotalQuestions(exam);
    const sections = exam.sections;
    const currentSectionData = sections[currentSection];

    const handleAnswerSelect = (questionId, option) => {
        if (submitted) return;
        setAnswers((prev) => ({
            ...prev,
            [questionId]: option,
        }));
    };

    const handleSubmit = () => {
        if (submitted) return;
        clearInterval(timerRef.current);
        setSubmitted(true);

        // Calculate score
        let correct = 0;
        let total = 0;
        sections.forEach((section) => {
            section.questions.forEach((q) => {
                total++;
                if (answers[q.id] === q.correctAnswer) {
                    correct++;
                }
            });
        });

        alert(`Bạn đã hoàn thành bài thi!\n\nKết quả: ${correct}/${total} câu đúng (${Math.round((correct / total) * 100)}%)`);
    };

    const handleSectionChange = (idx) => {
        setCurrentSection(idx);
    };

    // Calculate question number offset for current section
    let questionOffset = 0;
    for (let i = 0; i < currentSection; i++) {
        questionOffset += sections[i].questions.length;
    }

    return (
        <div className="exam-taking-layout">
            <Sidebar examSet={examSet} />
            <main className="exam-taking-main">
                <div className="exam-taking-content">
                    <h1 className="exam-taking-title">{exam.title}</h1>
                    <h2 className="section-name">{currentSectionData.title}</h2>

                    <div className="questions-list">
                        {currentSectionData.questions.map((question, idx) => {
                            const questionNum = questionOffset + idx + 1;
                            return (
                                <div key={question.id} className="question-item">
                                    <div className="question-text">
                                        <span className="question-number">{questionNum}.</span>{' '}
                                        {question.content.split('\n').map((line, i) => (
                                            <React.Fragment key={i}>
                                                {i > 0 && <br />}
                                                {i === 0 ? (
                                                    <span dangerouslySetInnerHTML={{ __html: line }} />
                                                ) : (
                                                    <span className="question-indent" dangerouslySetInnerHTML={{ __html: line }} />
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    {question.image && (
                                        <img
                                            src={question.image}
                                            alt="Hình minh họa"
                                            className="question-image"
                                        />
                                    )}
                                    <div className="options-list">
                                        {question.options.map((opt) => (
                                            <label
                                                key={opt.key}
                                                className={`option-item ${answers[question.id] === opt.key ? 'selected' : ''
                                                    } ${submitted && opt.key === question.correctAnswer ? 'correct' : ''
                                                    } ${submitted && answers[question.id] === opt.key && opt.key !== question.correctAnswer ? 'incorrect' : ''
                                                    }`}
                                                onClick={() => handleAnswerSelect(question.id, opt.key)}
                                            >
                                                <span className="option-key">{opt.key}</span>
                                                <span className="option-value" dangerouslySetInnerHTML={{ __html: opt.value }} />
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <AnswerSheet
                questions={currentSectionData.questions}
                answers={answers}
                onAnswerSelect={handleAnswerSelect}
                currentSection={currentSection}
                sections={sections}
                onSectionChange={handleSectionChange}
                onSubmit={handleSubmit}
                timeLeft={timeLeft}
                totalQuestions={totalQuestions}
                submitted={submitted}
            />
        </div>
    );
};

export default ExamTakingPage;
