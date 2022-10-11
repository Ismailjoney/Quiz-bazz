import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
import  './Home.css';
 

const Home = () => {
    const quizes = useLoaderData();
    const topics = quizes.data;
     
     
    return (
        <div className='main-container'>
            <h1>DATA:{topics.length } akta image r akta header thakbe</h1>
       
            <div className='container'>
                {
                    topics.map(quizTopic => <Quizes
                    key={quizTopic.id}
                    quizTopic={quizTopic}
                    ></Quizes>)
                }
            </div>
        </div>
    );
};

export default Home;