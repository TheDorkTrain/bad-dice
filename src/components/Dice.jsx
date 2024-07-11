import React from 'react';
import happyDice from '../assets/images/happyDice.png';
import sadDice from '../assets/images/sadDice.png';
import angryDice from '../assets/images/angryDice.png';
import blushDice from '../assets/images/blushDice.png';

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
