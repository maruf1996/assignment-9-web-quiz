import React from 'react';
import './RadioButton.css';

const RadioButton = ({option,handleAnswerBtn}) => {
    return (
        <div className='border border-2 p-2 my-2 rounded addHover'>
            <div class="form-check">
            <input onClick={()=>handleAnswerBtn(option)} class="form-check-input" type="radio" name="flexRadioDefault"/>
            <span class="form-check-label" for="flexRadioDefault">
                {option}
            </span>
            </div>
        </div>
    );
};

export default RadioButton;