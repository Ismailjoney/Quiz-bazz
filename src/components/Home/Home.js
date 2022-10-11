import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
import  './Home.css';
 

const Home = () => {
    const quizes = useLoaderData();
    const topics = quizes.data;
     
     
    return (
        <div className='main-container'>

            <h1 className='text-3xl m-6 font-bold'>Hey u can paly quiz tjis weBsite if you ready you can play now</h1>
       
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