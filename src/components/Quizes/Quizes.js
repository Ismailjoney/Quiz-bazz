import React from 'react';
import { Link } from 'react-router-dom';
import './Quizes.css';


const Quizes = ({quizTopic}) => {
    const {name,logo,total,id} = quizTopic;
    return (
        <div className='quizesContainer'>
            <img src={logo} alt="" />
            <div>
                <h3>{name}</h3>
                <p>Total: {total}</p>
                <Link to= {`quiz/${id}`}>
                    <button>Quiz</button>
                </Link>
            </div>
        </div>
    );
};

export default Quizes;