import React from 'react';
import { BeakerIcon,EyeIcon } from '@heroicons/react/24/solid';
import './QuizQuestion.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = ({allQuestion} ) => {
    const {question,options,id,correctAnswer} =allQuestion;
 
    const checkAnswer =(singleOptions) =>{ 
         if(singleOptions === `${correctAnswer}`){
            toast(`Right answer`,{
                position :"top-center",
            });
         }else{
            toast(`Wrong answer`,{
                position : "top-center",
            });
         }    
    }
    //check r8 answer
    const correctAnswersCheck =() => {
        toast(`${correctAnswer}`)
    }

    return (
        <div className='questionAndOption'>
            <div>
                <h3>questions: {question}</h3>
                <button onClick = {correctAnswersCheck}>
                    <EyeIcon className="h-6 w-6 text-black-500"/>
                </button>
                
            </div>
 

             {
             options.map(singleOptions =>
                <button onClick={()=>checkAnswer(singleOptions)} className='singleOptions'>            
                    <input type="radio" id={id} name="fav_language" value="HTML"/>
                    <label for={id}> {singleOptions} </label>
                </button>  
                )
            }
         <ToastContainer />
        </div>
    );
};

export default QuizQuestion;