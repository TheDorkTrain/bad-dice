import React from 'react';
import Response from './Response';

function Scenario ({ scenario, onRespond }) {
    if(!scenario.ending) {
        return (
            <div style={{backgroundColor: 'black', height:'100%'}}>
               <div style={{backgroundColor: 'grey', display: 'flex', gap:'4rem'}}>
                <h2 style={{marginLeft: '.5rem'}}>Bad Dice |</h2>
                <h2>{scenario.text}</h2>
               </div>
                <div>
                {scenario.responses.map((response, index)=> (
                        <Response 
                            key={index} 
                            response={response} 
                            onRespond={() => onRespond(response.emotion, response.nextScenario)} 
                        />
                    ))}
                </div>
            </div>
        );
    }
    else{
        return(
            <div style={{backgroundColor: 'black', height:'30%', marginTop: '2rem', display: 'flex', alignItems: 'center',}}>
                  <h2>{scenario.text}</h2>
                </div>
        )
    }
}

export default Scenario;