import React from 'react';
import './QuizQuestion.css';

const QuizQuestion = ({allQuestion} ) => {
    const {question,options,id} =allQuestion;
 
    // console.log(allQuestion);
    return (
        <div className='questionAndOption'>
            
            <h5>questions: {question}</h5>
               {options.map(singleOptions =>
                    <button className='singleOptions'  >
                        <ul><li>{singleOptions}</li></ul>
                    </button>  
                )
            }
        </div>
    );
};

export default QuizQuestion;