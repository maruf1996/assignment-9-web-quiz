import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicQuiz = () => {
    const topicData=useLoaderData();
    const topic=topicData.data;
    const {questions}=topic;
    // console.log(topic);

    return (
        <div className=''>
            <div className="text-center mt-4">
                <h2 className='fw-bold'>Quiz of {topic.name}</h2>
            </div>
            <div className="mt-3">
                {
                    questions.map(quiz=><Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }
            </div>

        </div>
    );
};

export default TopicQuiz;