import React from 'react';
import './QuizQuestion.css';

const QuizQuestion = ({allQuestion} ) => {
    const {question,options,id} =allQuestion;
    console.log(question)
    
    return (
        <div className='questionAndOption'>
             
            <h5>questions: {question}</h5>

            {
                options.map(singleOptions => 
                    // {<input type="radio">{singleOptions}</input>}
                    <ul><li>{singleOptions}</li></ul>
                )
            }

        </div>
    );
};

export default QuizQuestion;