import React, { useState } from 'react';
import './QuizCreator.css';

function QuizCreator({ addQuiz }) {
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([]);
    const [questionText, setQuestionText] = useState('');
    const [choices, setChoices] = useState(['', '', '', '']);
    const [correctAnswer, setCorrectAnswer] = useState('');

    const handleAddQuestion = () => {
        const newQuestion = {
            questionText,
            choices,
            correctAnswer,
        };
        setQuestions([...questions, newQuestion]);
        setQuestionText('');
        setChoices(['', '', '', '']);
        setCorrectAnswer('');
    };

    const handleCreateQuiz = () => {
        const newQuiz = {
            title,
            questions,
        };
        addQuiz(newQuiz);
        setTitle('');
        setQuestions([]);
    };

    return (
        <div className="quiz-creator">
            <h2>Create a Quiz</h2>
            <input
                type="text"
                placeholder="Quiz Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <div>
                <input
                    type="text"
                    placeholder="Question"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                />
                {choices.map((choice, index) => (
                    <input
                        key={index}
                        type="text"
                        placeholder={`Choice ${index + 1}`}
                        value={choice}
                        onChange={(e) => {
                            const newChoices = [...choices];
                            newChoices[index] = e.target.value;
                            setChoices(newChoices);
                        }}
                    />
                ))}
                <input
                    type="text"
                    placeholder="Correct Answer"
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                />
                <button className="btn1" onClick={handleAddQuestion}>Add Question</button>
            </div>
            <button className="btn2" conClick={handleCreateQuiz}>Create Quiz</button>
        </div>
    );
}

export default QuizCreator;
