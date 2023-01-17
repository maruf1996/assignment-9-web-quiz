import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RadioButton from '../RadioButton/RadioButton';
import './Quiz.css';

const Quiz = ({quiz}) => {
    const {question,options,id,correctAnswer}=quiz;

    const handleAnswerBtn=answer=>{
      if(answer===correctAnswer){
        toast('Correct Answer');
      }
      else{
        toast('Wrong Answer');
      }
    }

    const handleCorrectAnswerBtn=id=>{
      toast('QA: '+correctAnswer);
    }
    
    return (
        <Card className='card_header shadow-lg'>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className=''>Quiz: {question}</Card.Title>
                <button onClick={()=>handleCorrectAnswerBtn(id)} className='icon'><FontAwesomeIcon icon={faEye} /></button>
              </div>
              <Card.Text>
                <ToastContainer />
                {
                    options.map((option,idx)=><RadioButton
                    key={idx}
                    option={option}
                    handleAnswerBtn={handleAnswerBtn}
                    ></RadioButton>)
                }
              </Card.Text>
            </Card.Body>
          </Card>
    );
};

export default Quiz;