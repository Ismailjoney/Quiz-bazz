import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
import  './Home.css';

const Home = () => {
    const quizes = useLoaderData();
    const topics = quizes.data;
    //  console.log(topics)

    
    //  const startQuizes = quizTopic => {
    //     console.log(quizTopic)
    //  }
    return (
        <div>
            <h1>data :{topics.length }</h1>
            <div className='container'>
                {
                    topics.map(quizTopic => <Quizes
                    key={quizTopic.id}
                    quizTopic={quizTopic}
                    // startQuizes={startQuizes}
                    ></Quizes>)
                }
            </div>
        </div>
    );
};

export default Home;