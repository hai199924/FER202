import React, { useState } from 'react';

// Dữ liệu câu hỏi
export const quizData = [
    {
        question: 'What is ReactJS?',
        answers: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
        correctAnswer: 'A JavaScript library for building user interfaces'
    },
    {
        question: 'What is JSX?',
        answers: ['A programming language', 'A file format', 'A syntax extension for JavaScript'],
        correctAnswer: 'A syntax extension for JavaScript'
    },
    {
        question: 'What is a component in React?',
        answers: ['A function or class that returns UI', 'A database', 'A CSS file'],
        correctAnswer: 'A function or class that returns UI'
    }
];

const Quiz = () => {
    // Quản lý trạng thái
    const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(''));
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Xử lý câu trả lời của người dùng
    const handleUserInput = (event) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestion] = event.target.value;
        setUserAnswers(updatedAnswers);
    };

    // Chuyển đến câu hỏi tiếp theo
    const handleNext = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    // Tính điểm
    const calculateScore = () => {
        return userAnswers.filter((answer, index) => answer === quizData[index].correctAnswer).length;
    };

    // Nộp bài
    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    return (
        <div>
            <h2>React Quiz</h2>

            {!isSubmitted ? (
                <div>
                    <h3>{quizData[currentQuestion].question}</h3>
                    <ul>
                        {quizData[currentQuestion].answers.map((answer, index) => (
                            <li key={index}>
                                <label>
                                    <input
                                        type="radio"
                                        name={`question-${currentQuestion}`}
                                        value={answer}
                                        onChange={handleUserInput}
                                        checked={userAnswers[currentQuestion] === answer}
                                    />
                                    {answer}
                                </label>
                            </li>
                        ))}
                    </ul>

                    {currentQuestion < quizData.length - 1 ? (
                        <button onClick={handleNext} disabled={!userAnswers[currentQuestion]}>
                            Next
                        </button>
                    ) : (
                        <button onClick={handleSubmit} disabled={!userAnswers[currentQuestion]}>
                            Submit
                        </button>
                    )}
                </div>
            ) : (
                <div>
                    <h3>Result:</h3>
                    <p>Your score: {calculateScore()} / {quizData.length}</p>
                </div>
            )}
        </div>
    );
};

export default Quiz;
