// src/App.js
import React, { useState } from 'react';
import QuizCreator from './components/QuizCreator';
import QuizTaker from './components/QuizTaker';
import './styles/App.css';

function App() {
  const [quizzes, setQuizzes] = useState([]);

  const addQuiz = (quiz) => {
    setQuizzes([...quizzes, quiz]);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizCreator addQuiz={addQuiz} />
      {quizzes.map((quiz, index) => (
        <QuizTaker key={index} quiz={quiz} />
      ))}
    </div>
  );
}

export default App;
