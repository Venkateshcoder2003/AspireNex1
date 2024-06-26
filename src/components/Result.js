import React from 'react';
import './Result.css';

function Result({ score, total }) {
    return (
        <div className="result">
            <h3>
                Your Score: {score} / {total}
            </h3>
        </div>
    );
}

export default Result;
