import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useCallback } from 'react';
import GameTitle from '../assets/images/gametitle1.png'
import diceRollSound from '../assets/audio/diceroll.mp3'

import Options from '../components/OptionMenu';

const audio = new Audio(diceRollSound);

function playSound() {
  audio.play();
}

const ActivatableLink = ({ to, children, style, onClick }) => {
  const navigate = useNavigate();

  const handleAction = useCallback(() => {
    playSound();
    onClick();
    navigate(to);
  }, [navigate, to, onClick]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      handleAction();
    }
  }, [handleAction]);

  return (
    <div 
      tabIndex="0" 
      role="button" 
      onKeyDown={handleKeyDown}
      onClick={handleAction}
      style={{ ...style, cursor: 'pointer' }}
    >
      <Link to={to} style={style} onClick={(e) => e.preventDefault()}>
        {children}
      </Link>
    </div>
  );
};

const Start = () => {
  const [ secondary, setSecondary ] = useState('')
  const navigate = useNavigate();

  const handleStart = useCallback(() => {
    // You can add any additional logic here if needed
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        playSound();
        navigate('/Game');
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [navigate]);


  
    return (
<>
<Options secondary={secondary} setSecondary={setSecondary} />
<div className="startMenu">
<figure><img src={GameTitle} style={{height: '10rem', width: '40rem'}}></img></figure>
<ActivatableLink  
          onClick={handleStart}
          style={{
            fontWeight: 'bolder',
            color: 'black', 
            backgroundColor: 'transparent',  
            border: "1px solid transparent", 
            fontSize: '2rem'
          }} 
          to="/Game"
        >
          Press Enter to START
        </ActivatableLink>

</div>
</>
    );
}

export default Start;