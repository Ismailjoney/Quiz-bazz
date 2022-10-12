import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    const quizQuestions = quizDetails.data.questions;
    
    return (
        <div>
             {
             quizQuestions.map(allQuestion => <QuizQuestion
             key={allQuestion.id}
             allQuestion={allQuestion}
             data={quizDetails.data}
             ></QuizQuestion>)
            }
        </div>
    );
};

export default QuizDetails;