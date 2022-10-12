import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer ,Area} from 'recharts';
import './Topic.css';

const Topic = () => {
    const data = useLoaderData();
    const total = data.data;
       
       
    return (
        <div>
          <h1 className='text-2xl mt-4 mb-5 font-bold'>Chart value : {total.length}</h1>
            <div className='rechart'>
               
                <LineChart width={500} height={350} data={total}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    
                    <XAxis dataKey="name" />
                    <YAxis/>
                    <Tooltip></Tooltip>
                </LineChart>
            
            </div>
        </div>
    );
};

export default Topic;