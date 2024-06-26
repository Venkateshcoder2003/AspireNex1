import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import './QuizTaker.css';

function QuizTaker({ quiz }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quiz.questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    return (
        <div className="quiz-taker">
            <h2>{quiz.title}</h2>
            {showResult ? (
                <Result score={score} total={quiz.questions.length} />
            ) : (
                <Question
                    question={quiz.questions[currentQuestion]}
                    handleAnswer={handleAnswer}
                />
            )}
        </div>
    );
}

export default QuizTaker;
