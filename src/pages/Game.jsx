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

    function completeEnding(endingId) {
        let completedEndings = JSON.parse(localStorage.getItem('completedEndings')) || [];
        if (!completedEndings.includes(endingId)) {
          completedEndings.push(endingId);
          localStorage.setItem('completedEndings', JSON.stringify(completedEndings));
        }
      }

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

    const renderEndingContent = () => {
        completeEnding(currentScenario.name)
        return (
            <div class="notebook-page" style={{height: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h2 class="title">You have reached the {currentScenario.name} ending.</h2>
                <Link to="/"><h3>Play Again</h3></Link>
            </div>
        );
    };


    return (
<> 
{!currentScenario.ending && (
                <div>
                    <Dice emotion={emotion} />
                </div>
            )}

<Scenario 
                    scenario={currentScenario} 
                    onRespond={handleRespond} 
                />

{currentScenario.ending && renderEndingContent()}

</>

    );
}

export default Game;