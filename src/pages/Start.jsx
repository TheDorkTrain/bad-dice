import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import GameTitle from '../assets/images/gametitle1.png'

const Start = () => {

    const [result, setResult] = useState(null);
    const [previousRoll, setPreviousRoll] = useState(null);
    const [badLuck, setBadLuck] = useState(false);

    const rollDice = () => {
        const newRoll = Math.floor(Math.random() * 20) + 1;
        setResult(newRoll);
        setPreviousRoll(result);
      };

      useEffect(() => {
        if (result === 1 && previousRoll === 1) {
          setBadLuck(true);
          <Link to="/Game"/>
        } else {
          setBadLuck(false);
        }
      }, [result, previousRoll]);
    


    return (
<>
<figure><img src={GameTitle} style={{height: '10rem', width: '40rem'}}></img></figure>
<button style={{color: 'black'}}> <Link to="/Game">START</Link></button>
{/* <button onClick={rollDice}>Roll D20</button> */}
{result && (
        <div
        style={{
            width: '100px',
            height: '115px',
            backgroundColor: badLuck ? '#ff6b6b' : 'black',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '20px auto',
          }}
        >
          {result} </div>)}
</>
    );
}

export default Start;