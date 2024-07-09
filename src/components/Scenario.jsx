import React from 'react';
import Response from './Response';

function Scenario ({ scenario, onRespond }) {
    return (
        <div>
            <h2>{scenario.text}</h2>
            <div>
                {scenario.responses.map((response, index)=> (
                    <Response key={index} response={response} onRespond={onRespond} />
                ))}
            </div>
        </div>
    );
}

export default Scenario;