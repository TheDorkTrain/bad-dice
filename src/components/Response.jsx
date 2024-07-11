import React from 'react';

function Response ({ response, onRespond }) {
    return (
        <> <div style={{display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '1rem', fontSize: '1.3rem',}}>
        <button style={{height: '2rem', backgroundColor: "#535bf2", radius: '10px'}} onClick={() => onRespond(response.emotion)}>
            Choose
        </button>
        <p style={{margin: '0', width: '70%', textAlign: 'left'}}> {response.text}</p>
        
        </div>
        </>
    );
}

export default Response;
