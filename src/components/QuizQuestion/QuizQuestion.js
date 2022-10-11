import React from 'react';
import './QuizQuestion.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = ({allQuestion} ) => {
    const {question,options,id,correctAnswer} =allQuestion;
    //console.log(allQuestion)
    // console.log(options)
      
    const checkAnswer =(singleOptions) =>{
        // console.log(singleOptions.indexOf.value)
        //  const single =  singleOptions ? `${correctAnswer}` : console.log(`jhll`)
        // toast("Wow so easy!");
         if(singleOptions === `${correctAnswer}`){
            toast(`Right answer`);
         }else{
            toast(`Wrong answer`);
         }
        
    }


    return (
        <div className='questionAndOption'>
            
            <h5>questions: {question}</h5>
              

             {options.map(singleOptions =>
             
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