import React from 'react';
import './Quizes.css';


const Quizes = ({quizTopic,startQuizes}) => {
    const {name,logo,total} = quizTopic;
    return (
        <div className='quizesContainer'>
            <img src={logo} alt="" />
            <div>
                <h3>Name: {name}</h3>
                <p>Total: {total}</p>
                <button onClick={()=>startQuizes(quizTopic)} >Quiz</button>
            </div>
        </div>
    );
};

export default Quizes;