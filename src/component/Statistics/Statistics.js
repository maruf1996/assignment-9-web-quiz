import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import './Statistics.css';

const Statistics = () => {
    const topicsData=useLoaderData();
    const topics=topicsData.data;
    return (
        <div className='mt-5'>
            <h2 className='text-center mb-3'>Quiz Chart</h2>
             <div className="chartBar">
                <BarChart width={350} height={250}  data={topics}  margin={{ top: 5, right: 30,  left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={topics.total} />
                <Legend />
                <Bar dataKey="total" barSize={20} fill="#8884d8" />
                </BarChart>
             </div>
        </div>
    );
};

export default Statistics;