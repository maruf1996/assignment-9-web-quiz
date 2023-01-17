import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const topicsData=useLoaderData();
    const topics=topicsData.data;
    
    return (
        <div className='container'>
            <div className="text-center welcome_text">
                <h4 className='text-center my-4 design'>Are You Ready??</h4>
                <h1>Let's Start Web Quiz!</h1>
            </div>

            <div className="topics_container">
                {
                topics.map(topic=><Topic
                key={topic.id}
                topic={topic}
                ></Topic>) 
                }
            </div>
        </div>
    );
};

export default Topics;