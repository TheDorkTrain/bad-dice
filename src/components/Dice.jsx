import React from 'react';
import happyDice from '../assets/images/happydice.png';
import sadDice from '../assets/images/saddice.png';
import angryDice from '../assets/images/angrydice.png';
import blushDice from '../assets/images/blushdice.png';

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
