import React from 'react';
import { useLoaderData } from 'react-router-dom';
import  './Home.css';

const Home = () => {
    const quizes = useLoaderData();
    console.log(quizes)
    return (
        <div>
            <h1>data :{quizes.data.length}</h1>
        </div>
    );
};

export default Home;