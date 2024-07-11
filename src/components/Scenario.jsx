import React, { useState, useEffect } from 'react';
import Response from './Response';
import './scenario.css';

function Scenario ({ scenario, onRespond }) {
    const [displayText, setDisplayText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isTypingComplete, setIsTypingComplete] = useState(false);
  
    useEffect(() => {
        const words = scenario.text.split(' ');
        
        if (wordIndex < words.length) {
          const timer = setTimeout(() => {
            setDisplayText(prevText => prevText + (prevText ? ' ' : '') + words[wordIndex]);
            setWordIndex(wordIndex + 1);
          }, 100); // Adjust this value to control typing speed
    
          return () => clearTimeout(timer);
        } else {
          setIsTypingComplete(true);
        }
      }, [scenario.text, wordIndex]);

      useEffect(() => {
        // Reset animation when scenario changes
        setDisplayText('');
        setWordIndex(0);
        setIsTypingComplete(false);
      }, [scenario]);


    if(!scenario.ending) {
        return (
            <div className="notebook-page">
            <div className="header">
              <h2 className="title">Bad Dice|</h2>
              <h2 className="scenario-text">{displayText}</h2>
            </div>
            {isTypingComplete && (
              <div className="content" style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                {scenario.responses.map((response, index) => (
                  <Response 
                    key={index} 
                    response={response} 
                    onRespond={() => onRespond(response.emotion, response.nextScenario)} 
                  />
                ))}
              </div>
            )}
          </div>
        );
    }
    else{
        return(
            <div class="notebook-page" style={{height:'30%', marginTop:'10rem'}}>
                  <h2 class="scenario-text">{displayText}</h2>
                </div>
        )
    }
}

export default Scenario;