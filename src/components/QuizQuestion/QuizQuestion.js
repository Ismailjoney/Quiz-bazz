import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import './QuizQuestion.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = ({allQuestion,data} ) => {
    const {question,options,id,correctAnswer,name} =allQuestion;
   
    const [total,setTotal] = useState(null)
 
    const checkAnswer =(singleOptions) =>{ 
        setTotal(singleOptions)
         if(singleOptions === `${correctAnswer}`){
            toast(`Right answer`,{
                position :"top-center",
            });
         }else{
            toast.warn(`!OPS.Wrong answer`,{
                position : "top-center",
                color:"red",
                
            });
         }    
    }

    //check r8 answer
    const correctAnswersCheck =() => {
        toast('Right answer is :' + ' '+ `${correctAnswer}`,{
            position : "top-center",
        })
    }



    return (
        <div>
             <h2 className='text-2xl font-extrabold'>{data.name} Quiz</h2>

             <div className='questionAndOption'>
           
            <div className='qustion-and-icon'>
                <h3>questions: {question}</h3>
                <div>
                    <button  onClick = {correctAnswersCheck}>
                    <EyeIcon className="h-6 w-6 text-black-500 mt-5 mr-2"/>
                    </button> 
                </div>
            </div>
 

             {
             options.map(singleOptions =>

                    <button onClick={()=>checkAnswer(singleOptions)} className='singleOptions'>            
            
                    <input className='ml-2 mr-2'  disabled={total} type="radio" id="index" name="fav_language" value= {singleOptions}/>
                    <label for="index"> {singleOptions} </label>
                    </button>  
                )
            }
         <ToastContainer />
        </div>
        </div>
        
    );
};

export default QuizQuestion;