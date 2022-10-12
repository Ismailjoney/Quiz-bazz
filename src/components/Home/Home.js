import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';
import  './Home.css';
import logo from  './logo.jpg'; 
 
const Home = () => {
    const quizes = useLoaderData();
    const topics = quizes.data;
     
     
    return (
        <div className='main-container'>
            <div className="cover">
                <div className="cover-img">
                    <img src={logo}  alt=""  className='h-56' w-full/>
                </div>
                <div className="cover-description">
                    <p>Hey you can paly quiz this weBsite. if you ready ? you can play now and grow your knowladge</p>
                </div>
            </div>
       
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