import React from 'react';
const happyDice = new URL('../assets/images/happyDice.png', import.meta.url).href
const sadDice = new URL('../assets/images/sadDice.png', import.meta.url).href
const angryDice = new URL('../assets/images/angryDice.png', import.meta.url).href
const blushDice = new URL('../assets/images/blushDice.png', import.meta.url).href

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
