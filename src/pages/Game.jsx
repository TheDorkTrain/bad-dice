import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import Dice from '../components/Dice'
import Response from '../components/Response'
import Scenario from '../components/Scenario'
import { scenarios } from '../data/scenarios' 

const Game = () => {

    const [currentScenario, setCurrentScenario] = useState(scenarios[0]);
    const [emotion, setEmotion] = useState('happy');  // default emotion
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);  // 1000 milliseconds = 1 second

        return () => clearTimeout(timer);  // Clean up the timer
    }, []);

    if (isLoading) {
        return (<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}><h1 style={{ color: 'black',fontSize: '10rem'}}>*dice rolls*</h1></div>);  // Or any loading indicator you prefer
    }

    const handleRespond = (selectedEmotion, nextScenarioId) => {
        setEmotion(selectedEmotion);
        const nextScenario = scenarios.find(scenario => scenario.id === nextScenarioId);
        if (nextScenario) {
            setCurrentScenario(nextScenario);
        } else {
            console.error(`Scenario with id ${nextScenarioId} not found`);
        }
    };

    return (
<> 
<div>
<Dice emotion={emotion} />
</div>

<Scenario 
                    scenario={currentScenario} 
                    onRespond={handleRespond} 
                />



</>

    );
}

export default Game;