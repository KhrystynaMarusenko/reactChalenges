import React, { useEffect, useState } from "react";

const ScoreKeeper =  () => {
    const [score, setScore] = useState(+localStorage.getItem('score') || 0);

    useEffect(() => {
        localStorage.setItem('score', score);
    }, [score])

    return <div  className="score-wrapper">
        <p>{score}</p>
        <div>
            <button 
            className="scoreBtn plus" 
            onClick={() => setScore(prevState => prevState + 1)}>
                +
            </button>
            <button 
            className="scoreBtn minus" 
            onClick={() => setScore(prevState => prevState - 1)}>
                -
            </button>
        </div>
    </div>
}

export default ScoreKeeper;