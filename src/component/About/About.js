import React from 'react';
import img from '../../img/Web.png';
import './About.css';

const About = () => {
    return (
       <div className="mt-5 container">
         <div className="row">
            <div className="col-12 col-md-8">
                <img className='w-100' src={img} alt="" />
            </div> 
            <div className="col-12 col-md-4 about_text">
                <h2>What is Web Quiz?</h2>
                <p>Web Quiz is a web development related quiz website. It is built with HTML CSS Bootstrap JavaScript and React. Primarily it is designed to test the skills of web development students. Currently many quizzes are created on CSS Git JavaScript and React. We will bring more new features related to web development in the future Inshallah. Dear brothers and friends please stay with us always. With your love and prayers, the web quiz will go further.</p>
            </div>
        </div>
       </div>
    );
};

export default About;