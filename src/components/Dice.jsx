import React from 'react';
import happyDice from '../assets/images/happyDice';
import sadDice from '../assets/images/sadDice';
import angryDice from '../assets/images/angryDice';
import blushDice from '../assets/images/blushDice';

const emotionImages = {
    happy: happyDice,
    sad: sadDice,
    angry: angryDice,
    blush: blushDice
};

const Dice = ({ emotion }) => {
    return (
        <div className="dice">
            <img src={emotionImages[emotion]} alt ={emotion} />
        </div>
    );
};

export default Dice;
