import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    const quizQuestions = quizDetails.data.questions;

    return (
        <div>
            <h2>Quiz of react</h2>
             {
             quizQuestions.map(allQuestion => <QuizQuestion
             key={allQuestion.id}
             allQuestion={allQuestion}
              
             ></QuizQuestion>)
            }
        </div>
    );
};

export default QuizDetails;